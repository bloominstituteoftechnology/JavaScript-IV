// CODE here for your Lambda Classes



/*
 
                                                                                             _____                           _                                                                                    
   _____ _____ _____ _____ _____ _____ _____ _____ _____ _____ _____ _____ _____ _____ _____| ____|_  ____ _ _ __ ___  _ __ | | ___ _____ _____ _____ _____ _____ _____ _____ _____ _____ _____ _____ _____ _____ 
  |_____|_____|_____|_____|_____|_____|_____|_____|_____|_____|_____|_____|_____|_____|_____|  _| \ \/ / _` | '_ ` _ \| '_ \| |/ _ \_____|_____|_____|_____|_____|_____|_____|_____|_____|_____|_____|_____|_____|
  |_____|_____|_____|_____|_____|_____|_____|_____|_____|_____|_____|_____|_____|_____|_____| |___ >  < (_| | | | | | | |_) | |  __/_____|_____|_____|_____|_____|_____|_____|_____|_____|_____|_____|_____|_____|
                                                                                            |_____/_/\_\__,_|_| |_| |_| .__/|_|\___|                                                                              
                                                                                                                      |_|                                                                                         
 
*/


////////////////////////////////////////////////
//                                            //
// const fred = new Instructor({              //
//     name: 'Fred',                          //
//     location: 'Bedrock',                   //
//     age: 37,                               //
//     gender: 'male',                        //
//     favLanguage: 'JavaScript',             //
//     specialty: 'Front-end',                //
//     catchPhrase: `Don't forget the homies` //
// });                                        //
////////////////////////////////////////////////



  class Person {
    constructor(base){
        this.name = base.name;
        this.age = base.age;
        this.location = base.location;
        this.gender = base.gender;

    speak () ;{
      return (`Hello, my name is ${this.name}, and I am from ${this.location}`);
      }

    }
  }


  class Instructor extends base {
    constructor(instructorBase){
        super(instructorBase);
        this.favLanguage = instructorBase.favLanguage
        this.catchPhrase = instructorBase.catchPhrase


    }
    
  }