const gameStatusDom = document.querySelector('.game-status')

let gameOn = true
let currentPlayer = 'X'
let gameStatus = ['', '', '', '', '', '', '', '', '']
let compCount = 0
let turnChanger = true
let XWon = false

let winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]

const currentPlayerMessage = () => `its ${currentPlayer}'s turn!`
const winMessage = () => `player ${currentPlayer} has won!`
const drawMessage = (msg, player = '') => {
  document.querySelector('.alert h1').innerHTML = `${player} ${msg}`
  document.querySelector('.alert').classList.add('show')
  return
}

function getRand() {
  return Math.floor(Math.random() * gameStatus.length)
}

function handleBoxClicked(boxClicked, boxIndex) {
  if (turnChanger) {
    gameStatus[boxIndex] = currentPlayer
    boxClicked.target.innerHTML = currentPlayer
    checkForWin()
    currentPlayer = 'O'
    gameStatusDom.innerHTML = currentPlayerMessage()
    compCount++
    turnChanger = false
  }
  if (XWon) {
    return
  } else {
    setTimeout(compMove, 1000)
  }

  return
}

function compMove() {
  if (!turnChanger) {
    if (compCount < 2) {
      let randIndex = getRand()
      if (gameStatus[randIndex] !== '') randIndex++
      gameStatus[randIndex] = currentPlayer
      document.getElementById(randIndex).innerHTML = currentPlayer
    } else if (compCount >= 2) {
      if (
        gameStatus[0] === 'O' &&
        gameStatus[1] === 'O' &&
        gameStatus[2] === ''
      ) {
        gameStatus[2] = currentPlayer
        document.getElementById('2').innerHTML = currentPlayer
      } else if (
        gameStatus[1] === 'O' &&
        gameStatus[2] === 'O' &&
        gameStatus[0] === ''
      ) {
        gameStatus[0] = currentPlayer
        document.getElementById('0').innerHTML = currentPlayer
      } else if (
        gameStatus[0] === 'O' &&
        gameStatus[2] === 'O' &&
        gameStatus[1] === ''
      ) {
        gameStatus[1] = currentPlayer
        document.getElementById('1').innerHTML = currentPlayer
      } else if (
        gameStatus[3] === 'O' &&
        gameStatus[4] === 'O' &&
        gameStatus[5] === ''
      ) {
        gameStatus[5] = currentPlayer
        document.getElementById('5').innerHTML = currentPlayer
      } else if (
        gameStatus[4] === 'O' &&
        gameStatus[5] === 'O' &&
        gameStatus[3] === ''
      ) {
        gameStatus[3] = currentPlayer
        document.getElementById('3').innerHTML = currentPlayer
      } else if (
        gameStatus[3] === 'O' &&
        gameStatus[5] === 'O' &&
        gameStatus[4] === ''
      ) {
        gameStatus[4] = currentPlayer
        document.getElementById('4').innerHTML = currentPlayer
      } else if (
        gameStatus[6] === 'O' &&
        gameStatus[7] === 'O' &&
        gameStatus[8] === ''
      ) {
        gameStatus[8] = currentPlayer
        document.getElementById('8').innerHTML = currentPlayer
      } else if (
        gameStatus[7] === 'O' &&
        gameStatus[8] === 'O' &&
        gameStatus[6] === ''
      ) {
        gameStatus[6] = currentPlayer
        document.getElementById('6').innerHTML = currentPlayer
      } else if (
        gameStatus[6] === 'O' &&
        gameStatus[8] === 'O' &&
        gameStatus[7] === ''
      ) {
        gameStatus[7] = currentPlayer
        document.getElementById('7').innerHTML = currentPlayer
      } else if (
        gameStatus[0] === 'O' &&
        gameStatus[3] === 'O' &&
        gameStatus[6] === ''
      ) {
        gameStatus[6] = currentPlayer
        document.getElementById('6').innerHTML = currentPlayer
      } else if (
        gameStatus[3] === 'O' &&
        gameStatus[6] === 'O' &&
        gameStatus[0] === ''
      ) {
        gameStatus[0] = currentPlayer
        document.getElementById('0').innerHTML = currentPlayer
      } else if (
        gameStatus[0] === 'O' &&
        gameStatus[6] === 'O' &&
        gameStatus[3] === ''
      ) {
        gameStatus[3] = currentPlayer
        document.getElementById('3').innerHTML = currentPlayer
      } else if (
        gameStatus[1] === 'O' &&
        gameStatus[4] === 'O' &&
        gameStatus[7] === ''
      ) {
        gameStatus[7] = currentPlayer
        document.getElementById('7').innerHTML = currentPlayer
      } else if (
        gameStatus[4] === 'O' &&
        gameStatus[7] === 'O' &&
        gameStatus[1] === ''
      ) {
        gameStatus[1] = currentPlayer
        document.getElementById('1').innerHTML = currentPlayer
      } else if (
        gameStatus[1] === 'O' &&
        gameStatus[7] === 'O' &&
        gameStatus[4] === ''
      ) {
        gameStatus[4] = currentPlayer
        document.getElementById('4').innerHTML = currentPlayer
      } else if (
        gameStatus[2] === 'O' &&
        gameStatus[5] === 'O' &&
        gameStatus[8] === ''
      ) {
        gameStatus[8] = currentPlayer
        document.getElementById('8').innerHTML = currentPlayer
      } else if (
        gameStatus[5] === 'O' &&
        gameStatus[8] === 'O' &&
        gameStatus[2] === ''
      ) {
        gameStatus[2] = currentPlayer
        document.getElementById('2').innerHTML = currentPlayer
      } else if (
        gameStatus[2] === 'O' &&
        gameStatus[8] === 'O' &&
        gameStatus[5] === ''
      ) {
        gameStatus[5] = currentPlayer
        document.getElementById('5').innerHTML = currentPlayer
      } else if (
        gameStatus[0] === 'O' &&
        gameStatus[4] === 'O' &&
        gameStatus[8] === ''
      ) {
        gameStatus[8] = currentPlayer
        document.getElementById('8').innerHTML = currentPlayer
      } else if (
        gameStatus[4] === 'O' &&
        gameStatus[8] === 'O' &&
        gameStatus[0] === ''
      ) {
        gameStatus[0] = currentPlayer
        document.getElementById('0').innerHTML = currentPlayer
      } else if (
        gameStatus[0] === 'O' &&
        gameStatus[8] === 'O' &&
        gameStatus[4] === ''
      ) {
        gameStatus[4] = currentPlayer
        document.getElementById('4').innerHTML = currentPlayer
      } else if (
        gameStatus[2] === 'O' &&
        gameStatus[4] === 'O' &&
        gameStatus[6] === ''
      ) {
        gameStatus[6] = currentPlayer
        document.getElementById('6').innerHTML = currentPlayer
      } else if (
        gameStatus[4] === 'O' &&
        gameStatus[6] === 'O' &&
        gameStatus[2] === ''
      ) {
        gameStatus[2] = currentPlayer
        document.getElementById('2').innerHTML = currentPlayer
      } else if (
        gameStatus[2] === 'O' &&
        gameStatus[6] === 'O' &&
        gameStatus[4] === ''
      ) {
        gameStatus[4] = currentPlayer
        document.getElementById('4').innerHTML = currentPlayer
      } else if (
        gameStatus[0] === 'X' &&
        gameStatus[1] === 'X' &&
        gameStatus[2] === ''
      ) {
        gameStatus[2] = currentPlayer
        document.getElementById('2').innerHTML = currentPlayer
      } else if (
        gameStatus[1] === 'X' &&
        gameStatus[2] === 'X' &&
        gameStatus[0] === ''
      ) {
        gameStatus[0] = currentPlayer
        document.getElementById('0').innerHTML = currentPlayer
      } else if (
        gameStatus[0] === 'X' &&
        gameStatus[2] === 'X' &&
        gameStatus[1] === ''
      ) {
        gameStatus[1] = currentPlayer
        document.getElementById('1').innerHTML = currentPlayer
      } else if (
        gameStatus[3] === 'X' &&
        gameStatus[4] === 'X' &&
        gameStatus[5] === ''
      ) {
        gameStatus[5] = currentPlayer
        document.getElementById('5').innerHTML = currentPlayer
      } else if (
        gameStatus[4] === 'X' &&
        gameStatus[5] === 'X' &&
        gameStatus[3] === ''
      ) {
        gameStatus[3] = currentPlayer
        document.getElementById('3').innerHTML = currentPlayer
      } else if (
        gameStatus[3] === 'X' &&
        gameStatus[5] === 'X' &&
        gameStatus[4] === ''
      ) {
        gameStatus[4] = currentPlayer
        document.getElementById('4').innerHTML = currentPlayer
      } else if (
        gameStatus[6] === 'X' &&
        gameStatus[7] === 'X' &&
        gameStatus[8] === ''
      ) {
        gameStatus[8] = currentPlayer
        document.getElementById('8').innerHTML = currentPlayer
      } else if (
        gameStatus[7] === 'X' &&
        gameStatus[8] === 'X' &&
        gameStatus[6] === ''
      ) {
        gameStatus[6] = currentPlayer
        document.getElementById('6').innerHTML = currentPlayer
      } else if (
        gameStatus[6] === 'X' &&
        gameStatus[8] === 'X' &&
        gameStatus[7] === ''
      ) {
        gameStatus[7] = currentPlayer
        document.getElementById('7').innerHTML = currentPlayer
      } else if (
        gameStatus[0] === 'X' &&
        gameStatus[3] === 'X' &&
        gameStatus[6] === ''
      ) {
        gameStatus[6] = currentPlayer
        document.getElementById('6').innerHTML = currentPlayer
      } else if (
        gameStatus[3] === 'X' &&
        gameStatus[6] === 'X' &&
        gameStatus[0] === ''
      ) {
        gameStatus[0] = currentPlayer
        document.getElementById('0').innerHTML = currentPlayer
      } else if (
        gameStatus[0] === 'X' &&
        gameStatus[6] === 'X' &&
        gameStatus[3] === ''
      ) {
        gameStatus[3] = currentPlayer
        document.getElementById('3').innerHTML = currentPlayer
      } else if (
        gameStatus[1] === 'X' &&
        gameStatus[4] === 'X' &&
        gameStatus[7] === ''
      ) {
        gameStatus[7] = currentPlayer
        document.getElementById('7').innerHTML = currentPlayer
      } else if (
        gameStatus[4] === 'X' &&
        gameStatus[7] === 'X' &&
        gameStatus[1] === ''
      ) {
        gameStatus[1] = currentPlayer
        document.getElementById('1').innerHTML = currentPlayer
      } else if (
        gameStatus[1] === 'X' &&
        gameStatus[7] === 'X' &&
        gameStatus[4] === ''
      ) {
        gameStatus[4] = currentPlayer
        document.getElementById('4').innerHTML = currentPlayer
      } else if (
        gameStatus[2] === 'X' &&
        gameStatus[5] === 'X' &&
        gameStatus[8] === ''
      ) {
        gameStatus[8] = currentPlayer
        document.getElementById('8').innerHTML = currentPlayer
      } else if (
        gameStatus[5] === 'X' &&
        gameStatus[8] === 'X' &&
        gameStatus[2] === ''
      ) {
        gameStatus[2] = currentPlayer
        document.getElementById('2').innerHTML = currentPlayer
      } else if (
        gameStatus[2] === 'X' &&
        gameStatus[8] === 'X' &&
        gameStatus[5] === ''
      ) {
        gameStatus[5] = currentPlayer
        document.getElementById('5').innerHTML = currentPlayer
      } else if (
        gameStatus[0] === 'X' &&
        gameStatus[4] === 'X' &&
        gameStatus[8] === ''
      ) {
        gameStatus[8] = currentPlayer
        document.getElementById('8').innerHTML = currentPlayer
      } else if (
        gameStatus[4] === 'X' &&
        gameStatus[8] === 'X' &&
        gameStatus[0] === ''
      ) {
        gameStatus[0] = currentPlayer
        document.getElementById('0').innerHTML = currentPlayer
      } else if (
        gameStatus[0] === 'X' &&
        gameStatus[8] === 'X' &&
        gameStatus[4] === ''
      ) {
        gameStatus[4] = currentPlayer
        document.getElementById('4').innerHTML = currentPlayer
      } else if (
        gameStatus[2] === 'X' &&
        gameStatus[4] === 'X' &&
        gameStatus[6] === ''
      ) {
        gameStatus[6] = currentPlayer
        document.getElementById('6').innerHTML = currentPlayer
      } else if (
        gameStatus[4] === 'X' &&
        gameStatus[6] === 'X' &&
        gameStatus[2] === ''
      ) {
        gameStatus[2] = currentPlayer
        document.getElementById('2').innerHTML = currentPlayer
      } else if (
        gameStatus[2] === 'X' &&
        gameStatus[6] === 'X' &&
        gameStatus[4] === ''
      ) {
        gameStatus[4] = currentPlayer
        document.getElementById('4').innerHTML = currentPlayer
      } else {
        let firstEmptyBox = gameStatus.find((box) => box === '')
        let firstEmptyBoxIndex = gameStatus.indexOf(firstEmptyBox)
        gameStatus[firstEmptyBoxIndex] = currentPlayer
        document.getElementById(firstEmptyBoxIndex).innerHTML = currentPlayer
      }
    }
  }
  checkForWin()
  currentPlayer = 'X'
  gameStatusDom.innerHTML = currentPlayerMessage()
  turnChanger = true

  return
}

