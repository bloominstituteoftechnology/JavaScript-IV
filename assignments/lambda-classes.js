// CODE here for your Lambda Classes

//base class person

class Person {

    constructor(pAttributes) {
        this.name = pAttributes.name;
        this.location = pAttributes.location;
        this.gender = pAttributes.gender;

    }

    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`)
    }
}

class Instructor extends Person {

    constructor(iAttributes) {

        super(iAttributes);
        this.specialty= iAttributes.specialty;
        this.favLanguage= iAttributes.favLanguage;
        this.catchPhrase= iAttributes.catchPhrase;
    }

    demo(subject){
        console.log(`Today we are learning about ${subject}`);
    }

    grade(arr,subject){
        console.log(`${arr.name} receives a perfect score on ${subject}`);
    }
    gradeRobot(arr) {
        if(Math.random() <= 0.5)
        {return(arr.grade +7);}
        else
        {return(arr.grade -7);}
    }
}

class Student extends Person {

    constructor(sAttributes) {

        super(sAttributes);
        this.previousBackground= sAttributes.previousBackground;
        this.className= sAttributes.className;
        this.favSubjects= sAttributes.favSubjects;
        this.grade = sAttributes.grade;
    }

    listsSubjects(arr) {
    //    let favSubs =[];
    //    favSubs = arr.favSubjects;
    //    console.log(favSubs);
        console.log(arr.favSubjects);
    }
        

        PRAssignment (arr,subject) {
            console.log(`${arr.name} has submitted a PR for ${subject}`);
        }

        sprintChallenge (arr, subject) {
            console.log(`${arr.name} has begun sprint challenge on ${subject}`);
        }

        graduate (arr) {
            if (arr.grade >= 70)
            {console.log(`${arr.name} can graduate!`);}
          else 
          {console.log(`${arr.name} needs to have more assignments graded!`);}
   }
}

    class ProjectManager extends Instructor {

        constructor(mAttributes) {
        
            super(mAttributes);
            this.gradClassName= mAttributes.gradClassName;
            this.favInstructor= mAttributes.favInstructor;
        }

        standUP(Channel) {
            console.log(`${this.name} announces to ${Channel}, @channel standy times! `);
        }

        debugsCode(arr, subject) {
            console.log(` ${this.name} debugs ${arr.name}\'s code on ${subject}`);
        }

    }

    const Kevin = new Person ({
        name: 'Kevin',
        location: 'Bora-Bora',
        gender: 'male'
    });

    const Sasha = new Person ({
        name: 'Sally',
        location: 'Africa',
        gender: 'female'

    });

    const Matt = new Instructor({
        name: 'Matt',
        location: 'Australia',
        gender: 'male',
        specialty: 'javascript',
        favLanguage: 'python',
        catchPhrase: 'Go all in!'

    });

    const Izzy = new Instructor({
        name: 'Izzy',
        location: 'Thailand',
        gender: 'female',
        specialty: 'React',
        favLanguage: 'javascript',
        catchPhrase: 'Learn from you mistakes'

    });

    const Pam = new Student({
        name: 'Pam',
        location: 'China',
        gender: 'female',
        previousBackground: 'chemistry',
        className: 'Webpt4',
        favSubjects: ['React', 'CSS', 'Redux'],
        grade: 80
        });

    const Blake = new Student({
        name: 'Blake',
        location: 'Jamaica',
        gender: 'male',
        previousBackground: 'electrician',
        className: 'Webpt4',
        favSubjects: ['React', 'CSS', 'HTML'],
        grade: 65
    });

    const Neal = new ProjectManager({
        name: 'Neal',
        location: 'Egypt',
        gender: 'male',
        specialty: 'React',
        favLanguage: 'C++',
        catchPhrase: 'Dont give up!',
        gradClassName: 'FSW14',
        favInstructor: 'Ken'
    })

    const Sara = new ProjectManager({
        name: 'Sara',
        location: 'Malaysia',
        gender: 'female',
        specialty: 'CS',
        favLanguage: 'C#',
        catchPhrase: 'Tommorow is a new day!',
        gradClassName: 'FSW14',
        favInstructor: 'Barbie'
    });

Kevin.speak();
Izzy.speak();
Pam.speak();

Izzy.demo('Math');
Izzy.grade(Pam, 'css');
Neal.grade(Blake, 'python');

Pam.listsSubjects(Pam);
Pam.PRAssignment(Pam, 'React');

Sara.standUP('Webpt4');
Sara.debugsCode(Pam, 'CSS');

//STRETCH
console.log(Izzy.gradeRobot(Pam));
console.log(Neal.gradeRobot(Blake));

Pam.graduate(Pam);
Blake.graduate(Blake);