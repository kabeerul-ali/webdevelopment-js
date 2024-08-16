var choice = document.querySelectorAll(".choice");
let arr = ["snack", "water", "gun"];
//take node
let al=document.querySelector("#alert");
let ub=document.querySelector("#you");
let cb=document.querySelector("#computer");
let ubb=ub.innerHTML;
let cbb=cb.innerHTML;
let fin=document.querySelector("#result");
let us=0;
let cs=0;
al.innerHTML="your turn";
// Random computer value generator
// function computer(){
//     try{
//     setTimeout(coms,3000);
// }catch{
//     alert("your code wrong");
// }}
function computer() {
    al.innerHTML="comp turn";
  let x = Math.floor(Math.random() * 3);
  return arr[x];
}

function userInput() {
  choice.forEach((element) => {
    element.addEventListener("click", () => {
      let you = element.getAttribute("id");
      let comp = computer();
      play(you, comp);
    });
  });
}

function play(you, comp) {
    al.innerHTML="your turn";
  if (you === "snack" && comp === "water"||you === "water" && comp === "gun"||you === "gun" && comp === "snack") {
    fin.innerHTML="you win";
    us++;
    ub.innerHTML=ubb+us;
  }  else if (you === comp) {
    fin.innerHTML="it is a tia";
  } else {
    fin.innerHTML="comp win";
    cs++;
    cb.innerHTML=cbb+cs;
  }
}

userInput();