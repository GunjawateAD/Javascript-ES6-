// NEW FUNCTIONS

/*
splice(first,sec)--> it will add new items into an array, first defines position,
second parameter define  how many elements should be removed
slice()--> slice out a piece of an array
*/

const colors=['red','blue','orange','yellow'];
colors.splice(2,0,"pink",'purple');
console.log(colors)
colors.splice(3,2,'white','black');
console.log(colors)

const electronics=['laptop','oven','tv','mobile'];
let screen=electronics.slice(0,2);
console.log(screen);

console.log(electronics.sort())
console.log(electronics.reverse())