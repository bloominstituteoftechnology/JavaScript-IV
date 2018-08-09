// CODE here for your Lambda Classes
class Person {
    constructor(props){
        this.name = props.name;
        this.age = props.age;
        this.location = props.location;
        this.gender = props.gender;
    }
    speak() {
        return `Hello my name is ${name}, I am from ${location}.`
    }
}

class Instructor extends Person {
    constructor(instructorProps){
        this.speciality = instructorProps.speciality;
        this.favLanguage = insctructorProps

    }
}