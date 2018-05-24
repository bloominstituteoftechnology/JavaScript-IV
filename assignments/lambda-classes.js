// CODE here for your Lambda Classes


// #### Person

// * First we need a Person class. This will be our `base-class`
// * Person receives `name` `age` `location` `gender` all as props
// * Person receives `speak` as a method.
// * This method logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` and `location` are the object's own props

class Person {
    constructor(props) {
        this.name = props.name;
        this.age = props.age;
        this.location = props.location;
        this.gender = props.gender;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}` //?

    }
}

console.log(Person.prototype.speak()); 

// ####
// Instructor

//     *
//     Now that we have a Person as our base class, we 'll build our Instructor class. *
//     Instructor uses the same attributes that have been set up by Person *
//     Instructor has the following unique props:
//     *
//     `specialty`
// what the Instructor is good at i.e.
// 'redux' *
// `favLanguage`
// i.e.
// 'JavaScript, Python, Elm etc.' *
// `catchPhrase`
// i.e.
// `Don't forget the homies` *
// Instructor has the following methods:
//     *
//     `demo`
// receives a `subject`
// string as an argument and logs out the phrase 'Today we are learning about {subject}'
// where subject is the param passed in .*`grade`
// receives a `student`
// object and a `subject`
// string as arguments and logs out '{student.name} receives a perfect score on {subject}'

class Instructor extends Person {
    constructor(props) {
        super(props);
        this.specialty = props.specialty;
        this.favLanguage = props.favLanguage;
        this.catchPhrase = props.catchPhrase;
    }
    demo(subject) {
      return `Today we are learning about ${subject}`;
    }
    grade(student, subject) {
       return `${student.name} receives a perfect score on ${subject}`;
    }
}
console.log(Instructor.prototype.demo('javascript'));
console.log(Instructor.prototype.grade({name:'Josh'}, 'javascript'));

####
Student

    *
    Now we need some students!
    *
    Student uses the same attributes that have been set up by Person *
    Student has the following unique props:
    *
    `previousBackground`
i.e.what the Student used to do before Lambda School *
        `className`
    i.
    e.CS132 *
    `favSubjects`.i.e.an array of the student 's favorite subjects ['
Html ', '
CSS ', '
JavaScript '] *
    Student has the following methods:
    *
    `listsSubjects`
a method that logs out all of the student 's favoriteSubjects one by one. *
    `PRAssignment`
a method that receives a subject as an argument and logs out that the `student.name has submitted a PR for {subject}` *
    `sprintChallenge`
similar to PRAssignment but logs out `student.name has begun spring challenge on {subject}`