// Arrays 

const car = ['volvo', 'benz','supra']

car.push('indiga')
console.log(car)

car.shift()
console.log(car)

car.sort()
console.log(car)

const vechile= car.slice(1)
console.log(vechile)

car.unshift('bugati')
console.log(car)
console.log(car.length)


// multidimensional Array

const studentdata = [['aa',19 ],['sai',21],['kannan',20]]

studentdata.forEach((student) => {
    student.forEach((data) => {
        console.log(data)
    })
})

studentdata.push(['arjun',22])
console.log(studentdata )

// string 

const text = '      sai           '

let upper = text.toUpperCase()
let tri  = text.trim();

console.log(upper)
console.log(tri)


// for....in loop

const employee ={
    name: 'Monica',
    salary: 20000,
    age: 12
}

for (let key in employee){
    console.log(`${key} => ${employee[key]}` )
}

// Symbol

const x = Symbol('hey')
console.log(x)