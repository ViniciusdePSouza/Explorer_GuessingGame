// variáveis 

const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
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
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')
}

function gameBeggining(e) {
    e.preventDefault();

    let number = document.querySelector('#numberInput')

    if(Number(number.value) == randomNumber){
        toggleFuction()

        screen2.querySelector('h2').innerText = `Parabéns! O número era ${randomNumber}
        Você acertou em ${attempts} tentativas`
    }

    number.value = ''

    attempts++
}

btnTry.addEventListener('click', gameBeggining)
btnReset.addEventListener('click', resetGame)
