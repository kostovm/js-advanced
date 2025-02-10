function ticTacToe(playerMoves) {

    let gameOver = false;
    let isPlayerXaWinner = false;
    let isPlayerOaWinner = false;
    let freeCells = 9;

    let playDesk = [[0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]];

    function winnerCheck() {
        let diagonalCheck1 = playDesk[0][0] + playDesk[1][1] + playDesk[2][2];
        let diagonalCheck2 = playDesk[0][2] + playDesk[1][1] + playDesk[2][0];
        for (let i = 0; i < 3; i++) {
            let rowCheck = playDesk[i].reduce((acc, a) => acc + a, 0);
            let colomCheck = 0;

            for (let row of playDesk) {
                colomCheck += row[i];
            }

            if (diagonalCheck1 === 6 || diagonalCheck2 === 6 || rowCheck === 6 || colomCheck === 6) {
                gameOver = true;
                isPlayerXaWinner = true;
            } else if (diagonalCheck1 === 15 || diagonalCheck2 === 15 || rowCheck === 15 || colomCheck === 15) {
                gameOver = true;
                isPlayerOaWinner = true;
            } else if (freeCells === 0) {
                gameOver = true;
            }
        }
    }
    actionIndex = 0;
    currentMarker = 5;
    while (gameOver === false) {

        if (currentMarker === 5) {
            currentMarker = 2;
        } else if (currentMarker === 2) {
            currentMarker = 5;
        }

        playerMoveValid = false;
        while (playerMoveValid === false) {
            let currentAction = playerMoves[actionIndex].split(" ");
            if (playDesk[currentAction[0]][currentAction[1]] === 0) {
                playDesk[currentAction[0]][currentAction[1]] = currentMarker;
                playerMoveValid = true;
                freeCells--;
                actionIndex++;
                winnerCheck();
            } else {
                console.log("This place is already taken. Please choose another!")
                actionIndex++;
            }
        }
    }

    if (isPlayerOaWinner === false && isPlayerXaWinner === false) {
        console.log("The game ended! Nobody wins :(");
    } else if (isPlayerXaWinner === true) {
        console.log("Player X wins!");
    } else if (isPlayerOaWinner === true) {
        console.log("Player O wins!");
    }

    for (let i = 0; i < 3; i++) {
        let row = playDesk[i].join("\t");
        while (row.includes("0") || row.includes("2") || row.includes("5")) {
            row = row.replace("0", "false").replace("2", "X").replace("5", "O");
        }
        console.log(row);
    }
}