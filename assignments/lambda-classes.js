class Person{

    constructor(personAttributes){
        this.name = personAttributes.name;
        this.age = personAttributes.age;
        this.location = personAttributes.location;
        this.gender = personAttributes.gender;
    }
    speak(){
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`)
    }
}

class Instructor extends Person {
    constructor(attributes){
        super(attributes)
        this.speciality = attributes.specialty;
        this.favLanguage = attributes.favLanguage;
        this.catchPhrase ="Don't forget the homies";
    }

    demo(subject){
        console.log(`Today we are learning about ${subject}`)
    }

    grade(student, subject){
        console.log(`${student.name} receives a perfect score on ${subject}`)
    }
}

class Student extends Person{
    constructor(attributes){
        super(attributes)
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;
    }

    listSubjects(){
      let subjects =this.favSubjects;
      const cb =(item, index, array) => {
         console.log(array[index]);
      }
      return subjects.map(cb);
    }

    PRAssignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}`)
    }

    sprintChallenge(subject){
        console.log(`${this.name} has begun a sprint challenge on ${subject}`)
    }
}


class ProjectManagers extends Instructor{
    constructor(attributes){
        super(attributes)
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
    }
    standUp(channel = this.gradClassName){
        console.log(`${this.name} announces to ${channel}, @channel standy times!`)
    }

    debugsCode(student,subject){
        console.log(`${this.name} debugs ${student.name} code on ${subject}`)
    }
}


const jerry = new Student({
    name: 'Jerry',
    location: 'Bedrock',
    age: 25,
    gender: 'male',
    previousBackground:'accounting',
    className:'CSPT2',
    favSubjects:['html', 'Less', 'JS']
  });

const fred = new Instructor({
  name: 'Fred',
  location: 'casper',
  age: 37,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});

const luis = new ProjectManagers({
    name: 'luis',
    location: 'Bedrock',
    age: 28,
    gender: 'male',
    gradClassName:'CSPT2',
    favInstructor:'John'
});


console.log(jerry.listSubjects());
console.log(jerry);
jerry.sprintChallenge("less");
jerry.speak();
jerry.PRAssignment('LESS')
console.log(fred);
fred.grade(jerry,'JavaScript');
console.log(luis);
luis.debugsCode(jerry,'JavaScript');
luis.standUp();
luis.demo('Javascript');
