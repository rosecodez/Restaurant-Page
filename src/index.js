import _, { last } from 'lodash';
import './style.css';
import Logo from './logo.png';
import { createHomeTab } from "./home.js";
import { createMenuTab } from "./menu.js";

let content = document.getElementById("content");
function createElements() {
    // ol id="header"
    const ol = document.createElement("ol");
    content.appendChild(ol);
    ol.setAttribute("id", "header")
    // loop li, a href 6 times and append to ol
    let liArray = [];
    for (let i = 1; i <= 6; i++) {
        let li = document.createElement("li");
        ol.appendChild(li);
        let a = document.createElement("a");
        li.appendChild(a);
        liArray.push(li);
    }
    for (let i = 0; i < liArray.length; i++) {
        console.log(liArray[i]);
    }

    const logo = new Image();
    logo.src = Logo;
    liArray[0].appendChild(logo);
    logo.setAttribute("id", "logo");
    console.log(logo);

    createHomeTab(liArray);
    createMenuTab(liArray);

    liArray[3].textContent = "Contact";
    const button = document.createElement("button");
    liArray[5].appendChild(button);
    button.textContent = "Reservation";

    // div id="main"
    const main = document.createElement("div");
    content.append(main);
    main.setAttribute("id", "main");
        // div id="background-image"
        const backgroundImg = document.createElement("div");
        main.appendChild(backgroundImg);

        backgroundImg.setAttribute("id", "background-image");
            const imgTxt = document.createElement("div");
            backgroundImg.appendChild(imgTxt);
            imgTxt.setAttribute("id", "image-text");

                const header = document.createElement("h1");
                header.setAttribute("id", "header");
                header.textContent = "Sushi Workshop";
}
console.log(createElements());