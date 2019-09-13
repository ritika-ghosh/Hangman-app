
    import Hangman from './hangman'
    import getPuzzle from './requests'

const puzzleEl= document.querySelector('#puzzle')
const guessEl = document.querySelector('#guesses')
let firstTry 


window.addEventListener('keypress', (e) =>{
    const guess = String.fromCharCode(e.charCode)
    firstTry.makeGuess(guess)
    render()
   
})

const render = ()=> {
    puzzleEl.innerHTML = ''
   guessEl.textContent = firstTry.statusMessage

   firstTry.puzzle.split('').forEach((letter)=> {
        const letterEl = document.createElement('span')
        letterEl.textContent = letter
        puzzleEl.appendChild(letterEl)
   })
}

const startGame = async () => {
    const puzzle = await getPuzzle('2')
    firstTry = new Hangman(puzzle , 5)
    render()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()
