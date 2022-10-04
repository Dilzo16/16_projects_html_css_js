const textareaElement=document.getElementById("textarea");
const totalcounterElement=document.getElementById("total-counter");
const remainingcounterElement=document.getElementById("remaining-counter");



textareaElement.addEventListener("keyup",()=>{
  updateConter();
})
updateConter();

function updateConter(){
    totalcounterElement.innerText=textareaElement.value.length;
    remainingcounterElement.innerText=
    textareaElement.getAttribute("maxlength")-textareaElement.value.length;


}