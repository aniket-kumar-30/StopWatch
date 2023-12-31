// Declaring interval variable globally to get the instance of setInterval globally.
let interval;

const nextMin = document.getElementById('nextMinute');
const nextSec = document.getElementById('nextSecond');
// Get minute and second span tag to display minute and second.
const currMin = document.getElementById('currentMinute');
const currSec = document.getElementById('currentSecond');
// Declaring second and minute counter variable globally.
let secCounter = 0;
let minCounter = 0;
currMin.textContent = minCounter.toString().padStart(2,'0');
currSec.textContent = secCounter.toString().padStart(2,'0');

// Event delegation for btn click
document.addEventListener('click',function(e){
    if(e.target.parentElement.id == 'start-btn'){
        interval = setInterval(startWatch,1000);
    }else if(e.target.parentElement.id == 'stop-btn'){
        clearInterval(interval);
        return;
    }else if(e.target.parentElement.id == 'reset-btn'){
        secCounter = 0;
        minCounter = 0;
        currMin.textContent = minCounter.toString().padStart(2,'0');
        currSec.textContent = secCounter.toString().padStart(2,'0');
        clearInterval(interval);
    }
})
function startWatch(){
    if(secCounter >= 59){
        secCounter = 0;
        minCounter++;
        nextMin.innerHTML = minCounter.toString().padStart(2,'0');
        nextMin.classList.add('animate');
        setTimeout(function(){
            nextMin.classList.remove('animate');
            currMin.innerHTML = nextMin.textContent;
        },500)

    }else{
        secCounter++;
        nextSec.innerHTML = secCounter.toString().padStart(2,'0');
        nextSec.classList.add('animate');
        setTimeout(function(){
            nextSec.classList.remove('animate');
            currSec.innerHTML = nextSec.textContent;
        },800)
    }
}

