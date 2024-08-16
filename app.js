const btn=document.querySelector("button");

btn.addEventListener('click',()=>{
    let color=getRGBColor();

   const h2=document.querySelector("h2");
   h2.innerText=color;
   h2.style.color=color;

  const box=document.querySelector(".box");
  box.style.backgroundColor=color;

  const body=document.querySelector(".container");
  let bodyColor=getRGBColor();
  body.style.backgroundColor=bodyColor;
  
  let para=document.querySelector("p");
  para.innerText=bodyColor;
  
})

function getRGBColor(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);

    const color=`rgb(${red},${green},${blue})`;
    return color;
}