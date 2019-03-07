const person = {
    name: 'Max',
    age: 29,
    greet(){
        console.log("Hi I am " + this.name);
    }
};

 const hobbies = ['Sports', 'Cooking'];
//  for(let hobby of hobbies){
//      console.log(hobby)
//  }
 console.log(hobbies.map(hobby => "Hobby: " + hobby));  //Allows you to transform array and create a new array;
 console.log(hobbies);