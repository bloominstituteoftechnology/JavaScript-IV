// CODE here for your Lambda Classes
// -----------Person Class-----------
class Person {
	constructor(human) {
		this.name = human.name;
		this.age = human.age;
		this.location = human.location;
		this.gender = human.gender;
	}

	speak() {
		return `Hello my name is ${this.name}, I am from ${this.location}.`;
	}
}
