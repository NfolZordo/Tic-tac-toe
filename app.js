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
function getdetails(obj) {
    let gameEnd = false;
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
    game.winningStates.forEach(winningState => {
        const xWins = winningState.every(state => game.xState.includes(state));
        const oWins = winningState.every(state => game.oState.includes(state));

        if (xWins || oWins) {
            document.querySelector('.restart-game').classList.add('visible');
            document.querySelector('.restart-game-btn').classList.add('visible');
            gameEnd = true;
            document.querySelectorAll('.button').forEach(cell => cell.classList.add('disabled'));
            if (xWins) {
                document.querySelector('.game-over-text').textContent = "X - Переміг"
            } else {
                document.querySelector('.game-over-text').textContent = "O - Переміг"
            }
        }
    })
    if (!gameEnd) {
        if (!document.querySelectorAll('.button:not(.disabled)').length) {
            document.querySelector('.restart-game').classList.add('visible');
            document.querySelector('.restart-game').textContent = 'Нічія!';
        }
    }
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
