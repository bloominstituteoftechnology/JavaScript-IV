// CODE here for your Lambda Classes
class Person{
    constructor(person){
        this.name = person.name;
        this.age = person.age;
        this.location = person.location;
        this.gender = person.gender;
    }
    speak(){
        return `Hellow, my name is ${name}, I am from ${location}.`
    }
}

class Instructor extends Person{
    constructor(instructor){
        super(instructor);
        this.specialty = instructor.specialty;
        this.favLanguage = instructor.favLanguage;
        this.catchPhrase = instructor.catchPhrase;
    }
    
    demo(subject){
        return `Today we are learning about ${subject}.`
    }

    grade(studentName, subject){
        return `${studentName} recieves a perfect score on ${subject}.`
    }

}


class Student extends Person{
    constructor(student){
        super(student);
        this.previousBackground = student.previousBackground;
        this.className = student.className;
        this.favSubjects = student.favSubjects;
    }

    listSubjects(favoriteSubjects){
        return [`${favoriteSubjects}`];
    }

    PRAssignment(subject){
       return `${student.name} has submitted a POR for ${subject}.`
    }

    sprintChallenge(subject){
        return `${student.name} had begun sprint challenge on ${subject}.`
    }

}

class ProjectManager extends Instructor{
    constructor(projectManager){
        super(projectManager);
        this.gradClassName = projectManager.gradClassName;
        this.favInstructor = projectManager.favInstructor;
    }

    standUp(slackChannel){
        return `${name} announces to ${slackChannel}, @channel standy times!`
    }

    debugCode(sudent, subject){
        return `${name} debugs ${student}'s code on ${subject}.`
    }

}


const dantheman = new Instructor({
    name: 'danTheMan',
    location: 'CatHeaven?',
    age: 21,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Did you know i have a cat?`
  });

  const Rando = new Student({
    name: 'Rando',
    location: 'texas',
    age: 26,
    gender: 'male',
    favLanguage: 'python',
    specialty: 'Back-End',
    catchPhrase: `python isnt just sudo code!!!!`
  });

  const Duckets615 = new ProjectManager({
    name: 'Duckets615',
    location: 'The matrix',
    age: 'How dare you ask that',
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Back-End',
    catchPhrase: `Lmao idc if the section lead is gonna be mad`
  });
