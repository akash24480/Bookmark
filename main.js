const iconWrapper = document.querySelector(".icon-hamburger-wrapper")
const icon = document.querySelector(".icon-hamburger")
const menuWrapper = document.querySelector(".menu-wrapper")

// menu for mobile applications
const changeLogoColor = (open) => {
    const logoCircle = document.querySelector(".logo g g circle")
    const logoBadge = document.querySelector(".logo g g path")
    const logoWriting = document.querySelector(".logo g path")
    if(open) {
        logoCircle.style.fill = "#fff"
        logoBadge.style.fill = "hsla(231, 69%, 60%, 0.9)"
        logoWriting.style.fill = "#fff"
    } else {
        logoCircle.style.fill = "#5267DF"
        logoBadge.style.fill = "#fff"
        logoWriting.style.fill = "#242A45"
    }
}

let menuOpen = false
iconWrapper.addEventListener("click", () => {
    menuOpen = !menuOpen
    if(menuOpen) {
        menuWrapper.style.transform = "translateX(0)"
        icon.src = "images/icon-close.svg"
        changeLogoColor(true)
    } else {
        menuWrapper.style.transform = "translateX(100%)"
        icon.src = "images/icon-hamburger.svg"
        changeLogoColor(false)        
    }
})

// features section
const features = document.querySelector("#features")
const featureNavBtns = document.querySelectorAll(".features-nav button")

featureNavBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        document.querySelector(".active")?.classList.remove("active")
        btn.classList.add("active")
        const index = btn.dataset.index
        features.style.transform = `translateX(-${100 * index}vw)`
    })
})

// faq section
const summarys = document.querySelectorAll("summary")
const arrowIcons = document.querySelectorAll(".icon-arrow")

summarys.forEach((summary) => {
    summary.addEventListener("click", () => {
        const path = arrowIcons[summary.dataset.index].children[0]
        if(summary.dataset.clicked == "true") {
            path.style.stroke = "hsl(231, 69%, 60%)"
            summary.dataset.clicked = "false"
        } else {
            path.style.stroke = "hsl(0, 94%, 66%)"
            summary.dataset.clicked = "true"
        }
    })
})

// form handling
const form = document.querySelector(".email-form")
const errorMsg = document.querySelector(".error-msg")
const email = document.querySelector("[type=email]")

const validateEmail = email => {
    return email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
}

const displayErrorMsg = visible => {
    if(visible) {
        errorMsg.style.visibility = "visible"
    email.style.backgroundImage = "url('images/icon-error.svg')"
    } else {
        errorMsg.style.visibility = "hidden"
    email.style.backgroundImage = "none"
    }
}

form.addEventListener("submit", e => {
    e.preventDefault()
    if(!validateEmail(email.value)) {
        displayErrorMsg(true)
    }
})

email.addEventListener("keydown", () => {
    displayErrorMsg(false)
})