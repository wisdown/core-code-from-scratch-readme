# Lab - Use types in TypeScript

Exercise 1: Modify existing JavaScript code to have strongly typed variables

resurces https://docs.microsoft.com/en-us/learn/modules/typescript-declare-variable-types/8-types-lab

### Exercise 1: Modify existing JavaScript code to have strongly typed variables

```JavaScript
/*  EXERCISE 1  Original JavaScript
    TODO: Modify the code to add types to the variable declarations.
    The resulting JavaScript should look the same as the original example when you're done. */

let firstName;
let lastName;
let fullName;
let age;
let ukCitizen;

firstName = 'Rebecca';
lastName = 'Smith';
age = 42;
ukCitizen = false;
fullName = firstName + " " + lastName;

if (ukCitizen) {
    console.log("My name is " + fullName + ", I'm " + age + ", and I'm a citizen of the United Kingdom.");
} else {
    console.log("My name is " + fullName + ", I'm " + age + ", and I'm not a citizen of the United Kingdom.");
}


```

```typeScript
//typeSript solution
let firstName: string;
let lastName: string;
let fullName : string;
let age : number;
let ukCitizen: boolean;

firstName = 'Rebecca';
lastName = 'Smith';
age = 42;
ukCitizen = false;
fullName = firstName + " " + lastName;

if (ukCitizen) {
    console.log("My name is " + fullName + ", I'm " + age + ", and I'm a citizen of the United Kingdom.");
} else {
    console.log("My name is " + fullName + ", I'm " + age + ", and I'm not a citizen of the United Kingdom.");
}


```

### Exercise 2: Modify existing JavaScript code that ensures operational outcomes using strongly typed variables

- EXERCISE 2
  TODO: Run the code as is and then modify it to have strongly typed variables.
  Then, address any errors you find so that the result returned to a is 12. \*/

```JavaScript
//Original JavaScript
let x;
let y;
let a;

x = 'five';
y = 7;
a = x + y;
console.log(a);
```

```typeScript
//typeSript solution
let x:number;
let y: number;
let a:number;

x = 5;
y = 7;
a = x + y;

console.log(a);

```

### Exercise 3: Implement an enum type

```JavaScript
//Original JavaScript
/* EXERCISE 3
   TODO: In the following code, implement an enum type called Season that represents
   the constants "Fall", "Winter", "Spring", and "Summer". Then, update the function so
   you can pass in the season by referencing an item in the enum, for example
   Season.Fall, instead of the literal string "Fall". */

function whichMonths(season) {
    let monthsInSeason: string;
    switch (season) {
        case "Fall":
            monthsInSeason = "September to November";
            break;
        case "Winter":
            monthsInSeason = "December to February";
            break;
        case "Spring":
            monthsInSeason = "March to May";
            break;
        case "Summer":
            monthsInSeason = "June to August";
    }
    return monthsInSeason;
}
console.log(whichMonths("Fall"));

```

```typeScript
//typeSript solution

enum seasons {
     Fall,
     Winter,
     Spring,
     Summer
}

function whichMonths(season: seasons) {
    let monthsInSeason: string;
    switch (season) {
        case seasons.Fall:
            monthsInSeason = "September to November";
            break;
        case seasons.Winter:
            monthsInSeason = "December to February";
            break;
        case seasons.Spring:
            monthsInSeason = "March to May";
            break;
        case seasons.Summer:
            monthsInSeason = "June to August";
    }
    return monthsInSeason;
}

console.log(whichMonths(seasons.Summer));

```
