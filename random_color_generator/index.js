// const colorcontainerElement=document.querySelector(".color-container");

const containerElement=document.querySelector(".container");


for(let i=0;i<30;i++){
    const colorContainerElement=document.createElement("div");
    colorContainerElement.classList.add("color-container");
    containerElement.appendChild(colorContainerElement);

}

const colorContainerAllEles=document.querySelectorAll(".color-container");

generateColors();

function generateColors(){
    colorContainerAllEles.forEach((colorcontainerElement)=>{
       const colorCode= randomColor();
       colorcontainerElement.style.backgroundColor="#"+colorCode;

       colorcontainerElement.innerHTML="#"+colorCode;

    })
}




function randomColor(){
const chars="0123456789abcdef"
const colorCodeLength=6;
let color="";

for(let i=0;i<colorCodeLength;i++){
    let num=Math.floor(Math.random()*chars.length)
    color+=chars.substring(num,num+1);
}
return color;
}