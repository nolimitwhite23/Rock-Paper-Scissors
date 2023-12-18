const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
let result = 0
let losses = 0
let tie = 0


rock.addEventListener("click", () => myFunction("Rock")); 
paper.addEventListener("click", () => myFunction("Paper"));
scissors.addEventListener("click", () => myFunction("Scissors"));

function myFunction(choice) {
    const computerChoice = ["Rock", "Paper", "Scissors"]
    const randomIndex = Math.floor(Math.random() * computerChoice.length);
    const randomChoice = computerChoice[randomIndex]

    if (
        (choice === "Rock" && randomChoice === "Scissors") ||
        (choice === "Paper" && randomChoice === "Rock") ||
        (choice === "Scissors" && randomChoice === "Paper")
    ) {
        result += 1;
    } else if (
    (randomChoice === "Rock" && choice === "Scissors") ||
    (randomChoice === "Paper" && choice === "Rock") || 
    (randomChoice === "Scissors" && choice === "Paper")
    ) {
        losses += 1;
    } else {
        if (randomChoice === choice);
        tie += 1;
    }

    document.querySelector(".player").innerHTML = `Player Picked : ${choice}`
    document.querySelector(".computer").innerHTML = `Computer Picked: ${randomChoice}`
    document.querySelector(".Wins").innerHTML = `Wins: ${result}`
    document.querySelector(".Losses").innerHTML = `Losses: ${losses}`
    document.querySelector(".Tie").innerHTML = `Tie: ${tie}`
}