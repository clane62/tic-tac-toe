var ticTacGrid = document.querySelectorAll('.box')
var playerOneTurn = true

ticTacGrid.forEach(function(clickBox) {
    clickBox.addEventListener('click', function (event) { 
        
        let clickedOnBox = event.target

        if ((playerOneTurn === false) && ((clickedOnBox.style.background === 'white') || (clickedOnBox.style.background === ''))) {
            (clickedOnBox.style.background = 'pink') && (clickedOnBox.className = '.player-two')
            playerOneWin()
            playerTwoWin()
            playerOneTurn = true

        } else if ((playerOneTurn === true) && ((clickedOnBox.style.background === 'white') || (clickedOnBox.style.background === ''))) {
            (clickedOnBox.style.background = 'purple') && (clickedOnBox.className = '.player-one') 
                playerOneWin()
                playerTwoWin()
                playerOneTurn = false   
        
        }  else if ((clickedOnBox.style.background == 'purple') || (clickedOnBox.style.background == 'pink')) {
            console.log('Sorry that box is clicked, choose another')
        }
        })
    })



function playerOneWin() {
    if ((ticTacGrid[0].className === '.player-one') && (ticTacGrid[1].className === '.player-one') && (ticTacGrid[2].className === '.player-one')) {
        console.log('winner one 012')
    }
    if ((ticTacGrid[3].className === '.player-one') && (ticTacGrid[4].className === '.player-one') && (ticTacGrid[5].className === '.player-one')) {
        console.log('winner one 345')
    }
    if ((ticTacGrid[6].className === '.player-one') && (ticTacGrid[7].className === '.player-one') && (ticTacGrid[8].className === '.player-one')) {
        console.log('winner one 678')
    }
    if ((ticTacGrid[0].className === '.player-one') && (ticTacGrid[3].className === '.player-one') && (ticTacGrid[6].className === '.player-one')) {
        console.log('winner one 036') 
    }
    if ((ticTacGrid[1].className === '.player-one') && (ticTacGrid[4].className === '.player-one') && (ticTacGrid[7].className === '.player-one')) {
        console.log('winner one 147') 
    }
    if ((ticTacGrid[2].className === '.player-one') && (ticTacGrid[5].className === '.player-one') && (ticTacGrid[8].className === '.player-one')) {
        console.log('winner one 258') 
    } 
    if ((ticTacGrid[0].className === '.player-one') && (ticTacGrid[4].className === '.player-one') && (ticTacGrid[8].className === '.player-one')) {
        console.log('winner one 048')
    }   
    if ((ticTacGrid[2].className === '.player-one') && (ticTacGrid[4].className === '.player-one') && (ticTacGrid[6].className === '.player-one')) {
        console.log('winner one 246')
    }

}


function playerTwoWin() {

if ((ticTacGrid[0].className === '.player-two') && (ticTacGrid[1].className === '.player-two') && (ticTacGrid[2].className === '.player-two')) {
    console.log('winner two 012')
} 
if ((ticTacGrid[3].className === '.player-two') && (ticTacGrid[4].className === '.player-two') && (ticTacGrid[5].className === '.player-two')) {
    console.log('winner two 345')
} 
if ((ticTacGrid[6].className === '.player-two') && (ticTacGrid[7].className === '.player-two') && (ticTacGrid[8].className === '.player-two')) {
    console.log('winner two 678') 
} 
if ((ticTacGrid[0].className === '.player-two') && (ticTacGrid[3].className === '.player-two') && (ticTacGrid[6].className === '.player-two')) {
    console.log('winner two 036') 
} 
if ((ticTacGrid[1].className === '.player-two') && (ticTacGrid[4].className === '.player-two') && (ticTacGrid[7].className === '.player-two')) {
    console.log('winner two 147') 
} 
if ((ticTacGrid[2].className === '.player-two') && (ticTacGrid[5].className === '.player-two') && (ticTacGrid[8].className === '.player-two')) {
    console.log('winner two 258') 
} 
if ((ticTacGrid[0].className === '.player-two') && (ticTacGrid[4].className === '.player-two') && (ticTacGrid[8].className === '.player-two')) {
    console.log('winner two 048')
} 
if ((ticTacGrid[2].className === '.player-two') && (ticTacGrid[4].className === '.player-two') && (ticTacGrid[6].className === '.player-two')) {
    console.log('winner two 246') 
}
}