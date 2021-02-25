var argButtonName;

/**
 * Describe this function...
 */
const buttonRock = document.getElementById('button-rock'),
      buttonPaper = document.getElementById('button-paper'),
      buttonScissors = document.getElementById('button-scissors');

function buttonClicked(argButtonName) {
  clearMessages();
  console.log(argButtonName + ' został kliknięty');

var argMoveId, argPlayerMove, argComputerMove, computerMove, playerMove, randomNumber, playerInput;

/**
 * Describe this function...
 */
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
 * Describe this function...
 */
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

        console.log('ruch gracza to: ' + playerMove);
        randomNumber = Math.floor(Math.random() * 3 + 1);
        console.log('wylosowana liczba to: ' + randomNumber);
        computerMove = getMoveName(randomNumber);
        console.log('ruch komputera to: ' + computerMove);
        playerMove = argButtonName;
        displayResult(playerMove, computerMove);

}

buttonRock.addEventListener('click', function(){ buttonClicked('kamień'); });
buttonPaper.addEventListener('click', function(){ buttonClicked('papier'); });
buttonScissors.addEventListener('click', function(){ buttonClicked('nożyce'); });


