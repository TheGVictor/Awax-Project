let abaNav = document.querySelector('nav')
let img = document.querySelector('.menu-opener')

function openMenu() {

    if(abaNav.style.display = "none") {
            abaNav.style.display = "flex"
        } else {
            abaNav.style.display = "flex"
        }
    
    
}

img.addEventListener('click', openMenu)