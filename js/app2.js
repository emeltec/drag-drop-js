/* draggable element */
const items = document.querySelectorAll('.item')

items.forEach(x => {
  x.setAttribute('id', uid());
  x.style.background = randomColor();
  x.addEventListener('dragstart', dragStart);
})

function dragStart(e) {
  e.stopPropagation();
  e.stopImmediatePropagation();
  e.dataTransfer.setData('text/plain', e.target.id);
  e.dataTransfer.setData('Data2', JSON.stringify({age:22, name:'Emilio'}) )
  e.dataTransfer.setData('DataObj', JSON.stringify({cols:3, flex:'grid'}) )
  e.dataTransfer.effectAllowed = "move"
}


/* drop targets */
const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
  box.addEventListener('dragenter', dragEnter)
  box.addEventListener('dragover', dragOver);
  box.addEventListener('dragleave', dragLeave);
  box.addEventListener('drop', drop);
});


function dragEnter(e) {
  e.preventDefault();
  e.stopPropagation();
  e.target.classList.add('drag-over');
  // return false;
}

function dragOver(e) {
  e.preventDefault();
  e.stopPropagation();
  e.target.classList.add('drag-over');
  e.dataTransfer.effectAllowed = "move"
  // return false;
}

function dragLeave(e) {
  e.stopPropagation();
  e.target.classList.remove('drag-over');
  e.dataTransfer.effectAllowed = "move"
  // return false;
}

function drop(e) {
  e.stopPropagation();
  e.stopImmediatePropagation();
  e.target.classList.remove('drag-over');
  // get the draggable element
  const id = e.dataTransfer.getData('text/plain');
  let draggable = document.getElementById(id);
  
  const hola = JSON.parse(e.dataTransfer.getData('Data2')) 
  const grid = JSON.parse(e.dataTransfer.getData('DataObj')) 
  console.log(hola)
  console.log(grid)
  
  if(e.target.id == 'box2') {
    
    let clone = draggable.cloneNode(true);
    clone.id = uid();
    clone.style.background = randomColor();
    clone.addEventListener('dragstart', dragStart);
    e.target.appendChild(clone);
    return
  }


  console.log(e.target)
  // add it to the drop target
  e.target.appendChild(draggable);
}


//*** UUID */



function uid(len) {
  let IDX = 256, HEX = [], SIZE = 256, BUFFER;
  while (IDX--) HEX[IDX] = (IDX + 256).toString(16).substring(1);

  let i = 0, tmp = (len || 11);
  if (!BUFFER || ((IDX + tmp) > SIZE * 2)) {
    for (BUFFER = '', IDX = 0; i < SIZE; i++) {
      BUFFER += HEX[Math.random() * 256 | 0];
    }
  }

  return BUFFER.substring(IDX, IDX++ + tmp);
}

function randomColor() {
  const chars = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];

  let color = '#';
  for (let i = 0; i < 6; i++) {
    let rand = String(Math.random() * 16) ;
    let x = rand.split('.')[0];
    color += chars[x];
    
  }
  // console.log(color)
  return color;
}
