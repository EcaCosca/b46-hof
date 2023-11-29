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

