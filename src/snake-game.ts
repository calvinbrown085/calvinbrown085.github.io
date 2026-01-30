import { LitElement, css, html } from 'lit'
import { customElement, state } from 'lit/decorators.js'

interface Point {
  x: number
  y: number
}

type Direction = 'up' | 'down' | 'left' | 'right'

@customElement('snake-game')
export class SnakeGame extends LitElement {
  private readonly GRID_SIZE = 20
  private readonly CELL_SIZE = 20
  private readonly GAME_SPEED = 100 // ms per tick

  @state() private snake: Point[] = []
  @state() private food: Point = { x: 0, y: 0 }
  @state() private direction: Direction = 'right'
  @state() private nextDirection: Direction = 'right'
  @state() private score = 0
  @state() private highScore = 0
  @state() private gameState: 'idle' | 'playing' | 'paused' | 'gameover' = 'idle'

  private gameLoop: number | null = null

  connectedCallback() {
    super.connectedCallback()
    // Load high score from localStorage
    const saved = localStorage.getItem('snake-high-score')
    if (saved) this.highScore = parseInt(saved, 10)
    
    this._handleKeydown = this._handleKeydown.bind(this)
    window.addEventListener('keydown', this._handleKeydown)
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    window.removeEventListener('keydown', this._handleKeydown)
    this._stopGame()
  }

  private _initGame() {
    // Start snake in the middle
    const mid = Math.floor(this.GRID_SIZE / 2)
    this.snake = [
      { x: mid, y: mid },
      { x: mid - 1, y: mid },
      { x: mid - 2, y: mid }
    ]
    this.direction = 'right'
    this.nextDirection = 'right'
    this.score = 0
    this._spawnFood()
  }

  private _spawnFood() {
    let newFood: Point
    do {
      newFood = {
        x: Math.floor(Math.random() * this.GRID_SIZE),
        y: Math.floor(Math.random() * this.GRID_SIZE)
      }
    } while (this.snake.some(s => s.x === newFood.x && s.y === newFood.y))
    this.food = newFood
  }

  private _startGame() {
    if (this.gameState === 'idle' || this.gameState === 'gameover') {
      this._initGame()
    }
    this.gameState = 'playing'
    this.gameLoop = window.setInterval(() => this._tick(), this.GAME_SPEED)
  }

  private _pauseGame() {
    this.gameState = 'paused'
    this._stopGame()
  }

  private _stopGame() {
    if (this.gameLoop) {
      clearInterval(this.gameLoop)
      this.gameLoop = null
    }
  }

  private _tick() {
    this.direction = this.nextDirection
    const head = this.snake[0]
    let newHead: Point

    switch (this.direction) {
      case 'up':
        newHead = { x: head.x, y: head.y - 1 }
        break
      case 'down':
        newHead = { x: head.x, y: head.y + 1 }
        break
      case 'left':
        newHead = { x: head.x - 1, y: head.y }
        break
      case 'right':
        newHead = { x: head.x + 1, y: head.y }
        break
    }

    // Check wall collision
    if (
      newHead.x < 0 || newHead.x >= this.GRID_SIZE ||
      newHead.y < 0 || newHead.y >= this.GRID_SIZE
    ) {
      this._gameOver()
      return
    }

    // Check self collision
    if (this.snake.some(s => s.x === newHead.x && s.y === newHead.y)) {
      this._gameOver()
      return
    }

    // Move snake
    const newSnake = [newHead, ...this.snake]

    // Check food collision
    if (newHead.x === this.food.x && newHead.y === this.food.y) {
      this.score += 10
      this._spawnFood()
    } else {
      newSnake.pop() // Remove tail if no food eaten
    }

    this.snake = newSnake
  }

  private _gameOver() {
    this._stopGame()
    this.gameState = 'gameover'
    if (this.score > this.highScore) {
      this.highScore = this.score
      localStorage.setItem('snake-high-score', this.highScore.toString())
    }
  }

  private _handleKeydown(e: KeyboardEvent) {
    // Only handle keys if game is focused or playing
    if (this.gameState !== 'playing' && this.gameState !== 'paused') {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault()
        this._startGame()
      }
      return
    }

