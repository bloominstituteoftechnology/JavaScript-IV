class Lambda{
    constructor (attributes){
        this.instructor = attributes.instructor;
        this.students = attributes.students;
        this.projectManagers = attributes.projectManagers;
    }
}
const webeu5 = new Lambda({
    instructor: 'Remi',
    students: 'webeu5',
    projectManagers: 'Matt Locklin',
});
let webeu6 = new Lambda({
    instructor: 'Petar',
    students: 'webeu6',
    projectManagers: 'Debra',
});
console.log(webeu4);
console.log(webeu6);
