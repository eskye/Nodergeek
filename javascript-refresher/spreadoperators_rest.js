const person = {
    name: 'Max',
    age: 29,
    greet(){
        console.log("Hi I am " + this.name);
    }
};

const copiedPerson = {...person};
console.log(copiedPerson);

 const hobbies = ['Sports', 'Cooking'];
 hobbies.push('programming');
 const copiedArray = [...hobbies];
 console.log(copiedArray);

 const toArray = (arg1, arg2,arg3) =>{
     return [arg1, arg2, arg3];
 } // Old approach
//Using rest operator
const toArrayRest = (...args) =>{
    return args;
}
 console.log(toArrayRest(1,2,4, 233, ['22d','rfrr','eede']));