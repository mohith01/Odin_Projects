console.log("Hello World");

let arr = ["rock", "paper", "scissors"];

function game(choice) {
  // let choice = prompt("Please enter your choice: rock, paper, scissors")
  // let arr = ["rock", "paper", "scissors"];
  let pc_choice = arr[Math.floor(Math.random() * arr.length)];
  let user = choice.trim().toLowerCase();
  if (user == pc_choice) {
    // console.log("try_again")
    return ["Both played the same", 0, 0]
  }
  else if (((user == "rock") && (pc_choice == "scissors")) || ((user == "paper") && (pc_choice == "rock")) || ((user == "scissors") && (pc_choice == "paper"))) {
    // console.log(`The computer choice is ${pc_choice}. User ${user} has won the game`);
    return [`The computer choice is ${pc_choice}. User ${user} has won the game` , 0 ,1]
  }
  else if ((!arr.includes(user))) {
    // console.log("Invalid Input");
    return [`Invalid Input`, 0, 0]
  }
  else {
    // console.log(`The computer choice is ${pc_choice}. User ${user} has lost the game`);
    return [`The computer choice is ${pc_choice}. User ${user} has lost the game` ,1 , 0]
  }

}

const container = document.querySelector('#container');
const feedback = document.createElement('h2');

feedback.textContent = "Game"
container.appendChild(feedback);
var userScore = 0
var pcScore = 0
arr.forEach((element, index) => {
var buttons = document.createElement('button');
buttons.textContent= element;
buttons.style.color = "Blue";
buttons.style.padding = "25px 25px";
buttons.style.margin = "20px"
buttons.addEventListener('click', function(e) {
  if (userScore>=5 || pcScore>=5) {
    return;
  }
  var [returnFeedback, pcWin, userWin] = game(element);
  console.log(returnFeedback,pcWin,userWin);
  feedback.textContent = returnFeedback;
  var tempElem = document.createElement('h4')

  userScore+=userWin
  pcScore+=pcWin

  tempElem.textContent = `User Score: ${userScore} Pc Score: ${pcScore} User Element: ${element}`
  container.appendChild(tempElem)

  if (userScore==5) {
    feedback.textContent = "Congrats, User has won the game"
  }
  else if (pcScore==5){
    feedback.textContent = "Congrats, PC has won the game"
  }


});
container.appendChild(buttons)
});

// game()