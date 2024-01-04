/**
 * Start Line of Tic Tac Toe
 */

document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('board');
    const status = document.getElementById('status');
    let currentPlayer = 'X';
    let gameBoard = ['', '', '', '', '', '', '', '', ''];
    let gameActive = true;

    function checkWinner() {
        const winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
            [0, 4, 8], [2, 4, 6]             // diagonals
        ];

        for (let pattern of winPatterns) {
            const [a, b, c] = pattern;
            if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
                return gameBoard[a];
            }
        }

        if (!gameBoard.includes('')) {
            return 'tie';
        }

        return null;
    }

    function handleClick(index) {
        if (!gameBoard[index] && gameActive) {
            gameBoard[index] = currentPlayer;
            renderBoard();
            const winner = checkWinner();
            if (winner) {
                gameActive = false;
                if (winner === 'tie') {
                    status.textContent = '¡Empate!';
                } else {
                    status.textContent = `¡${winner} ha ganado!`;
                }
            } else {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                status.textContent = `Turno de ${currentPlayer}`;
            }
        }
    }

    function renderBoard() {
        board.innerHTML = '';
        for (let i = 0; i < 9; i++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.textContent = gameBoard[i];
            cell.addEventListener('click', () => handleClick(i));
            board.appendChild(cell);
        }
    }

    restartGame = () => {
        gameBoard = ['', '', '', '', '', '', '', '', ''];
        currentPlayer = 'X';
        gameActive = true;
        renderBoard();
        document.getElementById('status').textContent = `Turno de ${currentPlayer}`;
    }


    renderBoard();
    status.textContent = `Turno de ${currentPlayer}`;

});