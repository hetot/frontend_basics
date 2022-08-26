var timer_header = document.getElementById('timer-header')
var add_button = document.getElementById('add')
var start_stop_button = document.getElementById('start-stop')
var reset_button = document.getElementById('reset')
var iter_counter = 0

document.getElementById('container').style.display = 'flex'
document.getElementById('container').style.justifyContent = 'center'

if (localStorage.getItem('current') === null) {
    timer_header.innerHTML = '00:00'
} else {
    iter_counter = parseInt(localStorage.getItem('current'), 10)
    let passed_seconds = Math.floor(iter_counter / 100)
    let fpassed_mseconds = Math.floor((iter_counter % 100) / 10)
    let spassed_mseconds = iter_counter % 10
    let first = Math.floor(passed_seconds / 10) === 0? `0${passed_seconds}`: `${passed_seconds}`
    let second = `${fpassed_mseconds}${spassed_mseconds}`
    timer_header.innerHTML = first + ':' + second
}

timer_header.style.textAlign = 'center'

add_button.innerHTML = 'Add'
start_stop_button.innerHTML = 'Start'
reset_button.innerHTML = 'Reset'

setInterval(() => {
    if (start_stop_button.innerHTML === 'Stop') {
        let passed_seconds = Math.floor(iter_counter / 100)
        let fpassed_mseconds = Math.floor((iter_counter % 100) / 10)
        let spassed_mseconds = iter_counter % 10
        let first = Math.floor(passed_seconds / 10) === 0? `0${passed_seconds}`: `${passed_seconds}`
        let second = `${fpassed_mseconds}${spassed_mseconds}`
        timer_header.innerHTML = first + ':' + second
        iter_counter += 1
    }
}, 10)


function start_stop() {
    if (start_stop_button.innerHTML == 'Stop') {
        start_stop_button.innerHTML = 'Start'
        localStorage.setItem('current', iter_counter - 1)
    } else {
        start_stop_button.innerHTML = 'Stop'
    }
}

function reset() {
    localStorage.clear()
    timer_header.innerHTML = '00:00'
    iter_counter = 0
}

var counter = 1
function add() {
    let my_ul = document.getElementById('time-list')

    let passed_seconds = Math.floor(iter_counter / 100)
    let fpassed_mseconds = Math.floor((iter_counter % 100) / 10)
    let spassed_mseconds = iter_counter % 10
    let first = Math.floor(passed_seconds / 10) === 0? `0${passed_seconds}`: `${passed_seconds}`
    let second = `${fpassed_mseconds}${spassed_mseconds}`
    my_ul.innerHTML = my_ul.innerHTML + `<li id="li-${counter}">${first}:${second}</li><button id="button-${counter}" onclick="del(${counter})">DEL</button>`
    counter += 1
}

function del(del_id){
    let l = document.getElementById(`li-${del_id}`)
    let b = document.getElementById(`button-${del_id}`)

    l.remove()
    b.remove()
}