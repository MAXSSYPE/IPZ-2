var tabId = 1
const searchButton = document.querySelectorAll('[data-search-button]')
searchButton.forEach(searchButtonHandler)

const searchForm = document.querySelectorAll('[data-search-form]')
searchForm.forEach(searchHandler)

const modalButtons = document.querySelectorAll('[data-modal-button]')
modalButtons.forEach(modalHandler)


function searchButtonHandler(item) {
    item.addEventListener("click", addTab)
}

function searchHandler(item) {
    item.addEventListener("keypress", function(event){
        if (event.keyCode == 13){
            addTab()
        }
    })
}

function modalHandler(item) {
    item.addEventListener("click", openModal)
}

function addTab() {
    el = document.getElementById('search-and-tabs')
    if (el.classList.contains('search-and-tabs')) {
        searchAnim()
    }

    const tab_amount = document.getElementsByClassName('tab')
    const tab_name =  document.querySelector("#after-animation-search-form")

    if (tab_amount.length < 4 && tab_name.value != ""){
        let newTab = document.createElement("div")// create new div element
        newTab.className = "tab"
        newTab.id = `tab-${tabId++}`
        newTab.innerHTML = tab_name.value // fill it with the info from search form
        
        tab_name.value = ""
        const search_form_id = document.getElementById('search-window')
        const search_and_tabs = document.getElementById('search-and-tabs')
        
        search_and_tabs.insertBefore(newTab, search_form_id)

        let cross = document.createElement("img")//create cross for closing
        cross.src = "../imgs/fileclose.png"
        cross.className = "cross"
        cross.id =`cross-${tab_amount.length}`
        const tab_id = document.getElementById(newTab.id)
        
        
        let tab = document.querySelector(`#${newTab.id}`)

        
        tab.appendChild(cross)
        tab.lastChild.addEventListener("click", ()=> {
            tab.remove()
        })
                        
    }

    
}

function searchAnim() {
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

