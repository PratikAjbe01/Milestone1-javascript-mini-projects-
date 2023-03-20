let img = document.getElementById('img');
let left = document.getElementById('left');
let right = document.getElementById('right');
let top = document.getElementById('top');
let bottom = document.getElementById('bottom');

left.addEventListener('click', () => {
  img.style.transform = "rotate(-90deg)";
});

right.addEventListener('click', () => {
  img.style.transform = "rotate(90deg)";
});

top.addEventListener('click', () => {
  img.style.transform = "rotate(180deg)";
});

bottom.addEventListener('click', () => {
  img.style.transform = "rotate(0deg)";
});
