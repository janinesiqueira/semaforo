const image = document.querySelector('#image')
const buttons = document.querySelector('#buttons')
let colorIndex = 0
let intervalId = null;

const lightUp = ( event ) => {
  stopAutomatic()
  turnOn[event.target.id]();
}

const nextIndex = () => colorIndex = colorIndex < 2 ? colorIndex+1 : 0;

const changeColor = () => {
  const colors = ['red', 'yellow', 'green']
  const color = colors[colorIndex]
  turnOn[color]()
  nextIndex()
}

const stopAutomatic = () => {
  clearInterval(intervalId)
}

const turnOn = {
  'red' : () => image.src = './img/vermelho.png',
  'yellow' : () => image.src = './img/amarelo.png',
  'green' : () => image.src = './img/verde.png',
  'automatic' : () => intervalId = setInterval(changeColor, 1000)
}

buttons.addEventListener('click', lightUp)