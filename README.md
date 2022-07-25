# core-code-from-scratch-readme

## Week challenges (Tuesday) Solution
Interpreter and compiler
*Both the Interpreter and the compiler are used to convert the syntax of programming languages to language that the machine or binary although they have clear differences as.*
  - An interpreter is a program that directly executes instructions written in a given programming language.
  - A compiler is a program that converts the source code of a program to its equivalent in another lower-level programming language.

## _Is Java compiled or interpreted, or both?_
*Yes, a java program is first compiled into bytecode which JRE can understand.
ByteCode is then interpreted by the JVM making it as interpreted language.*

# Pseudocode Currency Converter Sulution

- USD: is a variable that reviews the amount
- BTC: is a constant of the current value of bitcoin
- CONVERT: is the variable that performs the operation

```
  1. START
  2. USD <-- GET
  3. BTC <-- 22674.6
  4. CONVERT <-- USD * BIT
  5. PRINT CONVERT
  6. END
``` 

## Week challenges (Wednesday) Solution

My Date of birth is 1980
see table for result 

```
| **Decimal**    	| 10   	| 9   	| 8   	| 7   	| 6  	| 5  	| 4  	| 3 	| 2 	| 1 	| 0 	|
|----------------	|------	|-----	|-----	|-----	|----	|----	|----	|---	|---	|---	|---	|
| **Binary**     	| 2    	| 2   	| 2   	| 2   	| 2  	| 2  	| 2  	| 2 	| 2 	| 2 	| 2 	|
| **Operation**  	| 1024 	| 512 	| 256 	| 128 	| 64 	| 32 	| 16 	| 8 	| 4 	| 2 	| 1 	|
| **Calculator** 	| 1    	| 1   	| 1   	| 1   	| 0  	| 1  	| 1  	| 1 	| 1 	| 0 	| 0 	|
```


## MIPS SOLUTIONS
Sum of two values Solution

```
.data
	      maessage: .asciiz  "\nTanks for use this program "
	      number1: .asciiz "\nIngrese el primer numero: "
	      number2: .asciiz "\nIngrese el segundo numero: "
	      result_message: .asciiz "\nEl resultado es: "
  .text
	      main:
	      # li Load inmediate 
	      # $v0 print a string, with code 4
              li $v0, 4
              # la: load address, read the memory direction
	      # $a0 is the path where is stored
              la $a0, number1
              syscall             
              
              # li Load inmediate 
	      # $v0 code 5 ask a number on screen from keyborad
              li $v0, 5
              syscall              
              
              # move, it is necessary to move the value $t0, towards $v0 to avoid it change the value 
              move $t0, $v0

	      # li: Load inmediate 
	      # $v0: print a string, with code 4
              li $v0, 4
              # la: load address, read the memory direction
	      # $a0 is the path where is stored
              la $a0, number2
              syscall
	      # $v0 code 5 ask a number on screen from keyborad
              li $v0, 5
              syscall
 	      
 	      # move, it is necessary to move the value $t1, towards $v0 to avoid it change the value 
              move $t1, $v0
              
              # revisar esta parte
              li $v0, 1
              move $a0, $t0
              syscall
              
              # $t2: is the place wheres is stored the values from   $t0, and $t1 
              add $t2, $t0, $t1

              li $v0, 4
              la $a0 result_message
              syscall

              li $v0, 1
              move $a0, $t2
              syscall
              
              li $v0, 4
              # la: load address, read the memory direction
	      # $a0 is the path where is stored
              la $a0, maessage
              syscall                
```
program that displays My name Solution
```
.data
       name: .asciiz "Elí Modesto Gómes Hernández" 

	.text 
	 	li $v0, 4
	 	la $a0, name
	 	syscall 
```

## Week challenges (Thursday) Solution
Print even numbers from 0 to 100

``` Javascript
let str = '';

for (let i = 0; i <= 100; i++) {  
  //% residual modulus
 // if compares if the operation is equal to 0, if it is not, it does nothing
  if(i%2==0){
    str =  str +"\n" + i;
    
  }
  
  
}

console.log(str);
```

Bad Code N.1 

- changed operator = to ==
- the = operator is an assignment operator.
- the == is comparison

``` Javascript
var cond = false;

  if ((cond == true)) {
  console.log('The cond variable is true');
  } else {
   console.log('The cond variable is false');
  }
```