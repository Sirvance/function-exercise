// Medium

// Write a function that takes in an array of numbers and returns a new array with only the even numbers.
function getEvenNumbers(numbers) {
  return numbers.filter(number => number % 2 === 0);
 }
  // Your code here

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(getEvenNumbers(numbers)); // Output: [2, 4, 6, 8, 10]


// Write a function that takes in a string and returns a new string with the first letter of each word capitalized.
function capitalizeFirstLetter(str) {
  const words = str.split('');
  const capitalizedWords = words.map(word => {
    constfirstLetter = word.charAt(0).toUpperCase();
    const restofWord = word.slice(1)
    returnv firstLetter + restofWord;
  }));
  // Your code here
  return capitalizedWords.join('');
}

const str = 'the quick brown fox jumps over the lazy dog';

console.log(capitalizeFirstLetter(str)); // Output: 'The Quick Brown Fox Jumps Over The Lazy Dog'


// Write a function that takes in an array of objects representing people, and returns a new array with only the people who are over 30 years old.
function getPeopleOver30(people) {
  return people.filter(person) => person.age > 30);
}
  // Your code here


const people = [
    { name: 'John', age: 32 },
    { name: 'Mary', age: 25 },
    { name: 'David', age: 42 },
    { name: 'Sarah', age: 28 }
  ];
  
console.log(getPeopleOver30(people)); // Output: [{ name: 'John', age: 32 }, { name: 'David', age: 42 }]
