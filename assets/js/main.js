let cat = document.getElementById("cat")
let catPosition = 0
let catDirection = "right"
let width = window.screen.availWidth - 200


function walk() {
    if (catDirection == "right" && catPosition < width) {
        catPosition += 7
        cat.style.left = `${catPosition}px`
        console.log(catPosition)
    } else if (catPosition > width) {
        console.log("Ende")
        catDirection = "left"
        cat.style.transform = "rotateY(180deg)"
        console.log(catDirection)
        catPosition -= 7
        cat.style.left = `${catPosition}px`
    } else if (catDirection == "left" && catPosition < width && catPosition > 0) {
        catPosition -= 7
        cat.style.left = `${catPosition}px`
        console.log(catPosition)
    } else if (catDirection == "left" && catPosition == 0) {
        console.log("Ende")
        catDirection = "right"
        cat.style.transform = "rotateY(0deg)"
        console.log(catDirection)
        catPosition += 7
        cat.style.left = `${catPosition}px`
    }
}

document.getElementById("turn").addEventListener("click", () => {
    if (catDirection == "right") {
        cat.style.transform = "rotateY(180deg)"
        catDirection = "left"
    } else if (catDirection == "left") {
        cat.style.transform = "rotateY(0deg)"
        catDirection = "right"
    }
})

document.getElementById("speed").addEventListener("click", () => {
    let c = setInterval(walk, 20)
    document.getElementById("pause").addEventListener("click", () => {
        clearInterval(c)
    })
})

document.getElementById("walk").addEventListener("click", () => {
    let d = setInterval(walk, 50)
    document.getElementById("pause").addEventListener("click", () => {
        clearInterval(d)
    })
})