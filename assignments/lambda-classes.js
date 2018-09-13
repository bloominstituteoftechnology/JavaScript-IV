class Person {
    construction(attributes){
        this.age = attributes.age;
        this.name = attributes.name;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`
    }
}
