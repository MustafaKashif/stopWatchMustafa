var minutes = 0;
var seconds = 0;
var milliseconds = 0;

var sMinutes = document.getElementById('minutes');
var sSeconds = document.getElementById('seconds');
var sMilliSeconds = document.getElementById('milli');

var startButton = document.getElementById('start');
var stopButton = document.getElementById('stop');
var resetButton = document.getElementById('reset');

function timer(){
    milliseconds++;
    sMilliSeconds.innerHTML = milliseconds;
 if(milliseconds >= 9){
    seconds++;
    sSeconds.innerHTML = seconds;
    milliseconds = 0;    
}
if(seconds >= 59){
    minutes++;
    sMinutes.innerHTML = minutes;
    seconds = 0;
}

}

function start(){
      interval = setInterval(timer, 100);
      startButton.disabled = true;
      stopButton.disabled = false;
      resetButton.disabled = false;  
}

function stop(){
    clearInterval(interval);
    stopButton.disabled = true;
    startButton.disabled = false;
    resetButton.disabled = false;
}

function reset(){
    stop();
    minutes = "00";
    seconds = "00";
    milliseconds = "00";
    sMinutes.innerHTML = minutes;
    sSeconds.innerHTML = seconds;
    sMilliSeconds.innerHTML = milliseconds;
    stopButton.disabled = false;
    startButton.disabled = false;
    resetButton.disabled = true;  
}