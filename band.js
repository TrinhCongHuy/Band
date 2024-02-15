// Nav
const header = document.getElementById('header');
const mobileMenu = document.getElementById('mobile-menu');
const headerHeight = header.clientHeight;
mobileMenu.onclick = function() {
    const isClose = header.clientHeight === headerHeight;

    if (isClose) {
        header.style.height = 'auto';
    } else{
        header.style.height = null; 
    }
}
// Tự động đóng menu
const menuItems = document.querySelectorAll('#nav li a[href*="#"]')
for (let i = 0 ; i < menuItems.length; i++){

    const menuItem = menuItems[i];
    menuItem.onclick = function(event){
    const isParentMenu = this.nextElementSibling && menuItem.nextElementSibling.classList.contains('subnav');
        if (!isParentMenu){
            header.style.height = null;
        }else{
            event.prevenDefault();
        }
        
    }
}


// Modal
const buyBtns= document.querySelectorAll('.js-sticket')
const modal = document.querySelector('.js-modal')
const modalContainer = document.querySelector('.js-modal-container')
const modalClose = document.querySelector('.js-modal-close')

function showBuyTickets(){
    modal.classList.add('open') 
}

function hideBuyTickets(){
    modal.classList.remove('open')
}

for ( const buyBtn of buyBtns){
    buyBtn.addEventListener('click',showBuyTickets)
}

modalClose.addEventListener('click',hideBuyTickets)
modal.addEventListener('click',hideBuyTickets)
modalContainer.addEventListener('click',function(event){
    event.stopPropagation()
})

modalClose.addEventListener("click", () => {
    console.log("oke")
})