// CODE here for your Lambda Classes

Class Parent {
  constructor(attributes) {
    this.children = attributes.children
    this.options = attributes.options
    this.age = attributes.age
    this.gender = attributes.gender
    this.hometown = attributes.hometown
    this.name = attributes.name
  }
}

Class instructor extends Parent {
  constructor(instructorAttributes)
  super(instructorAttributes);
  console.log("These are attributes! " + Object.entries(instructorAttributes));
  this.person = instructorAttributes.person;
  this.specialty = instructorAttributes.specialty;
  this.favlanguage = instructorAttributes.favlanguage;
  this.catchPhrase = instructorAttributes.catchPhrase;
}

redux() {
  return `This is the specialty I used with: ${this.specialty}`
}
  


Class student extends Instructor {
  constructor(studentAttributes)
  super(studentAttributes);
  this.student = studentAttributes.previousBackground;
  this.className = studentAttributes.className;
  this.catchPhrase = studentAttributes.catchPhrase;
}

listSubjects() {
  return `LIST SUBJECTS`
}

Class PRAssignment {
  constructor(class,Name)
}




