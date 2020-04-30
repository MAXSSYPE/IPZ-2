var tabId = 1
const searchButton = document.querySelectorAll('[data-search-button]')
searchButton.forEach(searchHandler)

const searchForm = document.querySelectorAll('[data-search-form]')
searchForm.forEach(searchHandler)

function searchHandler(item) {
    item.addEventListener("click", addTab)
    item.addEventListener("keypress", function(event){
        if (event.keyCode == 13){
            addTab()
        }
    })
}

function addTab() {
    const tab_amount = document.getElementsByClassName('tab')
    const tab_name =  document.querySelector("#search-form")

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

