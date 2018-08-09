// CODE here for your Lambda Classes
class Person
{
    constructor(personalInformation)
    {
        this.name = personalInformation.name;
        this.age = personalInformation.age;
        this.location = personalInformation.location;
        this.gender = personalInformation.gender;
    }
    speak()
    {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}

class Instructor extends Person
{
    constructor(instructorInformation)
    {
        super(instructorInformation);
        this.specialty = instructorInformation.specialty;
        this.favLanguage = instructorInformation.favLanguage;
        this.catchPhrase = instructorInformation.catchPhrase;
    }
    demo(subject)
    {
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject)
    {
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
    randomPoints(student)
    {
        let randomNumber = Math.floor(Math.random()*10)-3;
        student.grade -= randomNumber;
    }
}

class Student extends Person
{
    constructor(studentInformation)
    {
        super(studentInformation);
        this.previousBackground = studentInformation.previousBackground;
        this.className = studentInformation.className;
        this.favSubjects = studentInformation.favSubjects;
        this.grade = 50;
    }
    listsSubjects()
    {
        this.favSubjects.forEach(subject => console.log(subject));
    }
    PRAssignment(subject)
    {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
    graduate()
    {
        if(this.grade>70)
        {
            console.log(`${this.name} is ready to graduate.`);
        }
        else
        {
            console.log(`Go back to grading ${this.name}'s assignments.`);
        }
    }
}

class ProjectManager extends Instructor
{
    constructor(pMInfo)
    {
        super(pMInfo);
        this.gradClassName = this.pMInfo;
        this.favInstructor = this.pMInfo;
    }
    standUp(slackChannel)
    {
        console.log(`${this.name} announces to ${slackChannel}, @channel standy times!​​​​​`);
    }
    debugsCode(student, subject)
    {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}



//tests
// const kev = new Student(
//     {
//         name: 'Kevin Nguyen',
//         age: 25,
//         location: 'Hayward, CA, USA',
//         gender: 'male',
//         previousBackground: 'Information Technology',
//         className: 'CS13',
//         favSubjects: ['javascript', 'OOP', 'C', 'Data Structures', 'Algorithms'],
//     }
// )
// kev.speak();
// kev.graduate();
// kev.listsSubjects;
// kev.PRAssignment('javascript');

// const josh = new Instructor(
//     {
//         name: 'Josh Knell',
//         age: 28,
//         location: 'Central United States',
//         gender: 'male',
//         specialty: 'Web Development',
//         favLanguage:'less',
//         catchPhrase: `I'm Detective Hopper!`,
//     }
// );
// josh.speak();
// josh.demo('javascript');
// josh.grade(kev, 'Responsive Web Design');

// const zack = new ProjectManager(
//     {
//         name: 'Zack Hitchcock',
//         age: '27',
//         location: 'Bay Area, CA, USA',
//         gender: 'male',
//         specialty: 'project managing',
//         favLanguage: 'javascript',
//         catchPhrase: `The problem is not the problem, the problem is your attitude about the problem.`,
//         favInstructor: josh,
//     }
// )
// zack.speak();
// zack.randomPoints(kev);
// zack.standUp('cs13_zack');
// zack.debugsCode(kev, 'Javascript Prototypes');
