// Arrays
let arr1 = ["Avishlar", "Jyoti", "pooja", "mina", "harry"];

console.log(arr1);

for (let name = 0; name < arr1.length; name++) {
  console.log("name is : " + arr1[name]);
}

function PrintArrayElement(element) {
  console.log("printing... ", element);
}

// for (let name = 0; name < arr1.length; name++)
// {
//     PrintArrayElement(arr1[name])
// }

arr1.forEach(PrintArrayElement); //meaning: For each element of array call PrintArrayElement

let arr2 = [2, 4, 3, 5, 6, 7];

arr2.forEach((element) => console.log("****", element * 2));

console.log(typeof arr2)

console.log(Array.isArray(arr2))
console.log(arr1 instanceof Array)
let name ="pooja";
console.log(Array.isArray(name))

let arr3=['pooja',12,3.44,true]
console.log(arr3)


// convert arrays to string
console.log(arr2.toString())
console.log(arr1.join('/'))

// Array Functions
const fruits=["Banana","Orange","Apple","Mango","kiwi"];
fruits.pop()
console.log(fruits)

fruits.push("strawberry");
console.log(fruits)
fruits.shift()
console.log(fruits)
fruits.unshift("lemon")
console.log("unshift",fruits)
fruits[1]="peach"
console.log(fruits)
delete fruits[2]
console.log(fruits)
fruits[9]="avacado"
console.log(fruits)

const girls=["Merry","jessy"];
const boys=["tom","harry"];
const others=["Robin","morgan"];

const children=girls.concat(boys,others)
console.log(children)







// Fat Arrow Fnctions

// default
function greet() {
  console.log("Hello");
}

let greet2 = () => console.log("Hello this is arrow function");
greet2();

// parameterized
function Add(n1, n2) {
  return n1 + n2;
}

let addition = (n1, n2) => n1 + n2;
console.log(addition(2, 3));

function sub(n1, n2) {
  let res = n1 - n2;
  return res;
}

let Sub = (n1, n2) => {
  let res = n1 - n2;
  return res;
};

console.log(Sub(9, 2));

let age = 5;

let welcome =
  age < 18
    ? () => console.log("welcome baby")
    : () => console.log("welcome adult");
welcome();
