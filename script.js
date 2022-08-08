// variáveis 

const scream1 = document.querySelector('.scream1')
const scream2 = document.querySelector('.scream2')
const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')

let randomNumber = Math.round(Math.random() * 10)
let attempts = 1

function resetGame(){
    toggleFuction()

    randomNumber = Math.round(Math.random() * 10)
    attempts = 1
}

function toggleFuction() {
    scream1.classList.toggle('hide')
    scream2.classList.toggle('hide')
}

function gameBeggining(e) {
    e.preventDefault();

    let number = document.querySelector('#numberInput')

    if(Number(number.value) == randomNumber){
        toggleFuction()

        scream2.querySelector('h2').innerText = `Parabéns! O número era ${randomNumber}
        Você acertou em ${attempts} tentativas`
    }

    number.value = ''

    attempts++
}
