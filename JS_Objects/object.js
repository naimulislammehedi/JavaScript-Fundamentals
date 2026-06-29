// A JavaScript object is a collection of key-value pairs used to store related data and functions in one place 

const person = {
    name: "Mehedi", 
    age: 25, 
    country: "Bangladesh",
    // objects can store functions
    greet: function () {
        console.log("Hello"); 
    }
}

console.log(person)

// dot notation 
console.log(person.name); 
console.log(person.age); 

// bracket notation 
console.log(person["name"]); 

// used bracket notation when the property name is stored in a variable 
const key = "age"; 
console.log(person[key]); 

// add a new property 
person.job = "Web Developer"; 
console.log(person); 

// update a property 
person.age = 26; 
console.log(person.age); 

// delete a property 
delete person.country; 
console.log(person); 

person.greet(); 
 
