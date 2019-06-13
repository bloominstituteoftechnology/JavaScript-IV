// CODE here for your Lambda Classes
class person {
    constructor(attributes){
        this.name = attributes.name;
        this.age = attributes.age;
        this.gender = attributes.gender;
        this.location = attributes.location;
    }
    speak() {
        return 'Hello my name is ${this.name}, I am from ${this.location}';
    }
}

class instructor extends person {
    constructor(instructorAttributes){
        super(instructorAttributes);
        this.specialty = instructorAttributes.specialty;
        this.favLanguage = instructorAttributes.favLanguage;
        this.catchPhrase = instructorAttributes.catchPhrase;
    }
    demo(subject){
        return 'Today we are learning about ${subject}';
    }
    grade(student, subject){
        return '${student.name} receives a perfect score on ${subject}'
    }
}
const Danny = new instructor ({
    name: "Danny",
    age: 34,
    location: 'Chicago',
    favLanguage: "Python",
    specialty: "Back-end",
    catchPhrase: "Everybody wants to rule the world."
})