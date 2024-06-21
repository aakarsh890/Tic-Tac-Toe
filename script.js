console.log("welcome to tic t6ac toe");
let music = new Audio("./mixkit-game-flute-bonus-2313.wav")
let audioTurn = new Audio("./mixkit-game-ball-tap-2073.wav")
let gameover = new Audio("./mixkit-funny-game-over-2878.wav")
let turn = "X"
let isGameOver= false

const changeTurn = () => {
    return turn === "X"?"0":"X";
}

const checkWin = () => {
    let boxtexts = document.getElementsByClassName('boxtext');
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [0,4,8],
        [1,4,7],
        [2,5,8],
        [2,4,6],
    ]
    wins.forEach(e =>{
        if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText ) && (boxtexts[e[0]].innerText !== '')){
            document.querySelector('.info').innerText = boxtexts[e[0]].innerText + " Won";
            isGameOver = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px"
            gameover.play();
        }
    })
    

}




let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if(isGameOver == false){
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    })
})

reset.addEventListener('click', () =>{
    let boxtexts= document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X";
    isGameOver = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
    music.play();
})

