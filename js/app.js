document.addEventListener('DOMContentLoaded', (event) => {

  function handleDragStart(e) {
    dragSrcEl = this;
    
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
    this.style.opacity = '0.4';
    let value = `<h3>Hola</h3>`
    e.dataTransfer.setData('text/html', value)
  }

  function handleDragEnd(e) {
    this.style.opacity = '1';

    items.forEach(function (item) {
      item.classList.remove('over');
    });
  }

  function handleDragOver(e) {
    if (e.preventDefault) {
      e.preventDefault();
    }
    return false;
  }

  function handleDragEnter(e) {
    this.classList.add('over');
  }

  function handleDragLeave(e) {
    this.classList.remove('over');
  }

  function handleDrop(e) {
    e.stopPropagation();
    if (dragSrcEl !== this) {
      dragSrcEl.innerHTML = this.innerHTML;
      this.innerHTML = e.dataTransfer.getData('text/html');
    }
    return false;
  }

  let items = document.querySelectorAll('.container .box');
  items.forEach(function (item) {
    item.addEventListener('dragstart', handleDragStart);
    item.addEventListener('dragover', handleDragOver);
    item.addEventListener('dragenter', handleDragEnter);
    item.addEventListener('dragleave', handleDragLeave);
    item.addEventListener('dragend', handleDragEnd);
    item.addEventListener('drop', handleDrop);
  });
});



function allowDrop(allowdropevent) {
  allowdropevent.target.style.color = "blue";
  allowdropevent.preventDefault();
}

function drag(e) {
  e.dataTransfer.setData("text", e.target.id);
  e.target.style.color = "green";
}

function drop(e) {
  e.preventDefault();
  const data = e.dataTransfer.getData("text");
  e.target.appendChild(document.getElementById(data));
  document.getElementById("drag").style.color = "black";
}

let c = document.getElementById('caja')
c.setAttribute('txt', 'gggg')
console.log(c.getAttribute('data-hola'))
console.log(c.getAttribute('txt'))