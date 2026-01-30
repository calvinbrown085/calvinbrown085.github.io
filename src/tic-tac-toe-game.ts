import { LitElement, css, html } from 'lit'
import { customElement, state } from 'lit/decorators.js'

type Player = 'X' | 'O' | null
type Board = Player[]
type GameState = 'idle' | 'playing' | 'won' | 'lost' | 'draw'

@customElement('tic-tac-toe-game')
export class TicTacToeGame extends LitElement {
  @state() private board: Board = Array(9).fill(null)
  @state() private gameState: GameState = 'idle'
  @state() private playerScore = 0
  @state() private aiScore = 0
  @state() private draws = 0
  @state() private isPlayerTurn = true
  @state() private winningLine: number[] = []

  private readonly PLAYER: Player = 'X'
  private readonly AI: Player = 'O'

  connectedCallback() {
    super.connectedCallback()
    this._loadScores()
  }

  private _loadScores() {
    const saved = localStorage.getItem('tictactoe-scores')
    if (saved) {
      const scores = JSON.parse(saved)
      this.playerScore = scores.player || 0
      this.aiScore = scores.ai || 0
      this.draws = scores.draws || 0
    }
  }

  private _saveScores() {
    localStorage.setItem('tictactoe-scores', JSON.stringify({
      player: this.playerScore,
      ai: this.aiScore,
      draws: this.draws
    }))
  }

  private _startGame() {
    this.board = Array(9).fill(null)
    this.gameState = 'playing'
    this.isPlayerTurn = true
    this.winningLine = []
  }

  private _handleCellClick(index: number) {
    if (this.gameState !== 'playing' || !this.isPlayerTurn || this.board[index]) {
      return
    }

    this._makeMove(index, this.PLAYER)

    if (this.gameState === 'playing') {
      this.isPlayerTurn = false
      setTimeout(() => this._aiMove(), 400)
    }
  }

  private _makeMove(index: number, player: Player) {
    this.board = [...this.board]
    this.board[index] = player

    const winner = this._checkWinner(this.board)
    if (winner) {
      this.winningLine = this._getWinningLine(this.board)
      if (winner === this.PLAYER) {
        this.gameState = 'won'
        this.playerScore++
      } else {
        this.gameState = 'lost'
        this.aiScore++
      }
      this._saveScores()
    } else if (this._isBoardFull(this.board)) {
      this.gameState = 'draw'
      this.draws++
      this._saveScores()
    }
  }

  private _aiMove() {
    if (this.gameState !== 'playing') return

    const bestMove = this._minimax(this.board, this.AI, 0, -Infinity, Infinity)
    this._makeMove(bestMove.index!, this.AI)
    this.isPlayerTurn = true
  }

  private _minimax(
    board: Board,
    player: Player,
    depth: number,
    alpha: number,
    beta: number
  ): { score: number; index?: number } {
    const winner = this._checkWinner(board)

    if (winner === this.AI) return { score: 10 - depth }
    if (winner === this.PLAYER) return { score: depth - 10 }
    if (this._isBoardFull(board)) return { score: 0 }

    const moves: { score: number; index: number }[] = []
    const availableMoves = this._getAvailableMoves(board)

    for (const index of availableMoves) {
      const newBoard = [...board]
      newBoard[index] = player

      const result = this._minimax(
        newBoard,
        player === this.AI ? this.PLAYER : this.AI,
        depth + 1,
        alpha,
        beta
      )

      moves.push({ score: result.score, index })

      if (player === this.AI) {
        alpha = Math.max(alpha, result.score)
      } else {
        beta = Math.min(beta, result.score)
      }

      if (beta <= alpha) break
    }

    if (player === this.AI) {
      const best = moves.reduce((a, b) => a.score > b.score ? a : b)
      return best
    } else {
      const best = moves.reduce((a, b) => a.score < b.score ? a : b)
      return best
    }
  }

  private _getAvailableMoves(board: Board): number[] {
    return board
      .map((cell, index) => cell === null ? index : -1)
      .filter(index => index !== -1)
  }

  private _checkWinner(board: Board): Player {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // cols
      [0, 4, 8], [2, 4, 6]             // diagonals
    ]

