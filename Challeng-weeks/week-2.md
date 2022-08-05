<h1 align="center">Week No.2 challenges</h1>


<h2>Week Goals</h2>
<h2>Tuesday</h2>

Exercise No. 2
* how i fixed:  retunr operator was not included 

``` javascript
/*This code does not execute properly. Try to figure out why. */

function multiply(a, b) {
  return a * b;
}
 ```
Exercise No. 3

* Problem:
*  You'll be given a string, and have to return the sum of all 
characters as an int. The function should be able to handle all ASCII characters.

examples:

uniTotal("a") == 97 uniTotal("aaa") == 291
    

* how i fixed: i used the function charCodeAt() because let me convert any carater to ascii code

``` javasCript

function uniTotal(string){
let size = string.length;
// size stored the size of string

let total = 0;
//we perform an iteration by each element
  for(let i=0; i<size; i++ ){
    //sum for each iteration 
     total += string.charCodeAt(i);
  }
   return total; 
}
```

## Wednesday 

Exercise No. 2
* Excercise Name: Char From ASCII Value 
* how i fixed: I used fromCharCode method to convert the character to ASCII Value  

``` javascript
/*
Write a function get_char() / getChar() which takes a number
and returns the corresponding ASCII char for that value.
*/
function getChar(c) {
  let asii = String.fromCharCode(c);
  return asii;
}
 ```

Exercise No. 3
* Excercise Name: Binary Addition  
* how i fixed: 
1. first add the number in the traditional way, then convert the result to binary using the toString(2) method using the value 2 as base
  

``` javascript
/*
Implement a function that adds two numbers together 
and returns their sum in binary. The conversion can be done before, or after the addition.
*/
function addBinary(a, b) {
  let sum = a + b;
  console.log(sum);
  let binary = sum.toString(2);

  return binary;
}

 ```

Exercise No. 3
* Excercise Name: Student's Final Grade  
* how i fixed: 
1. control structures were used to solve this problem if it was helpful inside the code leave comments 
  

``` javascript
/*
Create a function finalGrade, which calculates the final 
grade of a student depending on two parameters: a 
grade for the exam and a number of completed projects.

This function should take two arguments: exam - grade 
for exam (from 0 to 100); projects - number of completed projects (from 0 and above);

This function should return a number (final grade). There are four types of final grades:

    100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
    90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
    75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
    0, in other cases
*/

function finalGrade(exam, projects) {
  //the result variable is declared empty because it will be reused to overload its value
  let result = 0;

  if (exam > 90 || projects > 10) {
    result = 100;
    return result;
  } else if (exam > 75 && projects >= 5) {
    result = 90;
    return result;
  } else if (exam > 50 && projects >= 2) {
    result = 75;
    return result;
  } else {
    result = 0;
    return result;
  }
 ```
 

1. control structures were used to solve this problem if it was helpful.

