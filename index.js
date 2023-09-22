
// setup of the variables
let tch = 0
let totalCountHome = document.getElementById("home-count")
let tca = 0
let totalCountAway = document.getElementById("away-count")
let ftpH = 0
let ftpHome = document.getElementById("home-ftps")
let h2 = 0
let homeTwo = document.getElementById("home-2s")
let h3 = 0
let homeThree = document.getElementById("home-3s")
let ftpA = 0
let ftpAway = document.getElementById("away-ftps")
let a2 = 0
let awayTwo = document.getElementById("away-2s")
let a3 = 0
let awayThree = document.getElementById("away-3s")


// functions to change the total point count and the different point styles of the home team
function homeFtp() {
    ftpHome.textContent = "ftps: "
    tch += 1
    totalCountHome.textContent = tch
    ftpH += 1
    ftpHome.textContent += ftpH
}

function home2() {
    homeTwo.textContent = "2s: "
    tch += 2
    totalCountHome.textContent = tch  
    h2 += 1
    homeTwo.textContent += h2  
}

function home3() {
    homeThree.textContent = "3s: "
    tch += 3
    totalCountHome.textContent = tch
    h3 += 1
    homeThree.textContent += h3
}

// functions to change the total point count and the different point styles of the away team
function awayFtp() {
    ftpAway.textContent = "ftps: "
    tca += 1
    totalCountAway.textContent = tca
    ftpA += 1
    ftpAway.textContent += ftpA
}

function away2() {
    awayTwo.textContent = "2s: "
    tca += 2
    totalCountAway.textContent = tca
    a2 += 1
    awayTwo.textContent += a2
}

function away3() {
    awayThree.textContent = "3s: "
    tca += 3
    totalCountAway.textContent = tca
    a3 += 1
    awayThree.textContent += a3
}