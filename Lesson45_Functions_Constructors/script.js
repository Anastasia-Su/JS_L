// 'use strict';
// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log(`Hello ${this.name}`);
//     };
// };

// User.prototype.exit = function() {
//     console.log(`The user ${this.name} has gone.`);
// };

// const ivan = new User('Ivan', 28);
// const alex = new User('Alex', 20);

// ivan.hello();
// alex.hello();
// ivan.exit();

// console.log(ivan);
// console.log(alex);

// function showThis(a, b) {
// // console.log(this);
//     function sum() {
//         // console.log(this);
//         return a + b;    
// }
//     console.log(sum());
// }
// showThis(4, 5);

// const obj = {
//     a: 15,
//     b: 20,
//     sum: function() {
//         console.log(this);
//     }
// };
// obj.sum();

// 1. 'this' = window, but if "use strict", shows undefined.
// 2. Object method context is the object.
// 3. 'this' in constructors and classes is a sample of new object.
// 4. Manually attach 'this': call, apply, bind

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }
// const user = {
//     name: 'John'
// };
// sayName.call(user, 'Smith');
// sayName.apply(user, ['Smith']);

// function count(num) {
//     return this*num;
// }

// const double = count.bind(2)

// console.log(double(3));
// console.log(double(5));

const btn = document.querySelector('button');
btn.addEventListener('click', function() {
    console.log(this); //this = event.target
    this.style.backgroundColor = 'red';
});

const obj = {
    num: 5,
    sayNumber: function() {
        const say = () => {
            console.log(this);
        };
        say();
    }
};

obj.sayNumber();
// Стрелочная функция берет контекст у своего родителя

// const double = (a) => {
//     return a * 2;
// };
//the same as below
const double = a => a * 2;
console.log(double(4));
