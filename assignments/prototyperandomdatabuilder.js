const names = ['Omar', 'Alexander', 'Timothy','Jonathan']
const ages = [18, 24, 65, 35, 45, 84, 7654, ]
const languages = ['Java', 'C#', 'c++', 'Python', 'JavaScript', 'HTML', 'CSS']
const locations = ['US', 'UK', 'DE', 'FR', 'IT', 'PT']
const genders = ['Male', 'Female', 'I live in California excuse you I am X Gendered, check the ID!']
const specialties = ['Object Oriented Programming', 'Functional Programming', ]

const propObj = {
    name: names,
    age: ages,
    language: languages,
    location: locations,
    gender: genders,
    specialty: specialties
  };
  
  class DumbData{
      constructor(propObj){
          for (const key in propObj) {
            const arr = propObj[key];
            this[key] = arr[Math.floor(Math.random() * arr.length)];
          }
        
    }

    setProperty(key, value){
        this[key] = value
    }
}

const generatedJSON = []
for (i = 0; i < 20; i++) {
    generatedJSON.push(new DumbData(propObj))
}

console.log(generatedJSON);
