// CODE here for your Lambda Classes


class Person{
    constructor(attributes){
        this.name = attributes.name,
        this.age = attributes.age,
        this.location = attributes.location
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    };
}


class Instructor extends Person{
    constructor(attributes){
    super(attributes);
        this.specialty = attributes.specialty,
        this.favLanguage = attributes.favLanguage,
        this.catchPhrase = attributes.catchPhrase
}
    demo(){
        return `Today we are learning about ${this.specialty}`;
    };
    grade(){
        return `${this.name} receives a perfect score on ${this.specialty}`;
    };
    add(){
        return `Let's give ${this.name} 10 extra  points for effort!`;
    };
    
    sub(){
        return ` ${this.name} will suffer 10 extra  points off for not finishing the project!`;
    };
}

class Student extends Person{
    constructor(attributes){
    super(attributes);
        this.previousBackground = attributes.previousBackground,
        this.className = attributes.className,
        this.favSubjects = attributes.favSubjects
}
    listsSubjects(){
        return `${this.favSubjects}`;
};

    PRAssignment(){
        return `${this.name} has submitted a PR for ${this.className}`;
};

    sprintChallenge(){
        return ` ${this.name} has begun sprint challenge on ${this.className}`;
};   
}


class ProjectManager extends Instructors{
    constructor(attributes){
    super(attributes);
        this.gradClassName = attributes.gradClassName,
        this.favInstructor = attributes.favInstructor
}
    standUp(){
        return `${thi.name} announces ${this.channel}, @channel standy times!`;
    };

    debugsCode(){
        return `${this.name} debugs ${student.name}'s code on ${this.subject}`;
    };

}


const Tom = new Person({
    name: 'Tom',
    age: 47,
    location: 'Bed'
  });



const Freddy = new Person({
    name: 'Fredddy',
    age: 27,
    location: 'Rock'
  });


const Tim = new Person({
    name: 'Tim',
    age: 28,
    location: 'Rock-bed'
  });



const F = new Instructor({
    name: 'F',
    location: 'Cali',
    age: 27,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the food`
  });

  const T = new Instructor({
    name: 'T',
    location: 'Montana',
    age: 24,
    favLanguage: 'JAVA',
    specialty: 'Servers',
    catchPhrase: `let me SERVER you`
  });


  const M = new Instructor({
    name: 'M',
    location: 'Boston',
    age: 30,
    favLanguage: 'Python',
    specialty: 'Back-end',
    catchPhrase: `I don't bite`
  });


  const Ted = new Student({
    name: 'Ted',
    age: 22,
    location: 'Denver',
    previousBackground: 'chef',
    className: 'Java',
    favSubjects: ['math', 'science', 'biology', 'arts'],
    grade: 76
  })


  const Andrea = new Student({
    name: 'Andrea',
    age: 24,
    location: 'Orlando',
    previousBackground: 'student',
    className: 'CS',
    favSubjects: ['English', 'Econ', 'Marketing']
    grade: 98
  })


  const Ron = new Student({
    name: 'Ron',
    age: 22,
    location: 'Boston',
    previousBackground: 'runner',
    className: 'Programming',
    favSubjects: ['AI', 'science', 'Mobile Tec'],
    grade: 80
  })

  const Nav = new ProjectManager({
    name: 'Nav',
    location: 'NYC',
    age: 30,
    favLanguage: 'C++',
    specialty: 'Servers',
    catchPhrase: `I don't bite, unless`,
    gradClassName: 'Javascript',
    favInstructor: 'M'
  })

  const Louise = new ProjectManager({
    name: 'Louise',
    location: 'Toronto',
    age: 33,
    favLanguage: 'Ruby',
    specialty: 'Customer Applications',
    catchPhrase: `Bit me and you'll see`,
    gradClassName: 'Data Sci',
    favInstructor: 'T'
  })

  const Hanna = new ProjectManager({
    name: 'Hanna',
    location: 'Galveston',
    age: 25,
    favLanguage: 'Python',
    specialty: 'cooking',
    catchPhrase: `Let's cook some Python!`,
    gradClassName: 'Python',
    favInstructor: 'F'
  })



