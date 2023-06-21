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

// javascript default perameters

let click = (f = 3 , g = 5) =>{
    return f + g
}

console.log(click(5, 15))
console.log(click(4))
console.log(click())

// Template literals or Template Strings

const nam = 'Sai'
console.log(`My name is ${nam}`)

number = 11 + 10 

console.log(`My age is : ${number}`)

console.log(`${number < 18 ? 'Baby' : 'Adult'}`)

// javascript map

let map1 = new Map()

let obj = {}
map1.set(obj, {name : 'SAI', age : 20})

console.log(map1)
console.log(map1.get(obj))
console.log(map1.has(obj))
console.log(map1.delete(obj))
console.log(map1)


let map3 = new Map ()
map3.set ('name', 'ezhil ')
map3.set ('age', 20)

for (let elem of map3.entries()){
    console.log(`${elem[0]} : ${elem[1]}`)
}