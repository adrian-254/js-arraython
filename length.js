// Array.length returns the length of the array

// Counting items in an array
const fruit = ["bananas", "apples", "Peas", "lemon", "nuts"];
const fruit_quantity = fruit.length;
console.log(fruit_quantity);


// Count even numbers in an array
let numbers = [3, 6, 8, 11, 14, 17, 20];
const even_no = numbers.filter(numbers => numbers % 2 === 0)
console.log(even_no.length)


// Count Unique Words in an Array 
let words = ["apple", "banana", "apple", "orange", "banana", "mango", "mango", "grape"];
let duplicate_words= words.filter((a,b) => words.indexOf(a)===b)
console.log(duplicate_words.length);


// Challenge: Longest Word in an Array
let home = ["tree", "refrigerator", "cat", "international", "cup"];
let longest_word = home.reduce((longest, current)=> {
    return current.length > longest.length ? current : longest
});
console.log(longest_word)