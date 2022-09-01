<h1 align="center">Week No.6 challenges</h1>

<h2>Week Goals</h2>

## Monday

Declare variable types in TypeScript guided exercise, using Typescript
[Guided exercise, using Typescript]()


2. TypeScript Object Type exercise

``` typescript
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




3. TypeScript Unions exercise

```