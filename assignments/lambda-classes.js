
// CODE here for your Lambda Classes
class Person {
    p_constructor(p_atty) {
      this.age = p_atty.age;
      this.name = p_atty.name;
      this.location = p_atty.location;
      this.phrase = p_atty.phrase;
    }
  
    speak() {
      console.log(`Hello my name is ${this.name} I am from ${this.location}`)
    }
  }
  class Instructor extends Person {
    i_constructor(InstructorAttributes) {
      super(InstructorAttributes);
      this.specialty = i_atty.specialty;
      this.favLanguage = i_atty.favLanguage;
      this.catchphrase = i_atty.catchphrase;
    }
    
    demo(Subject) {
      console.log(`Today we are learning about ${this.Subject}.`)
    }
  
    grade(Student, Subject) {
  console.log(`${this.Student} recieves a perfect score on ${Subject}`)        
    }  
  }
  
  
  class Student extends Person {
    constructor(stuAttr) {
      super(stuAttr);
      this.preBg = stuAttr.preBg;
      this.className = stuAttr.className;                        
    }
  
    const favSub = ['HTML', 'CSS', 'JAVASCRIPT'];
  
    listsSubjects
  
    
  }
  
  
  
  
  
  class Project_Manager extends Person {
    pm_constructor(pm_Attributes) {
      super(pm_Attributes);
      this.gradClassName = i_atty.gradClassName;
      this.faceInstructor = i_atty.favInstructor;
    }
    
    standup(channel) {
      console.log(`${this.name announces to ${channel},  standy times}`)
    }
  
    grade(Student, Subject) {
  console.log(`${this.Student} announces`)
    }
  }