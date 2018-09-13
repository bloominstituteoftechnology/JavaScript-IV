// CODE here for your Lambda Classes

class PersonObject {
    constructor (personInfo) {
        this.name = personInfo.name;
        this.age = personInfo.age;
        this.location = personInfo.location;
        this.gender = personInfo.gender;
      }
  
      speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
      }
  
  }  
  
  class InstructorInfo extends PersonObject {
    constructor (instructorAttributes) {
        super(instructorAttributes)
        this.specialty = instructorAttributes.specialty;
        this.favLanguage = instructorAttributes.favLanguage;
        this.catchPhrase = instructorAttributes.catchPhrase;
    }
  
   demo (subject) {
    return `Today we are learning about ${subject}`;
  }; 

    grade (student, subject) {
        return `${student.name} receives a perfect score on ${subject}`;
    }
  
  }
  
  class StudentInfo extends PersonObject {
    constructor (studentAttributes) {
        super (studentAttributes)
        this.background = studentAttributes.background;
        this.className = studentAttributes.className;
        this.favSubject = studentAttributes.favSubject;
    }
    listSubjects () {
        for (let i = 0; i < this.favSubject.length; i++){
            return `My favorite subjects include ${this.favSubject[i]}`
        }
    }
    PRAssiagnment (student, subject) {
        
            return `${student.name} has submitted a PR for ${subject}`;
        
    }
    sprintChallenge (student, subject) {
        return `${student.name} has begun sprint challenge on ${subject}}`;
    }
   
  }

  class PMInfo extends InstructorInfo {
    constructor (pmAttributes) {
        super (pmAttributes)
        this.gradClassName = pmAttributes.gradClassName;
        this.favInstructor = pmAttributes.favInstructor;
        
    }

    standUp (channel) {
        
            return `${this.name} announces to ${channel}, @channel standy times!`;
        
    }
    debugCode (student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}}`;
    }
   
  }

  //PersonObject, InstructorInfo, StudentInfo, PMInfo
  
  const Rick = new PersonObject({
    name : personInfo.name,
    age : personInfo.age,
    location : personInfo.location,
    gender : personInfo.gender,
  });
  
  const Morty = new PersonObject({
    name : personInfo.name,
    age : personInfo.age,
    location : personInfo.location,
    gender : personInfo.gender,
  });
  
  const Josh = new InstructorInfo({
    name : personInfo.name,
    age : personInfo.age,
    location : personInfo.location,
    gender : personInfo.gender,
    specialty : instructorAttributes.specialty,
    favLanguage : instructorAttributes.favLanguage,
    catchPhrase : instructorAttributes.catchPhrase,
  });

  const Daniel = new InstructorInfo({
    name : personInfo.name,
    age : personInfo.age,
    location : personInfo.location,
    gender : personInfo.gender,
    specialty : instructorAttributes.specialty,
    favLanguage : instructorAttributes.favLanguage,
    catchPhrase : instructorAttributes.catchPhrase,
  });
  
  const Cesar = new PMInfo({
    name : personInfo.name,
    age : personInfo.age,
    location : personInfo.location,
    gender : personInfo.gender,
    specialty : instructorAttributes.specialty,
    favLanguage : instructorAttributes.favLanguage,
    catchPhrase : instructorAttributes.catchPhrase,
    gradClassName : pmAttributes.gradClassName,
    favInstructor : pmAttributes.favInstructor,
  });
  
  const Allen = new PMInfo({
    name : personInfo.name,
    age : personInfo.age,
    location : personInfo.location,
    gender : personInfo.gender,
    specialty : instructorAttributes.specialty,
    favLanguage : instructorAttributes.favLanguage,
    catchPhrase : instructorAttributes.catchPhrase,
    gradClassName : pmAttributes.gradClassName,
    favInstructor : pmAttributes.favInstructor,
  });

  const Troy = new StudentInfo({
    name : personInfo.name,
    age : personInfo.age,
    location : personInfo.location,
    gender : personInfo.gender,
    background : studentAttributes.background,
    className : studentAttributes.className,       
    favSubject : studentAttributes.favSubject,
  });
  
  const Carlos = new StudentInfo({
    name : personInfo.name,
    age : personInfo.age,
    location : personInfo.location,
    gender : personInfo.gender,
    background : studentAttributes.background,
    className : studentAttributes.className,       
    favSubject : studentAttributes.favSubject,
  });
  
  const Shannon = new StudentInfo({
    name : personInfo.name,
    age : personInfo.age,
    location : personInfo.location,
    gender : personInfo.gender,
    background : studentAttributes.background,
    className : studentAttributes.className,       
    favSubject : studentAttributes.favSubject,
  });

  const CJ = new StudentInfo({
    name : personInfo.name,
    age : personInfo.age,
    location : personInfo.location,
    gender : personInfo.gender,
    background : studentAttributes.background,
    className : studentAttributes.className,       
    favSubject : studentAttributes.favSubject,
  });
  
