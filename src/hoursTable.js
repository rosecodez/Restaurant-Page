function createProgram(liArray) {
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
export { createProgram };