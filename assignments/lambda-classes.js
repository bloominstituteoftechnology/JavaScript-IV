class Person {
    constructor (att) {
        this.name = att.name;
        this.age = att.age;
        this.location = att.location;
        this.gender = att.gender;
    }
    speak() {
    return `Hello, my name is ${this.name}, and I am from ${this.location}`;
    }
};

class Instructor extends Person {
    constructor (insAtt) {
        super (insAtt);
        this.specialty = insAtt.specialty;
        this.favLanguage = insAtt.favLanguage;
        this.catchPhrase = insAtt.catchPhrase;
    }
    demo (subject) {
        return `Today we are learning about ${subject}!`;
    }
    grade (student, subject) {
        return `${student.name} receives a perfect score on ${subject}.`
    }
};



const michaela = new Instructor ({
    name: 'Michaela',
    age: 35,
    location: 'Kansas City',
    gender: 'female',
    favLanguage: 'Java',
    specialty: 'back-end',
    catchPhrase: `Can't catch me, I'm the gingerbread man.`
});



console.log(michaela.catchPhrase);
console.log(michaela.demo('Javascript'));