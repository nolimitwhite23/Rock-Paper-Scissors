const rock = document.querySelector(".rock").addEventListener("click", myFunction)
const paper = document.querySelector(".paper").addEventListener("click", myFunction)
const scissors = document.querySelector(".scissors").addEventListener("click", myFunction)

function updateText() {
    let playerText = document.querySelector(".player").innerHTML = "Rock"
    let computerText = document.querySelector(".computer").innerHTML = "Paper"

}

function myFunction() {
    updateText()
}