// CODE here for your Lambda Classes
//Step 1: Create the classes for: Person, Instructor, Student, and Project Manager

//'Person' is the base class
class Person {
  constructor(parentAttributes) {}
}

//'Instructor' class -> inherits(extends) from 'Person' class
class Instructor extends Person {
  constructor(instructorAttributes) {
    //super connects intructorAttributes to Person
    super(instructorAttributes);
  }
}

//'Student' class -> inherits(extends) from the 'Person' class
class Student extends Person {
  constructor(studentAttributes) {
    //super connects studentAttributes to the 'Person' class
    super(studentAttributes);
  }
}

//'Project Manager' class -> inherits(extends) from the 'Instructor' class
class Project extends Instructor {
  constructor(projectAttributes) {
    super(projectAttributes);
  }
}
