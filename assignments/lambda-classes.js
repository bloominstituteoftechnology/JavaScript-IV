// CODE here for your Lambda Classes
class Person {
    constructor(personAttributes) {
        this.name = personAttributes.name;
        this.age = personAttributes.age;
        this.location = personAttributes.location;
        this.gender = personAttributes.gender;
    }


    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}

class Instructor extends Person {
    constructor(instructorAtt) {
        super(instructorAtt);
        this.specialty = instructorAtt.specialty;
        this.favLanguage = instructorAtt.favLanguage;
        this.catchPhrase = instructorAtt.catchPhrase;
    }


    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }

    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`)
    }

    changeGrade(student) {
        do {
            console.log(`${this.name} will now grade ${student.name}!`);
            console.log(`....`);
            const randomNum = Math.random();
            // console.log('randomNum: ' + randomNum);

            if (randomNum => 0.5) {
                student.grade += Math.round(Math.random() * 100);

                if (student.grade > 100) {
                    student.grade = 100;
                }
            } else {
                student.grade -= Math.round(Math.random() * 100);

                if (student.grade < 0) {
                    student.grade = 0;
                }
            }

        console.log(`${student.name} has been graded! ${student.name}'s new grade: ${student.grade}`);
        }

        while (student.grade < 70);

        student.graduate();
    }
}

class Student extends Person {
    constructor(studentAtt) {
        super(studentAtt);
        this.previousBackground = studentAtt.previousBackground;
        this.className = studentAtt.className;
        this.favSubjects = studentAtt.favSubjects; //array
        this.grade = Math.round(Math.random() * 100);
    }

    listsSubjects() {
        this.favSubjects.forEach(subject => {
            console.log(subject); 
        });
    }

    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }

    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }

    graduate() {
            console.log(`${this.name} has graduated!`);
        }
    }


class ProjectManager extends Instructor {
    constructor(pmAttributes) {
        super(pmAttributes);
        this.gradClassName = pmAttributes.gradClassName;
        this.favInstructor = pmAttributes.favInstructor;
    }


    standUp(slackChannel) {
        console.log(`${this.name} announces to ${slackChannel}, @channel standy times!`);
    }

    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}

// Test Objects


const kendra = new Person({
    name: 'Kendra',
    age: 21,
    location: 'here',
    gender: 'female'
});

const rob = new Person({
    name: 'Rob',
    age: 23,
    location: 'there',
    gender: 'male'
});

const  hayley = new Instructor({
    name: 'Hayley',
    age: 41,
    location: 'Kansas',
    gender: 'female',
    specialty: 'cooking',
    favLanguage: 'French',
    catchPhrase: 'What could happen?'
});

const  dom = new Instructor({
    name: 'Dom',
    age: 65,
    location: 'Not Kansas',
    gender: 'male',
    specialty: 'something',
    favLanguage: 'some language',
    catchPhrase: 'some phrase'
});


const diana = new Student ({
    name: 'Diana',
    age: 20,
    location: 'London',
    gender: 'female',
    previousBackground: 'magic',
    className: 'CS44',
    favSubjects: ['HTML', 'CSS', 'JavaScript'],
});

const andrew = new Student ({
    name: 'Andrew',
    age: 21,
    location: 'London',
    gender: 'male',
    previousBackground: 'banking',
    className: 'CS45',
    favSubjects: ['math', 'english', 'science'],
});

const morgan = new ProjectManager ({
    name: 'Morgan',
    age: 31,
    location: 'New York',
    gender: 'female',
    specialty: 'JavaScript',
    favLanguage: 'Java',
    gradClassName: 'CS32',
    favInstructor: 'Jess'
});

const christian = new ProjectManager({
    name: 'Christian',
    age: 31,
    location: 'Oregon',
    gender: 'male',
    specialty: 'CSS',
    favLanguage: 'Python',
    gradClassName: 'CS37',
    favInstructor: 'Timothy'
});

// Person tests

kendra.speak(); //Hello my name is Kendra, I am from here
rob.speak(); //Hello my name is Rob, I am from there


// Instructor tests

hayley.speak(); //Hello my name is Hayley, I am from Kansas
hayley.demo('baking'); //Today we are learning about baking
hayley.grade(andrew, 'subject1'); //Andrew receives a perfect score on subject1

dom.speak(); //Hello my name is Dom, I am from Not Kansas
dom.demo('some cool stuff'); //Today we are learning about some cool stuff
dom.grade(diana, 'CSS'); //Diana receives a perfect score on CSS

// // Student tests

diana.speak(); //Hello my name is Diana, I am from London
diana.listsSubjects(); // HTML, CSS, JavaScript (but separate)
diana.PRAssignment('HMTL'); //Diana has submitted a PR for HMTL
diana.sprintChallenge('JavaScript'); //Diana has begun sprint challenge on JavaScript

andrew.speak(); //Hello my name is Andrew, I am from London
andrew.listsSubjects(); //math, english, science (but separate)
andrew.PRAssignment('CSS'); //Andrew has submitted a PR for CSS
andrew.sprintChallenge('CSS'); //Andrew has begun sprint challenge on CSS

// // PM tests

morgan.speak();//Hello my name is Morgan, I am from New York
morgan.demo('Ruby'); //Today we are learning about Ruby
morgan.grade(diana, 'C'); //Diana receives a perfect score on C
morgan.standUp('#fsw44_morgan'); //Morgan announces to $fsw44_morgan, @channel standy times!​​​​​
morgan.debugsCode(andrew, 'CSS');//Morgan debugs Andrew's code on CSS

christian.speak();//Hello my name is Christian, I am from Oregon
christian.demo('Python'); //Today we are learning about Python
christian.grade(andrew, 'C#'); //Andrew receives a perfect score on C#
christian.standUp('#fsw45');//Christian announces to $fsw45, @channel standy times!​​​​​
christian.debugsCode(diana, 'Java');//{Christian debugs Diana's code on Java
console.log(diana);
hayley.changeGrade(diana);

console.log(andrew);
hayley.changeGrade(andrew);