// if else, switch case, ternary operator
// depending on hours,display gm and gn message

let date = new Date().getDate();
let month = new Date().getMonth(); //Jan starts with 0 position
let day = new Date().getDay(); //Sun starts from 0th
let hours = new Date().getHours();
let min = new Date().getMinutes();
hours=20
console.log(date, month+1, day, hours, min);

if(hours < 16){
    document.getElementById("demo").innerText="Good Day";
} else if(hours > 16 && hours <= 20){
    document.getElementById("demo").innerText="Good Evening";
} else{
    document.getElementById("demo").innerText="Good Night";
}

let vowel = 'z';
if((vowel == 'a') || (vowel == 'e') || (vowel =='i') || (vowel =='o') || (vowel =='u')){
    document.getElementById("demo").innerText="Vowel";
}else{
    document.getElementById("demo").innerText="Consonant";
}


// for getting input at run time
function show(){
    let num1 = document.getElementById("num1").value;
    console.log(typeof num1)
    document.getElementById("displaynum").innerText=num1;
}