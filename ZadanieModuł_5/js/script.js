function getMoveName(input) {
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

function displayResult(argComputerMove, argPlayerMove) {
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

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);
let playerMove =  getMoveName(playerInput);

let randomNumber = Math.floor(Math.random() * 3 + 1);
let computerMove = getMoveName(randomNumber);

printMessage('komputer: ' + computerMove + ', gracz ' + playerMove );
displayResult(computerMove, playerMove);

