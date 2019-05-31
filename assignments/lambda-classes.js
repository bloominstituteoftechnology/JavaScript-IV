// CODE here for your Lambda Classes


class person {
    constructor(attributes){
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }

    // speak(){
    //     console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    // }
}



class Instructor extends person {
    constructor(attributes){
        super(attributes);
        this.specialty = attributes.specialty;
        this.favLanguage = attributes.favLanguage;
        this.catchPhrase = attributes.catchPhrase;
    }
    demo(subject){
        console.log(`Today we are learning about ${subject}`)
    };
    grade(student, subject){
        console.log(`${student.name} receives a perfect score on ${subject}`)
    };
}



class student extends person {
    constructor(attributes){
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;
    }
    listSubjects(student){
        console.log(`${student.favSubjects[0]}, ${student.favSubjects[1]}, ${student.favSubjects[2]}`)
    };
    PRAssignment(subject){
        console.log(`${student.name} has submitted a PR for ${subject}`)
    };
    sprintChallenge(subject){
        console.log(`${student.name} has begun sprint challenge on ${subject}`)
    };
}



class ProjectManager extends Instructor {
    constructor(attributes){
        super(attributes);
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
    }
    standUp(channel){
        console.log(`${this.name} announces to ${channel}, @channel standy times!`)
    };
    debugsCode(studentObj, subject){
        console.log(`${this.name} debugs ${studentObj.name}'s code on ${subject}`)
    };
}


const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

const kyle = new student({
    name: 'Kyle',
    location: 'Indianpolis, IN',
    age: 21,
    previousBackground: 'Amazon Warehouse Associate',
    className: 'WEBPT7',
    favSubjects: ['Math', 'Engineering', 'Biology'],
});

const yanrong = new ProjectManager({
    name: "Yanrong",
    age: 25,
    location: 'Unknown',
    gradClassName: 'webpt7_yanrong',
    favInstructor: 'Dan Frehner',
});

console.log(kyle.name);

console.log(kyle.speak());

console.log(kyle.previousBackground);

console.log(fred.favLanguage);

console.log(yanrong.favInstructor);