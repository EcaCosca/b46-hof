// function wrapperFunction(anythingElse) {
//     const randomNumber = Math.random();
//     console.log(randomNumber);

//     const condition = randomNumber > 0.5 ? true : false;
//     console.log(condition)

//     return condition && anythingElse();
// }

// function callbackFunction() {
//     console.log("It's alive");
// }



// wrapperFunction(callbackFunction)


// const newWrapperFunk = (argumentFunk) => {
//     argumentFunk("Watch me!");
//     argumentFunk("I've got it");
//     argumentFunk("Ough!");
//     argumentFunk("Yeah!");
//     argumentFunk("Funky now!");
// }


// const aFunk = (argument) => {
//     console.log("Funky "+argument);
// }


// newWrapperFunk(aFunk)

// const makeIncrementer = (increment) => {
//     return (value) => {
//         return increment * value
//     }
// }

// const multiplyBy2 = makeIncrementer(2)
// const multiplyBy3 = makeIncrementer(3)


// console.log(multiplyBy2(10));
// console.log(multiplyBy2(457));

// ARRAY METHODS

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const fruits = ["apple", "banana", "orange", "pear", "grape", "pineapple", "mango", "kiwi", "strawberry"];

for(let i = numbers.length-1; i >= 0; i--) {
    console.log(numbers[i]);
}
console.log("DONE!");

// forEach
// https://www.w3schools.com/jsref/jsref_foreach.asp
// numbers.forEach((ANYTHING)=>{console.log(ANYTHING)})
// fruits.forEach((ANYTHING)=>{console.log(ANYTHING)})

// map 
// https://www.w3schools.com/jsref/jsref_map.asp
const newFruits = fruits.map((fruit)=>{return fruit.toUpperCase()})
// console.log(newFruits);
// console.log(fruits);

// filter
// https://www.w3schools.com/jsref/jsref_filter.asp
const filteredNumbers = numbers.filter((number)=>{return number > 5})
// console.log(filteredNumbers);
const bananaFilter = fruits.filter((fruit)=>{return fruit != "banana"})
// console.log(bananaFilter);

// sort
// https://www.w3schools.com/jsref/jsref_sort.asp
// console.log(fruits);
fruits.sort()
// console.log(fruits);
fruits.reverse()
// console.log(fruits);

let sortAsc = [23, 56, 1, 5, 2, 5, 8].sort((a,b)=>{return a-b})
// console.log(sortAsc);

let sortDesc = sortAsc.sort((a,b)=>{return b-a})
// console.log(sortDesc);

let nestorArray = ["banana", 1, 3, "pear", 5, "apple", 2, "mango"]
console.log(nestorArray.sort().reverse().sort().reverse().sort());

// find
// https://www.w3schools.com/jsref/jsref_find.asp
const foundBanana = fruits.find((fruit)=>{return fruit === "banana"})
const foundTomato = fruits.find((fruit)=>{return fruit === "tomato"})

// reduce
// https://www.w3schools.com/jsref/jsref_reduce.asp
const newNumbers = [100, 150, 250, 300]
const sum  = newNumbers.reduce((accumulator, currentValue)=>{return accumulator + currentValue}, 10)

console.log(sum);