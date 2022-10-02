// importamos la operaciones mediante un objeto

//const { sum, subs } = require("./operations");
const operaciones = require("./operations").default;

let a = 0.5;
let b = 0.5;

const SumResult = operaciones.sum(a, b);

//print result
console.log(SumResult);// rertun  1
//SumResult vale 1

const substration = operaciones.subs(SumResult, a);

//print result
console.log(substration);

const substration1 = operaciones.subs(SumResult, b);
//print result
console.log(substration1);