// let x = 7;
// let y = 3;
// let z = x + y;

// console.log("answer: "  + z)

// var name = "Nasim Uddin Qureshi";
// console.log(name);
// console.log(typeof(name));

// console.log(10 + "20");
// console.log(10 -"20");
// console.log(true + true);
// console.log(true + false);
// console.log("java " +"Script");

// var myName = null;
// console.log(myName);
// console.log(typeof(null));

// var iAmUseless = null
// console.log(typeof(iAmUseless));
// console.log(typeof(iAmUseless));

// var myPhoneNumber = 21456987;
// var myName = "nasim";

// console.log(isNaN(myPhoneNumber));
// console.log(isNaN(myName));

// if(isNaN(myName)){
//     console.log(Please enter valid phone no);
// }



// console.log(NaN === NaN);
// console.log(Number.NaN === NaN);
// console.log(isNaN(NaN));
// console.log(Number.isNaN(NaN));

// var num = 15;
// var newNum = ++num + 5;

// console.log(num);
// console.log(newNum);


// // If else statement
// var tomr = "sunny";

// if(tomr == "rain"){
//     console.log("Take rain coat");
// }else{
//     console.log("No rain coat");
// }

// Finding a leap year program

// var year = 2021;
// if(year % 4){
//     console.log("The year "+ year + "is a leap year")
// }else {
//     console.log("The year " + year   +  "   is  not a leap year");
//     console.log("The year   " +    year   +  "is  not a leap year");
// }


// Conditional (ternary) operator
// var age = 21;
// if (age > 18){
//     console.log("You are eligible to vote");
// } else {
//     console.log("You are not eligible to vote");
// }

// ternary operator
// var age = 19;
// console.log((age >= 18)? "you can vote" : "you can not vote");

// /// Find the area of circle, triangle and rectangle.
// var area = 'rectangle';
// var PI = 3.142, l=5, w=4, r=3;

// if(area == 'circle'){
//     console.log("The area of the circle is: " + PI*r**2);
// } else if (area == "triangle") {
//     console.log("The are of triangle is : " + (l*w)/2);
// } else if(area == "rectangle"){
//     console.log("The area of rectangle : " + l*w);
// } else {
//     console.log("Please enter the valid data");
// }



// While loop
// var num = 1;
// while(num < 10){
//     console.log(num);
//     num++;
// }

// // Do-While loop

// var num = 0;
// do{
//     console.log(num);
//     num++;
// }
// while(num < 10);


// For Loop
// for (var num = 10;
//      num < 10; 
//      num++ ){
//         console.log(num)
//      }

// // Table of 9
// for(var num=1; num < 11; num++) {
//     var tableOf = 12;
//     console.log(tableOf + " * " + num + " = " + tableOf * num);
// }

// function sum(a, b) {
//     var total = a + b;
//     console.log(total);
// }
// sum();
// sum(20, 30)
// sum(60, 34);

// function expression
// function sum(a , b){
//     var total = a + b;
//     console.log(total);
// }
// var funExp = sum(5, 15);


// // Return Value
// function sum(a, b){
//     return total = a + b;
// }
// var funExp = sum(33, 65);
// console.log('The sum of tow given number is: ' + funExp);

// // Anonymous Function

// var funExp = function(a, b){
//     return total = a + b;
// }
// console.log(funExp(67, 54));
// // console.log('The sum of tow given number is: ' + funExp);


// ES6
// function biodat(){
//     var myFirstName = "Nasim";
//     console.log(myFirstName);

//     if(true){
//         var myLastName = "Qureshi";
//         console.log('inner' + myFirstName);
//         console.log('inner' + myLastName);
//     }
//     console.log('innerOuter' + myLastName);
// }
// biodat();

// // Template Literals
//  for(let num =1; num < 10; num++){
//     let tableOf = 12;
//     console.log(`${tableOf} * ${num} = ${tableOf * num}`);
//  } 

//  function mult(a, b){
//     return a * b;
//  }
//  console.log(mult(6,7));

//  // Fat Arrow Function
//  const sum = () => {
//     let a = 5; b = 6;
//     let sum = a + b;
//     return `the some of two numbers is ${sum}`;
//  }
//  console.log(sum());
// /////////////////////////////////////////////////////////////////

// const sum = () => `The sum of two given numbers is ${(a = 5) + (b = 9)}`;
// console.log(sum());
    

// // Arrays

// var myFriends = ['nvasim', 'qamar', 'samreen', 'hira'];
// console.log(myFriends[3]);
// console.log(myFriends.length);

// var myFriends = ['nvasim', 'qamar', 'samreen', 'hira'];
// for( var i = 0; i < myFriends.length; i++){
//    console.log(myFriends[i]);
// }
// //  Using For in loop
// var myFriends = ['nvasim', 'qamar', 'samreen', 'hira'];
// for(let elements in myFriends){
//    console.log(elements);
// }

// // Using For Of loop
// var myFriends = ['nvasim', 'qamar', 'samreen', 'hira'];
// for (let elements of myFriends){
//    console.log(elements);
// }

// // Array.prototype.forEach()
// var myFriends = ['nvasim', 'qamar', 'samreen', 'hira'];
// myFriends.forEach(function(elements, index, array){
//    console.log(elements + " index : " + index + " " + array);
// });

// var myFriends = ['nvasim', 'qamar', 'samreen', 'hira'];
// myFriends.forEach((elements, index, array) => {
//    console.log(elements + " index : " + index + " " + array);
// });

//Array Subsection 4 Perform CURD

// const animals = ['sheep', 'goats', 'cows']
// animals.push('checke');
// console.log(animals); 

// animals.push('cats','bufalo','dog');
// console.log(animals);


// To find the sqare root of each element in an array.


// let Arr = [2, 3, 4, 6, 8];
// let arr = arr.map((curElem) => curElem* 2).filers((curElem) => 10);
// console.log(arr2);

// let arr = [5, 6, 2]; 
// let sum = arr3.reduce((accumulator, curElem) => {
//     return accumulator *= curElem;
   
// })
// console.log(sum);

// String Object
// const myBioData = 'I am Nasim Uddin Qureshi';
// console.log(myBioData.lastIndexOf('u', 6));


// const myBioData = 'I am Nasim Uddin Qureshi';
// let sData = myBioData.search('uddin');
// console.log(sData);


// Date and Time.
// let currentDate = new Date();
// console.log(new Date().toLocaleString());
// // console.log(currentDate);

// console.log(Date.now());

// // How to set the indivisual time.
// let curTime = new Date();
// console.log(curTime.setTime());
// console.log(curTime.setHours(5));
// console.log(curTime.setMinutes(5));
// console.log(curTime.setSecondary(5));
// console.log(curTime.setMilliseconds(5));


// Math object
// console.log(Math.PI);

// let num = 11.45489;
// console.log(Math.round(num));

// console.log(Math.pow(2, 3));
// console.log(2 ** 4);

// console.log(Math.sqrt(25));
// console.log(Math.sqrt(256));
// console.log(Math.sqrt(66));


// console.log(Math.floor(Math.random()*10));

///////////////////////////////////////////////////////////////////===============================================================================
// Specified time intervals.

// const myName = document.querySelector('#showMyName');
// const btn = document.querySelector('#btn');

// const showMyName = () => {
//     setTimeout(() => {
//         myName.innerHTML = "Nasim Qureshi":

//     }, 1000)
// }
// btn.addEventListener('click', showMyName);
//*************************************************************************************************

// Object Oriented Programming

let bioData = {
    myName : "Nasim",
    myAge : 69,
    getData : function(){
        console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`)
    }
}
bioData.getData();
