// CODE here for your Lambda Classes
class Person {
    constructor(attributes){
        this.newAge = attributes.age;
        this.newName = attributes.name;
        this.newLocation = attributes.location;
        this.newGender = attributes.gender;
    }
    speak() {
        return `Hello, this is ${this.newName} and I am from ${this.newLocation}.`
    }
}
class Instructor extends Person {
    constructor(instructorAttr) {
        super(instructorAttr);
        this.newSpecialty = instructorAttr.specialty;
    }
}


const god = new Person({
    age: 'Old',
    name: 'God',
    location: 'Heaven',
    gender: 'divine'
});
const josh = new Instructor({
    age: 30,
    name: 'Josh',
    location: 'Utah',
    gender: 'Male',
    specialty: 'playing the banjo',
    favLanguage: 'Hmong',
    catchPhrase: 'I promise you yesterday was worse'
});
const josh = new Instructor({
    age: 30,
    name: 'Josh',
    location: 'Utah',
    gender: 'Male',
    specialty: 'playing the banjo',
    favLanguage: 'Hmong',
    catchPhrase: 'I promise you yesterday was worse'
});