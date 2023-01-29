//Promise ---> I Promice a result

/*
A promise object can have 3 states:
pending   --> undefined
Fulfilled --> a result value
Rejected  --> an error object

A Promise has 2 Parameters
Full Filled
reject    --> Error
 */

function myDisplayer(something) {
  document.getElementById("demo").innerText = something;
}

let myPromiseResult = new Promise(function (resolve, reject) {
  let x = 1;
  if (x == 1) resolve("OK");
  else reject("value is not zero");
});

console.log(myPromiseResult, " is the result");

myPromiseResult.then(
  //on fullfilled
  function (value) {
    myDisplayer(value);
  },
  //on rejected
  function (err) {
    myDisplayer(err);
  }
);

function A(something) {
  console.log("A");
  document.getElementById("demo1").innerText = something;
}

function B(something) {
  console.log("B");
  document.getElementById("demo2").innerText = something;
}

function C(something) {
  console.log("C");
  document.getElementById("demo3").innerText = something;
}

const count = true;

let countvalue = new Promise(function (res, rej) {
  if (count) {
    res("There is a count value");
  } else {
    rej("There is no count value");
  }
});

countvalue
  .then((value) => {
    myDisplayer(value);
  })

  .then((value) => A("value1"))
  .then((value) => B("value2"))
  .then((value) => C("value3"))
  .catch((err) => {
    myDisplayer(err);
  });
