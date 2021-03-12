const btn = document.querySelector('.btn');
let timerId,
    i = 0;
// btn.addEventListener('click', () => {
//     // timerId = setTimeout(logger, 2000);
//     timerId = setInterval(logger, 2000);
// });


// // clearInterval(timerId);
// function logger() {
//     if (i === 3) {
//         clearInterval(timerId);
//     }
//     console.log('hello');
//     i++;
// };

// let id = setTimeout(function logg() {
//     console.log('some text');
//     id = setTimeout(logg, 500);
// }, 500);

function myAnimation() {
    const elem = document.querySelector('.box');
    let pos = 0;

    const id = setInterval(frame, 10); 
    function frame() {
        if (pos == 300) {
            clearInterval();
        } else {
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
        }
    };
};

btn.addEventListener('click', myAnimation);