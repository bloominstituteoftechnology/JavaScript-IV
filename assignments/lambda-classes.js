// CODE here for your Lambda Classes

const fred = new Parent({
  age: 35,
  name: 'Fred',
  location: 'Bedrock',
  phrase: 'Yabba dabba doo!'
});

const willma = new Parent({
  age: 37,
  name: 'Willma',
  location: 'Bedrock',
  phrase: 'Fred!'
});

const pebbles = new Child({
    age: 1,
    name: 'Pebbles',
    location: 'Bedrock',
    phrase: 'Ma ma!',
    toy: 'rock doll'
  });
  
  
  const fruity = new grandChild({
    age: .5,
    name: 'Coco',
    location: 'cerealville',
    phrase: 'Da Da!',
    toy: 'shaker',
    gift: "new spoon"
  });
  
  console.log(fred.speak());
  console.log(willma.speak());
  
  console.log(pebbles.speak());
  console.log(pebbles.saySomething('hi'));
  console.log(pebbles.play());
  console.log(fruity.gift());
  // console.dir(Parent);