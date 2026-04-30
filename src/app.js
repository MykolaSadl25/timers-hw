//1
let time = 60;
const secondsRef =document.querySelector(".seconds");
const interval = setInterval(()=>{
    time-=1
    secondsRef.textContent=time
    if (time === 30) {
        alert("Залишилось половина часу")
    }
    else if(time === 0 ){
        clearInterval(interval)
        alert("Час вийшов")
    }
},1000);

//2

let total = 30000;

const timerSRef = document.querySelector(".timerS");
const timerMSRef = document.querySelector(".timerMS");
const boxRef = document.querySelector(".box");
const btnRef = document.querySelector(".btn");
const stopBtn = document.querySelector(".stop");
const startRef = document.querySelector(".start");

let id = null;

function updateUI() {
    const s = Math.floor((total % 60000) / 1000);
    const ms = total % 1000;
    timerSRef.textContent = s.toString().padStart(2, "0");
    timerMSRef.textContent = ms.toString().padStart(3, "0");
}

function startTimer() {
    if (id !== null) return;
    id = setInterval(() => {
        total -= 10;
        if (total <= 10000) {
            boxRef.classList.add("animation");
        }
        if (total <= 0) {
            total = 0;
            clearInterval(id);
            id = null;
            btnRef.style.display = "block";
        }
        updateUI();
    }, 10);
}

function stopTimer() {
    clearInterval(id);
    id = null;
}

function resetTimer() {
    clearInterval(id);
    id = null;
    total = 30000;
    boxRef.classList.remove("animation");
    btnRef.style.display = "none";
    updateUI();
}
startRef.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
btnRef.addEventListener("click", resetTimer);

updateUI();