// CODE here for your Lambda Classes
class Person {
    constructor (personParams) {
       this.name = personParams.name ;
       this.age = personParams.age ;
       this.location = personParams.location ;
       this.gender = personParams.gender ;
    }
    speak(){
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`) ;
    }
}

class Instructor extends Person {
    constructor (instructorParams) {
        super(instructorParams) ;
            this.specialty = instructorParams.specialty ;
            this.favLanguage = instructorParams.favLanguage ;
            this.catchPhrase = instructorParams.catchPhrase ;
    }
    demo(subject){
        console.log (`Today we are learning about ${subject}!`) ;
    }
    grade(student, subject){
        console.log (`${student.name} receives a perfect score on ${subject}.`) ;
    }
    /* strech */
    applyGrade(student){
        let newGrade = student.grade ;
        let randomGrade = Math.floor(Math.random()*100) ;
        let negOrPosNum = Math.random() < 0.5 ? -1 : 1 ;
        newGrade = newGrade + (randomGrade * negOrPosNum) ;
        if (newGrade >= 100){
            return student.grade = 100 ;
        }else if(newGrade < 0){
            return student.grade = 0 ;
        }else{
            return student.grade = newGrade ;
        }        
    }
}

class Student extends Person {
    constructor (studentParams) {
        super(studentParams) ;
            this.previousBackground = studentParams.previousBackground ;
            this.className = studentParams.className ;
            this.favSubjects = studentParams.favSubjects ;
            /* strech */
            this.grade = studentParams.grade;
    }

    listsSubjects(){

        let newArr = [];

        for(let i=0; i < this.favSubjects.length; i++){            
            newArr.push(this.favSubjects[i]) ;
        }
        console.log(`${this.name}s favourite subjects are ${newArr}`) ;
        
        return newArr ;
    }

    PRAssignment(subject)
    {
        console.log((`${this.name} has submitted a PR for ${subject}!`)) ;
    }
    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
        /* strech */
    graduate(student){
        if (this.grade > 70){
            console.log(`${this.name} is cleared for takeoff!`) ;
        }else {
            console.log(`Back to the drawing board!`) ;
        }
    }
}

class PM extends Instructor {
    constructor(pmParams){
        super(pmParams) ;
            this.gradClassName = pmParams.gradClassName ;
            this.gradClassName = pmParams.favInstructor ;
    }
    standUp(slackChannel){
        console.log(`${this.name} announces to ${slackChannel}, @channel standy times!​​​​​`) ;
    }
    debugsCode(student, subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`) ;
    }
}
const tristan = new Student({
    //props from parent
    name: 'Tristan',
    age: 34,
    gender: true,
    //props from child
    favSubjects: ['html', 'css', 'js']
});
const haywood = new PM({
    name: 'Haywood' 
});
const josh = new Instructor ({
    catchPhrase: 'deep dive'
})
tristan.listsSubjects();//?
const randomValueInArray = function (array) {
    return array[Math.floor(Math.random()*array.length)] ;//?
}
tristan.PRAssignment(randomValueInArray(tristan.favSubjects))//*?
tristan.sprintChallenge('excellence');//*?
haywood.debugsCode(tristan,'javaScript'); //*?
josh.demo(josh.catchPhrase);//*?

/* strech */
tristan.grade = 85;
console.log(josh.applyGrade(tristan));//*?
tristan//?
tristan.graduate();//*?

