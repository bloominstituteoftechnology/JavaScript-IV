// CODE here for your Lambda Classes
class Person {
    constructor(name, location, age, gender) {
        this.name = name;
        this.location = location;
        this.age = age;
        this.gender = gender;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`
    }
}

class Instructor extends Person {
    constructor(name, location, age, gender, favLanguage, speciality, catchPhrase) {
        super(name, location, age, gender);
        this.speciality = speciality;
        this.favLanguage = favLanguage;
        this.catchPhrase = catchPhrase;
    }

    demo(subject) {
        return `Today we are learning about ${subject}`
    }

    grade(studentObj, subject) {
        return `${studentObj.name} receives a perfect score on ${subject}`
    }
}

class Student extends Person {
    constructor(name, location, age, gender, previousBackground, className, favSubjects, grade) {
        super(name, location, age, gender);
        this.previousBackground = previousBackground;
        this.className = className;
        this.favSubjects = favSubjects;
        this.grade = 100;
    }

    randomMethod() {
        let res = this.grade - Math.floor((Math.random() * Math.floor(Math.random() * 100)));
        return `${res}`;
    }

    graduateMethod(randomMethod) {
        let str = "";
        if (randomMethod >= 70) {
            str = "success, you will graduate";
        } else {
            str = "You have to try again";
        }
        return str;
    }

    listsSubjects(favSubjects) {
        for (let i = 0; i < favSubjects.length; i++) {
            console.log(favSubjects[i]);
        }
    }

    PRAssignments(subject) {
        return `${this.name} has submitted a PR for ${subject}`
    }

    sprintChallenge() {
        return `${this.name} has begun sprint challenge on ${this.subject}`
    }
}

class ProjectManager extends Instructor {
    constructor(name, age, location, gender, speciality, favLanguage, catchPhrase, gradeClassName, favInstructor) {
        super(name, age, location, gender, speciality, favLanguage, catchPhrase);
        this.gradeClassName = gradeClassName;
        this.favInstructor = favInstructor;

    }

    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!​​​​​`
    }

    debugsCode(stdObject, subject) {
        return `${stdObject.name} debugs ${this.name}'s code on ${subject}`

    }
}

const person = new Person("Raw3a", "Finland", 999, "M")
console.log(person.speak());

const instructor = new Instructor("Vandam", "Sweden", 999, "M", "Arabic", "Mid food", "never give up");
console.log(instructor.speak());
console.log(instructor.demo("Math"));
console.log(instructor.grade(new Student("Ghizlan", "IRELAND", 100, "M", "JAVA", "JAVA"), "JAVA"));

let favSbubjectArray = ["Math", "Physics", "Arabic", "history", "Astronomy"];
const student = new Student("Brianna", "Germany", 1000, "M", "Python", "programming-III", favSbubjectArray);
student.listsSubjects(favSbubjectArray);
console.log(student.PRAssignments("Astronomy"))
console.log(student.sprintChallenge())
console.log(student.speak());

let projectManager = new ProjectManager("x-Men", 88, "Arlington,Va", "F", "Python",
    "arrogance mixed with ignorance will take you a long way lol hahahah", "C language", "hulk");
console.log(projectManager.demo("c language"));
console.log(projectManager.grade(new Student("Stalon", "scandinavia", 1000, "M", "JAVA", "programming-III", favSbubjectArray), "Arabic"));
console.log(projectManager.standUp("FSW16"));
console.log(projectManager.debugsCode(new Student("Brianna", "Germany", 1000, "M", "Python", "programming-III", favSbubjectArray), "Physics"));

console.log("========================================Stretches====================================================")

let std2 = new Student("Mathieu", "France", 500, "M", "Architecture", "linear Algebra");
res = std2.randomMethod();
console.log("Your current automatic grade is " + res);
console.log(std2.graduateMethod(res));