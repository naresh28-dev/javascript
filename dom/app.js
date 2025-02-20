
let bE=  document.createElement("button")
let imE = document.createElement("image")



bE.id="btn"

document.body.appendChild(bE)
document.body.appendChild(imE)

let isToggled = false;

let x = function () {
  isToggled = !isToggled;
  if (isToggled) {
    imE.src ="moon.png"
    bE.textContent= "dark"
 document.body.style.background = "black";
  } else {
    imE.src = "sun.png"
    document.body.style.background = "white"
    bE.textContent = "light"
  }
}
    
bE.addEventListener("click", x );