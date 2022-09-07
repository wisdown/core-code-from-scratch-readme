# object-oriented programming



## 1. Abstraction
   - Abstraction consists of capturing the characteristics and functionalities that an object performs and these are represented in classes by means of attributes and methods of said class.
``` typescript
class Person {

    // features 
    name: string;
    last_name: string;
    address: string;
    age: number

    //functionality
    public walk(): void {

    }
    public talk(): string {
        return "Hello World"
    }

}
```

## 2.  Inheritance
- Inheritance is an important building block of object-oriented programming languages and inheritance is used to create a new class from the existing one. The newly created class is known as the derived class, and the class that the derived class inherited from is known as the base class. An inherited derived class takes on the properties and behaviors of the base class.

- Importantnate: TypeScript supports single inheritance and multilevel inheritance.

- Limitations: We cannot implement hybrid and multiple inheritance using TypeScript.

- Inheritance uses class-based inheritance and can be implemented using extended keywords.

```typescript
//single inheritance example
// Base class
class Person {
  Name: string;
  constructor(name: string) {
    this.Name = name;
  }
}
// Deriving Teacher class
class Teacher extends Person {
  Payment: number;
  constructor(name: string, payment: number) {
    super(name);
    this.Payment = payment;
  }
  display(): void {
    console.log("Teacher's Name: " + this.Name);
    console.log("Teacher's Payment " + this.Payment);
  }
}
// Create Object
let obj = new Teacher("GeeksforGeeks", 8500000);
obj.display();
```

``` typescript
//multilevel inheritance
// Base class
class Vehicle {
  Type(): void {
    console.log("Car");
  }
}
  
// Inherites from Vehicle
class Car extends Vehicle {
  Brand(): void {
    console.log("ABC");
  }
}
  
// Inherites all properties of 
// Vehicle and Car class
class carModel extends Car {
  Model(): void {
    console.log("ABC2021");
  }
}

// Object creation
let obj = new carModel();
obj.Type();
obj.Brand();
obj.Model();

```

1. Polymorphism
   - In object-oriented programming, Polymorphism allows a particular object referring to a particular class to be used in a similar fashion as if it was a different object referring to altogether a different class.


<!--- ![Descripción de la imagen](./images/polimorphismo.png)-->


 <!--- <img src="./images/polimorphismo.png" width="80%" height="80%" /> -->
<a href="https://ibb.co/VQSzc4D"><img src="https://i.ibb.co/Jy7GwJ2/Polymorphism.png" alt="Polymorphism" border="0" /></a>


1. Encapsulation
- What does encapsulation mean: In object-oriented computer programming (OOP) languages, the notion of encapsulation (or OOP Encapsulation) refers to the bundling of data, along with the methods that operate on that data, into a single unit. Many programming languages use encapsulation frequently in the form of classes. A class is a program-code-template that allows developers to create an object that has both variables (data) and behaviors (functions or methods). A class is an example of encapsulation in computer science in that it consists of data and methods that have been bundled into a single unit.

Encapsulation may also refer to a mechanism of restricting the direct access to some components of an object, such that users cannot access state values for all of the variables of a particular object. Encapsulation can be used to hide both data members and data functions or methods associated with an instantiated class or object.

* ### Benefits of Encapsulation Programming 
*  Encapsulation in programming has a few key benefits. These include: 
*  Hiding Data: Users will have no idea how classes are being implemented or stored. All that users will know is that values are being passed and initialized.
*  More Flexibility: Enables you to set variables as red or write-only. Examples include: setName(), setAge() or to set variables as write-only then you only need to omit the get methods like getName(), getAge() etc. 
* Easy to Reuse: With encapsulation it's easy to change and adapt to new requirements. 

2. Class
3. Object
4. Instance
5. Interface
6.  Access Modifiers
7.  Constructors
