const container = document.querySelector("#container"); 
const clear = document.querySelector("#clearGrid");
const regGrid = document.querySelector("#regularSize");
const medGrid = document.querySelector("#mediumSize"); 
const largeGrid = document.querySelector("#largeSize"); 
const colorRandom = document.querySelector("#colourSelector"); 




//Creates the inital 16 x 16 grid
function createGrids(rows, cols){
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (i = 0; i < (rows * cols); i++){
    let square = document.createElement("div");
    square.classList.add('grid-item');
    container.appendChild(square);
  }
onHover(); 
}


//Mouseover to shading to grid squares in black
function onHover() {
    let gridSquares = document.querySelectorAll(".grid-item"); 
    gridSquares.forEach(gridSquares => {
        gridSquares.addEventListener("mouseover", () => {
            gridSquares.style.backgroundColor = "black"; 
            
        });
    });

}


//Button actions
clear.onclick = () => reloadGrid();
regGrid.onclick = () => reloadGrid();
medGrid.onclick = () => midSize();
largeGrid.onclick = () => largeSize(); 
colorRandom.onclick = () => randomColour(); 


function clearGrid() { 
  container.innerHTML = ""
}

function reloadGrid() { 
  clearGrid()
  createGrids(16, 16)
}


function midSize() { 
  clearGrid()
  createGrids(34,34)
}

function largeSize() { 
  clearGrid()
  createGrids(64,64)
}

//randomize color 
function randomColour() { 
    const randomR = Math.floor(Math.random() * 256)
    const randomG = Math.floor(Math.random() * 256)
    const randomB = Math.floor(Math.random() * 256)
    let gridSquares = document.querySelectorAll(".grid-item"); 
    gridSquares.forEach(gridSquares => {
      gridSquares.addEventListener("mouseover", () => {
          gridSquares.style.backgroundColor =  `rgb(${randomR}, ${randomG}, ${randomB})`
      });
  });
} 


//Creates 16x16 grid
createGrids(16,16)