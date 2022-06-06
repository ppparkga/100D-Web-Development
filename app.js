let age = 32;
let userName = 'Max';
let hobbies = ['sports', 'cooking', 'reading'];
let job = { 
    title: 'Developer', 
    place: 'New York',
    alary: 50000 
};

let totalAdultYears;

function calculateAdultYears(userAge) {
    let result;
    result = userAge - 18;
    return userAge - 18;
}

totalAdultYears = calculateAdultYears(age);
console.log(totalAdultYears);


age = 45;
totalAdultYears = calculateAdultYears(age);

console.log(totalAdultYears); 

let person = {
    name: 'Max', //property
    greet() { //method
        console.log('Hello!');
    }   
};

person.greet();
