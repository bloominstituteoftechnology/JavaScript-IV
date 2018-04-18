# JavaScript IV

This challenge focuses on classes in JavaScript using the new `class` keyword.

## Assignment Description

You already pretty much know all about classes but you're used to seeing them built in the following context:

```
function Person(personAttributes)  {
  this.name = personAttributes.name;
  this.age = personAttributes.age;
  this.location = personAttributes.location;
}

const fred = new Person({
  name: 'Fred',
  age: 37,
  location: 'Bedrock'
});
```

* Because none of the above code is new, you're about to see your world get much much easier when dealing with Object Creation and Classical Inheritance as it pertains to JavaScript.
* The Class Keyword makes this SO MUCH EASIER!
* **Fork** and clone this repository.
* **Complete** all of the exercises found in the assignment files.

### `prototype-refactor` - Take existing code and make it modern, extending it in turn

* You're going to work with your prototypes assignment you built out yesterday. Only this time you're going to actually have a solution built out for you.
* `Challenge 1 : Convert` all of your constructors into Classes using the `class` and `extends` keywords. You should be able to run your same logs and build out your same objects as necessary.
* Now we're going to extend this project by adding a couple of extra pieces of functionality to your game objects.
* **[TODO FILL IN EXTRA CHALLENGE - SHOULD BE STRETCH?]**

### `lambda-classes` - We need a roster of Lambda School personnel. Build it!

* All of the instructions you'll need for this project can be found in the `lambda-classes` file. But here is an overview of what we're trying to achieve here.

* We have a school to build here! This project will get you used to thinking about classes in JavaScript and building them from a brand new data set.
* Lambda personnel can be broken down into three different types of `people`.
  * **Instructors** - extensions of Person
  * **Students** - extensions of Person
  * **Project Managers** - extensions of Instructors
* **note** of course we know there are a lot more people on staff but you're just responsible for creating these three types.
* We need a main parent class called - `Person`.
* Instructors and Students are both children of `Person`.
* ProjectManagers are extensions of Instructors.
* This image might help you in designing your objects:
* ![Diagram](https://ibin.co/3yqgRQqoGxby.png)
