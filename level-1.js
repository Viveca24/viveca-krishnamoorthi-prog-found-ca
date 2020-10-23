// QUESTION 1

var food = ["pizza"];


// QUESTION 2

var person = {
    name: "Viveca",
    age: 27
};


// QUESTION 3

var outOfStock = true;

if(outOfStock === true){
    console.log("Out of stock");
}
else {
    console.log("In stock");
}
//"Out of stock"


// QUESTION 4

var numbers = [6, 9, 18, 24, 27];

for(var i = 0; i < numbers.length; i++) {
    console.log(numbers);
}


// QUESTION 5

for(var i = 5; i <=25; i++) {
    console.log(i);
}


// QUESTION 6

for(var i = 5; i <= 25; i++) {
    if (i === 20) {
        console.log(i);
    }
}


// QUESTION 7

var teacher = [
    {
        name: "Odd",
        age: 60,
        male: true,
    },
    {
        name: "Liv",
        age: 45,
        male: false,
    }
];

for(var i = 0; i < teacher.length; i++) {
    console.log(teacher[i].age);
    console.log(teacher[i].male);
}


// QUESTION 8

function whatIDontLike(dislike){
    console.log("I don't like " + dislike);
}

whatIDontLike("insects");


// QUESTION 9 

function subtract(number1, number2){
    var sum = number1 - number2;
    console.log(sum);
}

subtract(10, 5);


// QUESTION 10

var myArray = [];

function cake(typeOfCake){
    myArray.push(typeOfCake);
    console.log(myArray);
}
cake("cheesecake");

