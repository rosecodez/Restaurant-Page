import _ from 'lodash';
import './style.css';
//import Icon from './icon.png';
//import Icon from './background-image.avif';

let content = document.getElementById("content");

function createBtn() {
    document.createElement("button");
}
function createElement() {
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
        liArray.push(i);
        console.log(liArray); 
    }
    // create button
    const button = createBtn();
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
                const logo = document.createElement("img");
                imgTxt.appendChild(logo);
                logo.setAttribute("id", "logo");

                const header = document.createElement("h1");
                header.setAttribute("id", "header");
                header.textContent = "Sushi Workshop";
                
    const array = [];
    array.push(ol, );
    return array;

}
console.log(createElement());