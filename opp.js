const title = document.querySelector(".title")

const son1 = prompt("Son kiriting")
const son2 = prompt("Son kiriting")
const son3 = prompt("Son kiriting")

if (son1 < son2 && son1 > son3 || son1 < son3 && son1 > son2) {
    title.textContent = `O'rta son: ${son1}`
} else if ((son2 < son1 && son2 > son3 || son2 < son3 && son2 > son1)) {
    title.textContent = `O'rta son: ${son2}`
} else if (son3 < son1 && son3 > son2 || son3 < son2 && son3 > son1) {
    title.textContent = `O'rta son: ${son3}`
} 