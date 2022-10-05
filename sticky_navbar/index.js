const navbarElement=document.querySelector('.navbar');
const bottomcontainerElement=document.querySelector('.bottom-container');

window.addEventListener('scroll',()=>{
if(window.scrollY > bottomcontainerElement.offsetTop
    -navbarElement.offsetHeight-50){
        navbarElement.classList.add("active");
    }else{
        navbarElement.classList.remove("active");
    }
})