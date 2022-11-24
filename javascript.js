var ticTacGrid = document.querySelectorAll('.box')
var playerOneTurn = true


ticTacGrid.forEach(function(clickBox) {
    clickBox.addEventListener('click', function (event) { 
        
        let clickedOnBox = event.target

        if ((playerOneTurn === false) && ((clickedOnBox.className === 'box') || (clickedOnBox.style.background === '#D5D3DF') || (clickedOnBox.style.background === ''))) {
            (clickedOnBox.style.background = '#FDAAFB') && (clickedOnBox.className = '.player-two')
            playerWon()
            playerOneTurn = true

        } else if ((playerOneTurn === true) && ((clickedOnBox.className === 'box')|| (clickedOnBox.style.background === '#D5D3DF') || (clickedOnBox.style.background === ''))) {
            (clickedOnBox.style.background = '#E3ACFA') && (clickedOnBox.className = '.player-one') 
                playerWon()
                playerOneTurn = false   
        
        }  else if ((clickedOnBox.style.background === '#E3ACFA') || (clickedOnBox.style.background === '#FDAAFB')) {
            console.log('Sorry that box is clicked, choose another')
        }
        })

        
    })


var player1Input = document.querySelector('.item-name1')
var player2Input = document.querySelector('.item-name2')
var play1Button = document.querySelector('.submit-btn1')
var play2Button = document.querySelector('.submit-btn2')
var playOneOutput = document.querySelector('.playOneOutput')
var playTwoOutput = document.querySelector('.playTwoOutput')

play1Button.addEventListener('click', function (event) {
    event.preventDefault()
    var addName1 = document.createElement('li')
    addName1.textContent = player1Input.value
    playOneOutput.appendChild(addName1)
    player1Input.value = ''

})

play2Button.addEventListener('click', function (event) {
    event.preventDefault()
    var addName2 = document.createElement('li')
    addName2.textContent = player2Input.value
    playTwoOutput.appendChild(addName2)
    player2Input.value = ''

})

var playAgainBtn = document.querySelector('.again-btn')

playAgainBtn.addEventListener('click', function (event) {
    let clickedOnAgain = event.target
    event.preventDefault()
    ticTacGrid[0].className = 'box'
    ticTacGrid[1].className = 'box'
    ticTacGrid[2].className = 'box'
    ticTacGrid[3].className = 'box'
    ticTacGrid[4].className = 'box'
    ticTacGrid[5].className = 'box'
    ticTacGrid[6].className = 'box'
    ticTacGrid[7].className = 'box'
    ticTacGrid[8].className = 'box'
    ticTacGrid[0].style.background = '#D5D3DF'
    ticTacGrid[1].style.background = '#D5D3DF'
    ticTacGrid[2].style.background = '#D5D3DF'
    ticTacGrid[3].style.background = '#D5D3DF'
    ticTacGrid[4].style.background = '#D5D3DF'
    ticTacGrid[5].style.background = '#D5D3DF'
    ticTacGrid[6].style.background = '#D5D3DF'
    ticTacGrid[7].style.background = '#D5D3DF'
    ticTacGrid[8].style.background = '#D5D3DF'
    document.querySelector('.game-outcome').textContent = ""
    playerOneTurn = true
    drawYes = false
    win1 = false
    win2 = false

  
})



var win1 = false
var win2 = false
var drawYes = false

var scoreCount1 = 0
var scoreCount2 = 0


function winner1() {
    document.querySelector('.game-outcome').textContent = ('Player 1 Wins!')
    win1 = true
    win2 = false
    drawYes = false
    ticTacGrid[0].style.background = '#E3ACFA'
    ticTacGrid[1].style.background = '#E3ACFA'
    ticTacGrid[2].style.background = '#E3ACFA'
    ticTacGrid[3].style.background = '#E3ACFA'
    ticTacGrid[4].style.background = '#E3ACFA'
    ticTacGrid[5].style.background = '#E3ACFA'
    ticTacGrid[6].style.background = '#E3ACFA'
    ticTacGrid[7].style.background = '#E3ACFA'
    ticTacGrid[8].style.background = '#E3ACFA'
    
    scoreCount1 = scoreCount1 + 1
    
    if (scoreCount1 === 1) {
        document.querySelector('.score-count-1').textContent = ('Player 1 has 1 win') 
    }
    else {
    document.querySelector('.score-count-1').textContent = ('Player 1 has ' + (scoreCount1) + ' wins')
    }
    win1 = false
}

