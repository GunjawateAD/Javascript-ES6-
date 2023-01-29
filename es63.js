// CallBack Functions is a function which is passed as an argument to another function

function myDisplayer(something)
{
    console.log(something,"call back function")
}

function calculator(num1,num2,mycallback)
{
    let sum = num1+num2;
    mycallback(sum)
}

calculator(1,2,myDisplayer)

// Asynchronous JavaScript
// Functions running in parallel with other functions are called asynchronous

setTimeout(myFunction,3000);

function myFunction()
{
    console.log('hello how r u')
}

function greet(name,myFunction)
{
    console.log("hello world++")
    myFunction(name)
}

function sayName(name)
{
    console.log("hello++ "+name)
}

setTimeout(greet,3000,'jyoti',sayName);