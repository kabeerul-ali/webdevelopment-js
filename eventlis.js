let btn=document.querySelectorAll(".btn");
let al=document.getElementById("alert");
btn.forEach((val)=>{
    val.addEventListener('click',()=>{
       console.log( val.getAttribute("value"));
        
    })    
});
