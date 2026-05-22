// // ======================================================
// // JAVASCRIPT PRACTICE FILE
// // Topics Covered:
// // 1. Operators
// // 2. Unary Operators
// // 3. Conditionals
// // 4. Loops
// // 5. Guessing Game
// // 6. Strings
// // 7. Arrays
// // ======================================================



// // ======================================================
// // OPERATORS IN JAVASCRIPT
// // ======================================================

// let x = 9;
// let y = 7;

// console.log("x =", x, "& y =", y);

// console.log("Addition:", x + y);
// console.log("Subtraction:", x - y);
// console.log("Multiplication:", x * y);
// console.log("Division:", x / y);
// console.log("Power:", x ** y);



// // ======================================================
// // UNARY OPERATORS
// // ======================================================

// let a = 7;

// console.log("Initial value of a =", a);

// a++;
// console.log("After a++ :", a);

// a--;
// console.log("After a-- :", a);

// ++a;
// console.log("After ++a :", a);

// --a;
// console.log("After --a :", a);



// // ======================================================
// // CHECK NUMBER DIVISIBLE BY 5
// // ======================================================

// let num = Number(prompt("Enter your number:"));

// if (num % 5 === 0) {
//     console.log("Yes, this number is divisible by 5.");
// } else {
//     console.log("This number is NOT divisible by 5.");
// }



// // ======================================================
// // GRADE SYSTEM USING IF-ELSE
// // ======================================================

// let marks = Number(prompt("Enter your marks:"));

// if (marks <= 49) {

//     console.log("You are FAIL. Grade: F");

// } else if (marks <= 59) {

//     console.log("You are PASS. Grade: D");

// } else if (marks <= 69) {

//     console.log("You are PASS. Grade: C");

// } else if (marks <= 89) {

//     console.log("You are PASS. Grade: B");

// } else if (marks <= 100) {

//     console.log("Excellent! Grade: A");

// } else {

//     console.log("Please enter valid marks between 1 to 100.");
// }



// // ======================================================
// // FOR LOOP
// // PRINTING MESSAGE 5 TIMES
// // ======================================================

// for (let i = 1; i <= 5; i++) {

//     console.log("My name is Karni Singh Shekhawat");

// }

// console.log("Loop has ended.");



// // ======================================================
// // SUM OF FIRST N NATURAL NUMBERS
// // ======================================================

// let sum = 0;
// let n = 100;

// for (let i = 1; i <= n; i++) {

//     sum = sum + i;

// }

// console.log("Sum =", sum);



// // ======================================================
// // PRINTING VALUES OF i
// // ======================================================

// for (let i = 1; i <= 5; i++) {

//     console.log("i =", i);

// }

// console.log("Loop has ended.");



// // ======================================================
// // WHILE LOOP
// // ======================================================

// let i = 1;

// while (i <= 5) {

//     console.log("i =", i);

//     i++;

// }

// console.log("Loop has ended.");



// // ======================================================
// // NUMBER GUESSING GAME
// // ======================================================

// let gameNumber = 61;

// let userNumber = Number(
//     prompt("Guess the correct number:")
// );

// while (gameNumber !== userNumber) {

//     userNumber = Number(
//         prompt("Wrong guess! Try Again:")
//     );

// }

// console.log("Congratulations! You guessed it right!");



// // ======================================================
// // PRINT ALL EVEN NUMBERS FROM 1 TO 100
// // ======================================================

// for (let i = 1; i <= 100; i++) {

//     if (i % 2 === 0) {

//         console.log("Even Number =", i);

//     }

// }



// // ======================================================
// // STRING PRACTICE
// // CREATE USERNAME
// // ======================================================

// let str = prompt("Enter your name:");

// let strLength = str.length;

// let username = "@".concat(str.concat(strLength));

// console.log("Generated Username =", username);





// // ======================================================
// // ARRAYS IN JAVA SCRIPT 
// // ======================================================


// // ======================================================
// // FOR A GIVEN ARRAY WITH MARKS OF STUDENTS -> [85, 97, 44, 37, 76, 60]
// // FIND THE AVERAGE MARKS OF ENTIRE CLASS.
// // ======================================================


// let marks = [85, 97, 44, 37, 76, 60];
// let sum = 0;
// let avg;
// for(let val of marks){
//     sum = sum + val;
// }
// console.log("sum=",sum)
// avg = sum/marks.length;
// console.log("the average marks = ", avg);

// let items = [250,645,300,900,50];

// for( let i = 0; i < items.length; i++){

//     let offer = items[i] / 10;
//     items[i] = items[i] - offer;

// }
// console.log(items);


// let companies = [" BLOOMBERG"," MICROSHOFT","UBER","GOOGLE","IBM","NETFLIX"];

// companies.shift();
// companies.splice(1,1,"OLA");
// companies.push("AMAZON");
// console.log(companies);




// ======================================================
// FUNTIONS  IN JAVA SCRIPT 
// ======================================================


function countVowel(str){
       let count = 0;
      for (const char of str){
        if(char=="a" || char=="e" ||char=="i" || char=="o" || char=="u"){
            count++;
           
        }
      }
     console.log(count);
}  