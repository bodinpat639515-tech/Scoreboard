let screenH1 = document.getElementById("screenh1")
let screenG1 = document.getElementById("screeng1")
let homeguest = 0
let homeguest1 = 0


function button1() {
    homeguest = homeguest + 1 
    screenH1.textContent = homeguest
}

function button2() {
    homeguest += 2
    screenH1.textContent = homeguest
}

function button3() {
    homeguest += 3
    screenH1.textContent = homeguest
}

function button4() {
    homeguest1 = homeguest1 + 1
    screenG1.textContent = homeguest1
}

function button5() {
    homeguest1 += 2
    screenG1.textContent = homeguest1
}

function button6() {
    homeguest1 += 3
    screenG1.textContent = homeguest1
}

function button7() {
    homeguest = 0
    screenH1.textContent = homeguest
    
}
 
function button8() {
    homeguest1 = 0
    screenG1.textContent = homeguest1
    
} 


