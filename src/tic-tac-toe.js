class TicTacToe {
  field = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];
  currentPlayerSymbol = 'x';
  symbols = ['x', 'o'];

  getCurrentPlayerSymbol() {
    return this.currentPlayerSymbol;
  }

  nextTurn(rowIndex, columnIndex) {
    if (this.field[rowIndex][columnIndex] === null) {
      this.field[rowIndex][columnIndex] = this.currentPlayerSymbol;
      this.currentPlayerSymbol = this.symbols.reverse()[0];
    }
  }

  isFinished() {
    const isWinnner = this.getWinner();
    const isDraw = this.isDraw();
    return isWinnner || isDraw ? true : false;
  }

  getWinner() {
    // Horizontal and Vertical
    let winnerSymbol;
    let isWinner = false;
    for (let i = 0; i < this.field.length; i++) {
      winnerSymbol = this.field[i][0];
      isWinner = this.field[i].every((el) => el === winnerSymbol);
      if (isWinner) {
        return winnerSymbol;
      }
      winnerSymbol = this.field[0][i];
      isWinner = this.field.every((array) => array[i] === winnerSymbol);
      if (isWinner) {
        return winnerSymbol;
      }
    }

    //Diagonal
    switch (true) {
      case this.field[0][0] == this.field[1][1] &&
        this.field[0][0] == this.field[2][2]:
        return this.field[0][0];
      case this.field[0][2] == this.field[1][1] &&
        this.field[0][2] == this.field[2][0]:
        return this.field[0][2];
    }

    return null;
  }

  noMoreTurns() {
    for (let i = 0; i < this.field.length; i++) {
      for (let j = 0; j < this.field[i].length; j++) {
        if (this.field[i][j] === null) {
          return false;
        }
      }
    }
    return true;
  }

  isDraw() {
    const isWinnner = this.getWinner();
    const isNoMoreTurns = this.noMoreTurns();
    return isNoMoreTurns && !isWinnner ? true : false;
  }

  getFieldValue(rowIndex, colIndex) {
    return this.field[rowIndex][colIndex];
  }
}

module.exports = TicTacToe;
