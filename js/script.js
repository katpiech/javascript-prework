
/**
 * ButtonClicked function
 */
const buttonRock = document.getElementById('button-rock'),
      buttonPaper = document.getElementById('button-paper'),
      buttonScissors = document.getElementById('button-scissors');
let   argButtonName;

function buttonClicked(argButtonName) {
    clearMessages();
    console.log(argButtonName + ' został kliknięty');
        /**
        * getMoveName function
        */
        let argMoveId; 
        function getMoveName(argMoveId) {
            console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
                if (argMoveId == 1) {
                return 'kamień';
                } else if (argMoveId == 2) {
                    return 'papier';
                } else if (argMoveId == 3) {
                    return 'nożyce';
                } else {
                    printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
                    return 'kamień';
                }
        }
        /**
         * displayResult function
         */
        let argPlayerMove, argComputerMove;
        function displayResult(argPlayerMove, argComputerMove) {
            console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
              if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
                printMessage('Wygrywasz!');
              } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
                printMessage('Wygrywasz!');
              } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
                printMessage('Wygrywasz!');
              } else if (argPlayerMove == argComputerMove) {
                    printMessage('Remis!');
              } else {
                    printMessage('Przegrywasz :(');
              }
              printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
            }

    let playerMove;
        console.log('ruch gracza to: ' + playerMove);
    let randomNumber;
        randomNumber = Math.floor(Math.random() * 3 + 1);
        console.log('wylosowana liczba to: ' + randomNumber);
    let computerMove; 
        computerMove = getMoveName(randomNumber);
        console.log('ruch komputera to: ' + computerMove);
        playerMove = argButtonName;
        displayResult(playerMove, computerMove);
}

buttonRock.addEventListener('click', function(){ buttonClicked('kamień'); });
buttonPaper.addEventListener('click', function(){ buttonClicked('papier'); });
buttonScissors.addEventListener('click', function(){ buttonClicked('nożyce'); });


