// CODE here for your Lambda Classes

// Set up LambdaAssociate as head class
// Need Instructor, student & PM classes

class LambdaAssociate{
	constructor(Name,Age,Location,Gender,Speak){
		this.Name = Name;
		this.Age = Age;
		this.Location = Location;
		this.Gender = Gender;
		this.Speak = function(){
			return `Hello my name is ${this.name} I am from ${this.Location}.`;};
		}
	}

class Instructor extends LambdaAssociate{
	constructor(specialty,favLanguage,catchPhrase,demo,grade){
		super(Name,Age,Location,Gender,Speak);
		this.specialy = specialy;
		this.favLanguage = favLanguage;
		this.catchPhrase = catchPhrase;
		this.demo = demo;	
		this.grade = grade;
	}
}

const TestBoi = new Instructor;
TestBoi.grade = "F";


console.log(LambdaAssociate);		// Test that parent class works
console.log(LambdaAssociate.Name); 	// Should be "undefined"

console.log(TestBoi.grade);





