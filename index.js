const score = document.getElementById('score');
//console.log(score);
const score2 = document.getElementById('score2');
//console.log(score2);

const buttonOne = document.getElementById('one')
const buttonTwo = document.getElementById('two')
const buttonThree = document.getElementById('three')
const buttonFour = document.getElementById('four')
const buttonFive = document.getElementById('five')
const buttonSix = document.getElementById('six')
let homePoints = 0
let guestPoints = 0
//console.log(buttonFive);

function addOne() {
    homePoints++;
    score.textContent = homePoints;
}

function addTwo() {
    homePoints += 2;
    score.textContent = homePoints;
}

function addThree() {
    homePoints += 3;
    score.textContent = homePoints;
}

function addOneAgain() {
    guestPoints++;
    score2.textContent = guestPoints;
}
function addTwoAgain() {
    guestPoints += 2;
    score2.textContent = guestPoints;
}
function addThreeAgain() {
    guestPoints += 3;
    score2.textContent = guestPoints;
}