"use strict";
const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log('test11');
    }
    
};
options.makeTest();

const {border, bg} = options.colors;
console.log(bg);


// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`The key "${i}" has the value "${options[key] [i]}"`);
//         }
//     } else
//     console.log(`The key "${key}" has the value "${options[key]}"`);
// }

// console.log(Object.keys(options));

