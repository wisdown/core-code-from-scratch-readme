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



