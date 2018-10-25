// CODE here for your Lambda Classes
//#### Person

// * First we need a Person class. This will be our `base-class`
// * Person receives `name` `age` `location` `gender` all as props
// * Person receives `speak` as a method.
// * This method logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` and `location` are the object's own props

class Person {
    constructor (personAttributes) {
        this.name = personAttributes.name
        this.age = personAttributes.age
        this.location = personAttributes.location
        this.gender = personAttributes.gender
    }
    speak () {
        console.log (`Hello my name is ${this.name}. I am from ${this.location}.`)
    }
}
