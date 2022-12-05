console.log("connected");
let music = new Audio("music.mp3");
let ting = new Audio("ting.mp3");
let gameOver = new Audio("gameover.mp3");
let turn = "X";
let isgameOver = false;

//function to change the turn 
const changeTurn = () =>{
    return turn === "X" ? "0" : "X";
}

//function to check for a win 
const checkWin = () =>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    wins.forEach(e => {
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText === boxtext[e[2]].innerText) && boxtext[e[0]].innerText !== ""){
            console.log(boxtext[e[0]].innerText);
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + "   Won";
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
            isgameOver = true;
        }
    })
}

// game logic 
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
   // console.log(boxtext);
    element.addEventListener('click', (e)=>{
        if(boxtext.innerText === ''){
           // console.log("x");
            boxtext.innerText = turn;
            turn = changeTurn();
            ting.play();
            checkWin();
            if(!isgameOver){                
            document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;} 
        }
    })
})

reset.addEventListener('click', ()=>{
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element =>{
        element.innerText = "";
    });
    turn = "X";
    isgameOver = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = " 0px";
})
 