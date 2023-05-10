function Person(name, age) {
    this.name = name
    this.age = age
    return 10
}


// p = Person('Meenal Singh', 22)
// console.log(p)                  10
// console.log(name)               Meenal Singh
// console.log(age)                22


// this new keyword create a new object which have its own scope and the this keyword will refer to that object scope only not to window scope
p = new Person('Meenal Singh', 22)  

// console.log(p)                 Person { name: 'Meenal Singh', age: 22 }
// console.log(name)              
// console.log(age)