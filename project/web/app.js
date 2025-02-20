
let inputElemnet=document.createElement("input")

document.body.appendChild(inputElemnet);

let h1Ele = document.createElement("h1");
h1Ele.textContent = "hello world"
const d = document.createElement("button")

d.textContent = "click"
document.body.appendChild(d);
document.body.appendChild(h1Ele)

d.onclick=changeText();

function changeText(){
    h1Ele.textContent="KLU "
}
