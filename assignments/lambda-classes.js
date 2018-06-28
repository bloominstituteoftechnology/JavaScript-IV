// CODE here for your Lambda Classes

class Person {
  constructor(options){
    super(options);
    this.name = options.name;
    this.location = options.locations;
    this.age = options.age;
    this.gender = options.gender;
  }
  speak {
    return `My name is ${this.name} and I'm from ${this.location}`;
  }
}

// End of Person


class Instructor extends Person {
  constructor(teachOptions) {
    super(teachOptions);
    this.favLanguage = teachOptions.favLanguage;
    this.specialty = teachOptions.specialty;
    this.catchPhrase = teachOptions.catchPhrase;
  }
  say {
  return ` Hey , ${this.catchphrase}`;
  }
}

// End of Instructor


class Student extends Person {
  constructor(wowOptions){
    super(wowOptions);
    this.favLanguage = teachOptions.favLanguage;
    this.specialty = teachOptions.specialty;
    this.catchPhrase = wowOptions.specialty;
  }
  shout{
    return ` ${this.catchPhrase} , Hey Skeet , I got it !`;
  }
}
// End Student

class ProjectManager extends Student {
  constructor(concludeOptions){
    super(concludeOptions);
    this.favLanguage = teachOptions.favLanguage;
    this.specialty = teachOptions.specialty;
    this.catchPhrase = concludeOptions.catchPhrase;

  }
  preach {
    return `So you see Misty , ${this.catchPhrase}, trust the process!`
  }
}

// End of Project Manager




//Objects

const skeet = new Instructor({
  name: 'Skeet',
  location: 'Magee',
  age: 40,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `What's happening coders?`
});


const misty = new Student({
  name: 'Misty',
  location: 'Chavelle',
  age: 23,
  gender: 'female',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Oh that's right!`
});


const fred = new ProjectManager({
  name: 'Ginger',
  location: 'Snap',
  age: 37,
  gender: 'female',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `First there's sour then there's sweet.`
});
