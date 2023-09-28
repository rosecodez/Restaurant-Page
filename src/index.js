import _, { last } from 'lodash';
import './style.css';
import img from './logo.png';


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

    liArray[1].textContent = "Home";
    liArray[2].textContent = "Menu";
    liArray[3].textContent = "Contact";
    liArray[4].textContent = "Join us";
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

    const array = [];
    array.push(ol);
    return array;
}
console.log(createElements());