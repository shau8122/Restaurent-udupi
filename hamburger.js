const enterNav = document.getElementById("enter-nav");
// console.log(enterNav);
const exitNav = document.getElementById("exit-nav");
const nav = document.querySelector(".nav-mobile");
enterNav.addEventListener("click",enterMenu);

function enterMenu(){
  nav.style.right = "0";
}
exitNav.addEventListener("click",exitMenu);
function exitMenu (){
  nav.style.right = "-40%";
}
// console.log(nav);