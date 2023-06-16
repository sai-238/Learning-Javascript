// arrow function 

let greet = () =>console.log('hello programer')
greet()

// arrow function using an expresion 

let age = 21 

let welcome = (age< 18 ) ? 
    () => console.log('baby'):
    () => console.log('Adult')

welcome()

// multiline arrow function 

let sum = (a ,b) => {
    let result = a - b
    return result
}

let result1 = sum(1996 , 2002)
console.log(result1)

// this with arrow function 

function person (){
    this.name = 'sai'
    this.age = 20 
    this.occ = 'programer'
    this.sayname = function (){
        console.log(this.name)
        let innerfunc = () =>{
           console.log(this.age)
        }
        innerfunc()
        let outerfunc = () =>{
            console.log(this.occ)
        }
        outerfunc()
        }
    }
    const x = new person ()
    x.sayname()

// Arguments Binding or spread operator

const arrvalue = ['My', 'name', 'is','Sai']

console.log(arrvalue)
console.log(...arrvalue)


function add(q,w,e,r,t,y) {
    console.log(q + w + e + r + t + y )
}
const num1 = [10,20,30,40,50,60]

add(...num1)

