document.addEventListener('DOMContentLoaded', function() {
    const textBox = document.querySelector("#textBox");
    const output = document.querySelector("#output");

    textBox.addEventListener("keydown", (event) => {
      output.textContent = `You pressed "${event.key}".`;
    });
  });

// how to write function and invoke function
//How to write
function myFunction() {
    console.log("Hello");
}
//Invoke
myFunction();

// Parameters
// functions don't need parameters
const myNumber = Math.random();
console.log(myNumber);

// functions need parameters
const myText = "I am a string";
const newString = myText.replace("string", "text");
console.log(newString);

// Optional Parameters
const myArray = ["I", "love", "chocolate", "frogs"];
const madeAString = myArray.join(" ");
console.log(madeAString);
const madeAnotherString = myArray.join();
console.log(madeAnotherString);

// default parameters
function sayHello(name = "Tyler"){
    console.log(`Hello ${name}`);
}
// When nothing's in the parameter
sayHello();
// When you insert a parameter
sayHello("Xedo");


// Anonymous function example
/*
function logKey(event){
    console.log(`you pressed "${event.key}".`);
}
document.addEventListener("keydown", logKey);

// You can use anonymous function inside the event listener
document.addEventListener("keydown", function(event){
    console.log(`you pressed "${event.key}"`);
});

// Arrow functions. Even shorter eversion
document.addEventListener("keydown", (event) => {
    console.log(`you pressed "${event.key}"`);
});


// If only one parameter, omit the parentheses
document.addEventListener("keydown", event => {
    console.log(`you pressed "${event.key}"`);
});
*/

// If the function contains only one line that's a return statement, omit braces and the return keyword.
const originals = [1, 2, 3];

const doubled = originals.map(item => item * 2);
console.log(doubled); //[2, 3, 6];

// So the item => item * 2 is equivalent as
function doubleItem (item) {
    return item * 2;
};



