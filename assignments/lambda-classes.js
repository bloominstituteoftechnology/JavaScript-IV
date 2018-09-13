// CODE here for your Lambda Classes

class Erica{
    constructor(attributes){
        this.name=attributes.name;
        this.age=attributes.age;
        this.location=attributes.location;
        this.gender=attributes.gender;
    }
    speak(){
        return 'Hola, mi nombre es ${this.name},im'
    }
} 