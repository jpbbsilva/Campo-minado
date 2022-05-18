var table


var firstClick = true

var totalColunas = 18
var totalLinhas = 14
var totalBombas = 40
var sec = 0
var min = 0

function medio() {
  firstClick = true
 
  setInterval(watch, 1000)
  window.addEventListener("contextmenu", e => e.preventDefault());
  table = document.getElementById("table")
  console.log(table)

  table.innerHTML = "";
 
  for (var i = 0; i < totalLinhas; i++) {
    var linha = table.insertRow(i) 
    for (var j = 0; j < totalColunas; j++) {
      cell = linha.insertCell(j)  
      cell.onclick = function () {
        cliqueCell(this)
      }
      cell.oncontextmenu = function () {
        bandeira(this)
      }

      var bomba = document.createAttribute("bomba")
      bomba.value = "false"
      cell.setAttributeNode(bomba)
    }
  }

}

function cliqueCell(cell) {

  if (firstClick === true) {
    firstClick = false

   
    for (var i = 0; i < totalBombas; i++) {
      var linha = Math.floor(Math.random() * totalLinhas);
      var coluna = Math.floor(Math.random() * totalColunas);
      var cell2 = table.rows[linha].cells[coluna];

      while (cell === cell2 || cell2.getAttribute("bomba") === true) {

        linha = Math.floor(Math.random() * totalLinhas);
        coluna = Math.floor(Math.random() * totalColunas);

        cell2 = table.rows[linha].cells[coluna]

      }

      cell2.setAttribute("bomba", "true");
    }
  }

  
  console.log(cell)
  if (cell.getAttribute("bomba") === "true") {

    for (var i = 0; i < totalLinhas; i++) {
      for (var j = 0; j < totalColunas; j++) {
        var cell = table.rows[i].cells[j];
        if (cell.getAttribute("bomba") == "true") cell.className = "mina";
      }
    }

    alert("Perdeu");
    setTimeout(() => {
      window.location.href = "index.html"
    }, 3000)
  } else {
    

    cell.className = "click";

    var NBombas = 0;
    
    var cellRow = cell.parentNode.rowIndex;

    
    var cellCol = cell.cellIndex;

    for (var i = Math.max(cellRow - 1, 0); i <= Math.min(cellRow + 1, totalLinhas - 1); i++) {
      for (var j = Math.max(cellCol - 1, 0); j <= Math.min(cellCol + 1, totalColunas - 1); j++) {
        if (table.rows[i].cells[j].getAttribute("bomba") == "true") {
          NBombas++
        }
      }
    }
    
    cell.innerHTML = NBombas;

    if (NBombas == 0) {

      for (var i = Math.max(cellRow - 1, 0); i <= Math.min(cellRow + 1, totalLinhas - 1); i++) {
        for (var j = Math.max(cellCol - 1, 0); j <= Math.min(cellCol + 1, totalColunas - 1); j++) {
          
          if (table.rows[i].cells[j].innerHTML == "") {
            cliqueCell(table.rows[i].cells[j])
          }
        }
      }
    }

    var ganhou = true;
    for (var i = 0; i < totalLinhas; i++) {
      for (var j = 0; j < totalColunas; j++) {
        
        if ((table.rows[i].cells[j].getAttribute("bomba") === "false") && (table.rows[i].cells[j].innerHTML === "")) {
          ganhou = false
        }
      }
    }
    if (ganhou === true) {
      alert("Ganhou");
      setTimeout(() => {
        window.location.href = "index.html"
      }, 3000)
      for (var i = 0; i < totalLinhas; i++) {
        for (var j = 0; j < totalColunas; j++) {
          var cell = table.rows[i].cells[j];
          if (cell.getAttribute("bomba") === "true") {
            cell.className = "mina"

          }
        }
      }
    }
  }

}
function watch() {
  sec++
  if (sec == 60) {
    min++
    sec = 0
  }
  document.getElementById('watch').innerText = min + ':' + sec
}
function bandeira(cell) {
  if (firstClick !== true) {
    if (cell.className === "bandeira") {
      cell.className = ""
    } else {

      cell.className = "bandeira"
    }
    var ganhou = true;
    for (var i = 0; i < totalLinhas; i++) {
      for (var j = 0; j < totalColunas; j++) {
        if ((table.rows[i].cells[j].getAttribute("bomba") === "true") && (table.rows[i].cells[j].className !== "bandeira")) {
          ganhou = false
        }
      }
    }
    if (ganhou === true) {
      alert("Ganhou");
      setTimeout(() => {
        window.location.href = "index.html"
      }, 3000)
      for (var i = 0; i < totalLinhas; i++) {
        for (var j = 0; j < totalColunas; j++) {
          var cell = table.rows[i].cells[j];
          if (cell.getAttribute("bomba") == "true") {
            cell.className = "mina"
          }
        }
      }
    }
  }

}