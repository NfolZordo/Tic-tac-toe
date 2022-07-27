'use strict';
const game = {
    xTurn: true,
    xState: [],
    oState: [],
    winningStates: [
        ['0', '1', '2'],
        ['3', '4', '5'],
        ['6', '7', '8'],
        ['0', '3', '6'],
        ['1', '4', '7'],
        ['2', '5', '8'],
        ['0', '4', '8'],
        ['2', '4', '6']
    ]
}
let gameOver = false;
function getdetails(obj) {
    const cellValue = obj.dataset.value;
    if (!obj.classList.contains('disabled')) {
        obj.classList.add('disabled');
        if (game.xTurn) {
            obj.classList.add('x');
            game.xState.push(cellValue);
            game.xTurn = false;
        }
        else {
            obj.classList.add('o');
            game.oState.push(cellValue);
            game.xTurn = true;
        }
    }
    if (!document.querySelectorAll('.button:not(.disabled)').length) {
        document.querySelector('.restart-game').classList.add('visible');
        document.querySelector('.restart-game').textContent = 'Нічія!';
    }
    game.winningStates.forEach(winningState => {
        const xWins = winningState.every(state => game.xState.includes(state));
        const oWins = winningState.every(state => game.oState.includes(state));
      
        if (xWins || oWins) {
            document.querySelector('.restart-game').classList.add('visible');
            document.querySelectorAll('.button').forEach(cell => cell.classList.add('disabled'));
            document.querySelector('.restart-game-btn').classList.add('visible');
        if (xWins) {
                document.querySelector('.game-over-text').textContent = "X - Переміг"
            }
            else {
                document.querySelector('.game-over-text').textContent ="O - Переміг"

            }
        }
    })
}
function result(playingField, player) {
}
function colorBackground(element1, element2, element3) {
}
function resetGame() {
    document.querySelector('.restart-game').classList.remove('visible')
    document.querySelectorAll('.button').forEach(cell => {
        cell.classList.remove('disabled', 'x', 'o')
    })

    game.xTurn = true
    game.xState = []
    game.oState = []

}
