function createHomeTab(liArray) {
  liArray[1].textContent = "Home";
  liArray[1].style.cursor = "pointer";
}
function createHomeContent() {
    const story = document.createElement("div");
    main.appendChild(story);
    story.setAttribute("id", "story");

    const p1 = document.createElement("p");
    story.appendChild(p1);
    p1.textContent = "OUR STORY";

    const p2 = document.createElement("p");
    story.append(p2);
    p2.textContent = "Our young chefs, inspired by regional and asian dishes, blend favors to create a unique fusion dish. They use their skills and experience to help you discover the culinary world. Our restaurant stands out with unique and tasty sushi which is recognized by the originality of its plating and the mixture of fragrances. We prepare re-invented sushi with fresh and quality products. The Asian Tapas style menu is available, making your visits even more interesting. Come and taste our creations, we look forward to seeing you!"
}
export { createHomeTab };
export { createHomeContent };