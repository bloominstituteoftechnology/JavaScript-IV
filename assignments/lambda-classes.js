// CODE here for your Lambda Classes
class Person {
    constructor(attributes){
        this.name = attributes.name;
        this.age=attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    greet () {
        return 'Hello my name is Fred, I am from Bedrock'
    }
} // parent

class Instructor extends Person {
    construcor(instructorAttributes){
        super(instructorAttributes);
        this.specialty = instructorAttributes.specialty;
        this.favLangauge = instructorAttributes.favLangauge;
        this.catchPhrase = instructorAttributes.catchPhrase;
    }
    demo () {
        return `Today we are learning about ${this.subject}`;
    }
    grade () {
       return  `${student.name} receives a perfect score on {subject}`
    }
}

