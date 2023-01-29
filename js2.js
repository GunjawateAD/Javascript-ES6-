// DOM Manipulation
// For Id
document.getElementById('para').style.color="red"
document.getElementById('para').innerText="Jyoti"
console.log(document.getElementById('para'))
// For Class
let element = document.getElementsByClassName('heading1')

for(let i = 0;i<element.length;i++)
{
    element[i].style.fontFamily='Consolas';
    element[i].innerText = "Tesing";
}