    for (const [a, b, c] of lines) {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a]
      }
    }
    return null
  }

  private _getWinningLine(board: Board): number[] {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ]

    for (const line of lines) {
      const [a, b, c] = line
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return line
      }
    }
    return []
  }

  private _isBoardFull(board: Board): boolean {
    return board.every(cell => cell !== null)
  }

  private _resetScores() {
    this.playerScore = 0
    this.aiScore = 0
    this.draws = 0
    this._saveScores()
  }

  render() {
    return html`
      <div class="game-container">
        <div class="scoreboard">
          <div class="score player-score">
            <span class="label">You (X)</span>
            <span class="value">${this.playerScore}</span>
          </div>
          <div class="score draws-score">
            <span class="label">Draws</span>
            <span class="value">${this.draws}</span>
          </div>
          <div class="score ai-score">
            <span class="label">AI (O)</span>
            <span class="value">${this.aiScore}</span>
          </div>
        </div>

        <div class="board">
          ${this.board.map((cell, index) => html`
            <button
              class="cell ${cell ? 'filled' : ''} ${cell === 'X' ? 'x' : ''} ${cell === 'O' ? 'o' : ''} ${this.winningLine.includes(index) ? 'winning' : ''}"
              @click=${() => this._handleCellClick(index)}
              ?disabled=${this.gameState !== 'playing' || !this.isPlayerTurn || cell !== null}
            >
              ${cell || ''}
            </button>
          `)}
        </div>

        ${this.gameState === 'playing' ? html`
          <div class="status">
            ${this.isPlayerTurn ? "Your turn" : "AI is thinking..."}
          </div>
        ` : ''}

        ${this.gameState === 'idle' ? html`
          <div class="overlay">
            <h2>Tic Tac Toe</h2>
            <p>Play against an unbeatable AI!</p>
            <button class="start-btn" @click=${this._startGame}>Start Game</button>
          </div>
        ` : ''}

        ${this.gameState === 'won' ? html`
          <div class="overlay win">
            <h2>You Won!</h2>
            <p>Impressive! You beat the AI!</p>
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
            <p>Well played!</p>
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
      color: #3498db;
    }

    .ai-score .value {
      color: #e74c3c;
    }

    .draws-score .value {
      color: #f39c12;
    }

    .board {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
      background: rgba(255, 255, 255, 0.1);
      padding: 15px;
      border-radius: 15px;
    }

    .cell {
      width: 100px;
      height: 100px;
      border: none;
      border-radius: 10px;
      background: #16213e;
      color: #fff;
      font-size: 48px;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.2s ease;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .cell:hover:not(:disabled) {
      background: #1f3460;
      transform: scale(1.05);
    }

    .cell:disabled {
      cursor: not-allowed;
    }

    .cell.x {
      color: #3498db;
    }

    .cell.o {
      color: #e74c3c;
    }

    .cell.winning {
      animation: pulse 0.5s ease infinite alternate;
      background: rgba(46, 204, 113, 0.3);
    }

    @keyframes pulse {
      from { transform: scale(1); }
      to { transform: scale(1.05); }
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
      background: rgba(26, 26, 46, 0.95);
      padding: 40px;
      border-radius: 20px;
      text-align: center;
      border: 2px solid #9b59b6;
      box-shadow: 0 0 30px rgba(155, 89, 182, 0.3);
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
      background: #9b59b6;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .start-btn:hover {
      background: #8e44ad;
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
        width: 80px;
        height: 80px;
        font-size: 36px;
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
        padding: 30px;
        width: 80%;
      }
    }

    @media (prefers-color-scheme: light) {
      :host {
        background: #f5f5f5;
      }

      .game-container {
        background: transparent;
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
        color: #2980b9;
      }

      .ai-score .value {
        color: #c0392b;
      }

      .board {
        background: rgba(0, 0, 0, 0.05);
      }

      .cell {
        background: #fff;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      }

      .cell:hover:not(:disabled) {
        background: #f0f0f0;
      }

      .cell.x {
        color: #2980b9;
      }

      .cell.o {
        color: #c0392b;
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
    'tic-tac-toe-game': TicTacToeGame
  }
}
