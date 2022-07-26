- 🧠 Hallo again new small trying to learn new things in : HTML / CSS / JAVA-Script / BOOTSTARP / SASS / EXPRESS / REACT 👨🏼‍🎓

# Let us start to speake about something new today !

> The topic here is about (this) keyword inside arrow function and standards one when they are inside objects

#### Here is small explanation, as I have tried some code  to understand the behalf of arrow function inside a class....it is clear that the object which built using class is different somehow from standard object ...look to this example below ..I create two objects one in standard way, the other by using class..both of them have the same properties , they have standard function and arrow function and do the same thing...if you console.log the standard object you will see that will give you the object with all its properties ......BUT if you console log the object which built by class you will see that we will get the original class template as a object but without the standard functions ..it will give to you object includes only the properties which passed to it inside the constructor.........please read the example and I will explain after that what is going on:

---


``` javascript
let obj = {
  Myname: 'love',
  sayMyname: function () {
    console.log(this.Myname);
  },
  sayMynameAgain: () => console.log(this.Myname),
};
console.log(obj);
obj.sayMyname();
obj.sayMynameAgain();
```

``` javascript
class Objcl {
  constructor() {
    this.Myname = 'love';
  }
  sayMyname() {
    console.log(this.Myname);
  }
  sayMynameAgain = () => console.log(this.Myname);
}
let obj1 = new Objcl();
console.log(obj1);
obj1.sayMyname();
obj1.sayMynameAgain();
```
#### Now please note that issue ...first you have to know that object is not having a ```{this}``` of its own......secondly standard function have their own ```{this}``` which is bend to the object which they created inside it automatically.......BUT arrow functions DOES NOT have their own ```{this}```..when you use ```{this}``` with arrow function ..it will start look up to the first ```{this}``` which they can catch it...so they will go up to the object as first step...as we said the obj has no ```{this}``` so the arrow function will look up again and will find the global ```{this}```....for that in our last example ```this.Myname``` will print undefined in our standard object because global object has no ```Myname``` value......

#### Let us move on to the objected which built by using Class....JS deal with arrow function inside a class like you create it inside the constructor ...... for that reason ```{ console.log(obj1) }``` will give me object includes two properties {Myname} and {the arrow function}.....that means JS will translate my last code like this exactly :
```javascript
class Objcl {
  constructor() {
    this.Myname = 'love';
    this.sayMynameAgain = () => console.log(this.Myname);
  }
  sayMyname() {
    console.log(this.Myname);
  }
 
}
let obj1 = new Objcl();
```
> as you see that my arrow function is transferred to property inside my object ...and this arrow function here was **bind automatically** to {this} Objcl.....

> (c) 2021 [Mohamed Salim Barry] barry786-dev@github.com