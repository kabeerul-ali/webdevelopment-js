let space=document.querySelector("body");
let btn=document.createElement("button");
btn.innerText="click me!";
btn.style.backgroundColor="yellow";
btn.style.color="green";
space.append(btn);
var i=0;
function xxx(){
btn.addEventListener('click',function oh(){
    if(i==0){
        space.style.backgroundColor="black";
        i++;
    }
    else{
        space.style.backgroundColor="white";
        i--;
    }
});
}
xxx();

// console.log(btn);