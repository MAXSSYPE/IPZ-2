var tabId = 1 //unique tab id
const searchButton = document.querySelectorAll('[data-search-button]') //scripting search button
searchButton.forEach(searchButtonHandler)

const searchForm = document.querySelectorAll('[data-search-form]') // scripting search form
searchForm.forEach(searchHandler)

const modalButtons = document.querySelectorAll('[data-modal-button]') //scripting sign in/ sign up buttons
modalButtons.forEach(modalHandler)



function searchButtonHandler(item) {
    item.addEventListener("click", addTab) // adding new tab by clicking
}

function searchHandler(item) {
    item.addEventListener("keypress", function(event){
        if (event.keyCode == 13){
            addTab() //adding new tab by pressing enter
        }
    })
}

function modalHandler(item) {
    item.addEventListener("click", openModal) //opening form by clicking
}

function addTab() { //all procces of tab creating is here
    el = document.getElementById('search-and-tabs') // reDraw search-and-tabs in search-form-window
    if (el.classList.contains('search-and-tabs')) {
        searchAnim() //function of reDrawing
    }

    const tab_amount = document.getElementsByClassName('tab') // get all elements which class contains tab
    const tab_name =  document.querySelector("#after-animation-search-form") // get text of form is filled

    if (tab_amount.length < 4 && tab_name.value != ""){ //block for creating 4 and more tabs
        //checking if form is filled

        let newTab = document.createElement("div")// create new div element
        newTab.className = "tab" //give new classname
        newTab.id = `tab-${tabId++}` //give unique id
        newTab.innerHTML = tab_name.value // fill it with the info from search form
        
        tab_name.value = "" //clear search form
        const search_form_id = document.getElementById('search-window')//get father element
        const search_and_tabs = document.getElementById('search-and-tabs')//get child element
        
        search_and_tabs.insertBefore(newTab, search_form_id)//put tabs BEFORE search form and AFTER search-and-tabs header

        let cross = document.createElement("img")//create cross for closing
        cross.src = "../imgs/fileclose.png"//getting image of cross
        cross.className = "cross" //giving classname
        cross.id =`cross-${tab_amount.length}` //giving unique id
        //const tab_id = document.getElementById(newTab.id) 
        
        
        let tab = document.querySelector(`#${newTab.id}`)//Looking for a tab with the same id
        tab.appendChild(cross)
        tab.lastChild.addEventListener("click", ()=> {
            tab.remove() // if cross clicked - tab is removed
        })
        //hide all graphs before new appears
        document.querySelectorAll('.graph').forEach(function(item){ //select all 'data-tab-content
            item.classList.add("graph-hidden") //add to classes tab-content-hidden
        })
        
        //create new graph element
        let newGraph = document.createElement("div") //new div
        newGraph.className = "graph" //give first class
        newGraph.id = `graph-${newTab.id}` //give unique id

        const searchFormWindow = document.getElementById('search-form-window')
        searchFormWindow.appendChild(newGraph) // append new element in search-form-window div
        
        drawGraph(newTab.id) // creating new graph     
        
        tab.addEventListener("click", tabsClick) //add unique listener for every tab
    }


}


function tabsClick(){//process tab clicking
    const tabId = this.id //get clicked tab id
    document.querySelectorAll('.graph').forEach(function(item){ //select all 'data-tab-content
        item.classList.add("graph-hidden") //hide all other graphs
    })
    document.getElementById(`graph-${tabId}`).classList.toggle("graph-hidden")//remove graph-hidden from current graph
}

function searchAnim() { //reDrawing search-and-tabs
    var searchAndTabs = document.getElementById('search-and-tabs').classList
    var searchWindow = document.getElementById('search-window').classList
    var searchForm = document.getElementById('search-form').id = 'after-animation-search-form'
    searchAndTabs.remove('search-and-tabs')
    searchAndTabs.add('after-animation-search-and-tabs')
    searchWindow.remove('search-window')
    searchWindow.add('after-animation-search-window')
        
}

function openModal() {
    let modal_n = this.dataset.modalButton
    const modal = document.getElementById(modal_n)
    modal.classList.add('fade-block--visible')

    const btn_close = modal.querySelector('[data-modal-close]')

    btn_close.addEventListener('click', function(){
        modal.classList.remove('fade-block--visible')
    })

    modal.addEventListener('click', function(){
        modal.classList.remove('fade-block--visible')
    })

    modal.querySelector('.modal-window').addEventListener('click', function(e){
        e.stopPropagation()
    })
    
}
//GRAPH
var table, mapping, chart;
function drawGraph(id) {

	table = anychart.data.table();
	table.addData([
		['2015-12-25', 512.53, 514.88, 505.69, 507.34],
		['2015-12-26', 511.83, 514.98, 505.59, 506.23],
		['2015-12-27', 511.22, 515.30, 505.49, 506.47],
		['2015-12-28', 510.35, 515.72, 505.23, 505.80],
		['2015-12-29', 510.53, 515.86, 505.38, 508.25],
		['2015-12-30', 511.43, 515.98, 505.66, 507.45],
		['2015-12-31', 511.50, 515.33, 505.99, 507.98],
		['2016-01-01', 511.32, 514.29, 505.99, 506.37],
		['2016-01-02', 511.70, 514.87, 506.18, 506.75],
		['2016-01-03', 512.30, 514.78, 505.87, 508.67],
		['2016-01-04', 512.50, 514.77, 505.83, 508.35],
		['2016-01-05', 511.53, 516.18, 505.91, 509.42],
		['2016-01-06', 511.13, 516.01, 506.00, 509.26],
		['2016-01-07', 510.93, 516.07, 506.00, 510.99],
		['2016-01-08', 510.88, 515.93, 505.22, 509.95],
		['2016-01-09', 509.12, 515.97, 505.15, 510.12],
		['2016-01-10', 508.53, 516.13, 505.66, 510.42]
	]);
	  
	// mapping the data
	mapping = table.mapAs();
	mapping.addField('open', 1, 'first');
	mapping.addField('high', 2, 'max');
	mapping.addField('low', 3, 'min');
	mapping.addField('close', 4, 'last');
	mapping.addField('value', 4, 'last');

	// defining the chart type
	chart = anychart.stock();
	  
	// set the series type
	chart.plot(0).ohlc(mapping).name('ACME Corp.');
	  
	// setting the chart title
	chart.title('AnyStock Demo');

	// display the chart	  
	chart.container(`graph-${id}`);
	chart.draw();
};