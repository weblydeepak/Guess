const guessStatus = document.querySelector(".guessingStatus");
const OutPut = document.querySelector("#Output");
const GuessBtn = document.querySelector("#guessBtn");
const retryBtn = document.querySelector("#Again");
let reSet = document.querySelector(".Textt")
let GameSCore=document.querySelector("#gameSCore");
let GameHighScore=document.querySelector("#gameHighScore");
let UserGuess = document.querySelector("#guessInput");
let randomNumber = Math.floor(Math.random()*20) + 1;
let Score=20;
let highScore=0;

console.log("one",randomNumber);
function reloadBtn(){
    Score=Score-1
    console.log(Score);
    GuessBtn.disabled=false;
    guessStatus.textContent = "Start guessing.....";
    gameSCore.textContent=`${Score}`;
}

function ReSet(){
    if(Score>highScore){
        highScore=Score
        GameHighScore.textContent=`${Score}`
    }
    Score=20
    randomNumber = Math.floor(Math.random()*20)+ 1;
    console.log("two",randomNumber);
    guessStatus.textContent = "Start guessing.....";
    OutPut.textContent="?";
    OutPut.classList.remove("OutputColor")
    GuessBtn.disabled=false;
    retryBtn.disabled=false;
    gameSCore.textContent=`${Score}`;
    reSet.textContent="New Game";
}
let Compair =()=>{
  let  userGuess = parseInt(UserGuess.value)
 GuessBtn.disabled = true;
 if(userGuess=== randomNumber){
    guessStatus.textContent = " You guessed the right number."
    OutPut.textContent=userGuess
    OutPut.classList.add("OutputColor")
    retryBtn.disabled=true
    GameHighScore.textContent=`${Score}`
    reSet.textContent="Play Again"
 }
 else{
    if(userGuess<randomNumber){
        guessStatus.textContent = "Too low! Try again."
    }
    else{
        guessStatus.textContent = "Too high! Try again."
    }
 }
}

reSet.addEventListener("click",ReSet)
retryBtn.addEventListener("click", reloadBtn)
GuessBtn.addEventListener("click", Compair)