    switch (e.key) {
      case 'ArrowUp':
      case 'w':
      case 'W':
        e.preventDefault()
        if (this.direction !== 'down') this.nextDirection = 'up'
        break
      case 'ArrowDown':
      case 's':
      case 'S':
        e.preventDefault()
        if (this.direction !== 'up') this.nextDirection = 'down'
        break
      case 'ArrowLeft':
      case 'a':
      case 'A':
        e.preventDefault()
        if (this.direction !== 'right') this.nextDirection = 'left'
        break
      case 'ArrowRight':
      case 'd':
      case 'D':
        e.preventDefault()
        if (this.direction !== 'left') this.nextDirection = 'right'
        break
      case ' ':
        e.preventDefault()
        if (this.gameState === 'playing') {
          this._pauseGame()
        } else if (this.gameState === 'paused') {
          this._startGame()
        }
        break
      case 'Escape':
        e.preventDefault()
        if (this.gameState === 'playing') {
          this._pauseGame()
        }
        break
    }
  }

  render() {
    const canvasSize = this.GRID_SIZE * this.CELL_SIZE

    return html`
      <div class="game-container">
        <div class="header">
          <div class="score">Score: ${this.score}</div>
          <div class="high-score">High Score: ${this.highScore}</div>
        </div>

        <div class="game-area" style="width: ${canvasSize}px; height: ${canvasSize}px;">
          <!-- Grid -->
          <div class="grid">
            ${this.snake.map((segment, i) => html`
              <div 
                class="snake-segment ${i === 0 ? 'head' : ''}"
                style="left: ${segment.x * this.CELL_SIZE}px; top: ${segment.y * this.CELL_SIZE}px; width: ${this.CELL_SIZE - 2}px; height: ${this.CELL_SIZE - 2}px;"
              ></div>
            `)}
            <div 
              class="food"
              style="left: ${this.food.x * this.CELL_SIZE}px; top: ${this.food.y * this.CELL_SIZE}px; width: ${this.CELL_SIZE - 2}px; height: ${this.CELL_SIZE - 2}px;"
            ></div>
          </div>

          <!-- Overlays -->
          ${this.gameState === 'idle' ? html`
            <div class="overlay">
              <h3>Snake Game</h3>
              <p>Use arrow keys or WASD to move</p>
              <button @click=${this._startGame}>Start Game</button>
              <p class="hint">or press Space/Enter</p>
            </div>
          ` : ''}

          ${this.gameState === 'paused' ? html`
            <div class="overlay">
              <h3>Paused</h3>
              <button @click=${this._startGame}>Resume</button>
              <p class="hint">or press Space</p>
            </div>
          ` : ''}

          ${this.gameState === 'gameover' ? html`
            <div class="overlay">
              <h3>Game Over!</h3>
              <p>Final Score: ${this.score}</p>
              ${this.score === this.highScore && this.score > 0 ? html`<p class="new-record">New High Score!</p>` : ''}
              <button @click=${this._startGame}>Play Again</button>
              <p class="hint">or press Space/Enter</p>
            </div>
          ` : ''}
        </div>

        <div class="controls-hint">
          <span>Move: Arrow Keys / WASD</span>
          <span>Pause: Space / Esc</span>
        </div>
      </div>
    `
  }

  static styles = css`
    :host {
      display: block;
    }

    .game-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
    }

    .header {
      display: flex;
      justify-content: space-between;
      width: 100%;
      max-width: 400px;
      font-size: 1.1rem;
      font-weight: 600;
    }

    .score {
      color: #00ADD8;
    }

    .high-score {
      color: #888;
    }

    .game-area {
      position: relative;
      background: #1a1a1a;
      border: 2px solid rgba(255, 255, 255, 0.2);
      border-radius: 8px;
      overflow: hidden;
    }

    .grid {
      position: relative;
      width: 100%;
      height: 100%;
      background-image: 
        linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
      background-size: 20px 20px;
    }

    .snake-segment {
      position: absolute;
      background: #00ADD8;
      border-radius: 4px;
      transition: left 0.05s linear, top 0.05s linear;
    }

    .snake-segment.head {
      background: #00d4ff;
      box-shadow: 0 0 10px rgba(0, 173, 216, 0.5);
    }

    .food {
      position: absolute;
      background: #ff6b6b;
      border-radius: 50%;
      box-shadow: 0 0 10px rgba(255, 107, 107, 0.5);
      animation: pulse 0.5s ease-in-out infinite alternate;
    }

    @keyframes pulse {
      from { transform: scale(0.8); }
      to { transform: scale(1); }
    }

    .overlay {
      position: absolute;
      inset: 0;
      background: rgba(0, 0, 0, 0.85);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 0.75rem;
      text-align: center;
      padding: 1rem;
    }

    .overlay h3 {
      margin: 0;
      font-size: 1.5rem;
      color: #00ADD8;
    }

    .overlay p {
      margin: 0;
      color: #aaa;
    }

    .overlay .new-record {
      color: #ffd700;
      font-weight: 600;
      animation: glow 0.5s ease-in-out infinite alternate;
    }

    @keyframes glow {
      from { text-shadow: 0 0 5px #ffd700; }
      to { text-shadow: 0 0 15px #ffd700; }
    }

    .overlay button {
      padding: 0.75rem 2rem;
      font-size: 1rem;
      font-weight: 600;
      background: #00ADD8;
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .overlay button:hover {
      background: #00c4f5;
      transform: scale(1.05);
    }

    .overlay .hint {
      font-size: 0.85rem;
      color: #666;
    }

    .controls-hint {
      display: flex;
      gap: 2rem;
      font-size: 0.85rem;
      color: #666;
    }

    @media (prefers-color-scheme: light) {
      .game-area {
        background: #f0f0f0;
        border-color: rgba(0, 0, 0, 0.2);
      }

      .grid {
        background-image: 
          linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px);
      }

      .overlay {
        background: rgba(255, 255, 255, 0.9);
      }

      .overlay p {
        color: #555;
      }
    }

    @media (max-width: 500px) {
      .controls-hint {
        flex-direction: column;
        gap: 0.25rem;
        text-align: center;
      }
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'snake-game': SnakeGame
  }
}
