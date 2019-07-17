const submitButton= document.getElementById('SubmitButton');
const table = document.getElementById('pixelCanvas');
function makeGrid(event) {
  //the page should returns to the origional status when users click refresh sign//
  event.preventDefault();
  table.innerHTML = '';
  //An empty grid should apper when the user enter a number in the width and height squares, then entering the submit button//
  const gridHeight= document.getElementById('inputHeight').value;
  const gridwidth= document.getElementById('inputWidth').value;
       for(let r = 0; r < gridHeight;r++){
        const tr = document.createElement('tr');
    for(let c = 0; c < gridwidth;c++){
       const td = document.createElement('td');
  // this function should make the user select and colors the cells of the grid by clicking on it//
       td.addEventListener('click',function(ent){
         const color = document.getElementById('colorPicker').value;
          ent.target.style.backgroundColor = color;
        });
        tr.appendChild(td);
      }
      table.appendChild(tr);
  }
}
submitButton.addEventListener('click',makeGrid);
