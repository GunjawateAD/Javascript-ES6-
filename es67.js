function A() // outer function
{
    num1=10;
    function B() // inner function
    {
        console.log(num1)
    }
    B();
}

A();


let numbers=[1,2,4,5,6,7,3,23,56];

function CheckNum(num)
{
    if(num%2==0)
    return num;
    else
    return 0;
}

const doubled=numbers.map((num)=> num*2)

console.log(doubled," this is doubled array")

const checkedNumbers=numbers.map((num)=>CheckNum(num))
console.log(checkedNumbers," this is checked array")

const odds=numbers.filter((item)=>item%2!=0);
console.log(odds,"checking odds")


const students=[
    {name:'Jhon',grade:98},
    {name:'Alexa',grade:76},
    {name:'Sam',grade:89},
    {name:'Kay',grade:49},
    {name:'Ruth',grade:23},
    {name:'Tom',grade:87},
]


const toppers=students.filter((student)=>student.grade>=80);
//console.log(toppers," these are the toppers")
toppers.map((details)=>console.log("Name is: ",details.name," Grade is: ",details.grade))



const numbers2=[1,2,3,4,5,6,7,8];
const sum=numbers2.reduce((res,item)=>{return res+item},0)
console.log(sum,"is the sum")


/*
let languages=['C','C++','java','python'] print words>4

let */

let languages=['C','C++','java','python'] ;

const lan = languages.filter((languages)=>languages.length>4)
console.log(lan)

let animals = ['cat','dog','cat','dog','chicken','goat']

const ani = animals.reduce((obj,animal)=>{
    console.log(obj,"obj",animal,"animal")
    if(!obj[animal])
    obj[animal]=1;
    else
    obj[animal]++;

    return obj;
},{})

console.log(ani,"counts")