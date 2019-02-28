/*
#### Person

* First we need a Person class. This will be our `base-class`
* Person receives `name` `age` `location` `gender` all as props
* Person receives `speak` as a method.
* This method logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` and `location` are the object's own props

#### Instructor

* Now that we have a Person as our base class, we'll build our Instructor class.
* Instructor uses the same attributes that have been set up by Person
* Instructor has the following unique props:
  * `specialty` what the Instructor is good at i.e. 'redux'
  * `favLanguage` i.e. 'JavaScript, Python, Elm etc.'
  * `catchPhrase` i.e. `Don't forget the homies`
* Instructor has the following methods:
  * `demo` receives a `subject` string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
  * `grade` receives a `student` object and a `subject` string as arguments and logs out '{student.name} receives a perfect score on {subject}'

#### Student

* Now we need some students!
* Student uses the same attributes that have been set up by Person
* Student has the following unique props:
  * `previousBackground` i.e. what the Student used to do before Lambda School
  * `className` i.e. CS132
  * `favSubjects`. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
* Student has the following methods:
  * `listsSubjects` a method that logs out all of the student's favoriteSubjects one by one.
  * `PRAssignment` a method that receives a subject as an argument and logs out that the `student.name has submitted a PR for {subject}`
  * `sprintChallenge` similar to PRAssignment but logs out `student.name has begun sprint challenge on {subject}`

#### Project Manager

* Now that we have instructors and students, we'd be nowhere without our PM's
* ProjectManagers are extensions of Instructors
* ProjectManagers have the following unique props:
  * `gradClassName`: i.e. CS1
  * `favInstructor`: i.e. Sean
* ProjectManagers have the following Methods:
  * `standUp` a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
  * `debugsCode` a method that takes in a student object and a subject and logs out `{name} debugs {student.name}'s code on {subject}`

#### Stretch Problem

* Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
* Now that our students have a grade build out a method on the Instructor (this will be used by _BOTH_ instructors and PM's) that will randomly add or subtract points to a student's grade. _Math.random_ will help.
* Add a graduate method to a student.
  * This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
  * If the student's grade is above a 70% let them graduate! Otherwise go back to grading their assignments to increase their score.


*/
// CODE here for your Lambda Classes
    class Person {
        constructor(attr)
        {
            this.name = attr.name;
            this.age = attr.age;
            this.location = attr.location;
            this.gender = attr.gender;
        }

        speak() {
            console.log(`my name is ${name} and I'm from ${location}`);
        }
    }

    class Instructor extends Person
        {
            constructor(instAttr)
            {
                super(instAttr);
                this.specialty = instAttr.specialty;
                this.favLang = instAttr.favLang;
                this.catchPhrase = instAttr.catchPhrase;
            }

            demo(subject)
            {
                console.log(`Tody we're learning about ${subject}`);
            }
            grade(subject, grade)
            {
                console.log(`${student.name} receives a perfect score on ${subject}`);
            }
        }
    
    class Student extends Person
        {
            constructor(stuAttr)
            {
                super(stuAttr);
                this.previousBackground = stuAttr.previousBackground;
                this.className = stuAttr.className;
                this.favSubjects = stuAttr.favSubjects;
            }
            
            listsSubjects()
            {
                return `${this.favSubjects}`;
            }

            PRAssignment(subject)
            {
                return `${this.name} has submitted a PR for ${subject}`
            }

            sprintChallenge(subject)
            {
                return `${this.name} has be has begun sprint challenge on ${subject}`;
            }

        }
        class PM extends Instructor
        {
            constructor(pmAttr)
            {
                super(pmAttr);
                this.gradClassName = pmAttr.gradClassName;
                this.favInstructor = pmAttr.favInstructor;
            }
            standUp(channel)
            {
                return `${this.name} announces to ${channel}, @channel standy times!`;
            }
            debugsCode(student, subject)
            {
                return `${this.name} debugs {student.name}'s code on ${subject}`;
            }

        }
        //PERSON
        const bill = new Person
        ({
            name: "Bill",
            age: 25,
            location: "none",
            gender: "Male"
        });

        const ted = new Person
        ({
            name: "Ted",
            age: 25,
            location: "none",
            gender: "Male"
        }); 
        //INSTRUCTOR
        const jack= new Instructor
        ({
            name: "Jack",
            age: 32,
            location: "undisclosed",
            gender: "Male",
            specialty: "teaching",
            favLang: "javascript",
            catchPhrase: "It's ya boy Jack"
        });

        //STUDENT
        const alan = new Student
        ({
            name: "Alan",
            age: 23,
            location:"Mesquite, TX",
            gender: "Male",
            previousBackground: "CS",
            className: "WEB18",
            favSubjects: ["HTML,CSS, JAVA"],
        });

        //PM
        const ben = new PM
        ({
            name: "Ben",
            age: "?",
            location: "USA",
            gender: "Male",
            specialty: "guiding",
            favLang: "Javascript",
            catchPhrase: "Whats poppn",
            gradClassName: "WEB15",
            favInstructor: "Josh"
        })
        //PERSON
        console.log(bill);
        console.log(ted);
        //INSTRUCTOR
        console.log(jack);
        //Student
        console.log(alan);
        console.log(alan.listsSubjects());
        console.log(alan.PRAssignment('Javascript'));
        console.log(alan.sprintChallenge('JAVASCRIPT I-IV'))

        //PM
        console.log(ben);
        console.log(ben.standUp('join the after hours'));
        console.log(ben.debugsCode(alan, 'Javascript'));