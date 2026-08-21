function createTable() {
    let rows = Number(prompt("Input number of rows"));
    let col = Number(prompt("Input number of columns"));

    let table = document.getElementById("myTable");

    for (let i = 0; i <= rows; i++) {

        let tr = document.createElement("tr");

        for (let j = 0; j <= col; j++) {

            if (i === 0) {
                let th = document.createElement("th");

                th.textContent = `Row-${i} Column-${j}`;

                tr.appendChild(th);
            } 
            else {
                let td = document.createElement("td");

                td.textContent = `Row-${i} Column-${j}`;

                tr.appendChild(td);
            }
        }

        table.appendChild(tr);
    }
}