/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
function LambdaPersonnel(attributes){
    this.instructor = attributes.instructor;
    this.students = attributes.students;
    this.projectManagers = attributes.projectManagers;
}
LambdaPersonnel.prototype.learn = function(){
    return `${this.instructor}: teaches Javascript, ${this.students}`;
}
function Kids(attributes) {
    LambdaPersonnel.call(this, attributes);
}
Kids.prototype = Object.create(LambdaPersonnel.prototype);

const webeu4 = new LambdaPersonnel({
    instructor: 'Remi',
    students: 'webeu4',
    projectManagers: 'Matt Locklin',
});

console.log(webeu4);
