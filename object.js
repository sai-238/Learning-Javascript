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