{
    const playGame=function(playerInput){
    // function playGame(playerInput){
    clearMessages();
    // function getMoveName(input) {
    const getMoveName=function(input){
        let move = 'nieznany ruch';
        if (input == 1) {
            move = 'kamień';
        }
        else if (input == 2) {
            move = 'papier';
        }
        else if (input == 3) {
            move = 'nożyce';
        }
        return move;
    }

    // function displayResult(argComputerMove, argPlayerMove) {
        const displayResult=function(argComputerMove, argPlayerMove) {
        if (argPlayerMove == argComputerMove) {
            printMessage('remis');
        }
        else if (argPlayerMove == "papier" && argComputerMove == "kamień") {
            printMessage('wygrałeś');
        }
        else if (argPlayerMove == "papier" && argComputerMove == "nożyce") {
            printMessage('przegrałeś');
        }

        else if (argPlayerMove == "kamień" && argComputerMove == "papier") {
            printMessage('przegrałeś');
        }
        else if (argPlayerMove == "kamień" && argComputerMove == "nożyce") {
            printMessage('wygrałeś');
        }

        else if (argPlayerMove == "nożyce" && argComputerMove == "kamień") {
            printMessage('przegrałeś');
        }
        else if (argPlayerMove == "nożyce" && argComputerMove == "papier") {
            printMessage('wygrałeś');
        }
    }

    // let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

    // console.log('Gracz wpisał: ' + playerInput);

    // let playerMove = 'nieznany ruch';
    // if(playerInput==1)
    // {
    //     playerMove = 'kamień';
    // }
    // else if(playerInput==2)
    // {
    //     playerMove = 'papier';
    // }
    // else if(playerInput==3)
    // {
    //     playerMove = 'nożyce';
    // }
    let playerMove =  getMoveName(playerInput);

    let randomNumber = Math.floor(Math.random() * 3 + 1);

    // let computerMove = 'nieznany ruch';
    // if(randomNumber==1)
    // {
    //     computerMove = 'kamień';
    // }
    // else if(randomNumber==2)
    // {
    //     computerMove = 'papier';
    // }
    // else if(randomNumber==3)
    // {
    //     computerMove = 'nożyce';
    // }
    let computerMove = getMoveName(randomNumber);

    printMessage('komputer: ' + computerMove + ', gracz ' + playerMove );
    displayResult(computerMove, playerMove);

//     if(playerMove==computerMove)
//     {
//         printMessage('remis');
//     }
//     else if(playerMove == "papier" && computerMove=="kamień")
//     {
//         printMessage('wygrałeś');
//     }
//     else if(playerMove == "papier" && computerMove=="nożyce")
//     {
//         printMessage('przegrałeś');
//     }

//     else if(playerMove == "kamień" && computerMove=="papier")
//     {
//         printMessage('przegrałeś');
//     }
//     else if(playerMove == "kamień" && computerMove=="nożyce")
//     {
//         printMessage('wygrałeś');
//     }

//     else if(playerMove == "nożyce" && computerMove=="kamień")
//     {
//         printMessage('przegrałeś');
//     }
//     else if(playerMove == "nożyce" && computerMove=="papier")
//     {
//         printMessage('wygrałeś');
//     }
//     return playGame(3);;
}

document.getElementById('papier').addEventListener('click',function(){
    playGame(2)
})

document.getElementById('kamien').addEventListener('click',function(){
    playGame(1)
})

document.getElementById('nozyce').addEventListener('click',function(){
    playGame(3)
})

}