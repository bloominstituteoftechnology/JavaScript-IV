// CODE here for your Lambda Classes
const fred = new Instructor({
    name: 'Josh',
    location: 'Pheonix',
    age: 34,
    gender: 'male',
    favLanguage: 'CSS',
    specialty: 'Front-end',
    catchPhrase: `Isn't that awesome guys?`
  });

  const dustin = new Instructor({
    name: 'Dustin',
    location: 'San Diego',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `It's in the training kit`
  });

  const megan = new Student({
    name: 'Megan',
    location: 'Austin',
    age: 32,
    gender: 'female',
    previousBackground: 'Vape Industry',
    className: 'FSW16',
    favSubjects: ['HTML', 'CSS', 'JavaScript']
  });

  const sam = new Student({
    name: 'Sam',
    location: 'OKC',
    age: 37,
    gender: 'male',
    previousBackground: 'Medical',
    className: 'FSW16',
    favSubjects: ['CSS', 'HTML']
  });

  const taylor = new Student({
    name: 'Taylor',
    location: 'Colorado Springs',
    age: 33,
    gender: 'female',
    previousBackground: 'Military',
    className: 'FSW16',
    favSubjects: ['HTML', 'CSS', 'JavaScript']
  });

  const david = new ProjectManager({
    name: 'David',
    location: 'Denver',
    age: 34,
    gender: 'male',
    gradClassName: 'CS9',
    favInstructor: 'Dustin',
  });

  const fred = new ProjectManager({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    gradClassName: 'CS6',
    favInstructor: 'Josh',
  });