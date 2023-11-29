function wrapperFunction(anythingElse, secondOne) {

    return anythingElse() + secondOne();
}

function callbackFunction() {
    console.log("It's alive");
}
function otherFunction() {
    console.log("It's alive as well");
}


wrapperFunction(callbackFunction, otherFunction)