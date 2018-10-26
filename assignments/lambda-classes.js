// CODE here for your Lambda Classes

const john = new Humanoid({
    
});

const jane = new Humanoid({
    
});

const jimmy = new Humanoid({

});

const liz = new Humanoid({

});

const steph = new Humanoid({

});

/*
    #### Person

    * First we need a Person class. This will be our `base-class`
    * Person receives `name` `age` `location` `gender` all as props
    * Person receives `speak` as a method.
    * This method logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` and `location` are the object's own props   
*/

/* Person Class */
class Person {

    // Person Constructor
    constructor(person) {
        this.name = person.name;
        this.age = person.age;
        this.location = person.location;
        this.gender = person.gender;

    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`
    }
}

