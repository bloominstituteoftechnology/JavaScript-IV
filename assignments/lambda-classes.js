// CODE here for your Lambda Classes
class Person {
    constructor(attributes) {
      this.age = attributes.age;
      this.location = attributes.location;
      this.name = attributes.name;
    }
    speak() {
      return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`;
      }
  }

  class ProjectManager extends Person {
    constructor(pmAttributes) {
      super(pmAttributes);
    }
  }
  
  const sam = new ProjectManager({
    name: "Sam",
    age: "28",
    location: "Wizardtown",
    gradClassName: "WEB19"
  });

  console.log(sam.standUp("web21_Sam"));

