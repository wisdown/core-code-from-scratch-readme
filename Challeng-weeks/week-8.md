<h1 align="center">Week No.8 challenges</h1>

<h2>Week Goals</h2>

## Monday
1. Watch Object-Oriented Programming

## Tuesday

1. [Develop typed functions by using TypeScript guided exercise ](https://github.com/wisdown/core-code-from-scratch-readme/blob/main/Challeng-weeks/week-8.1.md)
2. Read Abstract Classes
3. Watch Abstract Classes vs Interfaces video

## Wednesday
1. Make the Deadfish Swim exercise 
- how i fixed:


```Typescript
export function parse(data: string): number[] {
  
  var arr: number[] = [];
  var num: number = 0;

  for (let i = 0; i < data.length; i++) {
    if (data.charAt(i) == "d") {
      num--;
      console.log(num)
    }
    else if (data.charAt(i) == "i") {
      num++;
      console.log(num)
    } else if (data.charAt(i) == "s") {
      num = num * num;
      console.log(num)
    } else if (data.charAt(i) =="o") {
      arr.push(num);
      console.log(arr)
    }
  }

  return arr; 
}
```

2. Duplicate Encoder exercise 
- how i fixed:

```Typescript
    export function duplicateEncode(word: string){
 return word
    .toLowerCase()
    .split('')
    .map((a, i, w) => {
      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
    })
    .join('')
  
}
``` 

3. Find The Odd Int exercise 
- how i fixed:

```Typescript
export const findOdd = (xs: number[]): number => {
  
return xs.reduce( (a,b)=> a^b);
  
};
```

## Thursday
1. Define generics in TypeScript guided exercise, 
   - we are working on it
