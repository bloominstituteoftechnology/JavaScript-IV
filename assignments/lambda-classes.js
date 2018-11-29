// CODE here for your Lambda Classes

class Person {
    constructor(attributes) {
    this.name = attributes.name;
    this.location = attributes.location;
    this.age = attributes.age;
    this.gender = attributes.gender;
    }
    speak(){
        console.log(`${this.name} love being a person.`);
    }
    
}

class Student extends Person {
    constructor(StuAttributes) {
        super(StuAttributes);
        this.name = StuAttributes.name;
        this.location = StuAttributes.location;
        this.age = StuAttributes.age;
        this.gender = StuAttributes.gender;
        this.favLanguage = StuAttributes.favLanguage;
        this.specialty = StuAttributes.specialty;
        this.catchPhrase = StuAttributes.catchPhrase;
    }
    WhereAmI() {
      console.log(`${this.name} is in ${this.location}.`);
    }
  }

  class Instructor extends Person {
    constructor(InAttributes) {
        super(InAttributes);
        this.name = InAttributes.name;
        this.location = InAttributes.location;
        this.age = InAttributes.age;
        this.gender = InAttributes.gender;
        this.favLanguage = InAttributes.favLanguage;
        this.specialty = InAttributes.specialty;
        this.catchPhrase = InAttributes.catchPhrase;
    }
    Language() {
      console.log(`${this.name} loves teaching ${this.favLanguage}.`);
    }
  }

  class ProjectManager extends Instructor {
    constructor(ProAttributes) {
        super(ProAttributes);
        this.name = ProAttributes.name;
        this.location = ProAttributes.location;
        this.age = ProAttributes.age;
        this.gender = ProAttributes.gender;
        this.favLanguage = ProAttributes.favLanguage;
        this.specialty = ProAttributes.specialty;
        this.catchPhrase = ProAttributes.catchPhrase;
    }
    Language() {
      console.log(`${this.name} loves teaching ${this.favLanguage}.`);
    }
  }



const fred = new Person({
  name: 'Fred',
  location: 'Pasadena',
  age: 37,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});


const james = new Person({
  name: 'James,
  location: 'Los Angeles',
  age: 30,
  gender: 'male',
  favLanguage: 'HTML',
  specialty: 'Front-end',
  catchPhrase: `What up BOY!`
});

const brenda = new Person({
    name: 'James,
    location: 'Los Angeles',
    age: 23,
    gender: 'female',
    favLanguage: 'JavaScript',
    specialty: 'Back-end',
    catchPhrase: `Well, cook my grits!`
  });

  const barbara = new Person({
    name: 'Barbara,
    location: 'Los Angeles',
    age: 43,
    gender: 'female',
    favLanguage: 'CSS',
    specialty: 'Front-end',
    catchPhrase: `I'm such a lady!`
  });
