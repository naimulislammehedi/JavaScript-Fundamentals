let fruits = ["Apple", "Banana", "Mango"]; 
console.log(fruits); 

// accessing array elements 
console.log(fruits[0]); 
console.log(fruits[1]); 

// changing an array element 
fruits[0] = "Orange"; 
console.log(fruits)

// finding array length
console.log(fruits.length); 

// adding elements 
fruits.push("Apple"); 
console.log(fruits); 
fruits.unshift("Watermelon"); 
console.log(fruits); 

// Removing elements 
fruits.pop(); 
console.log(fruits); 

fruits.shift(); 
console.log(fruits); 

// loop through an array 
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]); 
}


// arrays can store different data types 
let data = [
    "Mehedi", 
    25, 
    true, 
    null, 
    {city: "Dhaka"}
]

console.log(data); 

// nested arrays 
let numbers = [
    [1, 2], 
    [3, 4], 
    [5, 6]
]

console.log(numbers); 