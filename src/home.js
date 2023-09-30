function createHomeTab(liArray) {
    liArray[1].textContent = "Home";
    liArray[1].style.cursor = "pointer";
    liArray[1] = function() {

    };
}

export { createHomeTab };