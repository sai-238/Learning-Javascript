// const num = prompt('Enter the number:')
// const n = 100

// // if else loop
// if (num > 0){
//     console.log('The number is positive')
//     document.write('The number is positive <br>')
// }
// else {
//     console.log('The number is negative')
//     document.write('The number is negative <br>')
// }
// console.log('The if statement is done')
// document.write('The if statement is done <br>') 


// // for loop 
// let sum = 0 

// for (let i = 0; i<=n; i++){
//     sum += i
// }
// document.write('sum = ',sum)


// While loop
let sum = 0;

let number = parseInt(prompt('Enter a number: '));

do {
    sum += number;
    number = parseInt(prompt('Enter a number: '));
} while(number >= 0)
document.write(`The sum is ${sum}.`);

