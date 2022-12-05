console.log("connected");
let music = new Audio("music.mp3");
let ting = new Audio("ting.mp3");
let gameOver = new Audio("gameover.mp3");
let turn = "X";

//function to change the turn 
const changeTurn = () =>{
    return turn === "X" ? "0" : "X";
}

//function to check for a win 
const checkWin = () =>{

}

// game logic 
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = document.querySelector('.boxtext');
    element.addEventListener('click', (e)=>{
        if(e.innerText === ''){
            console.log("x");
            e.innerText = turn;
            changeTurn();
            ting.play();
            checkWin();
            document.getElementsByClassName(turn)[0].innerText = "Turn for " + turn; 
        }
    })
})