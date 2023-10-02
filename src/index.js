import _, { last } from 'lodash';
import './style.css';
import { createElements } from "./initial page-load.js";
import { createProgram } from "./hoursTable.js";

let content = document.getElementById("content");
createElements();

liArray[1].onclick = function() {
    hello.remove();
    image1.remove();
}
liArray[2].onclick = function() {
    hello.remove();
    image1.remove();
    createProgram(liArray);
}

