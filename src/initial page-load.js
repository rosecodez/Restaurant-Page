import Logo from './logo.png';
import img from './homeimage.jpeg';
import { createMenuTab } from "./menu.js";
import { createHomeTab } from "./home.js";

function createElements() {
    const ol = document.createElement("ol");
    content.appendChild(ol);
    ol.setAttribute("id", "header")

    let liArray = [];
    for (let i = 1; i <= 5; i++) {
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
    
    liArray[3].textContent = "Contact";
    const button = document.createElement("button");
    liArray[4].appendChild(button);
    button.textContent = "Reservation";

    const main = document.createElement("div");
    content.append(main);
    main.setAttribute("id", "main");

    const image1 = new Image();
    image1.src = img;
    main.appendChild(image1);
    image1.setAttribute("id", "image1");

    const hello = document.createElement("h1");
    main.append(hello);
    hello.textContent = "Sushi Workshop";
    
    createHomeTab(liArray, hello, image1);
    createMenuTab(liArray, hello, image1);
    console.log(liArray);
}
export { createElements };