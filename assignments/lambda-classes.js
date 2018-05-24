class Person {
  constructor(attributes){
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
    this.gender = attributes.gender;
}
speak(){
  return `Hello my name is ${this.name} I am from ${this.location}`;
}
}//end person

class Instructor extends Person {
  constructor(attributes) {
  super(attributes);
  this.favLanguage = attributes.favLanguage;
  this.specialty = attributes.specialty;
  this.catchPhrase = attributes.catchPhrase;
}
demo(){
  return `Today we are learning about ${this.subject}`;
}
grade(){
  `Student ${student.name} recieves a perfect score on ${this.subject}`;

}
}//ends instructor

class Student extends Person {
  constructor(attributes){
    super (attributes);
  this.previousBackground = attributes.previousBackground;
  this.className = attributes.className;
  this.favSubjects = attributes.favSubjects;

}
listSubjects(){
function subject(list){

}
}
//this.favSubject.forEach(subject);
//console.log(subject);
PRAssignment(){
return  `${student.name} has submitted a PR for ${this.subject}`;
}
sprintChallenge(){
return  `${student.name} has begun the Sprint Challenge`;
}
}

class PM extends Instructor {
  constructor(attributes) {
  super(attributes);
  this.gradClass = attributes.gradClass;
  this.favInstructor = attributes.favInstructor;

}
standup() {
return  `${PM.name} announces to ${channel} @channel standup times!`;
}
debugsCode(){
return  `${PM.name} debugs ${student.name}'s code on ${this.subject}`;

}
}// ends instructor

const brynne = new Student({
  "name" : 'Brynne',
  "age" : 21,
  "location" : 'Small Town',
  "gender" : 'female',
"previousBackground" : 'Medical',
"className" : 'CS15',
"favSubjects" : ["Javascript","CSS","HTML"],
});

const fred = new Instructor({
  "name": 'Fred',
  "location": 'Bedrock',
  "age": 37,
  "gender": 'male',
  "favLanguage": 'JavaScript',
 "specialty": 'Front-end',
  "catchPhrase": `Super-Powerful`
});

const kigh = new PM ({
  "name" : 'Kigh',
  "age" : 47,
  "location" : 'Texas',
  "gender" : 'female',
  "gradClass" : 2008,
  "favInstructor" : 'Professor',
  "favLanguage": 'JavaScript',
 "specialty": 'Front-end',
  "catchPhrase": `Awesome!`
});

console.log(brynne);
console.log(kigh);
console.log(fred);