function checkForWin() {
  let roundWin = false

  for (let i = 0; i < winConditions.length; i++) {
    const winCondition = winConditions[i]

    let x = gameStatus[winCondition[0]]
    let y = gameStatus[winCondition[1]]
    let z = gameStatus[winCondition[2]]

    if (x === '' || y === '' || z === '') {
      continue
    }

    if (x === y && y === z) {
      roundWin = true
      break
    }
  }

  if (roundWin) {
    gameOn = false
    XWon = true
    gameStatusDom.innerHTML = winMessage()
    drawMessage('has won the game!', currentPlayer)
    return
  }

  let gameDraw = !gameStatus.includes('')
  if (gameDraw) {
    XWon = true
    gameStatusDom.innerHTML = 'Game ended in draw!'
    drawMessage('Game ended in draw!')
    gameOn = false
    return
  }

  // changeCurrentPlayer()
}

function showAlert() {
  document.querySelector('.alert h1').innerHTML = `Box already played in!`
  document.querySelector('.alert').classList.add('show')
  return setTimeout(
    () => document.querySelector('.alert').classList.remove('show'),
    2000
  )
}

function resetGame() {
  location.reload()
}

document.querySelectorAll('.box').forEach((box) => {
  box.addEventListener('click', (e) => {
    let index = e.target.id
    if (gameOn) {
      if (e.target.innerHTML !== '') {
        showAlert()
      } else {
        handleBoxClicked(e, index)
        //checkForWin()
      }
    }
  })
})

document.querySelector('.btn').addEventListener('click', resetGame)
