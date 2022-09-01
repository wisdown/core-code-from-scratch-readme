<h1 align="center">Week No.6 challenges</h1>

<h2>Week Goals</h2>

## Monday

2. [Guided exercise, using Typescript](https://github.com/wisdown/core-code-from-scratch-readme/blob/main/Challeng-weeks/week-6.1.md) 

2. TypeScript Object Type exercise

```typescript
Exercise: Solution

 //   Given the data, define the interface "User" and use it accordingly.

*/

export interface User{
    name:string,
    age: number,
    occupation: string

}

export type user = User;

export const users: user[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    }
];

export function logPerson(user:User) {
    console.log(` - ${user.name}, ${user.age}`);
}

console.log('Users: ');
users.forEach(logPerson);

```

3. TypeScript Unions exercise

```typescript
/* Exercise:

    Type "Person" is missing, please define it and use
    it in persons array and logPerson function in order to fix
    all the TS errors.

*/

interface User {
  name: string;
  age: number;
  occupation: string;
}

interface Admin {
  name: string;
  age: number;
  role: string;
}

export type Person = User | Admin;

export const persons: Person[] = [
  {
    name: "Max Mustermann",
    age: 25,
    occupation: "Chimney sweep",
  },
  {
    name: "Jane Doe",
    age: 32,
    role: "Administrator",
  },
  {
    name: "Kate Müller",
    age: 23,
    occupation: "Astronaut",
  },
  {
    name: "Bruce Willis",
    age: 64,
    role: "World saver",
  },
];

export function logPerson(user: Person) {
  console.log(` - ${user.name}, ${user.age}`);
}

persons.forEach(logPerson);
```

## Tuesday

1. Square(n) Sum exercise, using Typescript

- how i fixed:
- method used: reduce(), Math.pow()
- The reduce method allows me to obtain the shortest and most direct solution without the need to use a for() loop, as well as being more efficient.

```typescript
export function squareSum(numbers: number[]): number {
  return numbers.reduce(
    (prev: number, cur: number) => prev + Math.pow(cur, 2),
    0
  );
}
```

2. A Wolf In Sheep's Clothing exercise, using Typescript

- Note. The explanations are not clear and make it difficult to solve. and sometimes it's easier than it seems

```typescript
export function warnTheSheep(queue: string[]): string {
  if (queue[queue.length - 1] === "wolf") {
    return "Pls go away and stop eating my sheep";
  } else {
    let index = queue.findIndex((x) => x == "wolf");
    return `Oi! Sheep number ${
      queue.length - index - 1
    }! You are about to be eaten by a wolf!`;
  }
}
```

## Wednesday

## Thursday
