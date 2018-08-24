// CODE here for your Lambda Classes

//****** NOTE: I put it all in a function so i cant ever *********/
//******     accidentally create global variables                  */
//*****      Let me know if this is not OK                       */
//************************************************************** */
function school() {
    //**** Variables ****/
    let instructorThis = "";            //kind of messy way of calling sibling functions 
    let studentThis = "";               //kind of messy way of calling sibling functions
    let isReady = false;

    class Person {
        constructor(stats) {
            this.name = stats.name;
            this.age = stats.age;
            this.gender = stats.gender;
            this.location = stats.location;
            this.grade = stats.grade
        }
        speak() {
            return `Hello my name is ${this.name}, I am from ${this.location}`
        }
    };

    class Instructor extends Person {
        constructor(isGoodAt) {
            super(isGoodAt)
            this.specialty = isGoodAt.specialty;
            this.favLanguage = isGoodAt.favLanguage;
            this.catchPhrase = isGoodAt.catchPhrase;
            this.student = isGoodAt.student;
            instructorThis = this;                                     //save the 'this' value for the instructor
        }
        demo() {
            return `Today we are learning about ${this.specialty}`;
        }
        grades() {
            return `${this.name} receives a perfect score on ${this.specialty}`;
        }
        addPoints(origPoints) {                                        //instructor adds new random scores to current student grade
            let newPoints = Math.floor(Math.random() * (100 - 1)) + 1;
            console.log(`${studentThis.name}'s grade was ${origPoints} and now after new grade is added, it is ${origPoints += newPoints}% `);
            return origPoints;                                         //returns the new student grade to graduate function in student
        }
        checkGrades() {                                                //uses the 'this' from the student to run the graduate function
            let gradFlag = studentThis.graduate(studentThis.grade);    //checks the graduation flag
            if (gradFlag) {
                return `It's time to graduate, your grade is ${studentThis.grade}%.`;
            }

            return `${studentThis.name} isnt ready to graduate yet`;
        }
    };

    class Student extends Person {
        constructor(details) {
            super(details)
            this.previousBackground = details.previousBackground;
            this.className = details.className;
            this.favSubject = details.favSubject;
            this.instructor = details.instructor;
            this.pm = details.pm;
            studentThis = this;                                        //save the 'this' value for the student
        }

        listSubject() {
            return `${this.favSubject}`;
        }

        PRAssignment() {
            return `${this.name} has submitted a PR for ${this.favSubject}`;
        }
        sprintChallenge() {
            return `${this.name} has begun sprint challenge on ${this.favSubject}`;
        }
        //checks the grade and returns true if ready for graduation
        graduate(origPoints) {
            if (origPoints > 70) {
                isReady = true;                               
                return isReady;
            } else {
                this.grade = instructorThis.addPoints(origPoints); //not ready to graduate so instrctor checks grades again
                if (this.grade > 70) {
                    return isReady = true;
                }
                return false;
            }
        }
    };

    class ProjectManagers extends Instructor {
        constructor(manDetails) {
            super(manDetails)
            this.gradClassName = manDetails.gradClassName;
            this.favInstructor = manDetails.favInstructor;
        }
        standUp() {
            return `${this.name} announces to channel, @channel study times!`;
        }
        debugsCode() {
            return `${this.name} debugs ${studentThis.name}'s code on ${this.specialty}.`;
        }
    };

    const burt = new Student({
        name: 'burt',
        age: 21,
        gender: 'male',
        location: 'California',
        grade: 60,
        instructor: 'beulah',
        pm: 'raymond',
        previousBackground: 'electrician',
        className: 'CS2',
        favSubject: ['JS', 'Science']
    });

    const beulah = new Instructor({
        name: 'beulah',
        age: 42,
        gender: 'female',
        location: 'California',
        grade: 80,
        student: 'burt',
        specialty: 'physical education',
        favLanguage: 'english',
        catchPhrase: 'Whats up'
    });

    const raymond = new ProjectManagers({
        name: 'raymond',
        age: 23,
        gender: 'male',
        location: 'Notsureville',
        grade: 90,
        student: 'burt',
        specialty: 'JavaScript',
        favLanguage: 'JS',
        catchPhrase: 'PM me if you need help',
        gradClassName: 'CS1',
        favInstructor: 'buelah'
    });

    console.log(burt.speak());
    console.log(burt.listSubject()); 
    console.log(raymond.specialty);
    console.log(beulah.demo());
    console.log(raymond.standUp());
    console.log(raymond.debugsCode());
    console.log(beulah.checkGrades()); //checks the grades and is initiated by the instructor

};

school();
