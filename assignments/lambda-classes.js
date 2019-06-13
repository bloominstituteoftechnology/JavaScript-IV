// CODE here for your Lambda Classes
class person{
    constructor(attributes){
        this.name = attributes.name
        this.age = attributes.age
        this.location = attributes.location
    }
    speak(){
        return `Hello my name is ${name}, I am from ${location}.`
    }
}

class insturctor extends person{
    constructor(insAttr){

    }
}

class student extends person{
    constructor(stdAttr){

    }
}

class projectManager extends insturctor{
    constructor(pmAttr){

    }
}
