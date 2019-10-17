// CODE here for your Lambda Classes
class borkers{
    constructor(attributes){
        this.name = attributes.name;
        this.size = attributes.size;
        this.weight = attributes.weight;
        this.habitat = attributes.habitat;
        this.color = attributes.color;
        this.food = attributes.food;
        this.sound = attributes.sound;
    } 
    eat(){
        return `${this.name} goes to the park to eat ${this.food}`;
    }
}
const flork = new borkers({
    name: 'borky bork',
    size: 'big tall',
    weight: 'smol',
    habitat: 'with the borker',
    color: 'soft',
    food: 'candy',
    sound: 'snerp snerp snerp',
});
console.log(borkers);
console.log(flork);