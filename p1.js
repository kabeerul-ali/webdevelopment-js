// let previous=document.querySelector("#i");
// var x=previous.innerHTML;
// var add=prompt("enter content for add in screen");
// previous.innerHTML=x+add;


// 12 project content
var div=document.querySelectorAll(".box");
var i=6;
var u='unique';
div.forEach(val=>{
    let temp=val.innerHTML;
    val.innerHTML=temp+u+i;
    i++;
});
