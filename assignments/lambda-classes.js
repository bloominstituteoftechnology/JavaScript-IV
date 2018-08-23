class Person {
    constructor (personProperties) {
        this.name = personProperties.name;
        this.age = personProperties.age;
        this.location = personProperties.location;
        this.gender = personProperties.gender;
    }

    speak () {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`)
    }
}

class Instructor extends Person {
    constructor (professorProperties) {
        super(professorProperties);
        this.specialty = professorProperties.specialty;
        this.favLanguage = professorProperties.favLanguage;
        this.catchPhrase = professorProperties.catchPhrase;
    }

    demo(subject) {
        console.log(`Today we are learning about ${subject}`)
    }

    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`)
    }
}

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  })

const bruce = new Person({
    name: 'Bruce',
    location: 'Arizona',
    age: 28,
    gender: 'genderqueer',
    favLanguage: 'HTML',
    specialty: 'back-end',
    catchPhrase: `Don't forget the bromies`
})

  fred.grade(bruce, 'English');

