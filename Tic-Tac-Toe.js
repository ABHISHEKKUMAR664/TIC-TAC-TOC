class TicTacToe{
    constructor(){
        this.playCells = Array(3).fill().map(() => new Array(3).fill(0))
        this.playerX = true;
        this.playerO = false;
        this.playerXName = "Player-X"
        this.playerOName = "Player-O"
        this.count=0

        
    }
}
const ticTacToe = new TicTacToe() 
console.log(ticTacToe.playCells)

const cellClickHandler = (row, column, index) =>{
    console.log(row, column, index)
    console.log(ticTacToe)
    if (ticTacToe.playCells[row][column] !== 0) return;
    const playCell = document.getElementsByClassName("play-cell")[index]
    const updatedClassName = ticTacToe.playerX ? "x-cell" : "o-cell"
    playCell.classList.add(updatedClassName)
    playCell.innerText = ticTacToe.playerX ? "X" : "O"
    ticTacToe.playCells[row][column] = ticTacToe.playerX ? "X" : "O"
    ticTacToe.playerX = !ticTacToe.playerX
    ticTacToe.count += 1
    if (ticTacToe.count >= 5) checkResult
    updateTurnDisplay()
}
const updateTurnDisplay = () => {
    const turnDisplay = document.getElementsByClassName("turn-display")[0]
    turnDisplay.innerText=`${ticTacToe.playerX?ticTacToe.playerXName:ticTacToe.playerOName} its your turn!  1`
}
const checkResult = () => {
    const currPlayerValue=ticTacToe.playerX?"X":"O"
}