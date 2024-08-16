let btn=document.createElement("button");
btn.innerHTML="click me";
let div=document.querySelector("#dive");
btn.style.backgroundColor="green";
btn.style.color="yellow";
let x=document.querySelector("body");
div.prepend(btn);
btn.style.cursor="pointer";
div.setAttribute("class","box");
btn.onclick=()=>{
    //code
    prompt("what is your love name");
}
btn.ondblclick=(e)=>{
    console.log(e);
    console.log(e.type);
    console.log(e.targate);
    alert("you are noughty boy");
}
let btn1=document.createElement("button");
btn1.innerHTML="kabeerul ali";
btn1.style.backgroundColor="green";
btn1.style.color="red";
document.querySelector("body").prepend(btn1);
btn1.addEventListener("click",()=>{
    alert("hello my love");
});
