"use strict";
const btn = document.querySelectorAll('button'),
      overlay = document.querySelector('.overlay'),
      link = document.querySelector('a');

// btn.onclick = function() {
//     alert('clicking!');
// };
// let i = 0;
const deleteElement = (e) => {
    console.log(e.target);
    console.log(e.type);

    // i++;
    // if (i == 1) {
    //     btn.removeEventListener('click', deleteElement);
    // }
};

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);

link.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(event.target);
});

btn.forEach(bt => {
    bt.addEventListener('click', deleteElement, {once: true});
});



// btn.addEventListener('click', () => {
//     alert('Clicking 2!');
// });
