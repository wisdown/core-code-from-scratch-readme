//funcion Suma
function sum(a,b){
    return a+b;
}

//Funcion restal o sustraccion
function subs(a,b){
    return a-b;
}


// sistema de modulos usando Common js
// exportamos la operaciopnes mediante un objeto
module.exports = { sum, subs };
