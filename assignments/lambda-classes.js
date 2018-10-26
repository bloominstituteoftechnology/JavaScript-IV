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



const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

// const jane = new Humanoid({
    
// });

// const jimmy = new Humanoid({

// });

// const liz = new Humanoid({

// });

// const steph = new Humanoid({

// });

console.log(fred.name);