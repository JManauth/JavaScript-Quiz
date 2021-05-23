const main = document.querySelector('#main');
var timer = document.createElement('h1')
var secondsLeft = 60;
var q1 = {
    q:'Which of the following is not JavaScript Data Types?',
    answers: 'Undefined Number Boolean Float',
    correctAnswer: 'Float',
};
var q2 = {
    q:'Inside which HTML element do we put the JavaScript?',
    answers: '<script> <head> <meta> <style>',
    correctAnswer: '<script>',
};
var q3 = {
    q:'Which of the following is the correct syntax to display "Letsfindcourse" in an alert box using JavaScript?',
    answers: 'alert-box("Letsfindcourse"); confirm("Letsfindcourse"); msgbox("Letsfindcourse"); alert("Letsfindcourse");',
    correctAnswer: 'alert("Letsfindcourse");',
};
var q4 = {
    q:'Javascript string using double quotes is exactly the same as a string using single quotes?',
    answers: 'True False ',
    correctAnswer: 'True',
};
var q5 = {
    q:'Which of the following method checks if its argument is not a number?',
    answers: 'isNaN() nonNaN() NaN()',
    correctAnswer: 'isNaN()',
};
var q6 = {
    q:'The _______ method of an Array object adds and/or removes elements from an array.',
    answers: 'Reverse Shift Slice Splice',
    correctAnswer: 'Splice',
};
var q7 = {
    q:'In JavaScript, Arrays are data type. State True or False?',
    answers: 'True False',
    correctAnswer: 'False',
};
var q8 = {
    q:'How to get a particular value using the tagged name?',
    answers: 'getElementbyID() getElementsbyName() getElementsbyTagName() getTagName()',
    correctAnswer: 'getElementsbyName()',
};
var q9 = {
    q:'How to get a particular value using the tagged name?',
    answers: 'getElementbyID() getElementsbyName() getElementsbyTagName() getTagName()',
    correctAnswer: 'getElementbyID()',
};
var q10 = {
    q:'Inside Which element do we link our CSS style sheets?',
    answers: '<body> <p> <header> <head>',
    correctAnswer: '<head>',
};
var listOfQuestions = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

//shows instructions
//click start
//timer starts running
//questions cycle
//lose time if question is wrong
//finish quiz calculates final score
//save score to highschore table

//initializes page
function loadpage(){
    var main = document.getElementById("main");
    var init = document.createElement("h1");
    var p = document.createElement('P');
    var p2 = document.createElement('p');
    var p3 = document.createElement('p');
    var btn = document.createElement('button');
    main.appendChild(init);
    main.appendChild(p);
    main.appendChild(p2);
    main.appendChild(p3);
    main.appendChild(btn);
    init.textContent = "Let's Play a game!";
    p.textContent = "This Game will consist of 10 randomly assigned questions concerning JavaScript.";
    p2.textContent = 'Once you start the game you will have ___ seconds to answer all of the questions.';
    p3.textContent = 'for every question that you get wrong you will be deducted ___ seconds from the timer.';
    btn.textContent = 'Click here to start!';
    btn.addEventListener("click", startGame)
};
function startGame(){
    //clears main, appends timer and starts timer
    clearMain(main);
    var question = document.createElement('h1');
    var answers = document.createElement('ul')
    var individualAnswer = document.createElement('li')
    
    main.appendChild(timer);
    setTime();
    //pick random question
    var randomQ = Math.floor(Math.random() * listOfQuestions.length);
    console.log(randomQ);
    listOfQuestions.splice(randomQ, 1)
    console.log(listOfQuestions);

};
//clears main page
function clearMain(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
};

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timer.textContent = secondsLeft + " seconds left.";
  }, 1000);
};

loadpage();

console.log(listOfQuestions[0])
var res = q3["answers"].split(" ");
console.log(res);