function winner2() {
    document.querySelector('.game-outcome').textContent = ('Player 2 Wins!')
    win1 = false
    win2 = true 
    drawYes = false
    ticTacGrid[0].style.background = '#FDAAFB'
    ticTacGrid[1].style.background = '#FDAAFB'
    ticTacGrid[2].style.background = '#FDAAFB'
    ticTacGrid[3].style.background = '#FDAAFB'
    ticTacGrid[4].style.background = '#FDAAFB'
    ticTacGrid[5].style.background = '#FDAAFB'
    ticTacGrid[6].style.background = '#FDAAFB'
    ticTacGrid[7].style.background = '#FDAAFB'
    ticTacGrid[8].style.background = '#FDAAFB'
   
    scoreCount2 = scoreCount2 + 1
    
    if (scoreCount2 === 1) {
        document.querySelector('.score-count-2').textContent = ('Player 2 has 1 win') 
    }
    else {
    document.querySelector('.score-count-2').textContent = ('Player 2 has ' + (scoreCount2) + ' wins')
    }
    win2 = false
}


function playerWon() {
    if ((ticTacGrid[0].className === '.player-one') && (ticTacGrid[1].className === '.player-one') && (ticTacGrid[2].className === '.player-one')) {
        winner1()
        console.log('winner one 012')
    }
    else if ((ticTacGrid[0].className === '.player-two') && (ticTacGrid[1].className === '.player-two') && (ticTacGrid[2].className === '.player-two')) {
        winner2()
        console.log('winner two 012')
    } 
    else if ((ticTacGrid[3].className === '.player-one') && (ticTacGrid[4].className === '.player-one') && (ticTacGrid[5].className === '.player-one')) {
        winner1()
         console.log('winner one 345')
    }
    else if ((ticTacGrid[3].className === '.player-two') && (ticTacGrid[4].className === '.player-two') && (ticTacGrid[5].className === '.player-two')) {
        winner2()
        console.log('winner two 345')
    } 
    else if ((ticTacGrid[6].className === '.player-one') && (ticTacGrid[7].className === '.player-one') && (ticTacGrid[8].className === '.player-one')) {
        winner1()
        console.log('winner one 678')
    }
    else if ((ticTacGrid[6].className === '.player-two') && (ticTacGrid[7].className === '.player-two') && (ticTacGrid[8].className === '.player-two')) {
        winner2()
        console.log('winner two 678') 
    } 
    else if ((ticTacGrid[0].className === '.player-one') && (ticTacGrid[3].className === '.player-one') && (ticTacGrid[6].className === '.player-one')) {
        winner1()
        console.log('winner one 036') 
    }
    else if ((ticTacGrid[0].className === '.player-two') && (ticTacGrid[3].className === '.player-two') && (ticTacGrid[6].className === '.player-two')) {
        winner2()
        console.log('winner two 036') 
    } 
    else if ((ticTacGrid[1].className === '.player-one') && (ticTacGrid[4].className === '.player-one') && (ticTacGrid[7].className === '.player-one')) {
        winner1()
         console.log('winner one 147') 
    }
    else if ((ticTacGrid[1].className === '.player-two') && (ticTacGrid[4].className === '.player-two') && (ticTacGrid[7].className === '.player-two')) {
        winner2()
        console.log('winner two 147') 
    } 
    else if ((ticTacGrid[2].className === '.player-one') && (ticTacGrid[5].className === '.player-one') && (ticTacGrid[8].className === '.player-one')) {
        winner1()
        console.log('winner one 258') 
    } 
    else if ((ticTacGrid[2].className === '.player-two') && (ticTacGrid[5].className === '.player-two') && (ticTacGrid[8].className === '.player-two')) {
        winner2()
        console.log('winner two 258') 
    } 
    else if ((ticTacGrid[0].className === '.player-one') && (ticTacGrid[4].className === '.player-one') && (ticTacGrid[8].className === '.player-one')) {
        winner1()
        console.log('winner one 048')
    }   
    else if ((ticTacGrid[0].className === '.player-two') && (ticTacGrid[4].className === '.player-two') && (ticTacGrid[8].className === '.player-two')) {
        winner2()
        console.log('winner two 048')
    }
    else if ((ticTacGrid[2].className === '.player-one') && (ticTacGrid[4].className === '.player-one') && (ticTacGrid[6].className === '.player-one')) {
        winner1()
        console.log('winner one 246')
    } 
    else if ((ticTacGrid[2].className === '.player-two') && (ticTacGrid[4].className === '.player-two') && (ticTacGrid[6].className === '.player-two')) {
        winner2()
        console.log('winner two 246') 
    }
    else if (ticTacGrid[0].className !== 'box' && ticTacGrid[1].className !== 'box' && ticTacGrid[2].className !== 'box' && ticTacGrid[3].className !== 'box' && ticTacGrid[4].className !== 'box' && ticTacGrid[5].className !== 'box' && ticTacGrid[6].className !== 'box' && ticTacGrid[7].className !== 'box' && ticTacGrid[8].className !== 'box') {
        checkDraw()
    }
        
        
    
}
function checkDraw() {
  
    drawYes = true 
    document.querySelector('.game-outcome').textContent = "It's a draw! Play again"
 }

 
