// CODE here for your Lambda Classes
class Person {
    constructor(props){
      this.name = props.name;
      this.age = props.age;
      this.location = props.location;
    }
    speak(){
      console.log(`Hello my name is ${this.name}, I am from ${this.location} and I like $(number}`)
    }
  }
  
  // console.log(fred.speak())
  
  
  class Instructor extends Person{
    constructor(props){
      super(props);
      this.specialty = props.specialty;
      this.favLanguage = props.favLanguage;
      this.catchPhrase = props.catchPhrase;
    }
    demo(subject) {
      console.log(`Today we are learning about ${subject}`)
    }
    grade(subject) {
      console.log(`${this.name} received a perfect score in ${subject} class`)
    }
  }
  
  const elizabeth = new Instructor({
    name: 'Elizabeth',
    age: 22,
    location: 'Austin',
    specialty: 'teaching',
    favLanguage: 'Python',
    catchPhrase: 'hey you guys!'
  })
  
  console.log(elizabeth.demo('science'));