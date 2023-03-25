class Piece {
  constructor(color, type, position) {
    this.color = color;
    this.type = type;
    this.position = position;
  }

  getPseudoLegalMoves(board) {
      // TODO: implement pseudo legal moves
      return [];
  }

    getLegalMoves(board) {
      let pseudoLegalMoves = this.getPseudoLegalMoves(board);
      // TODO: implement legal moves
    }
}

class Move {
  constructor(piece, from, to) {
    this.piece = piece;
    this.from = from;
    this.to = to;
  }

  evaluate() {
      // TODO: implement move evaluation
      return 0;
  }
}

class Board {
  constructor() {
    this.pieces = [];
  }

  setPosition(fen) {
      // TODO: implement FEN parsing
  }

  isInCheck(color) {
      // TODO: implement check detection
  }

  isInCheckmate(color) {
      // TODO: implement checkmate detection
  }
}