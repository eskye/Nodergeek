let age = 36;
const name = 'Max';
const hasHobbies = true;

age = 30;

const summarizeUser = (userName, userAge, userHasHobby) => {
    return (
        'Name is '+ userName
        + ', age is '+ userAge +
        ' and the user has hobbies: ' + 
        userHasHobby
    );
}

const addOne = a => a+1;
const addRandom = () => 3+1;
console.log(addOne(3));

console.log(summarizeUser(name,age,hasHobbies));