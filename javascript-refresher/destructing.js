const person = {
    name: 'Max',
    age: 29,
    greet(){
        console.log("Hi I am " + this.name);
    }
};
//Traditional Way
//  const printName = (person) =>{
//      console.log(person.age)
//  }

 //Using Destructing of Object Destructing
 const printName = ({name}) =>{
     console.log(name);
 }
 printName(person);
 const { name, age} = person;
 console.log(name, age);

 //Destructing of Arrays

 const hobbies = ['Sports', 'Programming'];

 const [hobby1, hobby2] = hobbies;
 console.log(hobby1, hobby2);