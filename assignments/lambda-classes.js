// CODE here for your Lambda Classes


class Person {
    constructor(attributes){
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
};






class Instructor extends Person {
    constructor(child){
        super(child);
            this.specialty = child.specialty;
            this.favLanguage = child.favLanguage;
            this.catchPhrase = child.catchPhrase;
    }
    demo(subjects) {
        console.log(`Today we are learning about ${subjects}`); 
    }
    grade(student,subjects) {
        console.log(`${student} recieves a perfect score on ${subjects}`);
    }
};





class Student extends Person {
    constructor(students){
        super(students);
            this.previousBackground= students.previousBackground;
            this.className = students.className;
            this.favSubjects = students.favSubjects;
    }
    listSubjects(){
        console.log (`${this.name} favorite subjects are ${this.favSubjects}`);
    }
    PRAssignment(subjects) {
        console.log (`${this.name} has submitted a PR for ${subjects}`);
    }

    sprintChallenge(subjects){
        console.log (`${this.name} has begun sprint challenge on ${subjects}`);
    }

};




class ProjectManagers extends Instructor {
    constructor(pManager){
        super(pManager);
            this.gradClassName= pManager.gradClassName;
            this.favInstructor = pManager.favInstructor;
    }
    standUp(channel){
        console.log(`${this.name} announces to ${channel}, @channel stand Up times!`);
    }
    debugsCode(names, subjects) {
        console.log(`${this.name} debugs ${names} code on ${subjects}`);
    }


};



const school = new Person({
    name: 'LambdaSchool',
    age: 5,
    location: 'Oregon',
    subjects: 'JS IV'
  });
  
  const samuel = new Instructor({
    specialty: 'Back-end',
    name: 'Tyler',
    age: 35,
    favLanguage: 'Javascript',
    catchPhrase: 'Dont let the program, program you!'
  });
  
  const sheila = new Student({
    name: 'Sheila',
    age: 31,
    location: 'Tampa',
    previousBackground: 'minimum',
    className: 'FSW16',
    favSubjects: ['Math', 'HTML' , 'JS']
  });


  const josh = new ProjectManagers ({
    name: 'Josh',
    age: 28,
    gradClassName: 'FSW15',
   favInstructor: 'Paul',
  });




  school.speak();
  samuel.demo('JS IV');
  samuel.grade('Sheila', 'JS IV');
  sheila.listSubjects();
  sheila.PRAssignment('JS');
  sheila.sprintChallenge('Javascript Fundamentals');
  josh.standUp('CS16');
  josh.debugsCode('Sheila','JS');
