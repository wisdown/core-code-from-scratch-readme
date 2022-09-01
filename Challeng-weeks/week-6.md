<h1 align="center">Week No.6 challenges</h1>

<h2>Week Goals</h2>

## Monday

Declare variable types in TypeScript guided exercise, using Typescript
[Guided exercise, using Typescript](https://github.com/wisdown/core-code-from-scratch-readme/blob/main/Challeng-weeks/week-6.1.md)

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
