class LambdaPersonnel{
    constructor (attributes){
        this.instructor = attributes.instructor;
        this.students = attributes.students;
        this.projectManagers = attributes.projectManagers;
    }
}
let webeu4 = new LambdaPersonnel({
    instructor: 'Remi',
    students: 'webeu4',
    projectManagers: 'Matt Locklin',
});
console.log(webeu4);