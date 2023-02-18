const cell = document.querySelectorAll(".cell")

const cellOne = document.querySelector("[data-1]")
const cellTwo = document.querySelector("[data-2]")
const cellThree = document.querySelector("[data-3]")
const cellFour = document.querySelector("[data-4]")
const cellFive = document.querySelector("[data-5]")
const cellSix = document.querySelector("[data-6]")
const cellSeven = document.querySelector("[data-7]")
const cellEight = document.querySelector("[data-8]")
const cellNine = document.querySelector("[data-9]")

setInterval(winnerCheck, 100)

let moveCount = 0
let winnerDecision = false
let playerOneScore = 0
let playerTwoScore = 0

function winnerCheck(){
    if (winnerDecision === false) {

        if (cellOne.textContent === "X" && cellTwo.textContent === "X" && cellThree.textContent === "X"){
            winnerDecision = true
            document.querySelector("h1").textContent = "Player 1 wins..."
            cellOne.style.color = 'white'
            cellTwo.style.color = 'white'
            cellThree.style.color = 'white'
            cellOne.style.backgroundColor = 'green'
            cellTwo.style.backgroundColor = 'green'
            cellThree.style.backgroundColor = 'green'
            playerOneScore++
            document.querySelector(".one").textContent = `Player1: ${playerOneScore}`
        }
        if (cellFour.textContent === "X" && cellFive.textContent === "X" && cellSix.textContent === "X"){
            winnerDecision = true
            document.querySelector("h1").textContent = "Player 1 wins..."
            cellFour.style.color = 'white'
            cellFive.style.color = 'white'
            cellSix.style.color = 'white'
            cellFour.style.backgroundColor = 'green'
            cellFive.style.backgroundColor = 'green'
            cellSix.style.backgroundColor = 'green'
            playerOneScore++
            document.querySelector(".one").textContent = `Player1: ${playerOneScore}`
        }
        if (cellSeven.textContent === "X" && cellEight.textContent === "X" && cellNine.textContent === "X"){
            winnerDecision = true
            document.querySelector("h1").textContent = "Player 1 wins..."
            cellSeven.style.color = 'white'
            cellEight.style.color = 'white'
            cellNine.style.color = 'white'
            cellSeven.style.backgroundColor = 'green'
            cellEight.style.backgroundColor = 'green'
            cellNine.style.backgroundColor = 'green'
            playerOneScore++
            document.querySelector(".one").textContent = `Player1: ${playerOneScore}`
        }
        if (cellOne.textContent === "X" && cellFour.textContent === "X" && cellSeven.textContent === "X"){
            winnerDecision = true
            document.querySelector("h1").textContent = "Player 1 wins..."
            cellOne.style.color = 'white'
            cellFour.style.color = 'white'
            cellSeven.style.color = 'white'
            cellOne.style.backgroundColor = 'green'
            cellFour.style.backgroundColor = 'green'
            cellSeven.style.backgroundColor = 'green'
            playerOneScore++
            document.querySelector(".one").textContent = `Player1: ${playerOneScore}`
        }
        if (cellTwo.textContent === "X" && cellFive.textContent === "X" && cellEight.textContent === "X"){
            winnerDecision = true
            document.querySelector("h1").textContent = "Player 1 wins..."
            cellTwo.style.color = 'white'
            cellFive.style.color = 'white'
            cellEight.style.color = 'white'
            cellTwo.style.backgroundColor = 'green'
            cellFive.style.backgroundColor = 'green'
            cellEight.style.backgroundColor = 'green'
            playerOneScore++
            document.querySelector(".one").textContent = `Player1: ${playerOneScore}`
        }
        if (cellThree.textContent === "X" && cellSix.textContent === "X" && cellNine.textContent === "X"){
            winnerDecision = true
            document.querySelector("h1").textContent = "Player 1 wins..."
            cellThree.style.color = 'white'
            cellSix.style.color = 'white'
            cellNine.style.color = 'white'
            cellThree.style.backgroundColor = 'green'
            cellSix.style.backgroundColor = 'green'
            cellNine.style.backgroundColor = 'green'
            playerOneScore++
            document.querySelector(".one").textContent = `Player1: ${playerOneScore}`
        }
        if (cellOne.textContent === "X" && cellFive.textContent === "X" && cellNine.textContent === "X"){
            winnerDecision = true
            document.querySelector("h1").textContent = "Player 1 wins..."
            cellOne.style.color = 'white'
            cellFive.style.color = 'white'
            cellNine.style.color = 'white'
            cellOne.style.backgroundColor = 'green'
            cellFive.style.backgroundColor = 'green'
            cellNine.style.backgroundColor = 'green'
            playerOneScore++
            document.querySelector(".one").textContent = `Player1: ${playerOneScore}`
        }
        if (cellThree.textContent === "X" && cellFive.textContent === "X" && cellSeven.textContent === "X"){
            winnerDecision = true
            document.querySelector("h1").textContent = "Player 1 wins..."
            cellThree.style.color = 'white'
            cellFive.style.color = 'white'
            cellSeven.style.color = 'white'
            cellThree.style.backgroundColor = 'green'
            cellFive.style.backgroundColor = 'green'
            cellSeven.style.backgroundColor = 'green'
            playerOneScore++
            document.querySelector(".one").textContent = `Player1: ${playerOneScore}`
        }
    
        if (cellOne.textContent === "O" && cellTwo.textContent === "O" && cellThree.textContent === "O"){
            winnerDecision = true
            document.querySelector("h1").textContent = "Player 2 wins..."
            cellOne.style.color = 'white'
            cellTwo.style.color = 'white'
            cellThree.style.color = 'white'
            cellOne.style.backgroundColor = 'green'
            cellTwo.style.backgroundColor = 'green'
            cellThree.style.backgroundColor = 'green'
            playerTwoScore++
            document.querySelector(".two").textContent = `Player2: ${playerTwoScore}`
        }
        if (cellFour.textContent === "O" && cellFive.textContent === "O" && cellSix.textContent === "O"){
            winnerDecision = true
            document.querySelector("h1").textContent = "Player 2 wins..."
            cellFour.style.color = 'white'
            cellFive.style.color = 'white'
            cellSix.style.color = 'white'
            cellFour.style.backgroundColor = 'green'
            cellFive.style.backgroundColor = 'green'
            cellSix.style.backgroundColor = 'green'
            playerTwoScore++
            document.querySelector(".two").textContent = `Player2: ${playerTwoScore}`
        }
        if (cellSeven.textContent === "O" && cellEight.textContent === "O" && cellNine.textContent === "O"){
            winnerDecision = true
            document.querySelector("h1").textContent = "Player 2 wins..."
            cellSeven.style.color = 'white'
            cellEight.style.color = 'white'
            cellNine.style.color = 'white'
            cellSeven.style.backgroundColor = 'green'
            cellEight.style.backgroundColor = 'green'
            cellNine.style.backgroundColor = 'green'
            playerTwoScore++
            document.querySelector(".two").textContent = `Player2: ${playerTwoScore}`
        }
        if (cellOne.textContent === "O" && cellFour.textContent === "O" && cellSeven.textContent === "O"){
            winnerDecision = true
            document.querySelector("h1").textContent = "Player 2 wins..."
            cellOne.style.color = 'white'
            cellFour.style.color = 'white'
            cellSeven.style.color = 'white'
            cellOne.style.backgroundColor = 'green'
            cellFour.style.backgroundColor = 'green'
            cellSeven.style.backgroundColor = 'green'
            playerTwoScore++
            document.querySelector(".two").textContent = `Player1: ${playerTwoScore}`
        }
        if (cellTwo.textContent === "O" && cellFive.textContent === "O" && cellEight.textContent === "O"){
            winnerDecision = true
            document.querySelector("h1").textContent = "Player 2 wins..."
            cellTwo.style.color = 'white'
            cellFive.style.color = 'white'
            cellEight.style.color = 'white'
            cellTwo.style.backgroundColor = 'green'
            cellFive.style.backgroundColor = 'green'
            cellEight.style.backgroundColor = 'green'
            playerTwoScore++
            document.querySelector(".two").textContent = `Player1: ${playerTwoScore}`
        }
        if (cellThree.textContent === "O" && cellSix.textContent === "O" && cellNine.textContent === "O"){
            winnerDecision = true
            document.querySelector("h1").textContent = "Player 2 wins..."
            cellThree.style.color = 'white'
            cellSix.style.color = 'white'
            cellNine.style.color = 'white'
            cellThree.style.backgroundColor = 'green'
            cellSix.style.backgroundColor = 'green'
            cellNine.style.backgroundColor = 'green'
            playerTwoScore++
            document.querySelector(".two").textContent = `Player1: ${playerTwoScore}`
        }
        if (cellOne.textContent === "O" && cellFive.textContent === "O" && cellNine.textContent === "O"){
            winnerDecision = true
            document.querySelector("h1").textContent = "Player 2 wins..."
            cellOne.style.color = 'white'
            cellFive.style.color = 'white'
            cellNine.style.color = 'white'
            cellOne.style.backgroundColor = 'green'
            cellFive.style.backgroundColor = 'green'
            cellNine.style.backgroundColor = 'green'
            playerTwoScore++
            document.querySelector(".two").textContent = `Player2: ${playerTwoScore}`
        }
        if (cellThree.textContent === "O" && cellFive.textContent === "O" && cellSeven.textContent === "O"){
            winnerDecision = true
            document.querySelector("h1").textContent = "Player 2 wins..."
            cellThree.style.color = 'white'
            cellFive.style.color = 'white'
            cellSeven.style.color = 'white'
            cellThree.style.backgroundColor = 'green'
            cellFive.style.backgroundColor = 'green'
            cellSeven.style.backgroundColor = 'green'
            playerTwoScore++
            document.querySelector(".two").textContent = `Player2: ${playerTwoScore}`
        }
        if (moveCount === 9) {
            document.querySelector("h1").textContent = "It's a Draw..."
            document.querySelector(".reset").style.visibility = "unset"
            document.querySelector(".reset").addEventListener('click', () => {
                document.querySelector("h1").textContent = "Player1: Chose your box..."
                cell.forEach (cell => {
                    cell.textContent = ""
                    cell.style.backgroundColor = "rgba(54, 169, 223, 0.377)"
                    cell.style.color = "red"
                    winnerDecision = false
                    moveCount = 0
                    
                })
            })
        }
        

    } else if (winnerDecision === true) {
        document.querySelector(".reset").style.visibility = "unset"
        document.querySelector(".reset").addEventListener('click', () => {
            document.querySelector("h1").textContent = "Player1: Chose your box..."
            cell.forEach (cell => {
                cell.textContent = ""
                cell.style.backgroundColor = "rgba(54, 169, 223, 0.377)"
                cell.style.color = "red"
                winnerDecision = false
                moveCount = 0
                document.querySelector(".reset").style.visibility = "hidden"
                
            })
        })
    } 
}

cell.forEach(cell => {
    cell.addEventListener('click', () => {
        winnerCheck()
        if (winnerDecision === false){
            if (moveCount % 2 === 0 && cell.textContent === ""){
                cell.textContent = "X"
                moveCount++
                document.querySelector("h1").textContent = "Player2: Chose your box..."
            } else if (moveCount % 2 != 0 && cell.textContent === "") {
                cell.textContent = "O"
                moveCount++
                document.querySelector("h1").textContent = "Player1: Chose your box..."
            }
        }
        
    })
    
})