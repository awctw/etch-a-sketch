function makeGrid() {
  for (let i = 0; i < 16; i++) {
    let row = document.createElement("div");
    row.style.height = "20px";
    row.style.width = "320px";
    for (let k = 0; k < 16; k++) {
      let col = document.createElement("div");
      col.onmouseover = hover;
      col.className = "col";
      col.style.border = "1px solid black";
      col.style.width = "20px";
      col.style.height = "20px";
      col.style.display = "inline-block";
      col.style.boxSizing = "border-box";
      row.appendChild(col);
    }
    document.getElementById("container").appendChild(row);
  }
}

function hover() {
  this.style.backgroundColor = "red";
}

function clear() {
  let btn = document.getElementById("reset");
  btn.addEventListener("click", function () {
    document.getElementById("container").innerHTML = "";
    let answer = prompt("How many squares per side for the new grid?");
    //makeGrid(answer);
  });
}

makeGrid();
clear();
