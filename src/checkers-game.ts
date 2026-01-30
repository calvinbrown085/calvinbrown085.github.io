import { LitElement, css, html } from 'lit'
import { customElement, state } from 'lit/decorators.js'

type PieceType = 'red' | 'black' | 'red-king' | 'black-king' | null
type GameState = 'idle' | 'playing' | 'won' | 'lost' | 'draw'

interface Position {
  row: number
  col: number
}

interface Move {
  from: Position
  to: Position
  captures: Position[]
}

@customElement('checkers-game')
export class CheckersGame extends LitElement {
  @state() private board: PieceType[][] = []
  @state() private gameState: GameState = 'idle'
  @state() private selectedPiece: Position | null = null
  @state() private validMoves: Move[] = []
  @state() private isPlayerTurn = true
  @state() private playerScore = 0
  @state() private aiScore = 0
  @state() private mustJump: Position | null = null

  private readonly AI_DEPTH = 4

  connectedCallback() {
    super.connectedCallback()
    this._loadScores()
  }

  private _loadScores() {
    const saved = localStorage.getItem('checkers-scores')
    if (saved) {
      const scores = JSON.parse(saved)
      this.playerScore = scores.player || 0
      this.aiScore = scores.ai || 0
    }
  }

  private _saveScores() {
    localStorage.setItem('checkers-scores', JSON.stringify({
      player: this.playerScore,
      ai: this.aiScore
    }))
  }

