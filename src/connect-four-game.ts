import { LitElement, css, html } from 'lit'
import { customElement, state } from 'lit/decorators.js'

type Cell = 'red' | 'yellow' | null
type GameState = 'idle' | 'playing' | 'won' | 'lost' | 'draw'

const ROWS = 6
const COLS = 7

@customElement('connect-four-game')
export class ConnectFourGame extends LitElement {
  @state() private board: Cell[][] = []
  @state() private gameState: GameState = 'idle'
  @state() private isPlayerTurn = true
  @state() private playerScore = 0
  @state() private aiScore = 0
  @state() private winningCells: [number, number][] = []
  @state() private hoverColumn: number = -1

  private readonly AI_DEPTH = 5

  connectedCallback() {
    super.connectedCallback()
    this._loadScores()
  }

  private _loadScores() {
    const saved = localStorage.getItem('connect-four-scores')
    if (saved) {
      const scores = JSON.parse(saved)
      this.playerScore = scores.player || 0
      this.aiScore = scores.ai || 0
    }
  }

  private _saveScores() {
    localStorage.setItem('connect-four-scores', JSON.stringify({
      player: this.playerScore,
      ai: this.aiScore
    }))
  }

  private _initBoard(): Cell[][] {
    return Array(ROWS).fill(null).map(() => Array(COLS).fill(null))
  }

  private _startGame() {
    this.board = this._initBoard()
    this.gameState = 'playing'
    this.isPlayerTurn = true
    this.winningCells = []
    this.hoverColumn = -1
  }

  private _getLowestEmptyRow(board: Cell[][], col: number): number {
    for (let row = ROWS - 1; row >= 0; row--) {
      if (board[row][col] === null) {
        return row
      }
    }
    return -1
  }

  private _handleColumnClick(col: number) {
    if (this.gameState !== 'playing' || !this.isPlayerTurn) return

    const row = this._getLowestEmptyRow(this.board, col)
    if (row === -1) return // Column is full

    this._makeMove(col, 'red')

    if (this.gameState === 'playing') {
      this.isPlayerTurn = false
      setTimeout(() => this._aiMove(), 500)
    }
  }

  private _makeMove(col: number, player: Cell) {
    const row = this._getLowestEmptyRow(this.board, col)
    if (row === -1) return

    const newBoard = this.board.map(r => [...r])
    newBoard[row][col] = player
    this.board = newBoard

    const winLine = this._checkWinner(this.board, row, col)
    if (winLine) {
      this.winningCells = winLine
      if (player === 'red') {
        this.gameState = 'won'
        this.playerScore++
      } else {
        this.gameState = 'lost'
        this.aiScore++
      }
      this._saveScores()
    } else if (this._isBoardFull(this.board)) {
      this.gameState = 'draw'
    }
  }

  private _aiMove() {
    if (this.gameState !== 'playing') return

    const bestMove = this._minimax(this.board, this.AI_DEPTH, -Infinity, Infinity, true)

    if (bestMove.col !== -1) {
      this._makeMove(bestMove.col, 'yellow')
    }

    this.isPlayerTurn = true
  }

  private _minimax(
    board: Cell[][],
    depth: number,
    alpha: number,
    beta: number,
    isMaximizing: boolean
  ): { score: number; col: number } {
    // Check for terminal states
    const winner = this._findWinner(board)
    if (winner === 'yellow') return { score: 1000 + depth, col: -1 }
    if (winner === 'red') return { score: -1000 - depth, col: -1 }
    if (this._isBoardFull(board)) return { score: 0, col: -1 }
    if (depth === 0) return { score: this._evaluateBoard(board), col: -1 }

    const validCols = this._getValidColumns(board)

    // Order columns for better pruning (center first)
    validCols.sort((a, b) => Math.abs(3 - a) - Math.abs(3 - b))

    let bestCol = validCols[0]

    if (isMaximizing) {
      let maxScore = -Infinity
      for (const col of validCols) {
        const newBoard = this._simulateMove(board, col, 'yellow')
        const result = this._minimax(newBoard, depth - 1, alpha, beta, false)
        if (result.score > maxScore) {
          maxScore = result.score
          bestCol = col
        }
        alpha = Math.max(alpha, result.score)
        if (beta <= alpha) break
      }
      return { score: maxScore, col: bestCol }
    } else {
      let minScore = Infinity
      for (const col of validCols) {
        const newBoard = this._simulateMove(board, col, 'red')
        const result = this._minimax(newBoard, depth - 1, alpha, beta, true)
        if (result.score < minScore) {
          minScore = result.score
          bestCol = col
        }
        beta = Math.min(beta, result.score)
        if (beta <= alpha) break
      }
      return { score: minScore, col: bestCol }
    }
  }

