const container = document.querySelector("#container"); 

function createGrids(rows, cols){
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (i = 0; i < (rows * cols); i++){
    let square = document.createElement("div");
    square.classList.add('grid-item');
    container.appendChild(square);
  }

}

function onHover(e) { 
  container.addEventListener("onmouseHover", e {

  }

}); 





// Creates 16 x 16 grid
createGrids(16, 16); 