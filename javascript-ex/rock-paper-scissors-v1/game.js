console.log("Hello World");

function game() {
  let choice = prompt("Please enter your choice: rock, paper, scissors")
  let arr = ["rock", "paper", "scissors"];
  let pc_choice = arr[Math.floor(Math.random() * arr.length)];
  let user = choice.trim().toLowerCase();
  if (user == pc_choice) {
    console.log("try_again")
    game();
  }
  else if (((user == "rock") && (pc_choice == "scissors")) || ((user == "paper") && (pc_choice == "rock")) || ((user == "scissors") && (pc_choice == "paper"))) {
    console.log(`The computer choice is ${pc_choice}. User ${user} has won the game`);
    return
  }
  else if ((!arr.includes(user))) {
    console.log("Invalid Input");
    game();
  }
  else {
    console.log(`The computer choice is ${pc_choice}. User ${user} has lost the game`);
    return;
  }


}

game()