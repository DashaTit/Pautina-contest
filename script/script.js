const sidebarItem = document.querySelectorAll('.systems__sidebar-item')

const tabsClasses = ['.systems__question', '.systems__documentation',  '.systems__signup', '.systems__login', '.data_base']
let previewClass = document.querySelector('.systems__question')


document.addEventListener('click',e => {
    if (e.target.classList.contains('systems__sidebar-item')) {
        let currentTab = e.target.dataset.id
        
        let currentClass = document.querySelector(tabsClasses[currentTab])
        
        if (currentClass !== previewClass) {
            currentClass.classList.add('active')
            previewClass.classList.remove('active')
            previewClass = currentClass
        }
    }
})