  private _simulateMove(board: Cell[][], col: number, player: Cell): Cell[][] {
    const newBoard = board.map(r => [...r])
    const row = this._getLowestEmptyRow(newBoard, col)
    if (row !== -1) {
      newBoard[row][col] = player
    }
    return newBoard
  }

  private _getValidColumns(board: Cell[][]): number[] {
    const cols: number[] = []
    for (let col = 0; col < COLS; col++) {
      if (board[0][col] === null) {
        cols.push(col)
      }
    }
    return cols
  }

  private _evaluateBoard(board: Cell[][]): number {
    let score = 0

    // Evaluate center column (more valuable)
    for (let row = 0; row < ROWS; row++) {
      if (board[row][3] === 'yellow') score += 3
      else if (board[row][3] === 'red') score -= 3
    }

    // Evaluate all windows of 4
    // Horizontal
    for (let row = 0; row < ROWS; row++) {
      for (let col = 0; col < COLS - 3; col++) {
        score += this._evaluateWindow([
          board[row][col], board[row][col+1], board[row][col+2], board[row][col+3]
        ])
      }
    }

    // Vertical
    for (let row = 0; row < ROWS - 3; row++) {
      for (let col = 0; col < COLS; col++) {
        score += this._evaluateWindow([
          board[row][col], board[row+1][col], board[row+2][col], board[row+3][col]
        ])
      }
    }

    // Diagonal (positive slope)
    for (let row = 3; row < ROWS; row++) {
      for (let col = 0; col < COLS - 3; col++) {
        score += this._evaluateWindow([
          board[row][col], board[row-1][col+1], board[row-2][col+2], board[row-3][col+3]
        ])
      }
    }

    // Diagonal (negative slope)
    for (let row = 0; row < ROWS - 3; row++) {
      for (let col = 0; col < COLS - 3; col++) {
        score += this._evaluateWindow([
          board[row][col], board[row+1][col+1], board[row+2][col+2], board[row+3][col+3]
        ])
      }
    }

    return score
  }

  private _evaluateWindow(window: Cell[]): number {
    const yellow = window.filter(c => c === 'yellow').length
    const red = window.filter(c => c === 'red').length
    const empty = window.filter(c => c === null).length

    if (yellow === 4) return 100
    if (yellow === 3 && empty === 1) return 5
    if (yellow === 2 && empty === 2) return 2

    if (red === 4) return -100
    if (red === 3 && empty === 1) return -5
    if (red === 2 && empty === 2) return -2

    return 0
  }

  private _checkWinner(board: Cell[][], row: number, col: number): [number, number][] | null {
    const player = board[row][col]
    if (!player) return null

    const directions = [
      [[0, 1], [0, -1]],   // Horizontal
      [[1, 0], [-1, 0]],   // Vertical
      [[1, 1], [-1, -1]],  // Diagonal /
      [[1, -1], [-1, 1]]   // Diagonal \
    ]

    for (const [dir1, dir2] of directions) {
      const cells: [number, number][] = [[row, col]]

      // Check in first direction
      let r = row + dir1[0]
      let c = col + dir1[1]
      while (r >= 0 && r < ROWS && c >= 0 && c < COLS && board[r][c] === player) {
        cells.push([r, c])
        r += dir1[0]
        c += dir1[1]
      }

      // Check in second direction
      r = row + dir2[0]
      c = col + dir2[1]
      while (r >= 0 && r < ROWS && c >= 0 && c < COLS && board[r][c] === player) {
        cells.push([r, c])
        r += dir2[0]
        c += dir2[1]
      }

      if (cells.length >= 4) {
        return cells
      }
    }

    return null
  }

  private _findWinner(board: Cell[][]): Cell {
    for (let row = 0; row < ROWS; row++) {
      for (let col = 0; col < COLS; col++) {
        if (board[row][col] && this._checkWinner(board, row, col)) {
          return board[row][col]
        }
      }
    }
    return null
  }

