// // CODE here for your Lambda Classes
// function LambdaPersonnel(attributes){
//     this.instructor = attributes.instructor;
//     this.students = attributes.students;
//     this.projectManagers = attributes.projectManagers;
// }
// LambdaPersonnel.prototype.learn = function(){
//     return `${this.instructor}: teaches Javascript, ${this.students}`;
// }
// function Kids(attributes) {
//     LambdaPersonnel.call(this, attributes);
// }
// Kids.prototype = Object.create(LambdaPersonnel.prototype);

// const webeu4 = new LambdaPersonnel({
//     instructor: 'Remi',
//     students: 'webeu4',
//     projectManagers: 'Matt Locklin',
// });

// console.log(webeu4);

class LambdaPersonnel{
    constructor (attributes){
        this.instructor = attributes.instructor;
        this.students = attributes.students;
        this.projectManagers = attributes.projectManagers;
    }
}
const webeu4 = new LambdaPersonnel({
    instructor: 'Remi',
    students: 'webeu4',
    projectManagers: 'Matt Locklin',
});
console.log(webeu4);