var b=document.querySelector("body");
var mode=document.createElement("button");
mode.innerHTML="mode";
b.style.display="flex";
b.prepend(mode);
var i=0;
mode.addEventListener("lick",()=>{
    
    if(i%2==0){
        b.style.backgroundColor="green";
    }
    else{
        b.style.backgroundColor="white";
    }
    i++;
});
