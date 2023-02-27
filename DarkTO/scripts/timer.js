let start = false;
let time = data.timer.defaultTime;
let timerInterval;

const timerCreate = () => {
    const timer = document.createElement('div');
    timer.id = 'darkTOTimer';
    timer.innerText = data.timer.defaultTime;
    $body.appendChild(timer)
    return timer;
}
const timer = timerCreate();

const timerStylesUpd = () => {
    timer.style.display = (data.timer.position == 0) ? 'none' : 'flex';
    timer.style.transform = ([1,5].includes(data.timer.position)) ? 'translate(0,-50%)' : ([2,4,6,8].includes(data.timer.position)) ? 'translate(0,0)':'translate(-50%,0)';
    timer.style.top = ([1,5].includes(data.timer.position)) ? '50%': ([6,7,8].includes(data.timer.position)) ? '0':'auto';
    timer.style.left = ([4,5,6].includes(data.timer.position)) ? '0': ([3,7].includes(data.timer.position)) ? '50%' : 'auto';
    timer.style.right = ([1,2,8].includes(data.timer.position)) ? '0' : 'auto';
    timer.style.bottom = ([2,3,4].includes(data.timer.position)) ? '0' : 'auto';

    if(start == false){
        timer.style.color = data.timer.colors[2];
    } else{
        timer.style.color = data.timer.colors[0];
    }
    
    timer.style.background = data.timer.colors[1];
}
timerStylesUpd();

const resetTimer = () => {
    time = data.timer.defaultTime;
    updateTime();
}

const startStopTimer = () => {
    if(start){
        clearInterval(timerInterval);
        start = false;
        timer.style.color = data.timer.colors[2];
    } else{
        start = true;
        timer.style.color = data.timer.colors[0];
        timerInterval = setInterval(() => {
            if(time <= 0){
                clearInterval(timerInterval);
                const alarm = document.createElement('div');
                alarm.classList.add('darkToAlarm');
                alarm.style.background = data.timer.colors[3];
                $body.appendChild(alarm);
                setTimeout(() => {
                    $body.removeChild(alarm);
                }, 500)
                console.log('alarm')
                start = false;
                timer.style.color = data.timer.colors[2];
                if(data.timer.autoReset){
                    resetTimer();
                    startStopTimer();
                }
            } else{
                time--;
                timer.innerText = time;
            }
        }, 1000)
    }
}
const updateTime = () => {
    if(time <= 0){
        time = 0;
        clearInterval(timerInterval);
        start = false;
        timer.style.color = data.timer.colors[2];
    }
    timer.innerText = time;
}