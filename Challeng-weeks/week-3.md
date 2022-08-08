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

```javascript Exercise No. 3
/*put the code insede the backstic */

## we are working on it
```

## Tuesday

Excrcise Name: Simple Pig Latin

- how i fixed:

```javascript Exercise No. 1
/*put the code insede the backstic */

## we are working on it

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
/*put the code insede the backstic */

## we are working on it

```

## Wednesday

Excrcise Name: Valid Parentheses

- how i fixed:

```javascript Exercise No. 1
   we are working on it

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

- how i fixed:

```javascript Exercise No. 3
/*put the code insede the backstic */

## we are working on it

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
