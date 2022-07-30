'use strict';
const game = {
    xTurn: true,
    playerFirstState: [],
    playerSecondState: [],
    playerFirstSymbol: "X",
    playerSecondSymbol: "O",
    playerFirstImg: "player-first-image",
    playerSecondImg: "player-second-image",
    disabledBloc: "disabled",
    restartGameBloc: ".restart-game",
    restartGameButton: ".restart-btn",
    message: ".restart-game__text",
    visibleBloc: "visible",
    gameEnd: false,
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
function getdetails(button) {
    doStep (button);
    auditWins ();
    auditEnd();

}
function doStep (button) {
    const cellValue = button.dataset.value;
    if (!button.classList.contains(game.disabledBloc)) {
        button.classList.add(game.disabledBloc);
        if (game.xTurn) {
            button.classList.add(game.playerFirstImg);
            game.playerFirstState.push(cellValue);
            game.xTurn = false;
        }
        else {
            button.classList.add(game.playerSecondImg);
            game.playerSecondState.push(cellValue);
            game.xTurn = true;
        }
    }
}
function auditWins () {
    game.winningStates.forEach(winningState => {
        const playerFirstWins = winningState.every(state => game.playerFirstState.includes(state));
        const playerSecondWins = winningState.every(state => game.playerSecondState.includes(state));

        if (!playerFirstWins & !playerSecondWins) {
            return;
        }
        document.querySelector(game.restartGameBloc).classList.add(game.visibleBloc);
        document.querySelector(game.restartGameButton).classList.add(game.visibleBloc);
        game.gameEnd = true;
        document.querySelectorAll('.button').forEach(cell => cell.classList.add(game.disabledBloc));
        const restartGameText = document.querySelector(game.message);
        restartGameText.textContent = `${playerFirstWins? game.playerFirstSymbol : game.playerSecondSymbol} - Переміг`;
        
    })
}
function auditEnd() {
    if (game.gameEnd) {
        return;
    }
    if (!document.querySelectorAll('.button:not(.disabled)').length) {
        const selectorRestartGame = document.querySelector(game.restartGameBloc);
        selectorRestartGame.classList.add(game.visibleBloc);
        selectorRestartGame.textContent = 'Нічія!';
    }
}
function resetGame() {
    document.querySelector(game.restartGameBloc).classList.remove(game.visibleBloc)
    document.querySelectorAll('.button').forEach(cell => {
        cell.classList.remove(game.disabledBloc, game.playerFirstImg, game.playerSecondImg)
    })
    game.xTurn = true
    game.gameEnd = false;
    game.playerFirstState = []
    game.playerSecondState = []
}
