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
//end Class Person

//Class Instructor
class Instructor extends Person{
    //constructor
    constructor(instructorAttributes){
        super(instructorAttributes);
        this.specialty =  instructorAttributes.specialty;
        this.favLanguage = instructorAttributes.favLanguage;
        this.catchPhrase = instructorAttributes.catchPhrase;
    }

    demo(subject){
        console.log(`Today we are learning about ${subject}.`);
    }

    grade(student, subject){
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
}

const testPerson = new Instructor({
    "name":"Corey",
    "age": 41,
    "gender": 'M',
    "location" : "New York City",
    "specialty" : "Django",
    "favLanguage": "Python",
    "catchPhrase": "Chile Please!"
})

console.log(testPerson.name);
console.log(testPerson.age);
console.log(testPerson.location);
console.log(testPerson.gender);
console.log(testPerson.speak());
console.log(testPerson.specialty);
console.log(testPerson.favLanguage);
console.log(testPerson.catchPhrase);
//console.log(testPerson.demo("classes"));
//console.log(testPerson.grade('Corey', 'classes'));