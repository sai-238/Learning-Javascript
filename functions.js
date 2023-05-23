let x =function (num) {return num *num}
console.log(x(4))

let y = x(3)
console.log(y)

// add two number using function 

function add( a ,b){
    return a +b;
}

let number1 = parseFloat(prompt('Enter the first numbber : '))
let number2 = parseFloat(prompt('Enter the second numbber : '))

let result = add(number1, number2 )

document.write('The Result is :', result)

// Recursion 

function countdown(number){
    document.write(" <br>",number)
    const newnumber = number -1
    if (newnumber > 0){
        countdown(newnumber);
    }
}
countdown(4)

// find factorial

function factorial(x){
    if (x === 0){
        return 1;
    }
    else {
        return x * factorial(x-1)
    }
}
const num = parseFloat(prompt('Enter the number : '))

if ( num > 0 ){
    let result = factorial(num)
    document.write(`<br> The factorial of ${num} is ${result}`)
}