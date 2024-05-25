/* --- VARIABLES --- */
const choices = ['✊', '🤚', '✌️'];
const player1 = document.getElementById('player-1');

const player2 = document.getElementById('player-2');

const resultArea = document.getElementById('result-area');

const playBtn = document.getElementById('play-btn');

/* ----------------------------------------------- */

/* --- FUNCTIONS --- */

const generateChoice = () => {
  let r = Math.floor(Math.random() * 3);
  return choices[r]
};

const insertHTML = (choice1, choice2, result) => {
  player1.innerHTML = choice1;
  player2.innerHTML = choice2;
  resultArea.innerHTML = result;
};

const decideWinner = (a, b) => {
  if ((a === '✊' && b === '✊') || (a === '🤚' && b === '🤚') || (a === '✌️' && b === '✌️')) {

     return "Draw";

  } else if ((a === '✊' && b === '✌️') || (a === '🤚' && b === '✊') || (a === '✌️' && b === '🤚')) {

    return "Bot wins";

  } else {

    return "You win";

  }
};

const play = (userch) => {
  let choice1 = generateChoice();
  let result = decideWinner(choice1, userch);
  insertHTML(choice1, userch, result);
};

/* ----------------------------------------------- */

/* --- EVENT LISTENERS --- */
var buttons = document.getElementsByClassName('hand-btn');
  console.log(buttons);
  var buttonsLength = buttons.length;
  for (var i = 0; i < buttonsLength; i++){
    buttons[i].addEventListener('click', clickResponse, false);
  };
  function clickResponse(){
    // do something based on button selection here...
    var ch2 = (this.id);
    let userch = document.getElementById(ch2).innerText;
    play(userch);
}



