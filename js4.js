// default function 
function printMyname()
{
    console.log('Pooja')
}
printMyname()

// Parameterized
function printAllnames(name)
{
    console.log(name)
}
printAllnames("Avishkar")
printAllnames("Jyoti")

function Greet(name,msg)
{
    console.log("Hii",name,msg)
}
Greet("Pooja","Good Morning")

// Return Type Function
function square(num)
{
    let ans = num*num;
    return ans;
}
let result = square(8);
console.log(result)
console.log(square(2))

function Calculator(Opertor)
{
    console.log(Opertor);
    let n1 = parseInt(document.getElementById('num1').value);
    let n2 = parseInt(document.getElementById('num2').value);
    switch(Opertor)
    {
        case '+' :document.getElementById('result').innerText ="Addition is:" +(n1 + n2);
        break;
        case '-' :document.getElementById('result').innerText ="Substraction is:" +(n1 - n2);
        break;
        case '*' :document.getElementById('result').innerText ="Multiplication is:" +(n1 * n2);
        break;
        case '/' :document.getElementById('result').innerText ="Division is:" +(n1 / n2);
        break;

    }
}

//  Strings
let text1 = "pooja"; //string literal method
let text2 = 'jyoti';  

// It's alright

let text3 = "It's alright";
console.log(text3)

let text4 ='his name is "Tom"';
console.log(text4)

let text5 = `He Want's demo lecture of "Js"`
console.log(text5);

console.log(text5.length)

let text6 = new String("Jyoti")  // Object Method

/**
 * never use string object method
 * its slows down ur execution speed 
 * and is not recommended, increases complexities
 * ==
 * ===
 */
let a = 1
let b = "1"

if(a===b)
{
    console.log("Equal")
}
else
{
    console.log("Not Equal")
}