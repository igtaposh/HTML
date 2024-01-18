let btns = document.querySelectorAll('.button');
let msg = document.getElementById('winner');
let winSec = document.querySelector('.winnerSec')
let resetBtn = document.querySelector('.reset-btn')
let newBtn = document.querySelector('.new-btn')


const winStat = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
let count = 0;
let turnX = true;

btns.forEach((box) =>{
  box.addEventListener('click', ()=>{
    if (turnX) {
      box.innerHTML = 'O'
      turnX = false;
    }
    else {
      box.innerHTML ='X'
      turnX = true;
    }
    box.disabled = true;
    count++;
    checkIf();
   let a = checkIf();
   if (count === 9 && !a) {
     gameDraw();
   }
   
  })
})

const checkIf = ()=>{
  for (let stat of winStat){
    let val1 = btns[stat[0]].innerHTML
    let val2 = btns[stat[1]].innerHTML
    let val3 = btns[stat[2]].innerHTML
    
    if (val1 != '' && val2 != '' && val3 != '') {
      if (val1 === val2 && val2 === val3) {
        win(val1)
        return true;
      }
    }
  }
}


const win = (player)=>{
  msg.innerHTML= `The winner is: ${player}`
  winSec.style.display = 'flex'
  diBtn();
}

const diBtn =()=>{
  for (let btn of btns) {
    btn.disabled = true;
  }
}
  const enBtn = ()=> {
    for (let btn of btns) {
      btn.disabled = false;
      btn.innerHTML = '';
    }
  }

const gameDraw = ()=>{
  msg.innerHTML = `It's a Draw`
  winSec.style.display = 'flex'
  diBtn();
}

const resetGame = ()=>{
  turnX = true;
  count = 0;
  winSec.style.display = 'none';
  enBtn();
}
resetBtn.addEventListener('click', resetGame)
newBtn.addEventListener('click', resetGame)