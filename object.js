// normal object method

const student = {
    name : ' Sai', 
    age : 20, 
    marks: {
        maths : 99,
        science : 80
    }
}
console.log(student.name)
console.log(student.marks)
console.log(student.marks.maths)

// using function 

const person = { 
    name : 'sai',
    age : 20, 
    greet : function (){console.log('Hi there i am ', this.name) } 
}
console.log(person.name)
person.greet()

// Constructor

function sai () {
    this.name = 'sai'
    this.age = 20
}

let sai1 = new sai()
let sai2 = new sai()

sai1.gender = 'male'

sai1.greet = function(){
    console.log('saltify',this.gender)
}

sai1.greet()

// Getter and setter 

const employee = {
    firstname : 'prasath'

}

// getter property
Object.defineProperty(employee, "getname",{
    get : function(){
        return this.firstname
    }
})

// setting property

Object.defineProperty(employee, "changename",{
    set : function (value) {
        this.firstname = value 
    }
} )

console.log(employee.firstname)

employee.changename = 'prasu'

console.log(employee.firstname)


//prototype  

function Person (){
    this.name = 'kannan'
    this.age = 21
}

const cithapa = new Person()
const cithapa1 = new Person()

Person.prototype.meet = function(){
    console.log('hello', this.name)
}
cithapa.meet()
cithapa1.meet()
