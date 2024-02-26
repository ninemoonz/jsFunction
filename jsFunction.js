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
function logKey(event){
    console.log(`you pressed "${event.key}".`);
}
textBox.addEventListener("keydown", logKey);

