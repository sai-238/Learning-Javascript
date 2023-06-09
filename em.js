// program to show try...catch in a program

const numerator= 100, denominator = 'a';

try {
     console.log(numerator/denominator);

    // forgot to define variable a      
    console.log(a);
}
catch(error) {
    console.log('An error caught'); 
    console.log('Error message: ' + error);  
}

// try catch method with settimeout 

setTimeout(function(){
    try{
        const num = 100 , dem = 'a'
        console.log(num/dem)
        console.log(a)
    }
    catch(error){
        console.log('An error Caught')
        console.log('Error message :' + error)
    }

}, 2000)

// rethrow an expresion

const number = 5;
try {
     // user-defined throw statement
     throw new Error('This is the throw');

}
catch(error) {
    console.log('An error caught');
    if( number + 8 > 10) {

        // statements to handle exceptions
         console.log('Error message: ' + error); 
        console.log('Error resolved');
    }
    else {
        // cannot handle the exception
        // rethrow the exception
        throw new Error('The value is low');
    }
}