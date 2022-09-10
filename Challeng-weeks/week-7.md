<h1 align="center">Week No.7 challenges</h1>

<h2>Week Goals</h2>

## Monday

[OOP glossary Object Oriented Programming ](https://github.com/wisdown/core-code-from-scratch-readme/blob/main/Challeng-weeks/OPP.md)

## Wednesday

1. Build Tower exercise 
- how i fixed:

```typescript

export const towerBuilder = (nFloors: number): string[] => {
  let space: string,star:string, tower:string[] = [];
  for(let i = 1; i <= nFloors; i++){
    space = " ".repeat(nFloors - i);
    console.log(space)
    star= "*".repeat(2*i-1)
    console.log(star)
    tower.push(`${space}${star}${space}`)
  }
  console.log(tower)
  return tower;
}
 //out
towerBuilder(10)
```
2. Meeting exercise 
- how i fixed: ver comentarios en el codigo
-  //resources:  https://www.youtube.com/watch?v=blSYEkDmWqs 


```typescript
function meeting(s) {
 return s.toUpperCase()//convertimos el string original en mayusculas
          .split(';')  // convertimos a array cuando este tenga ;
          .map(n => '(' + n.split(':').reverse().join(', ') +')')/*
          1. agregamos parentesis abierto
          2. concatenamos:
          3. volvemos a convertir los elementos internos en otro array 
          simpre que este tenga :
          4.ordenamos de forma innversa
          5. unimos las palabras por una coma
          6. concatenamos con un paretesis cerrado
          */
          .sort() // odenamos
          .join(''); // por ultimo unimos el string
}

```
## Thursday

1. [Interfaces guided exercise, using Typescript](https://github.com/wisdown/core-code-from-scratch-readme/blob/main/Challeng-weeks/week-7.1.md)
