// CODE here for your Lambda Classes

class person{
    constructor(attribute){
        this.name = attribute.name;
        this.age = attribute.age;
        this.location = attribute.location
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}`
    }
}

class instructor extends person{
    constructor(attributing){
        this.specialty = attributing.specialty;
        this.favLanugage = attributing.favLanugage;
        this.catchPhrase = attributing.catchPhrase;

        console.log('we are learning about',subject);
        console.log('the grade for ',this.name, 'for this',subject,);
    }
}

class students extends person{
    constructor(attributing){
        this.previousBackground = attributing.previousBackground;
        this.className = attributing.className;
        this.favSubjects = attributing.favSubjects;

        console.log(`my favourtie subject ${this.favSubjects}`);
        console.log(`my favourtie subject ${this.favSubjects}`);
        console.log(`my favourtie subject ${this.favSubjects}`);


    }

    listsSubjects(){
        return `My favourite subject is ${this.favSubjects}` 
    }
    PRAssignment(){
        returns `${this.name} has submitted a PR for ${this.subject}`
    }
    sprintChallenge(){
        return `${this.name} has began sprint challenge for ${this.subject}`
    }

}

class PMs extends instructor{
    constructor(attributes){
        this.gradClassName = attribute.gradClassName;
        this.favInstructor = attribute.favInstructor;
    }
    standUp(){
        return `${this.name}, announces ${this.channel}`
    }

    debugsCode(){
        return `${this.name}, debugs ${this.subject}`
    }
}