let guestStoreEl = document.getElementById("guest-score")
let homeStoreEl = document.getElementById("home-score")
let homeScore = 0
let guestScore = 0
let resetEl = document.getElementById("reset-btn")

function incrementOneHome() {
    homeScore += 1
    homeStoreEl.textContent = homeScore
}

function incrementTwoHome() {
    homeScore += 2
    homeStoreEl.textContent = homeScore
}

function incrementThreeHome() {
    homeScore += 3
    homeStoreEl.textContent = homeScore
}

function incrementOneGuest() {
    guestScore += 1
    guestStoreEl.textContent = guestScore
}

function incrementTwoGuest() {
    guestScore += 2
    guestStoreEl.textContent = guestScore
}

function incrementThreeGuest() {
    guestScore += 3
    guestStoreEl.textContent = guestScore
}

function reset() {
    homeScore = 0
    guestScore = 0
    homeStoreEl.textContent = homeScore
    guestStoreEl.textContent = guestScore
}