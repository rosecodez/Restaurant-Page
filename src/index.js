import _, { create, last } from 'lodash';
import './style.css';
import { createElements } from "./initial page-load.js";
import { createProgram } from "./hoursTable.js";
import { createMenu } from "./menu.js";

let content = document.getElementById("content");
function getElements() {
    const a = liArray;
    const b = hello;
    const c = image1;
    return [a, b, c];
}
const [x,y,z] = getElements();``
console.log(x)
console.log(y);
console.log(z);

console.log(a);
console.log(b);
console.log(c);

liArray[1].onclick = function() {
    hello.style.display = "none";
    image1.style.display = "none";
}
liArray[2].onclick = function() {
    createProgram(liArray);
    createMenu();
}