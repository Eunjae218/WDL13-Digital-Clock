let ClockDisplay = document.getElementById("myClockDisplay")
let body = document.body
let themeButton = document.getElementById("themeToggle")

function showTime(){
    let date = new Date()
    let h = date.getHours()
    let m = date.getMinutes()
    let s = date.getSeconds()
    let ms = date.getMilliseconds()

    let session = "AM"

    if (h >= 12){
        h = h-12
        session = "PM"
    }
    if (h == 0){
        h = 12
        session = "AM"
    }
    if (h<10){
        h = "0"+h;
    }
    if (m < 10) {
        m = "0" + m;
    }
    if (s < 10) {
        s = "0" + s;
    }
    if (ms < 10) {
        ms = "0" + ms;
    }

    let time = `${h}:${m}:${s}:${ms} ${session}`
    ClockDisplay.innerText = time
    setTimeout(showTime,100)
}

function toggleTheme(){
    body.classList.toggle("darkMode")
    if (body.classList.contains("darkMode")){
        themeButton.textContent = "Light Mode"
    }
    else{
        themeButton.textContent = "Dark Mode"
    }
}

showTime()