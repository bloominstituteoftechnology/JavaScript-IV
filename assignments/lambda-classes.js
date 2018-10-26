// CODE here for your Lambda Classes



/*
    #### Person

    * First we need a Person class. This will be our `base-class`
    * Person receives `name` `age` `location` `gender` all as props
    * Person receives `speak` as a method.
    * This method logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` and `location` are the object's own props   
*/

/* Person Class */
class Person {

    // Person Constructor
    constructor(person) {
        this.name = person.name;
        this.age = person.age;
        this.location = person.location;
        this.gender = person.gender;
    }
    // Person speak function
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`
    }
}

/*

#### Instructor

* Now that we have a Person as our base class, we'll build our Instructor class.
* Instructor uses the same attributes that have been set up by Person
* Instructor has the following unique props:
  * `specialty` what the Instructor is good at i.e. 'redux'
  * `favLanguage` i.e. 'JavaScript, Python, Elm etc.'
  * `catchPhrase` i.e. `Don't forget the homies`
* Instructor has the following methods:
  * `demo` receives a `subject` string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
  * `grade` receives a `student` object and a `subject` string as arguments and logs out '{student.name} receives a perfect score on {subject}'
  * 
*/

class Instructor extends Person {
    // Instructor Constructor
    constructor(instructor) {
        super(instructor);
        this.specialty = instructor.specialty;
        this.favLanguage = instructor.favLanguage;
        this.cathPhrase = instructor.cathPhrase;
    }
    // Instructor demo subject function
    demo(subject) {
        return `Today we are learning about ${this.subject}`;
    }
    // Instructor grade student function
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${this.subject}`;
    }
}

/*
#### Student

* Now we need some students!
* Student uses the same attributes that have been set up by Person
* Student has the following unique props:
  * `previousBackground` i.e. what the Student used to do before Lambda School
  * `className` i.e. CS132
  * `favSubjects`. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
* Student has the following methods:
  * `listsSubjects` a method that logs out all of the student's favoriteSubjects one by one.
  * `PRAssignment` a method that receives a subject as an argument and logs out that the `student.name has submitted a PR for {subject}`
  * `sprintChallenge` similar to PRAssignment but logs out `student.name has begun sprint challenge on {subject}`
  * 
*/

class Student extends Person {
    constructor(student) {
        super(student);
        this.previousBackground = student.previousBackground;
        this.className = student.className;
        this.favSubjects = student.favSubjects;
    }
    listSubjects() {
        const favList = this.favSubjects.map(subject => console.log(subject));
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${this.subject}.`
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challange on ${$this.subject}.`
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
  });

const jane = new Student({
    name: 'Jane',
    location: 'Rockville',
    age: 53,
    gender: 'female',
    favLanguage: 'Ruby',
    cathPhrase: 'Catch you laterz'
});

// const jimmy = new Humanoid({

// });

// const liz = new Humanoid({

// });

// const steph = new Humanoid({

// });

console.log(fred.name);