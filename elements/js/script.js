'use strict';
const box1 = document.getElementById('box');
// console.log(box1);
const btns = document.getElementsByTagName('button');
// console.log(btns[1]);
const circles = document.getElementsByClassName('circle');
// console.log(circles[2]);
const hearts = document.querySelectorAll('.heart');
// hearts.forEach(item => {
//     console.log(item);
// });
const oneHeart = document.querySelector('.heart');
// console.log(oneHeart);
const wrapper = document.querySelector('.wrapper');

// box.style.borderRadius = '100%';
// box.style.backgroundColor = 'magenta';
// box.style.width = '500px';
btns[1].style.borderRadius = '100%';

box.style.cssText = 'background-color: green; width: 500px';

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item => {
item.style.backgroundColor = 'yellow';
});

const div = document.createElement('div');
div.classList.add('black');
wrapper.append(div);
// wrapper.prepend(div);
// hearts[0].before(div);
// hearts[0].after(div);
// circles[0].remove();
// hearts[0].replaceWith(circles[0]);
div.innerHTML = '<h1>Hello World</h1>';
// div.textContent = 'hello';
div.insertAdjacentHTML('beforeend', '<h2>Hhhh</h2>');