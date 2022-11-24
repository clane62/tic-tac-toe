var ticTacGrid = document.querySelectorAll('.box')
var playerOneTurn = true

ticTacGrid.forEach(function(clickBox) {
    clickBox.addEventListener('click', function (event) { 
        
        let clickedOnBox = event.target

        if ((playerOneTurn === false) && ((clickedOnBox.style.background === 'white') || (clickedOnBox.style.background === ''))) {
            (clickedOnBox.style.background = 'pink') && (clickedOnBox.className = '.player-two')
            // playerWon()
            playerOneTurn = true

        } else if ((playerOneTurn === true) && ((clickedOnBox.style.background === 'white') || (clickedOnBox.style.background === ''))) {
            (clickedOnBox.style.background = 'purple') && (clickedOnBox.className = '.player-one') 
                // playerWon()
                playerOneTurn = false   
        
        }  else if ((clickedOnBox.style.background == 'purple') || (clickedOnBox.style.background == 'pink')) {
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

var win1 = true
var win2 = true

function winner1() {
    document.querySelector('.playOneOutput').textContent = ('You won!')
    win1 = false
}

function winner2() {
    document.querySelector('.playTwoOutput').textContent = ('You won!')
    win2 = false
   
}

// function draw() {
//     if ((ticTacGrid[0].className === '.player-one') || (ticTacGrid[0].className === '.player-two')
//      && (ticTacGrid[1].className === '.player-one') || (ticTacGrid[1].className === '.player-two') 
//      && (ticTacGrid[2].className === '.player-one') || (ticTacGrid[2].className === '.player-two') 
//      && (ticTacGrid[3].className === '.player-one') || (ticTacGrid[3].className === '.player-two') 
//      && (ticTacGrid[4].className === '.player-one') || (ticTacGrid[4].className === '.player-two') 
//      && (ticTacGrid[5].className === '.player-one') || (ticTacGrid[5].className === '.player-two') 
//      && (ticTacGrid[6].className === '.player-one') || (ticTacGrid[6].className === '.player-two') 
//      && (ticTacGrid[7].className === '.player-one') || (ticTacGrid[7].className === '.player-two') 
//      && (ticTacGrid[8].className === '.player-one') || (ticTacGrid[8].className === '.player-two')) {
//         return ((document.querySelector('.playTwoOutput').textContent = "It's a draw! Play again") &&
//         (document.querySelector('.playOneOutput').textContent = "It's a draw! Play again"))

//     } else {
//         console.log('not a draw')
//     }

    console.log("no draw")
// }



// function playerWon() {
//     if ((ticTacGrid[0].className === '.player-one') && (ticTacGrid[1].className === '.player-one') && (ticTacGrid[2].className === '.player-one')) {
//         winner1()
//         console.log('winner one 012')
//     }
//     else if ((ticTacGrid[0].className === '.player-two') && (ticTacGrid[1].className === '.player-two') && (ticTacGrid[2].className === '.player-two')) {
//         winner2()
//         console.log('winner two 012')
//     } 
//     else if ((ticTacGrid[3].className === '.player-one') && (ticTacGrid[4].className === '.player-one') && (ticTacGrid[5].className === '.player-one')) {
//         winner1()
//         console.log('winner one 345')
//     }
//     else if ((ticTacGrid[3].className === '.player-two') && (ticTacGrid[4].className === '.player-two') && (ticTacGrid[5].className === '.player-two')) {
//         winner2()
//         console.log('winner two 345')
//     } 
//     else if ((ticTacGrid[6].className === '.player-one') && (ticTacGrid[7].className === '.player-one') && (ticTacGrid[8].className === '.player-one')) {
//         winner1()
//         console.log('winner one 678')
//     }
//     else if ((ticTacGrid[6].className === '.player-two') && (ticTacGrid[7].className === '.player-two') && (ticTacGrid[8].className === '.player-two')) {
//         winner2()
//         console.log('winner two 678') 
//     } 
//     else if ((ticTacGrid[0].className === '.player-one') && (ticTacGrid[3].className === '.player-one') && (ticTacGrid[6].className === '.player-one')) {
//         winner1()
//         console.log('winner one 036') 
//     }
//     else if ((ticTacGrid[0].className === '.player-two') && (ticTacGrid[3].className === '.player-two') && (ticTacGrid[6].className === '.player-two')) {
//         winner2()
//         console.log('winner two 036') 
//     } 
//     else if ((ticTacGrid[1].className === '.player-one') && (ticTacGrid[4].className === '.player-one') && (ticTacGrid[7].className === '.player-one')) {
//         winner1()
//         console.log('winner one 147') 
//     }
//     else if ((ticTacGrid[1].className === '.player-two') && (ticTacGrid[4].className === '.player-two') && (ticTacGrid[7].className === '.player-two')) {
//         winner2()
//         console.log('winner two 147') 
//     } 
//     else if ((ticTacGrid[2].className === '.player-one') && (ticTacGrid[5].className === '.player-one') && (ticTacGrid[8].className === '.player-one')) {
//         winner1()
//         console.log('winner one 258') 
//     } 
//     else if ((ticTacGrid[2].className === '.player-two') && (ticTacGrid[5].className === '.player-two') && (ticTacGrid[8].className === '.player-two')) {
//         winner2()
//         console.log('winner two 258') 
//     } 
//     else if ((ticTacGrid[0].className === '.player-one') && (ticTacGrid[4].className === '.player-one') && (ticTacGrid[8].className === '.player-one')) {
//         winner1()
//         console.log('winner one 048')
//     }   
//     else if ((ticTacGrid[0].className === '.player-two') && (ticTacGrid[4].className === '.player-two') && (ticTacGrid[8].className === '.player-two')) {
//         winner2()
//         console.log('winner two 048')
//     }
//     else if ((ticTacGrid[2].className === '.player-one') && (ticTacGrid[4].className === '.player-one') && (ticTacGrid[6].className === '.player-one')) {
//         winner1()
//         console.log('winner one 246')
//     } 
//     else if ((ticTacGrid[2].className === '.player-two') && (ticTacGrid[4].className === '.player-two') && (ticTacGrid[6].className === '.player-two')) {
//         winner2()
//         console.log('winner two 246') 
//     } else if 
//         ((ticTacGrid[0].className === '.player-one') || (ticTacGrid[0].className === '.player-two' && (ticTacGrid[0].className !== '.box'))
//      && (ticTacGrid[1].className === '.player-one') || (ticTacGrid[1].className === '.player-two' && (ticTacGrid[1].className !== '.box')) 
//      && (ticTacGrid[2].className === '.player-one') || (ticTacGrid[2].className === '.player-two' && (ticTacGrid[2].className !== '.box')) 
//      && (ticTacGrid[3].className === '.player-one') || (ticTacGrid[3].className === '.player-two' && (ticTacGrid[3].className !== '.box')) 
//      && (ticTacGrid[4].className === '.player-one') || (ticTacGrid[4].className === '.player-two' && (ticTacGrid[4].className !== '.box')) 
//      && (ticTacGrid[5].className === '.player-one') || (ticTacGrid[5].className === '.player-two' && (ticTacGrid[5].className !== '.box')) 
//      && (ticTacGrid[6].className === '.player-one') || (ticTacGrid[6].className === '.player-two' && (ticTacGrid[6].className !== '.box')) 
//      && (ticTacGrid[7].className === '.player-one') || (ticTacGrid[7].className === '.player-two' && (ticTacGrid[7].className !== '.box')) 
//      && (ticTacGrid[8].className === '.player-one') || (ticTacGrid[8].className === '.player-two' && (ticTacGrid[8].className !== '.box'))) { 
//         document.querySelector('.playTwoOutput').textContent = "It's a draw! Play again"
//         document.querySelector('.playOneOutput').textContent = "It's a draw! Play again"
//     }
         
// }

if  ((ticTacGrid[0].className === '.player-one') || (ticTacGrid[0].className === '.player-two' && (ticTacGrid[0].className !== '.box'))
&& (ticTacGrid[1].className === '.player-one') || (ticTacGrid[1].className === '.player-two' && (ticTacGrid[1].className !== '.box')) 
&& (ticTacGrid[2].className === '.player-one') || (ticTacGrid[2].className === '.player-two' && (ticTacGrid[2].className !== '.box')) 
&& (ticTacGrid[3].className === '.player-one') || (ticTacGrid[3].className === '.player-two' && (ticTacGrid[3].className !== '.box')) 
&& (ticTacGrid[4].className === '.player-one') || (ticTacGrid[4].className === '.player-two' && (ticTacGrid[4].className !== '.box')) 
&& (ticTacGrid[5].className === '.player-one') || (ticTacGrid[5].className === '.player-two' && (ticTacGrid[5].className !== '.box')) 
&& (ticTacGrid[6].className === '.player-one') || (ticTacGrid[6].className === '.player-two' && (ticTacGrid[6].className !== '.box')) 
&& (ticTacGrid[7].className === '.player-one') || (ticTacGrid[7].className === '.player-two' && (ticTacGrid[7].className !== '.box')) 
&& (ticTacGrid[8].className === '.player-one') || (ticTacGrid[8].className === '.player-two' && (ticTacGrid[8].className !== '.box'))) { 
   document.querySelector('.playTwoOutput').textContent = "It's a draw! Play again"
   document.querySelector('.playOneOutput').textContent = "It's a draw! Play again"
}
else if ((ticTacGrid[0].className === '.player-one') && (ticTacGrid[1].className === '.player-one') && (ticTacGrid[2].className === '.player-one')) {
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