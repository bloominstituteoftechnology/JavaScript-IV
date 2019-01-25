// Properties pool for random selection
const names = ['Omar', 'Alexander', 'Timothy','Jonathan']
const ages = [18, 24, 65, 35, 45, 84, 7654, ]
const languages = ['Java', 'C#', 'c++', 'Python', 'JavaScript', 'HTML', 'CSS']
const locations = ['US', 'UK', 'DE', 'FR', 'IT', 'PT']
const genders = ['Male', 'Female', 'I live in California excuse you I am X Gendered, check the ID!']
const specialties = ['Object Oriented Programming', 'Functional Programming', ]
// This is the object that stores all the arrays to be passed into the constructor
const propObj = {
    name: names,
    age: ages,
    language: languages,
    location: locations,
    gender: genders,
    specialty: specialties
  };
// Class selector to build the New Object
  class CreateRandomObject{
      constructor(propObj){
          //Iterates through each key assigned to an array
          for (const key in propObj) {
            //Accesses data stored in the selected array
            const arr = propObj[key];
            //Returns a randomly selected index within the selected
            this[key] = arr[Math.floor(Math.random() * arr.length)];
          }
        
    }
    // Define a New property for specific instance.
    setProperty(key, value){
        this[key] = value
    }
}
// Array Used to store new random objects
const generatedJSON = []

// Generate 20 new random Objects
for (i = 0; i < 20; i++) {
    // Invoke a new instance of CreateRandomObject and store it in generatedJSON 
    generatedJSON.push(new CreateRandomObject(propObj))
}
// Te
console.log(...generatedJSON);
