function createMenuTab(liArray, hello, image1) {
    liArray[2].textContent = "Menu";
    liArray[2].style.cursor = "pointer";
    
    let isClicked = false;
    liArray[2].onclick = function() {
        if(isClicked === false){
            hello.remove();
            image1.remove();

            const menuDiv = document.createElement("div");
            main.appendChild(menuDiv);
            menuDiv.setAttribute("id", "menuDiv");
            
            const menuDivTxt = document.createElement("p");
            menuDiv.appendChild(menuDivTxt);
            menuDivTxt.setAttribute("id","menuDivTxt")
            menuDivTxt.textContent = "MENU";
            
            const recipe1 = document.createElement("div");
            menuDiv.appendChild(recipe1);
            recipe1.setAttribute("id", "recipe1");
            recipe1.textContent = "Hoso Maki";

            const recipe2 = document.createElement("div");
            menuDiv.appendChild(recipe2);
            recipe2.setAttribute("id", "recipe2");
            recipe2.textContent = "Sashimi";

            const recipe3 = document.createElement("div");
            menuDiv.appendChild(recipe3);
            recipe3.setAttribute("id", "recipe3");
            recipe3.textContent = "Miso Soup";
        }
        isClicked = true;
    }
    
}
export { createMenuTab };