/* FRACTALS */

var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')

var stepBtn = document.getElementById('step')
var manualBtn = document.getElementById('manual')
var stopBtn = document.getElementById('stop')
var rollTxt = document.getElementById('roll')
var spinner = document.getElementById('spinner')

var go
var speed = 0.05
var sq_sz = 1

var startingPos = 0
var on = false

const ptStart = {
    x: 0,
    y: 0
}
var pt_new = {
    x: 0,
    y: 0
}

spinner.addEventListener('click', () => {
    draw(spinner.value)
})

window.onload = function() {
    console.log("start")
    draw(spinner.value)
}

function draw(num) {
    ctx.font = "20px Arial"
    ctx.clearRect(0, 0, 600, 600)
    startingPos = 0
    ctx.fillStyle = "black"
    if(num == 3) {
        window.pt1 = {
            x: 300,
            y: 0
        }
        window.pt2 = {
            x: 0,
            y: 600
        }
        window.pt3 = {
            x: 600,
            y: 600
        }
        ctx.fillRect(window.pt1.x-5, window.pt1.y, 10, 10)
        ctx.fillRect(window.pt2.x, window.pt2.y-10, 10, 10)
        ctx.fillRect(window.pt3.x-10, window.pt3.y-10, 10, 10)
        ctx.fillText("1", window.pt1.x-5, window.pt1.y+30)
        ctx.fillText("2", window.pt2.x+10, window.pt2.y-10)
        ctx.fillText("3", window.pt3.x-20, window.pt3.y-10) 
    } else if(num == 4) {
        window.pt1 = {
            x: 0,
            y: 0
        }
        window.pt2 = {
            x: 0,
            y: 600
        }
        window.pt3 = {
            x: 600,
            y: 600
        }
        window.pt4 = {
            x: 600,
            y: 0
        }
        ctx.fillRect(window.pt1.x, window.pt1.y, 10, 10)
        ctx.fillRect(window.pt2.x, window.pt2.y-10, 10, 10)
        ctx.fillRect(window.pt3.x-10, window.pt3.y-10, 10, 10)
        ctx.fillRect(window.pt4.x-10, window.pt4.y, 10, 10)
        ctx.fillText("1", window.pt1.x, window.pt1.y+30)
        ctx.fillText("2", window.pt2.x, window.pt2.y-15)
        ctx.fillText("3", window.pt3.x-10, window.pt3.y-15) 
        ctx.fillText("4", window.pt4.x-10, window.pt4.y+30)   
    } else if(num == 5) {
        window.pt1 = {
            x: 300,
            y: 0
        }
        window.pt2 = {
            x: 585.31,
            y: 207.295
        }
        window.pt3 = {
            x: 476.335,
            y: 542.705
        }
        window.pt4 = {
            x: 123.665,
            y: 542.705
        }
        window.pt5 = {
            x: 14.69,
            y: 207.295
        }
        ctx.fillRect(window.pt1.x-5, window.pt1.y, 10, 10)
        ctx.fillRect(window.pt2.x-5, window.pt2.y-5, 10, 10)
        ctx.fillRect(window.pt3.x-5, window.pt3.y-5, 10, 10)
        ctx.fillRect(window.pt4.x-5, window.pt4.y-5, 10, 10)
        ctx.fillRect(window.pt5.x-5, window.pt5.y-5, 10, 10)
        ctx.fillText("1", window.pt1.x-5, window.pt1.y+30)
        ctx.fillText("2", window.pt2.x-10, window.pt2.y+30)
        ctx.fillText("3", window.pt3.x+10, window.pt3.y+30) 
        ctx.fillText("4", window.pt4.x-10, window.pt4.y+30) 
        ctx.fillText("5", window.pt5.x+5, window.pt5.y+30)
    } else if(num == 6) {
        window.pt1 = {
            x: 150,
            y: 0
        }
        window.pt2 = {
            x: 450,
            y: 0
        }
        window.pt3 = {
            x: 600,
            y: 300
        }
        window.pt4 = {
            x: 450,
            y: 600
        }
        window.pt5 = {
            x: 150,
            y: 600
        }
        window.pt6 = {
            x: 0,
            y: 300
        }
        ctx.fillRect(window.pt1.x-5, window.pt1.y, 10, 10)
        ctx.fillRect(window.pt2.x-5, window.pt2.y, 10, 10)
        ctx.fillRect(window.pt3.x-10, window.pt3.y-5, 10, 10)
        ctx.fillRect(window.pt4.x-5, window.pt4.y-10, 10, 10)
        ctx.fillRect(window.pt5.x-5, window.pt5.y-10, 10, 10)
        ctx.fillRect(window.pt6.x, window.pt6.y-5, 10, 10)
        ctx.fillText("1", window.pt1.x-5, window.pt1.y+30)
        ctx.fillText("2", window.pt2.x-5, window.pt2.y+30)
        ctx.fillText("3", window.pt3.x-10, window.pt3.y+30) 
        ctx.fillText("4", window.pt4.x-5, window.pt4.y-20) 
        ctx.fillText("5", window.pt5.x-5, window.pt5.y-20)
        ctx.fillText("6", window.pt6.x, window.pt6.y+30)
    }
}

