///Methods like CALL , APPLY And BIND can refer this to any object
//SPREAD , REST operator  ...

let student1={
    fname:'pooja',
    lname:'gholap',
    address:'airoli',
    age:27
}

let employee={
    fname:'jyoti',
    lname:'baviskar',
    address:'panvel',
    age:27
}


let printDetails={
    print:function()
    {
        console.log(this.fname,this.lname,this.address,this.age);
    }
}

printDetails.print.call(student1)
printDetails.print.call(employee)

let person={
    fullName:function(city,country)
    {
        console.log(this.fname,this.lname,this.address,this.age,city,country); 
    }
}

person.fullName.call(employee,'Navi Mumbai',"India")

person.fullName.apply(employee,['Navi Mumbai',"India"])

let Addition={
    sumOfAllNumbers:function(...numbers)
    {
        console.log(numbers,"received this")
    }
}

const arr1=[1,2,3,4,5,5];

Addition.sumOfAllNumbers.apply(0,[1,2,3,4,5])


const per2={
    fname:'Avishkar',
    lname:'gunjawate'
}

function greet(wish,msg)
{
    console.log(this.fname,this.lname,wish,msg)
}

greet.apply(per2,['GM','Hello,How r u'])


//with bind method,an object can borrow a method from another object

const person2={
    firstName:'jhon',
    lastname:'Doe',
    fullName:function()
    {
        console.log( this.firstName+" "+this.lastname)
    }
}
// const person3={
//     firstName:'Tom',
//     lastname:'Xavier'
// }

// const fullname=person2.fullName.bind(person3)
// console.log(fullname(),"***************")

//funtion1(func2)--> callback function is the one which is passed into another function as a parameter

setTimeout(person2.fullName.bind(person2),3000) // this will loose its scope wheneve we callback a function

//Spread operator can be used with arrays and Object 
let arr2=[1,2,3]
let arr3=[4,5,6]
let arr4=[...arr2,...arr3]
console.log(arr4,"Array 4")


let vehicle={
    brand:'hyundai',
    model:'i20',
    color:'white'
}

let updatedVehicle={
    type:'car',
    year:2022,
    color:'black'
}

let myUpdatedVehicle={...vehicle,...updatedVehicle}
console.log(myUpdatedVehicle)

//REST Operator

function Addition1(num1,num2,...numbers)
{
    console.log(num1,num2,"remaining",numbers)
}
Addition1(10,23,5,6,3,56,7,4,4)
Addition1(2,5)