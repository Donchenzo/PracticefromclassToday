// 1.) Using if/else statements, JavaScript code in a script tag that prints true if both parameters are greater or equal to 5.

// Values to test:

function greater(num1, num2){
    if(num1 && num2 >=5){
        console.log (true)
    }else{
        console.log(false)
    }
}

greater(5,6)
greater(10,11)
greater(0,0)
greater(1000,-1000)
greater(6,4)
greater(5,5)

// 2.) Using if/else statements and strict equality operators, JavaScript code in a script tag that compares two sets of two values. Print true if at least one of the pairs is truthy.

// Values to test:

function parameters(param1a,param2a, param1b,param2b){
    if (param1a === param1b || param2a === param2b){
        console.log(true)
    }else{
        console.log(false)
    }
}

parameters("cat",6,"cat","6")
parameters("five","dog",5,"dawg")
parameters(0,"horse",false,"horse")
parameters("eight","ate","eight","ate")
parameters(11,"four","eleven","for")
parameters("cake",'pie',"cake","pie")

// 3.) Using if/else if/else statements, JavaScript code in a script tag that takes the sum of two numbers and prints the corresponding result:

// sum + " is less than -1000";
// sum + " is a negative number";
// sum + " is equal to 0";
// sum + " is larger than 0";
// sum + " is greater than 100";


function numbers(num1, num2){
    if((num1 + num2) > 100){
        console.log ((num1 + num2) + " is greater than 100" )
        }else if (
            (num1 + num2) > 0 && (num1 + num2)< 100){
            console.log ((num1 + num2) + " is greater than 0" )
        }else if (
            (num1 + num2) === 0){
            console.log ((num1 + num2) + " is equal to 0")
        }else {
            console.log ((num1 + num2) + " is a negative number")
        }
}

numbers(50, 40)
numbers(99,-2)
numbers(0, 101)
numbers(500, -500)
numbers(-1000, 0)
numbers(-5, 0)

// 4.) Using if/else statements, create a JavaScript code in a script tag that follows the following rules:

// If the value is truthy, print true;
// If the value is falsy, print the corresponding result:
// "The boolean value false is falsy";
// "The null value is falsy";
// "undefined is falsy";
// "The number 0 is falsy (the only falsy number)";
// "The empty string is falsy (the only falsy string)";

function types(param1){
    if (param1){
        console.log (true)
    }else if(param1 === false){
        console.log("The boolean value false is falsy")
    }else if(param1 === null){
        console.log("The null value is falsy")
    }else if( param1 === ""){
        console.log ("The empty string is falsy (the only falsy string)")
    }else if( param1 === 0){
        console.log ("The number 0 is falsy (the only falsy number)")
    }else if( param1 === undefined){
        console.log ("undefined is falsy")
    }
}


types("i am a string")
types(false)
types(null)
types(undefined)
types(0)
types("")