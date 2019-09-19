function Parent(attributes) {
    this.gender = attributes.gender;
    this.age = attributes.age;
    this.name = attributes.name;
    this.homeTown = attributes.homeTown
}

function Child(attributes) {
    Parent.call(this, attributes); // binding to Parent
    this.isChild = attributes.isChild; // a special attribute to Child

}

Parent.prototype.yabbaDabba = function () {
    return 'Yabba dabba doo!';
};

Parent.prototype.speak = function () {
    return `Hello, my name is ${this.name}`;
};

Child.prototype = Object.create(Parent.prototype);
Child.prototype.checkIfChild = function () {
    return `My name is ${this.name}.`;// \nAm I a Child?  ${pebbles instanceof Child}.\nAm I a Parent? ${pebbles instanceof Parent}.`;
};





const fred = new Parent({ gender: 'Male', age: 35, name: 'Fred', homeTown: 'Bedrock' });

const wilma = new Parent({ gender: 'Female', age: 37, name: 'Wilma', homeTown: 'Bedrock' });

const pebbles = new Child({ gender: 'Female', age: 3, name: 'Pebbles', homeTown: 'Bedrock', isChild: true });

console.log("***** Child *****");
console.log("5.", pebbles);
console.log("6.", pebbles.speak());
console.log("7.", pebbles.checkIfChild());
console.log("8.", pebbles.yabbaDabba());