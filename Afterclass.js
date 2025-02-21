let DateDisplay = document.getElementById("DateDisplay")
let body = document.body

function showTime() {
    let date = new Date()
    let y = date.getFullYear()
    let m = date.getMonth()
    let d = date.getDate()
    let dy = date.getDay()

    let dat = ""
    if (dy == 1){
        dat = "Sunday"
    }
    if (dy == 2) {
        dat = "Monday"
    }
    if (dy == 3) {
        dat = "Tuesday"
    }
    if (dy == 4) {
        dat = "Wednesday"
    }
    if (dy == 5) {
        dat = "Thursday"
    }
    if (dy == 6) {
        dat = "Friday"
    }
    if (dy == 7) {
        dat = "Saturday"
    }

    let time = `${y} : ${m} : ${d} : ${dat}`
    DateDisplay.innerText = time
    setTimeout(showTime, 100)
}

showTime()