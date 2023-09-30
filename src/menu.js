function createMenuTab(liArray) {
    liArray[2].textContent = "Menu";
    liArray[2].style.cursor = "pointer";
    
    liArray[2].onclick = function() {
        const menuDiv = document.createElement(div);
        main.appendChild(mainDiv);
        menuDiv.setAttribute("id", "menuDiv");
    }
}
export { createMenuTab };