import {greet, PI, multiplyNumbers} from './main'

alert (greet);
alert (PI);
alert (multiplyNumbers);









/*
for (let i=1; i < 101; i++){
  if(i % 15 == 0) console.log ("FizzBuzz")
  else if (i %  3 == 0) console.log("Fizz") //divisible by 3
  else if (i % 5 == 0) console.log("Buzz"); //divisible by 5
  else console.log(i);
}

let myNumber = 100
let i = 0
while ( i <= myNumber) {
  if(i % 15 == 0 && i % 5 ==0 ){
    console.log ("FizzBuzz")
  }else if( i % 5 == 0) {
    console.log ("buzz")
  }else if( i % 3 == 0){
    console.log("fizz")
  } else{
    console.log(i)
  }break;

}


////
var parent = document.getElementById("div1");
var child = document.getElementById("p2");
var secondChild = document.getElementById("p1");
parent.removeChild(child);
var addText = document.createTextNode("i just added this");
secondChild.appendChild(addText);

//add and remove
var person = {
    name: "Peter",
    age: 28,
    gender: "Male",
    displayName: function(){
        alert(this.name);
    }
}

delete person.age;
alert(person.age);
// accessing object properties
var book = {
    "name": " the last don",
    "author": "Mario Puzo",
    "year": "i don't know"
}
console.log (book.name);


//variable scoping

function greetWorld(){
var greet = 'Hello World';
alert(greet);
}
greetWorld();
alert(greet); //greet is not defined error


//function expression//

var getSum = function(num1, num2){
    
    var total = num1 + num2;
    return total;
};

alert(getSum(5, 10));
var sum = getSum(7, 25);
alert(sum);

//////////////////////////////////
function myFunction( add1, add2) {
    var total = add1 + add2;
    return total
}

console.log(myFunction(5, 20))

function mySubstraction(minus1, minus2) {
    var total = minus1 - minus2;
    return total
}

console.log(mySubstraction(50, 20))


function myMultiplication(num1, num2) {
    var total = num1 * num2;
    return total
}

console.log(myMultiplication(5, 20))
*/