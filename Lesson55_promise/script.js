'use strict';
// console.log('Data request...');

// const req = new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         console.log('Data prepare...');
    
//         const product = {
//             name: 'TV',
//             price: 200 
//         };
//         resolve(product);
//     }, 2000);
// });

// // req.then((product) => {
// //     const req2 = new Promise((resolve, reject) => {
// //         setTimeout(() => {
// //             product.status = 'order';
// //             resolve(product);
// //          }, 2000);
// //     });

// //     req2.then(data => {
// //         console.log(data);
// //     });
// // });

// req.then((product) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             product.status = 'order';
//             resolve(product);
//             // reject();
//          }, 2000);
//     });
// }).then(data => {
//     data.modify = true;
//     return data;
// }).then(data => {
//     console.log(data);
// }).catch(() => {
//     console.error('An error occured.');
// }).finally(() => {
//     console.log('Finally!');
// });

const test = time => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), time);
    });
};
// test(1000).then(() => console.log('1000 ms'));
// test(3000).then(() => console.log('3000 ms'));

// Promise.all([test(1000), test(3000)]).then(() => {
//     console.log('All');
// });
Promise.race([test(1000), test(3000)]).then(() => {
    console.log('All');
});