stepBtn.addEventListener('click', () => {
    newTurn()
})

manualBtn.addEventListener('click', () => {
    if(on == false) {
        go = setInterval(newTurn, speed)
        on = true
    }
})

stopBtn.addEventListener('click', () => {
    clearInterval(go)
    on = false
})

function newTurn() {
    let num_pts = spinner.value
    if(startingPos == 1) {
        if(num_pts == 4) {
            pt_new = square()
        } else if(num_pts == 5) {
            pt_new = pentagon()
        } else if(num_pts == 6) {
            pt_new = hexagon()
        } else {
            triangle()
        }
        ptStart.x = pt_new.x
        ptStart.y = pt_new.y
        ctx.fillRect(pt_new.x, pt_new.y, sq_sz, sq_sz)
    }
}

canvas.addEventListener('click', (event) => {
    if(startingPos == 0) {
        var pos = getMousePos(canvas, event)
        ctx.fillStyle = 'rgb(0, 100, 200)'
        ctx.fillRect(pos.x - 5, pos.y - 5, 3, 3)
        ptStart.x = pos.x - 5
        ptStart.y = pos.y - 5;
        startingPos++
    }
})

function getMousePos(canv, event) {
    var rect = canv.getBoundingClientRect()
    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function triangle() {
    let num = getRandomInt(3) + 1
    rollTxt.innerHTML = num
    if(num == 1) {
        pt_new.x = (window.pt1.x + ptStart.x) / 2,
        pt_new.y = (window.pt1.y + ptStart.y) / 2
   } else if(num == 2) {
        pt_new.x = (window.pt2.x + ptStart.x) / 2,
        pt_new.y = (window.pt2.y + ptStart.y) / 2
    } else {
        pt_new.x = (window.pt3.x + ptStart.x) / 2,
        pt_new.y = (window.pt3.y + ptStart.y) / 2
    }
    return pt_new
}

function square() {
    let num = getRandomInt(4) + 1
    rollTxt.innerHTML = num
    if(num == 1) {
        pt_new.x = (window.pt1.x + ptStart.x) / 2,
        pt_new.y = (window.pt1.y + ptStart.y) / 2
    } else if(num == 2) {
        pt_new.x = (window.pt2.x + ptStart.x) / 2,
        pt_new.y = (window.pt2.y + ptStart.y) / 2
    } else if(num == 3) {
        pt_new.x = (window.pt3.x + ptStart.x) / 2,
        pt_new.y = (window.pt3.y + ptStart.y) / 2
    } else {
        pt_new.x = (window.pt4.x + ptStart.x) / 2,
        pt_new.y = (window.pt4.y + ptStart.y) / 2
    }
    return pt_new
}

function pentagon() {
    let num = getRandomInt(5) + 1
    rollTxt.innerHTML = num
    if(num == 1) {
        pt_new.x = (window.pt1.x + ptStart.x) / 2,
        pt_new.y = (window.pt1.y + ptStart.y) / 2
    } else if(num == 2) {
        pt_new.x = (window.pt2.x + ptStart.x) / 2,
        pt_new.y = (window.pt2.y + ptStart.y) / 2
    } else if(num == 3) {
        pt_new.x = (window.pt3.x + ptStart.x) / 2,
        pt_new.y = (window.pt3.y + ptStart.y) / 2
    } else if(num == 4) {
        pt_new.x = (window.pt4.x + ptStart.x) / 2,
        pt_new.y = (window.pt4.y + ptStart.y) / 2
    } else {
        pt_new.x = (window.pt5.x + ptStart.x) / 2,
        pt_new.y = (window.pt5.y + ptStart.y) / 2
    }
    return pt_new
}
function hexagon() {
    let num = getRandomInt(6) + 1
    rollTxt.innerHTML = num
    if(num == 1) {
        pt_new.x = (window.pt1.x + ptStart.x) / 2,
        pt_new.y = (window.pt1.y + ptStart.y) / 2
    } else if(num == 2) {
        pt_new.x = (window.pt2.x + ptStart.x) / 2,
        pt_new.y = (window.pt2.y + ptStart.y) / 2
    } else if(num == 3) {
        pt_new.x = (window.pt3.x + ptStart.x) / 2,
        pt_new.y = (window.pt3.y + ptStart.y) / 2
    } else if(num == 4) {
        pt_new.x = (window.pt4.x + ptStart.x) / 2,
        pt_new.y = (window.pt4.y + ptStart.y) / 2
    } else if(num == 5) {
        pt_new.x = (window.pt5.x + ptStart.x) / 2,
        pt_new.y = (window.pt5.y + ptStart.y) / 2
    } else {
        pt_new.x = (window.pt6.x + ptStart.x) / 2,
        pt_new.y = (window.pt6.y + ptStart.y) / 2
    }
    return pt_new
}
