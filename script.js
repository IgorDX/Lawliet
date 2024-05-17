const menuBtn = document.querySelector('.burger__menu')
const menuBody = document.querySelector('.navigation')

const body = document.body;

if(menuBtn && menuBody){
    menuBtn.addEventListener('click', ()=>{
        menuBody.classList.toggle('active');
        menuBtn.classList.toggle('active');
        body.classList.toggle('lock')
    })
}