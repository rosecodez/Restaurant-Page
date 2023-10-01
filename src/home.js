function createHomeTab(liArray, hello, image1) {
  liArray[1].textContent = "Home";
  liArray[1].style.cursor = "pointer";

  let isClicked = false;
  liArray[1].onclick = function() {
      if(isClicked === false){
        hello.remove();
        image1.remove();

        const story = document.createElement("div");
        main.appendChild(story);
        story.setAttribute("id", "story");

        const p1 = document.createElement("p");
        story.appendChild(p1);
        p1.textContent = "OUR STORY";

        const p2 = document.createElement("p");
        story.append(p2);
        p2.textContent = "Our young chefs, inspired by regional and asian dishes, blend favors to create a unique fusion dish. They use their skills and experience to help you discover the culinary world. Our restaurant stands out with unique and tasty sushi which is recognized by the originality of its plating and the mixture of fragrances. We prepare re-invented sushi with fresh and quality products. The Asian Tapas style menu is available, making your visits even more interesting. Come and taste our creations, we look forward to seeing you!"

        const hoursContent = document.createElement("div");
        main.appendChild(hoursContent);
        hoursContent.setAttribute("id", "hoursContent");
          
        const hours = document.createElement("div");
        hoursContent.appendChild(hours);
        hours.setAttribute("id", "hours");
        hours.textContent = "Hours";
        const table = document.createElement("table");
        hours.appendChild(table);
        const program = [
                          { Day: "Sunday", Program: "Closed"},
                          { Day: "Monday", Program: "Closed"},
                          { Day: "Tuesday", Program: "12-8pm"},
                          { Day: "Wednesday", Program: "12-8pm"},
                          { Day: "Thursday", Program: "12-8pm"},
                          { Day: "Friday", Program: "12-10pm"},
                          { Day: "Saturday", Program: "12-10pm"},
                        ];

        function generateTableHead(table, data) {
          let thead = table.createTHead();
          let row = thead.insertRow();
          for (let key of data) {
            let th = document.createElement("th");
            let text = document.createTextNode(key);
            th.appendChild(text);
            row.appendChild(th);
          }
        }
        
        function generateTable(table, data) {
          for (let element of data) {
            let row = table.insertRow();
            for (const key in element) {
              let cell = row.insertCell();
              let text = document.createTextNode(element[key]);
              cell.appendChild(text);
            }
          }
        }
        const data = Object.keys(program[0]);
        generateTableHead(table, data);
        generateTable(table, program);
      }
      isClicked = true;
    }
}
export { createHomeTab };