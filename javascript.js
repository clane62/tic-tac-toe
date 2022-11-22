{/* <section class="tic-tac-toe">

// edi tng for testing git

<div class="box"></div>   0 - top left
<div class="box"></div>   1 - top middle
<div class="box"></div>   2 - top right     
<div class="box"></div>   3 - middle left
<div class="box"></div>   4 - middle middle
<div class="box"></div>   5 - middle right
<div class="box"></div>   6 - bottom left
<div class="box"></div>   7 - bottom middle
<div class="box"></div>   8 - bottom right */}


var ticTacGrid = document.querySelectorAll('.box')

// ticTacGrid.forEach(function(clickBox) {
//     clickBox.addEventListener('click', function (event){ 
      
//         let clickedOnBox = event.target
//         clickedOnBox.style.background = 'blue'
//     })
// })

// above code works. Keeping here for safe keeping even though the code below is the same. Each box, when clicked is colored blue. 


ticTacGrid.forEach(function(clickBox) {
    clickBox.addEventListener('click', function (event){ 
      
        let clickedOnBox = event.target
        clickedOnBox.style.background = 'blue'
        clickedOnBox.className = '.blue-box'

        if ((ticTacGrid[0].style.background  === 'blue') && (ticTacGrid[1].style.background  === 'blue') && (ticTacGrid[2].style.background  === 'blue')) {
            console.log('winner012')

        } else if ((ticTacGrid[3].style.background  === 'blue') && (ticTacGrid[4].style.background  === 'blue') && (ticTacGrid[5].style.background  === 'blue')) {
            console.log('winner345')

        } else if ((ticTacGrid[6].style.background  === 'blue') && (ticTacGrid[7].style.background  === 'blue') && (ticTacGrid[8].style.background  === 'blue')) {
            console.log('winner678') 

        } else if ((ticTacGrid[0].style.background  === 'blue') && (ticTacGrid[3].style.background  === 'blue') && (ticTacGrid[6].style.background  === 'blue')) {
            console.log('winner036') 

        } else if ((ticTacGrid[1].style.background  === 'blue') && (ticTacGrid[4].style.background  === 'blue') && (ticTacGrid[7].style.background  === 'blue')) {
            console.log('winner147') 

        } else if ((ticTacGrid[2].style.background  === 'blue') && (ticTacGrid[5].style.background  === 'blue') && (ticTacGrid[8].style.background  === 'blue')) {
            console.log('winner258') 
        
        } else if ((ticTacGrid[0].style.background  === 'blue') && (ticTacGrid[4].style.background  === 'blue') && (ticTacGrid[8].style.background  === 'blue')) {
            console.log('winner048') 

        } else if ((ticTacGrid[2].style.background  === 'blue') && (ticTacGrid[4].style.background  === 'blue') && (ticTacGrid[6].style.background  === 'blue')) {
            console.log('winner246') 
        }
    })
})

// next steps:
// change class name to identify items already clicked? (can this be two different uses?)
// click is update name. 
// toggle between two 'people' clicks? Google how to differentiate alternate clicks. 1,2 1,2 etc. toggle()?
// work out how to announce winner (and end the game)
// add a draw. 


