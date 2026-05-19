// //single line comments 
// /* multiple lines Comment
//  multiple lines Comment */


//  // Operators in Java Script 
//  let x = 9;
//  let y = 7;
//  console.log("x = ",x ,"& y = ",y);
//  console.log("x + y = ",x+y);
//  console.log("x - y = ",x-y);
//  console.log("x * y = ",x*y);
//  console.log("x / y = ",x/y);
//  console.log("x ** y = ",x**y);

// //unary operators:

// let a = 7;
// console.log("a =",a);
// a++;
// console.log("a =",a);
// a--;
// console.log("a =",a);
// ++a;
// console.log("a =",a);
// --a;
// console.log("a =",a);


// let num = prompt("enter your number to check");
// if( num % 5 == 0){
//     console.log("Yes this no is divisible by 5");
// }else{
//     console.log("this number is not divisible by 5");
// }

let marks = prompt("enter your marks :");

if( marks < 50 ){
    console.log("you are fail your grade is F");

}
else if(49 < marks < 60){
    console.log("good job you are pass and your grade is D");
}
else if(59 < marks < 70){
    console.log("good job you are pass and your grade is C");
}
else if(69 < marks < 90){
    console.log("good job you are pass and your grade is B");
}
else if(89 < marks < 101){
    console.log("good job you are pass and your grade is A");
}else{
        cnsole.log("enter  valid marks between 1 to 100");

}