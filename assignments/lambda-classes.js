// CODE here for your Lambda Classes

//Class Person - Base Class
class Person{
    //constructor
    constructor(personAttributes){
        this.name = personAttributes.name;
        this.age = personAttributes.age;
        this.gender = personAttributes.gender;
        this.location = personAttributes.location;
    }
    //method
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
}

const testPerson = new Person({
    "name":"Corey",
    "age": 41,
    "gender": 'M',
    "location" : "New York City"
})

console.log(testPerson.name);
console.log(testPerson.age);
console.log(testPerson.location);
console.log(testPerson.gender);
console.log(testPerson.speak());