  private _initBoard(): PieceType[][] {
    const board: PieceType[][] = Array(8).fill(null).map(() => Array(8).fill(null))

    // Place black pieces (AI) at top
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 8; col++) {
        if ((row + col) % 2 === 1) {
          board[row][col] = 'black'
        }
      }
    }

    // Place red pieces (player) at bottom
    for (let row = 5; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        if ((row + col) % 2 === 1) {
          board[row][col] = 'red'
        }
      }
    }

    return board
  }

  private _startGame() {
    this.board = this._initBoard()
    this.gameState = 'playing'
    this.isPlayerTurn = true
    this.selectedPiece = null
    this.validMoves = []
    this.mustJump = null
  }

  private _isPlayerPiece(piece: PieceType): boolean {
    return piece === 'red' || piece === 'red-king'
  }

  private _isAIPiece(piece: PieceType): boolean {
    return piece === 'black' || piece === 'black-king'
  }

  private _isKing(piece: PieceType): boolean {
    return piece === 'red-king' || piece === 'black-king'
  }

  private _getValidMoves(board: PieceType[][], row: number, col: number, isPlayer: boolean): Move[] {
    const piece = board[row][col]
    if (!piece) return []

    const moves: Move[] = []
    const isKing = this._isKing(piece)

    // Direction of movement (red moves up, black moves down)
    const directions: number[] = []
    if (isPlayer || isKing) directions.push(-1) // up
    if (!isPlayer || isKing) directions.push(1)  // down

    // Check for jumps first
    for (const dRow of directions) {
      for (const dCol of [-1, 1]) {
        const jumpRow = row + dRow * 2
        const jumpCol = col + dCol * 2
        const midRow = row + dRow
        const midCol = col + dCol

        if (this._isValidPosition(jumpRow, jumpCol) &&
            board[jumpRow][jumpCol] === null &&
            board[midRow][midCol] !== null) {
          const midPiece = board[midRow][midCol]
          const isEnemy = isPlayer ? this._isAIPiece(midPiece) : this._isPlayerPiece(midPiece)
          if (isEnemy) {
            moves.push({
              from: { row, col },
              to: { row: jumpRow, col: jumpCol },
              captures: [{ row: midRow, col: midCol }]
            })
          }
        }
      }
    }

    // If there are jumps, only return jumps (forced capture rule)
    if (moves.length > 0) return moves

    // Regular moves
    for (const dRow of directions) {
      for (const dCol of [-1, 1]) {
        const newRow = row + dRow
        const newCol = col + dCol

        if (this._isValidPosition(newRow, newCol) && board[newRow][newCol] === null) {
          moves.push({
            from: { row, col },
            to: { row: newRow, col: newCol },
            captures: []
          })
        }
      }
    }

    return moves
  }

  private _getAllMoves(board: PieceType[][], isPlayer: boolean): Move[] {
    const allMoves: Move[] = []
    const jumpMoves: Move[] = []

    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        const piece = board[row][col]
        if (piece && (isPlayer ? this._isPlayerPiece(piece) : this._isAIPiece(piece))) {
          const moves = this._getValidMoves(board, row, col, isPlayer)
          for (const move of moves) {
            if (move.captures.length > 0) {
              jumpMoves.push(move)
            } else {
              allMoves.push(move)
            }
          }
        }
      }
    }

    // Forced capture rule: if jumps available, must jump
    return jumpMoves.length > 0 ? jumpMoves : allMoves
  }

  private _isValidPosition(row: number, col: number): boolean {
    return row >= 0 && row < 8 && col >= 0 && col < 8
  }

  private _handleCellClick(row: number, col: number) {
    if (this.gameState !== 'playing' || !this.isPlayerTurn) return

    const piece = this.board[row][col]

    // If must continue jumping with same piece
    if (this.mustJump) {
      if (row === this.mustJump.row && col === this.mustJump.col) {
        // Clicking the same piece, keep it selected
        return
      }
      // Check if this is a valid jump destination
      const move = this.validMoves.find(m => m.to.row === row && m.to.col === col)
      if (move) {
        this._executeMove(move)
      }
      return
    }

    // Select a piece
    if (this._isPlayerPiece(piece)) {
      const allMoves = this._getAllMoves(this.board, true)
      const hasJumps = allMoves.some(m => m.captures.length > 0)
      const pieceMoves = this._getValidMoves(this.board, row, col, true)

      // If there are jumps available, only allow selecting pieces that can jump
      if (hasJumps && !pieceMoves.some(m => m.captures.length > 0)) {
        return
      }

      this.selectedPiece = { row, col }
      this.validMoves = hasJumps ? pieceMoves.filter(m => m.captures.length > 0) : pieceMoves
      return
    }

    // Move to empty square
    if (this.selectedPiece && piece === null) {
      const move = this.validMoves.find(m => m.to.row === row && m.to.col === col)
      if (move) {
        this._executeMove(move)
      }
    }
  }

  private _executeMove(move: Move) {
    const newBoard = this.board.map(row => [...row])
    const piece = newBoard[move.from.row][move.from.col]

    // Move the piece
    newBoard[move.from.row][move.from.col] = null
    newBoard[move.to.row][move.to.col] = piece

    // Remove captured pieces
    for (const capture of move.captures) {
      newBoard[capture.row][capture.col] = null
    }

    // Check for king promotion
    if (piece === 'red' && move.to.row === 0) {
      newBoard[move.to.row][move.to.col] = 'red-king'
    } else if (piece === 'black' && move.to.row === 7) {
      newBoard[move.to.row][move.to.col] = 'black-king'
    }

    this.board = newBoard

    // Check for multi-jump
    if (move.captures.length > 0) {
      const continuedJumps = this._getValidMoves(this.board, move.to.row, move.to.col, this.isPlayerTurn)
        .filter(m => m.captures.length > 0)

      if (continuedJumps.length > 0) {
        this.mustJump = move.to
        this.selectedPiece = move.to
        this.validMoves = continuedJumps
        return
      }
    }

    this.selectedPiece = null
    this.validMoves = []
    this.mustJump = null

    // Check for game end
    if (this._checkGameEnd()) return

    // Switch turns
    this.isPlayerTurn = !this.isPlayerTurn

    if (!this.isPlayerTurn) {
      setTimeout(() => this._aiMove(), 500)
    }
  }

  private _aiMove() {
    if (this.gameState !== 'playing') return

    const bestMove = this._minimax(this.board, this.AI_DEPTH, -Infinity, Infinity, true)

    if (bestMove.move) {
      this._executeAIMove(bestMove.move)
    } else {
      // No moves available, player wins
      this.gameState = 'won'
      this.playerScore++
      this._saveScores()
    }
  }

  private _executeAIMove(move: Move) {
    const newBoard = this.board.map(row => [...row])
    const piece = newBoard[move.from.row][move.from.col]

    newBoard[move.from.row][move.from.col] = null
    newBoard[move.to.row][move.to.col] = piece

    for (const capture of move.captures) {
      newBoard[capture.row][capture.col] = null
    }

    // King promotion
    if (piece === 'black' && move.to.row === 7) {
      newBoard[move.to.row][move.to.col] = 'black-king'
    }

    this.board = newBoard

    // Check for multi-jump
    if (move.captures.length > 0) {
      const continuedJumps = this._getValidMoves(this.board, move.to.row, move.to.col, false)
        .filter(m => m.captures.length > 0)

      if (continuedJumps.length > 0) {
        // AI continues jumping
        setTimeout(() => {
          const nextJump = this._selectBestJump(continuedJumps)
          this._executeAIMove(nextJump)
        }, 300)
        return
      }
    }

    if (this._checkGameEnd()) return

    this.isPlayerTurn = true
  }

  private _selectBestJump(jumps: Move[]): Move {
    // Simple heuristic: prefer jumps that lead to more jumps or king promotion
    return jumps[0]
  }

  private _minimax(board: PieceType[][], depth: number, alpha: number, beta: number, isMaximizing: boolean): { score: number, move: Move | null } {
    if (depth === 0) {
      return { score: this._evaluateBoard(board), move: null }
    }

    const moves = this._getAllMoves(board, !isMaximizing)

    if (moves.length === 0) {
      // No moves = loss for the current player
      return { score: isMaximizing ? -1000 : 1000, move: null }
    }

    let bestMove: Move | null = null

    if (isMaximizing) {
      let maxScore = -Infinity
      for (const move of moves) {
        const newBoard = this._applyMove(board, move)
        const result = this._minimax(newBoard, depth - 1, alpha, beta, false)
        if (result.score > maxScore) {
          maxScore = result.score
          bestMove = move
        }
        alpha = Math.max(alpha, result.score)
        if (beta <= alpha) break
      }
      return { score: maxScore, move: bestMove }
    } else {
      let minScore = Infinity
      for (const move of moves) {
        const newBoard = this._applyMove(board, move)
        const result = this._minimax(newBoard, depth - 1, alpha, beta, true)
        if (result.score < minScore) {
          minScore = result.score
          bestMove = move
        }
        beta = Math.min(beta, result.score)
        if (beta <= alpha) break
      }
      return { score: minScore, move: bestMove }
    }
  }

  private _applyMove(board: PieceType[][], move: Move): PieceType[][] {
    const newBoard = board.map(row => [...row])
    const piece = newBoard[move.from.row][move.from.col]

    newBoard[move.from.row][move.from.col] = null
    newBoard[move.to.row][move.to.col] = piece

    for (const capture of move.captures) {
      newBoard[capture.row][capture.col] = null
    }

    // King promotion
    if (piece === 'red' && move.to.row === 0) {
      newBoard[move.to.row][move.to.col] = 'red-king'
    } else if (piece === 'black' && move.to.row === 7) {
      newBoard[move.to.row][move.to.col] = 'black-king'
    }

    return newBoard
  }

  private _evaluateBoard(board: PieceType[][]): number {
    let score = 0

    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        const piece = board[row][col]
        if (piece === 'black') score += 10
        else if (piece === 'black-king') score += 15
        else if (piece === 'red') score -= 10
        else if (piece === 'red-king') score -= 15

        // Positional bonus: advance pieces
        if (piece === 'black') score += row
        else if (piece === 'red') score -= (7 - row)
      }
    }

    return score
  }

  private _checkGameEnd(): boolean {
    const playerPieces = this._countPieces(true)
    const aiPieces = this._countPieces(false)

    if (playerPieces === 0) {
      this.gameState = 'lost'
      this.aiScore++
      this._saveScores()
      return true
    }

    if (aiPieces === 0) {
      this.gameState = 'won'
      this.playerScore++
      this._saveScores()
      return true
    }

    // Check for no moves
    const playerMoves = this._getAllMoves(this.board, true)
    const aiMoves = this._getAllMoves(this.board, false)

    if (this.isPlayerTurn && playerMoves.length === 0) {
      this.gameState = 'lost'
      this.aiScore++
      this._saveScores()
      return true
    }

    if (!this.isPlayerTurn && aiMoves.length === 0) {
      this.gameState = 'won'
      this.playerScore++
      this._saveScores()
      return true
    }

    return false
  }

  private _countPieces(isPlayer: boolean): number {
    let count = 0
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        const piece = this.board[row][col]
        if (isPlayer ? this._isPlayerPiece(piece) : this._isAIPiece(piece)) {
          count++
        }
      }
    }
    return count
  }

  private _resetScores() {
    this.playerScore = 0
    this.aiScore = 0
    this._saveScores()
  }

  private _isValidMoveTarget(row: number, col: number): boolean {
    return this.validMoves.some(m => m.to.row === row && m.to.col === col)
  }

  render() {
    return html`
      <div class="game-container">
        <div class="scoreboard">
          <div class="score player-score">
            <span class="label">You (Red)</span>
            <span class="value">${this.playerScore}</span>
          </div>
          <div class="score ai-score">
            <span class="label">AI (Black)</span>
            <span class="value">${this.aiScore}</span>
          </div>
        </div>

        <div class="board">
          ${this.gameState !== 'idle' ? this.board.map((row, rowIndex) =>
            row.map((cell, colIndex) => {
              const isDark = (rowIndex + colIndex) % 2 === 1
              const isSelected = this.selectedPiece?.row === rowIndex && this.selectedPiece?.col === colIndex
              const isValidTarget = this._isValidMoveTarget(rowIndex, colIndex)

              return html`
                <div
                  class="cell ${isDark ? 'dark' : 'light'} ${isSelected ? 'selected' : ''} ${isValidTarget ? 'valid-move' : ''}"
                  @click=${() => this._handleCellClick(rowIndex, colIndex)}
                >
                  ${cell ? html`
                    <div class="piece ${cell} ${isSelected ? 'selected' : ''}">
                      ${this._isKing(cell) ? html`<span class="crown">♔</span>` : ''}
                    </div>
                  ` : ''}
                </div>
              `
            })
          ) : ''}
        </div>

        ${this.gameState === 'playing' ? html`
          <div class="status">
            ${this.isPlayerTurn
              ? (this.mustJump ? "Continue jumping!" : "Your turn - select a piece")
              : "AI is thinking..."}
          </div>
        ` : ''}

        ${this.gameState === 'idle' ? html`
          <div class="overlay">
            <h2>Checkers</h2>
            <p>Play against an AI opponent!</p>
            <div class="rules">
              <p>• You are Red, AI is Black</p>
              <p>• Click a piece to select, then click where to move</p>
              <p>• Jumps are mandatory</p>
              <p>• Reach the opposite end to become a King</p>
            </div>
            <button class="start-btn" @click=${this._startGame}>Start Game</button>
          </div>
        ` : ''}

        ${this.gameState === 'won' ? html`
          <div class="overlay win">
            <h2>You Won!</h2>
            <p>Congratulations!</p>
            <button class="start-btn" @click=${this._startGame}>Play Again</button>
          </div>
        ` : ''}

        ${this.gameState === 'lost' ? html`
          <div class="overlay lose">
            <h2>AI Wins!</h2>
            <p>Better luck next time!</p>
            <button class="start-btn" @click=${this._startGame}>Try Again</button>
          </div>
        ` : ''}

        <button class="reset-scores" @click=${this._resetScores}>Reset Scores</button>
      </div>
    `
  }

  static styles = css`
    :host {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      background: #1a1a2e;
      font-family: 'Segoe UI', system-ui, sans-serif;
    }

    .game-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
      padding: 20px;
      position: relative;
    }

    .scoreboard {
      display: flex;
      gap: 30px;
      margin-bottom: 10px;
    }

    .score {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 10px 20px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 10px;
    }

    .score .label {
      font-size: 14px;
      color: #888;
      margin-bottom: 5px;
    }

    .score .value {
      font-size: 24px;
      font-weight: bold;
      color: #fff;
    }

    .player-score .value {
      color: #e74c3c;
    }

    .ai-score .value {
      color: #2c3e50;
    }

    .board {
      display: grid;
      grid-template-columns: repeat(8, 1fr);
      gap: 0;
      background: #5c4033;
      padding: 10px;
      border-radius: 10px;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
    }

    .cell {
      width: 50px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      position: relative;
    }

    .cell.light {
      background: #f0d9b5;
    }

    .cell.dark {
      background: #b58863;
    }

    .cell.selected {
      box-shadow: inset 0 0 0 3px #ffeb3b;
    }

    .cell.valid-move::after {
      content: '';
      position: absolute;
      width: 20px;
      height: 20px;
      background: rgba(76, 175, 80, 0.6);
      border-radius: 50%;
    }

    .piece {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: transform 0.2s ease;
      position: relative;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
    }

    .piece.red, .piece.red-king {
      background: linear-gradient(145deg, #e74c3c, #c0392b);
      border: 2px solid #922b21;
    }

    .piece.black, .piece.black-king {
      background: linear-gradient(145deg, #34495e, #2c3e50);
      border: 2px solid #1a252f;
    }

    .piece.selected {
      transform: scale(1.1);
      box-shadow: 0 0 15px rgba(255, 235, 59, 0.8);
    }

    .piece .crown {
      font-size: 20px;
      color: #ffd700;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
    }

    .status {
      font-size: 18px;
      color: #fff;
      padding: 10px 20px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 8px;
    }

    .overlay {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: rgba(26, 26, 46, 0.98);
      padding: 40px;
      border-radius: 20px;
      text-align: center;
      border: 2px solid #e67e22;
      box-shadow: 0 0 30px rgba(230, 126, 34, 0.3);
      z-index: 10;
    }

    .overlay h2 {
      margin: 0 0 10px 0;
      color: #fff;
      font-size: 28px;
    }

    .overlay p {
      margin: 0 0 15px 0;
      color: #888;
      font-size: 16px;
    }

    .overlay .rules {
      text-align: left;
      margin-bottom: 20px;
      padding: 15px;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 8px;
    }

    .overlay .rules p {
      margin: 5px 0;
      font-size: 14px;
      color: #aaa;
    }

    .overlay.win {
      border-color: #2ecc71;
      box-shadow: 0 0 30px rgba(46, 204, 113, 0.3);
    }

    .overlay.win h2 {
      color: #2ecc71;
    }

    .overlay.lose {
      border-color: #e74c3c;
      box-shadow: 0 0 30px rgba(231, 76, 60, 0.3);
    }

    .overlay.lose h2 {
      color: #e74c3c;
    }

    .start-btn {
      padding: 12px 30px;
      font-size: 18px;
      font-weight: bold;
      color: #fff;
      background: #e67e22;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .start-btn:hover {
      background: #d35400;
      transform: scale(1.05);
    }

    .reset-scores {
      margin-top: 10px;
      padding: 8px 16px;
      font-size: 12px;
      color: #666;
      background: transparent;
      border: 1px solid #444;
      border-radius: 5px;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .reset-scores:hover {
      color: #fff;
      border-color: #666;
    }

    @media (max-width: 500px) {
      .cell {
        width: 38px;
        height: 38px;
      }

      .piece {
        width: 30px;
        height: 30px;
      }

      .piece .crown {
        font-size: 14px;
      }

      .board {
        padding: 6px;
      }

      .scoreboard {
        gap: 15px;
      }

      .score {
        padding: 8px 15px;
      }

      .score .value {
        font-size: 20px;
      }

      .overlay {
        padding: 25px;
        width: 85%;
      }
    }

    @media (prefers-color-scheme: light) {
      :host {
        background: #f5f5f5;
      }

      .score {
        background: rgba(0, 0, 0, 0.05);
      }

      .score .label {
        color: #666;
      }

      .score .value {
        color: #333;
      }

      .player-score .value {
        color: #c0392b;
      }

      .ai-score .value {
        color: #2c3e50;
      }

      .status {
        color: #333;
        background: rgba(0, 0, 0, 0.05);
      }

      .overlay {
        background: rgba(255, 255, 255, 0.98);
      }

      .overlay h2 {
        color: #333;
      }

      .overlay p {
        color: #666;
      }

      .overlay .rules {
        background: rgba(0, 0, 0, 0.03);
      }

      .overlay .rules p {
        color: #555;
      }

      .reset-scores {
        color: #888;
        border-color: #ccc;
      }

      .reset-scores:hover {
        color: #333;
        border-color: #999;
      }
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'checkers-game': CheckersGame
  }
}
