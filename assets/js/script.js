const main = document.querySelector('#main');
//click play
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
    clearMain(main);
    console.log('sup foo');
};
//clears main page
function clearMain(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
};


loadpage();