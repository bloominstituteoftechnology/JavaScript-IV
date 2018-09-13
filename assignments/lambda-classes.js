// CODE here for your Lambda Classes
class Person{
    constructor(personInfo){
        this.name = personInfo.name;
        this.age = personInfo.age;
        this.location = personInfo.location;
        this.gender = personInfo.gender;
        this.possesivePronoun = personInfo.possesivePronoun;
        this.pronoun = personInfo.pronoun;
    }
    speak(){
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`)
    }
}

class Instructor extends Person {
    constructor(instructorInfo){
        super(instructorInfo);
        this.favLanguage = instructorInfo.favLanguage;
        this.specialty = instructorInfo.specialty;
        this.catchPhrase = instructorInfo.catchPhrase;
    }
    demo(subject){
        console.log(`Today we are learning about ${subject}.`);
    }
    grade(student, subject){
        console.log(`${student.name} receives a perfect score on ${subject}.`);
    }
    gradeStretch(student, subject){
        let hasFailed = (Math.floor(Math.random() * 3) === 2)
        let points = Math.floor(Math.random() * 10) + 1
        if (hasFailed){
            student.grade -= points;
            console.log(`When it comes to ${subject}, ${student.name} has brought shame to ${student.possesivePronoun} family. ${this.name} docks ${student.pronoun} ${points} points.`)
        }
        else {
            student.grade += points;
            console.log(`${student.name} has demonstrated proficiency in ${subject}. ${this.name} awards ${student.pronoun} ${points} points.`)
        }
    }
}

class Student extends Person {
    constructor(studentInfo){
        super(studentInfo);
        this.previousBackground = studentInfo.previousBackground;
        this.className = studentInfo.className;
        this.favSubjects = studentInfo.favSubjects;
        this.grade = studentInfo.grade;
    }
    listSubjects(){
        console.log(...this.favSubjects);
    }
    PRAssignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}.`);
    }
    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint challenge for ${subject}.`);
    }
    graduate(){
        if (this.grade >= 70){
            console.log(`Congratulations ${this.name} you have graduated with a final grade of ${this.grade}%`)
        }
        else {
            console.log(`You have failed Lambda School ${this.name}. Lambda representatives are on their way to ${this.location} to disconnect your internet. You don't deserve it.`)
        }
    }
}

class ProjectManager extends Instructor{
    constructor(PMInfo){
        super(PMInfo);
        this.gradClassName = PMInfo.gradClassName;
        this.favInstructor = PMInfo.favInstructor;
    }
    standUp(channel){
        console.log(`${this.name} announces to ${channel}, @channel stand up time!`);
    }
    debugsCode(student, subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`)
    }
}

const jericho = new Student({
                            name: 'Chris Jericho',
                            age: 47,
                            location: 'Winnipeg, Manitoba, Canada', 
                            gender: 'Male',
                            pronoun: 'him',
                            possesivePronoun: 'his',
                            previousBackground: 'Professional Wrestling',
                            className: 'FSW-14',
                            favSubjects: ['HTML', 'C++', 'actionscript'],
                            grade: 80
                            })

const charlie = new Student({
                                name: 'Charlie Kelly',
                                age: 39,
                                location: 'Paddy\'s Pub, Philadelphia, Pennsylvania', 
                                gender: 'Male',
                                pronoun: 'him',
                                possesivePronoun: 'his',
                                previousBackground: 'Bird law',
                                className: 'FSW-14',
                                favSubjects: ['Pidgeon', 'piano'],
                                grade: 20
                                })
    

jericho.speak();
jericho.listSubjects();
jericho.PRAssignment('cut and paste day 4');
jericho.sprintChallenge('cut and paste final');


const waylon = new Instructor({
                            name: 'Waylon Jennings',
                            age: 81,
                            location: 'Luckenbach, Texas', 
                            gender: 'Male',
                            pronoun: 'him',
                            possesivePronoun: 'his',
                            specialty: 'Country/Western music',
                            favLanguage: 'JavaScript',
                            catchPhrase: 'Mammas don\'t let your babies grow up to be cowboys.'
                            })

waylon.speak();
waylon.demo('cut and paste');
waylon.grade(jericho, 'cut and paste');

const pat = new ProjectManager({
                        name: 'Pat \'the Bunny\' Schneeweis',
                        age: 31,
                        location: 'Brattleboro, Vermont', 
                        gender: 'Male',
                        pronoun: 'him',
                        possesivePronoun: 'his',
                        specialty: 'Anarcho-folk Punk Music',
                        favLanguage: 'CSS',
                        catchPhrase: 'If singing changed anything, they\'d make it illegal',
                        gradClassName: 'CS-10',
                        favInstructor: waylon.name
    })

pat.speak();
pat.demo('cut and paste');
pat.grade(jericho, 'cut and paste');
pat.standUp(jericho.className);
pat.debugsCode(jericho, 'cut and paste');


pat.gradeStretch(jericho, 'cut and paste');
waylon.gradeStretch(jericho, 'paying attention');
jericho.graduate();

pat.gradeStretch(charlie, 'cut and paste');
waylon.gradeStretch(charlie, 'paying attention');
charlie.graduate()