// CODE here for your Lambda Classes
class Person{
    constructor(personAttribute){
        this.name=personAttribute.name;
        this.age=personAttribute.name;
        this.location=personAttribute.name;
        this.gender= personAttribute.name;
    }
    speak(){
        return `Hello my name is $this.name`
    }
}
