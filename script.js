let startBtn=document.getElementById('startBtn');
let minInput=document.getElementById('minutes');
let secInput=document.getElementById('seconds');
let timerDisplay=document.getElementById('timer');
let resetBtn=document.getElementById('resetBtn');

startBtn.addEventListener('click',function(){
    startTimer();
});

let timerRunning=false;
function startTimer(){
    if(timerRunning){
        alert('A timer is already running. Please wait for it to finish or stop it.');
        return;
    }
    const minutes=parseInt(minInput.value)||0;
    const seconds=parseInt(secInput.value)||0;
    
    if(seconds>59){
        alert("Seconds cannot be greater than 59");
        return;
    }
    
    const totalTime=minutes*60+seconds;
    
    let currentTime=totalTime;

    let displayedTime='';
    
    var timerInterval=setInterval(function(){
        updateTimer();
    },1000);
    
    function updateTimer(){
        timerRunning=true;
        const minutes=Math.floor(currentTime/60);
        const seconds=currentTime%60;
        const newTimer=`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`

        if(displayedTime!==newTimer){
            
            timerDisplay.textContent=newTimer;
            displayedTime=newTimer;
        }
        if(currentTime<=0){
            clearInterval(timerInterval);
            timerDisplay.textContent='00:00';
            timerRunning=false;
        }else{
            currentTime--;
        }
    }
    resetBtn.addEventListener('click',function(){
        clearInterval(timerInterval);
        timerDisplay.textContent='00:00';
        minInput.value='';
        secInput.value='';
        timerRunning=false;
    })
}




