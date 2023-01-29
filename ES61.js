// ECMA Script 2015 --> How js programming lang will work
// OBJECTS

const student={
    fname:'pooja',
    class:'10',
    address:'vikhtoli',
    printDetails:function() {
        console.log(this.fname,this.class,this.address)
    }
}

student.printDetails();
console.log(student.fname) //dot notation
console.log(student['class']) //bracket Notation

const person = {
    fname: "jyoti",
    age: 27,
    greet: function(){
        console.log("hello")
    },
};
person.greet()

const student1={
    fname:'Avishkar',
    marks:{
        scinece:25,
        maths:27,
        english:30
    }
}
console.log(student1.marks)

function XYZ(element)
{
    console.log(element)
}

console.log(this)
/*
In an object , this refers to object
alone this will refer to global object
in a function , this refers to global object 
in a event , this refers to element that received the event
*/

// For in loop , it will itreate through properties of an object
// fname = value


for(key in student1)
{
    console.log(key,"value is = ",student1[key])
}

const numbers = [1,2,3,4,32,1,1];

for(let x in numbers)
{
    console.log(numbers[x])
    console.log("********",x)
}

// for of loop will iterate through values of an object

for(let detail of numbers)
{
    console.log("details",detail)
}

let cars=["BMW","Volvo","Mini"];
for(let car of cars)
{
    console.log("car is: ",car)
}