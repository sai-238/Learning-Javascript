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


// Javascript set 

const set1 = new Set([1,2,3])
console.log(set1)
set1.add(4)
console.log(set1.values())

// Javascript Destruction Assignment 

const viper = {
    name1 : 'captian',
    age1 : '57',
    gender1 : 'Male'
}

let { name1 , age1 , gender1, occupation = 'super hero'} = viper 

console.log(name1)
console.log(age1)
console.log(gender1)
console.log(occupation)

// Javascript Class

class car {
    constructor ( model){
    this.model = model
    }
    get carmodel(){
        return this.model
    }
    set carmodel (x){
        this.model = x
    }
}
let car1 = new car('Benz')
console.log(car1.model)

car1.carmodel = 'Bugati'
console.log(car1.model) 

// javascript calss inheritence

class collage {
    constructor (fame){
    this.fame = fame
    this.occu = 'unemployed'
    }
    geet(){
        console.log(`Hello ${this.fame}`)
    }
}   

class aiml extends collage {
    constructor (fame){

    super(fame)
    this.occu = 'Multi millionare'
    }
    greet (){
        console.log(`Hello Student : ${this.fame} `)
        console.log(`occupation : ${this.occu}`)
    }
}

let p = new aiml ('Harjeet')
p.greet()


// Javascript Proxies 

let std = {
    name : 'Priya',
    age : 20 
}

const handler = {
    get(obj, prop){
    if (prop == 'name'){
        return obj[prop]
    }
    if (prop == 'age'){
        return obj[prop]
    }
    else {
        return 'not allowed'
    }
  }
}

let setnewvalue = {
    set: function(obj , prop , value){
        obj[prop] = value
        return 
    }
}
let per = new Proxy(std, setnewvalue)
per.mentastate = 'paaithiyam'
const proxy = new Proxy(std , handler)
console.log(proxy.name)
console.log(proxy.age)
console.log(per.mentastate)

