// QUESTION 1

for(var i = 5; i <=25; i++) {
   if(i % 2 !== 1) console.log(i);
}


// QUESTION 2

function test() {
    console.log("I am a function");
}
var innerFunction = test;

function outerFunction(argument) {
    argument();
}
outerFunction(innerFunction);






    