  private _isBoardFull(board: Cell[][]): boolean {
    return board[0].every(cell => cell !== null)
  }

  private _isWinningCell(row: number, col: number): boolean {
    return this.winningCells.some(([r, c]) => r === row && c === col)
  }

  private _resetScores() {
    this.playerScore = 0
    this.aiScore = 0
    this._saveScores()
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
            <span class="label">AI (Yellow)</span>
            <span class="value">${this.aiScore}</span>
          </div>
        </div>

        <div class="board-wrapper">
          <div class="board">
            ${this.gameState !== 'idle' ? this.board.map((row, rowIndex) =>
              row.map((cell, colIndex) => html`
                <div
                  class="cell ${this._isWinningCell(rowIndex, colIndex) ? 'winning' : ''}"
                  @click=${() => this._handleColumnClick(colIndex)}
                  @mouseenter=${() => this.hoverColumn = colIndex}
                  @mouseleave=${() => this.hoverColumn = -1}
                >
                  <div class="piece ${cell || ''} ${!cell && this.hoverColumn === colIndex && this.isPlayerTurn && this.gameState === 'playing' ? 'preview' : ''}"></div>
                </div>
              `)
            ) : ''}
          </div>
        </div>

        ${this.gameState === 'playing' ? html`
          <div class="status">
            ${this.isPlayerTurn ? "Your turn - click a column" : "AI is thinking..."}
          </div>
        ` : ''}

        ${this.gameState === 'idle' ? html`
          <div class="overlay">
            <h2>Connect Four</h2>
            <p>Get 4 in a row to win!</p>
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

        ${this.gameState === 'draw' ? html`
          <div class="overlay draw">
            <h2>It's a Draw!</h2>
            <p>The board is full!</p>
            <button class="start-btn" @click=${this._startGame}>Play Again</button>
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
      color: #f1c40f;
    }

    .board-wrapper {
      background: #2980b9;
      padding: 15px;
      border-radius: 15px;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
    }

    .board {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      grid-template-rows: repeat(6, 1fr);
      gap: 8px;
    }

    .cell {
      width: 50px;
      height: 50px;
      background: #1a5276;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: background 0.2s ease;
    }

    .cell:hover {
      background: #1f618d;
    }

    .cell.winning {
      animation: pulse 0.5s ease infinite alternate;
    }

    @keyframes pulse {
      from { transform: scale(1); }
      to { transform: scale(1.1); }
    }

    .piece {
      width: 42px;
      height: 42px;
      border-radius: 50%;
      transition: all 0.2s ease;
    }

    .piece.red {
      background: radial-gradient(circle at 30% 30%, #e74c3c, #c0392b);
      box-shadow: inset 0 -3px 6px rgba(0, 0, 0, 0.3), 0 2px 4px rgba(0, 0, 0, 0.2);
    }

    .piece.yellow {
      background: radial-gradient(circle at 30% 30%, #f1c40f, #d4ac0d);
      box-shadow: inset 0 -3px 6px rgba(0, 0, 0, 0.3), 0 2px 4px rgba(0, 0, 0, 0.2);
    }

    .piece.preview {
      background: radial-gradient(circle at 30% 30%, rgba(231, 76, 60, 0.4), rgba(192, 57, 43, 0.4));
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
      border: 2px solid #3498db;
      box-shadow: 0 0 30px rgba(52, 152, 219, 0.3);
      z-index: 10;
    }

    .overlay h2 {
      margin: 0 0 10px 0;
      color: #fff;
      font-size: 28px;
    }

    .overlay p {
      margin: 0 0 20px 0;
      color: #888;
      font-size: 16px;
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

    .overlay.draw {
      border-color: #f39c12;
      box-shadow: 0 0 30px rgba(243, 156, 18, 0.3);
    }

    .overlay.draw h2 {
      color: #f39c12;
    }

    .start-btn {
      padding: 12px 30px;
      font-size: 18px;
      font-weight: bold;
      color: #fff;
      background: #3498db;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .start-btn:hover {
      background: #2980b9;
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
        width: 32px;
        height: 32px;
      }

      .board-wrapper {
        padding: 10px;
      }

      .board {
        gap: 5px;
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
        color: #d4ac0d;
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
    'connect-four-game': ConnectFourGame
  }
}
