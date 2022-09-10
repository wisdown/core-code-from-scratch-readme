# Lab - Use types in TypeScript
# Guided exercises

### Exercise 1 - Declare the interfaces

``` typescript

/* Module 3: Implement interfaces in TypeScript
   Lab Start  */

/*  EXERCISE 1
    TODO: Declare the Loan interface. */

 interface Loan{

    principal: number,    // principal
    interestRate: number  //tasa de interés Interest rate percentage (eg. 14 is 14%)

 }


/*  TODO: Declare the ConventionalLoan interface. */
/*
la interface ConventionalLoan extends hereda de Loan
lo que hace que se peudan utilizar los atributos de esa inteface 
*/
interface ConventionalLoan extends Loan {
    months: number      //* Total number of months
}


/*  TODO: Update the calculateInterestOnlyLoanPayment function. */

function calculateInterestOnlyLoanPayment (loanTerms: Loan) : string  {
    // Calculates the monthly payment of an interest only loan
    let interest = loanTerms.interestRate / 1200; // Calculates the Monthly Interest Rate of the loan
    let payment;
    payment = loanTerms.principal * interest;
    return 'The interest only loan payment is ' + payment.toFixed(2);
}

/*  TODO: Update the calculateConventionalLoanPayment function. */

function calculateConventionalLoanPayment(c:ConventionalLoan) {
    // Calculates the monthly payment of a conventional loan
    let interest = c.interestRate / 1200; // Calculates the Monthly Interest Rate of the loan
    let payment;
    payment = c.principal * interest / (1 - (Math.pow(1 / (1 + interest), c.months)));
    return 'The conventional loan payment is ' + payment.toFixed(2);
}

let interestOnlyPayment = calculateInterestOnlyLoanPayment({principal: 30000, interestRate: 5});
let conventionalPayment = calculateConventionalLoanPayment({principal:30000, interestRate:5, months:180});

console.log(interestOnlyPayment);     //* Returns "The interest only loan payment is 125.00" 
console.log(conventionalPayment);     //* Returns "The conventional loan payment is 237.24" 


```