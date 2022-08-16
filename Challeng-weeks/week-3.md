<h1 align="center">Week No.3 challenges</h1>

<h2>Week Goals</h2>

## Monday

Excrcise Name: Who Likes It?

- How i fixed: I decided to use the known methods to reinforce knowledge
  methord used length , if, tamplates. and variebles overload
- other consideration: when we used the length method,
  if an array is empty it returns 0

```javascript Exercise No. 1
function likes(names) {
  let size = names.length;
  let msm = "";
  if (size === 0) {
    msm = "no one likes this";
  }
  if (size === 1) {
    msm = `${names[size - 1]} likes this`;
  }
  if (size === 2) {
    msm = `${names[0]} and ${names[size - 1]} like this`;
  }
  if (size === 3) {
    msm = `${names[0]}, ${names[1]} and ${names[2]} like this`;
  }
  if (size > 3) {
    msm = `${names[0]}, ${names[1]} and ${size - 2} others like this`;
  }

  return msm;
}
```

Excrcise Name: Bit Counting

- how i fixed: we convet the number to binary base at the same time we divide it into an array and we solve it with the method reduce()
- methods used: toString(), split() reduce()
  and anonymus functions
  use the following link to see how it is used
  //https://www.youtube.com/watch?v=0y5lXGYMEw0&t=487s
  he teaches how to index

```javascript Exercise No. 2

var countBits = function (n) {
  // we convet to binary base and we divide it  into an array
  const base = n.toString(2).split("");
  // make a sum with the array and make the index a Number
  const result = base.reduce((sum, num) => sum + Number(num), 0);
  return result;
};

## we are working on it

```

Excrcise Name: Your Order, Please

- how i fixed:
methods used: 
split(); to split the code separated by a space
sort(); to order  the elements through arrow functions
arrow Functions: receive two arguments 
mathc(): receive a regular exprension and index 0
join(): to match each string separated by aspace


```javascript Exercise No. 3
function order(words) {
  return console.log(words.split(' ').sort( (firstEl,secondEl) => {
    return firstEl.match(/\d/)[0]-secondEl.match(/\d/)[0]
   }).join(" "));
}

```

## Tuesday

Exercise Name: Simple Pig Latin

- how i fixed:
- method used:
1. regx (regular expressions)
2. test() is executed on the regular expression and returns true or false
3. for()  iterate the array
4. if()  do validations
5. slice() remove any character from a given position
6. trim() removes spaces at the ends of the string

```javascript Exercise No. 1
  function pigIt(str) {
   str = str.split(" ")
    let strChange = []
    let regx = (/([a-zA-Z])/)    
    
    for (let i = 0; i < str.length; i++) {
        if (regx.test(str[i])) {
            strChange += str[i].slice(1).concat(str[i].slice(0, 1)).concat("ay ")
        } else {
            strChange += str[i]
        }
        //      console.log(str1);

    }
    
    return strChange.trim()

  } 
```

Excrcise Name: Counting Duplicates

- how i fixed:

```javascript Exercise No. 2
/*put the code insede the backstic */

## we are working on it

```

Excrcise Name: Decode The Morse Code

- how i fixed:

```javascript Exercise No. 3

decodeMorse = function(morseCode){
   var decodeString = '';
  var morseCodeWords = morseCode.split('   ');
  //console.log(morseCodeWords);
  for (var i in morseCodeWords) {
    //console.log(i);
    //console.log(morseCodeWords);
    var morseCodeArray = morseCodeWords[i].split(' ');
    //console.log(morseCodeArray);
    for (var j in morseCodeArray) {
      if (MORSE_CODE[morseCodeArray[j]] !== undefined) {
        decodeString += MORSE_CODE[morseCodeArray[j]];
      }
    }
    decodeString += ' ';
  }
  decodeString = decodeString.trim();  
  return decodeString;
}

```

## Wednesday

Excrcise Name: Valid Parentheses
- how i fixed:
- Do the following exercise but it had some inconveniences when validations en in katas pass the test but not the attempt

```javascript Exercise No. 1
  function validParentheses(parens) {
   let size = parens.length;
  //console.log(size);
  if (size == 1 && parens == ")") {
    return false;
  }
  if (size == 1 && parens == "(") {
    return false;
  }
  if (size == 0) {
    return true;
  }

  let left = [];
  console.log(typeof left);
  let right = [];

  for (let i = 0; i < size; i++) {
    if (parens[i] === "(") {
      left.push(left[i]);
    }
    if (parens[i] === ")") {
      right.push(right[i]);
    }
  }

  if (left.length == right.length) {
    return true;
  }

  return false;
}

```

Excrcise Name: Convert String To Camel Case

- how i fixed:
- i studied code line by line sice the solutions i had were not congruent.

```javascript Exercise No. 2
function toCamelCase(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (i != 0 && (str[i - 1] === "_" || str[i - 1] === "-")) {
      result += str[i].toUpperCase();
    } else if (str[i] != "-" && str[i] != "_") {
      result += str[i];
    }
  }
  return result;
}
```

Excrcise Name: Unique In Order

- how i fixed: The output of the array is parsed and the first element is compared to the second, if the first element is different from the second it is added to the new array; otherwise, nothing is done. and the new array is returned
- methods used: for, if, push and array overload 

```javascript Exercise No. 3
var uniqueInOrder=function(iterable){
  let newOrder= [];
  
  for(let i=0; i<iterable.length; i++){
    
    if(iterable[i] != iterable[i+1] ){
      newOrder.push(iterable[i])
    }
  }
  
  return newOrder;
  //your code here - remember iterable can be a string or an array
}

```

## Thursday

Excrcise Name: Fold An Array

- how i fixed:

```javascript Exercise No. 1
/*put the code insede the backstic */

## we are working on it

```

Excrcise Name: Encrypt This!

- how i fixed:

```javascript Exercise No. 2
/*put the code insede the backstic */

## we are working on it

```

Excrcise Name: Unique In Order

- how i fixed:
