let abaNav = document.querySelector('nav')
let img = document.querySelector('.menu-opener')

function openMenu() {

    if(abaNav.style.display == 'block') {
            abaNav.style.display = 'none'
        } else {
            abaNav.style.display = 'block'
        }
    
    
}

img.addEventListener('click', openMenu)