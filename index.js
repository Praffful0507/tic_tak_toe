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
    let boxtext = element.querySelector('.boxtext');
    console.log(boxtext);
    element.addEventListener('click', (e)=>{
        if(boxtext.innerText === ''){
            console.log("x");
            boxtext.innerText = turn;
            changeTurn();
            ting.play();
            checkWin();
            document.getElementsByClassName("info")[0].innerText = "Turn for " + turn; 
        }
    })
})