window.onload = function() {
    let sec = 00;
    let mili = 00;

    let appendSec = document.getElementById("sec");
    let appendmili = document.getElementById("mili");

    let startTime = document.getElementById("start");
    let stopTime = document.getElementById("stop");
    let resetTime = document.getElementById("reset");
    
    let interval ;
    
    startTime.onclick = function() {
        clearInterval(interval);
        interval = setInterval(tham, 10);
    }

    stopTime.onclick = function() {
        clearInterval(interval);
    }

    resetTime.onclick = function() {
        clearInterval(interval);

        sec = "00";
        mili = "00";

        appendSec.innerHTML = sec;
        appendmili.innerHTML = mili;
    }


    // main function
    function tham() {
        mili++;

        if (mili < 9) {
            appendmili.innerHTML = `0${mili}`;
        }

        if (mili > 9) {
            appendmili.innerHTML = mili;
        }

        if (mili > 99) {
            sec++;

            appendSec.innerHTML = `0${sec}`;
            mili = 0;
            appendmili.innerHTML = "0" + 0;
        }

        if (sec > 9) {
            appendSec.innerHTML = sec;
        }
    } 
    
}