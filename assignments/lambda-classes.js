
// ------------------------------------- Classes ------------------------------------- 

class Person {
    constructor(pAtts){
        this.name = pAtts.name;
        this.age = pAtts.age;
        this.location = pAtts.location;
        this.gender = pAtts.gender;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
}


class Instructors extends Person {
    constructor(iAtts){
        super(iAtts);
        this.specialty = iAtts.specialty;
        this.favLanguage = iAtts.favLanguage;
        this.catchPhrase = iAtts.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`;
    }
}


class Students extends Person {
    constructor(sAtts){
        super(sAtts);
        this.previousBackground = sAtts.previousBackground;
        this.className = sAtts.className;
        this.favSubjects = sAtts.favSubjects;
    }
    listsSubjects() {
        return this.favSubjects.map(function(subject) {
            return subject;
        });
        }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
}

class ProjectManagers extends Instructors {
    constructor(pmAtts){
        super(pmAtts);
        this.gradClassName = pmAtts.gradClassName;
        this.favInstructor = pmAtts.favInstructor;
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standby times!`;
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}

// ------------------------------------- Student Objects ------------------------------------- 


const student_leighAnn = new Students({
    name: 'Leigh-Ann',
    age: 28,
    location: 'Arlington, VA',
    gender: 'F',
    previousBackground: true,
    className: 'FSW16',
    favSubjects: [
        'CSS',
        'IoT',
        'JavaScript'
    ]
});

const student_jeff = new Students({
    name: 'Jeffrey',
    age: 28,
    location: 'Arlington, VA',
    gender: 'M',
    previousBackground: true,
    className: 'FSW21',
    favSubjects: [
        'Python',
        'HTML'
    ]
});


const student_jordann = new Students({
    name: 'Jordann',
    age: 31,
    location: 'Bethesda, MD',
    gender: 'F',
    previousBackground: false,
    className: 'FSW21',
    favSubjects: [
        'Design',
        'HTML'
    ]
});

// ------------------------------------- Instructor Objects ------------------------------------- 

const instructor_saron = new Instructors({
    name: 'Saron',
    age: 33,
    location: 'Los Angeles',
    gender: 'F',
    specialty: 'Rails',
    favLanguage: 'Ruby',
    catchPhrase: 'Code newbies rock!'
});

const instructor_tyler = new Instructors({
    name: 'Tyler',
    age: 36,
    location: 'New York',
    gender: 'M',
    specialty: 'React',
    favLanguage: 'JavaScript',
    catchPhrase: 'Extra cheese!'
});

// ------------------------------------- PM Objects ------------------------------------- 

const pm_ali = new ProjectManagers({
    name: 'Ali',
    age: 25,
    location: 'Washington, DC',
    gender: 'F',
    gradClassName: 'FSW2',
    favInstructor: 'Saron',
    favLanguage: 'Python',
});

const pm_veni = new ProjectManagers({
    name: 'Veni',
    age: 30,
    location: 'Washington, DC',
    gender: 'F',
    gradClassName: 'FSW7',
    favInstructor: 'Tyler',
    favLanguage: 'React Native',
    catchPhrase: 'Diversity in tech!'
});

// ------------------------------------- Testing Objects ------------------------------------- 

console.log(student_leighAnn);
console.log(student_jeff);
console.log(student_jordann);
console.log(pm_ali);
console.log(pm_veni);
console.log(instructor_saron);
console.log(instructor_tyler);

// ------------------------------------- Testing Methods ------------------------------------- 

console.log(student_leighAnn.listsSubjects());
console.log(student_leighAnn.PRAssignment('React'));
console.log(student_leighAnn.sprintChallenge('Computer Science'));
console.log(instructor_saron.demo('Internet Security'));
console.log(instructor_saron.grade(student_leighAnn, 'React'));
console.log(pm_ali.standUp('#general'));
console.log(pm_ali.debugsCode(student_jeff, 'Python'));
