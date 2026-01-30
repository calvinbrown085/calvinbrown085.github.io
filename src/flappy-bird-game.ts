import { LitElement, css, html } from 'lit'
import { customElement, state } from 'lit/decorators.js'

interface Pipe {
  x: number
  gapY: number
  passed: boolean
}

type GameState = 'idle' | 'playing' | 'gameover'

const GAME_WIDTH = 400
const GAME_HEIGHT = 500
const BIRD_SIZE = 30
const PIPE_WIDTH = 60
const PIPE_GAP = 140
const GRAVITY = 0.5
const JUMP_FORCE = -8
const PIPE_SPEED = 3
const PIPE_SPAWN_INTERVAL = 1800

@customElement('flappy-bird-game')
export class FlappyBirdGame extends LitElement {
  @state() private gameState: GameState = 'idle'
  @state() private birdY = GAME_HEIGHT / 2
  @state() private birdVelocity = 0
  @state() private pipes: Pipe[] = []
  @state() private score = 0
  @state() private highScore = 0

  private gameLoop: number | null = null
  private pipeSpawner: number | null = null
  private lastTime = 0

  connectedCallback() {
    super.connectedCallback()
    this._loadHighScore()
    window.addEventListener('keydown', this._handleKeyDown)
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    this._stopGame()
    window.removeEventListener('keydown', this._handleKeyDown)
  }

  private _loadHighScore() {
    const saved = localStorage.getItem('flappy-bird-highscore')
    if (saved) {
      this.highScore = parseInt(saved, 10)
    }
  }

  private _saveHighScore() {
    if (this.score > this.highScore) {
      this.highScore = this.score
      localStorage.setItem('flappy-bird-highscore', this.highScore.toString())
    }
  }

  private _handleKeyDown = (e: KeyboardEvent) => {
    if (e.code === 'Space' || e.key === ' ') {
      e.preventDefault()
      this._handleInput()
    }
  }

  private _handleClick = () => {
    this._handleInput()
  }

  private _handleInput() {
    if (this.gameState === 'idle') {
      this._startGame()
    } else if (this.gameState === 'playing') {
      this._flap()
    } else if (this.gameState === 'gameover') {
      this._startGame()
    }
  }

  private _startGame() {
    this.birdY = GAME_HEIGHT / 2
    this.birdVelocity = 0
    this.pipes = []
    this.score = 0
    this.gameState = 'playing'
    this.lastTime = performance.now()

    this._spawnPipe()

    this.gameLoop = requestAnimationFrame(this._update)
    this.pipeSpawner = window.setInterval(() => this._spawnPipe(), PIPE_SPAWN_INTERVAL)
  }

  private _stopGame() {
    if (this.gameLoop) {
      cancelAnimationFrame(this.gameLoop)
      this.gameLoop = null
    }
    if (this.pipeSpawner) {
      clearInterval(this.pipeSpawner)
      this.pipeSpawner = null
    }
  }

  private _flap() {
    this.birdVelocity = JUMP_FORCE
  }

  private _spawnPipe() {
    const minGapY = 80
    const maxGapY = GAME_HEIGHT - PIPE_GAP - 80
    const gapY = Math.random() * (maxGapY - minGapY) + minGapY

    this.pipes = [...this.pipes, {
      x: GAME_WIDTH,
      gapY,
      passed: false
    }]
  }

  private _update = (currentTime: number) => {
    if (this.gameState !== 'playing') return

    const deltaTime = Math.min((currentTime - this.lastTime) / 16.67, 2)
    this.lastTime = currentTime

    // Update bird
    this.birdVelocity += GRAVITY * deltaTime
    this.birdY += this.birdVelocity * deltaTime

    // Update pipes
    this.pipes = this.pipes
      .map(pipe => ({
        ...pipe,
        x: pipe.x - PIPE_SPEED * deltaTime
      }))
      .filter(pipe => pipe.x > -PIPE_WIDTH)

    // Check for scoring
    for (const pipe of this.pipes) {
      if (!pipe.passed && pipe.x + PIPE_WIDTH < GAME_WIDTH / 2 - BIRD_SIZE / 2) {
        pipe.passed = true
        this.score++
      }
    }

    // Check collisions
    if (this._checkCollision()) {
      this._gameOver()
      return
    }

    this.requestUpdate()
    this.gameLoop = requestAnimationFrame(this._update)
  }

  private _checkCollision(): boolean {
    const birdLeft = GAME_WIDTH / 2 - BIRD_SIZE / 2
    const birdRight = birdLeft + BIRD_SIZE
    const birdTop = this.birdY
    const birdBottom = this.birdY + BIRD_SIZE

    // Check floor and ceiling
    if (birdTop < 0 || birdBottom > GAME_HEIGHT) {
      return true
    }

    // Check pipes
    for (const pipe of this.pipes) {
      const pipeLeft = pipe.x
      const pipeRight = pipe.x + PIPE_WIDTH

      // Check if bird is horizontally aligned with pipe
      if (birdRight > pipeLeft && birdLeft < pipeRight) {
        // Check if bird hits top pipe or bottom pipe
        if (birdTop < pipe.gapY || birdBottom > pipe.gapY + PIPE_GAP) {
          return true
        }
      }
    }

    return false
  }

  private _gameOver() {
    this.gameState = 'gameover'
    this._stopGame()
    this._saveHighScore()
  }

  private _getBirdRotation(): number {
    // Rotate bird based on velocity
    const rotation = Math.min(Math.max(this.birdVelocity * 3, -30), 90)
    return rotation
  }

  render() {
    return html`
      <div class="game-container">
        <div class="scoreboard">
          <div class="score current-score">
            <span class="label">Score</span>
            <span class="value">${this.score}</span>
          </div>
          <div class="score high-score">
            <span class="label">Best</span>
            <span class="value">${this.highScore}</span>
          </div>
        </div>

        <div
          class="game-area"
          @click=${this._handleClick}
        >
          <!-- Sky background -->
          <div class="sky"></div>

          <!-- Pipes -->
          ${this.pipes.map(pipe => html`
            <div class="pipe pipe-top" style="left: ${pipe.x}px; height: ${pipe.gapY}px;"></div>
            <div class="pipe pipe-bottom" style="left: ${pipe.x}px; top: ${pipe.gapY + PIPE_GAP}px; height: ${GAME_HEIGHT - pipe.gapY - PIPE_GAP}px;"></div>
          `)}

          <!-- Bird -->
          <div
            class="bird ${this.gameState === 'playing' ? 'flapping' : ''}"
            style="top: ${this.birdY}px; transform: rotate(${this._getBirdRotation()}deg);"
          >
            <div class="bird-body">
              <div class="bird-eye"></div>
              <div class="bird-beak"></div>
              <div class="bird-wing"></div>
            </div>
          </div>

          <!-- Ground -->
          <div class="ground ${this.gameState === 'playing' ? 'moving' : ''}"></div>

          <!-- Overlays -->
          ${this.gameState === 'idle' ? html`
            <div class="overlay">
              <h2>Flappy Bird</h2>
              <p>Click or press Space to flap!</p>
              <div class="start-hint">Tap to Start</div>
            </div>
          ` : ''}

          ${this.gameState === 'gameover' ? html`
            <div class="overlay gameover">
              <h2>Game Over!</h2>
              <div class="final-score">
                <p>Score: ${this.score}</p>
                ${this.score >= this.highScore && this.score > 0 ? html`<p class="new-best">New Best!</p>` : ''}
              </div>
              <div class="start-hint">Tap to Retry</div>
            </div>
          ` : ''}
        </div>

        <div class="instructions">
          Click or press Space to flap
        </div>
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
      gap: 15px;
      padding: 20px;
    }

    .scoreboard {
      display: flex;
      gap: 30px;
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

    .current-score .value {
      color: #2ecc71;
    }

    .high-score .value {
      color: #f1c40f;
    }

    .game-area {
      width: ${GAME_WIDTH}px;
      height: ${GAME_HEIGHT}px;
      position: relative;
      overflow: hidden;
      border-radius: 12px;
      cursor: pointer;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
    }

    .sky {
      position: absolute;
      inset: 0;
      background: linear-gradient(180deg, #4dc9e6 0%, #87ceeb 50%, #b0e0e6 100%);
    }

    .ground {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 80px;
      background: linear-gradient(180deg, #8B4513 0%, #654321 20%, #5D4E37 100%);
      border-top: 4px solid #228B22;
    }

    .ground::before {
      content: '';
      position: absolute;
      top: -20px;
      left: 0;
      right: 0;
      height: 24px;
      background: linear-gradient(180deg, #90EE90 0%, #228B22 100%);
    }

    .ground.moving {
      animation: groundScroll 0.5s linear infinite;
    }

    @keyframes groundScroll {
      from { background-position-x: 0; }
      to { background-position-x: -48px; }
    }

    .pipe {
      position: absolute;
      width: ${PIPE_WIDTH}px;
      background: linear-gradient(90deg, #228B22 0%, #32CD32 20%, #228B22 80%, #006400 100%);
      border: 3px solid #006400;
      box-sizing: border-box;
    }

    .pipe-top {
      top: 0;
      border-top: none;
      border-radius: 0 0 6px 6px;
    }

    .pipe-top::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: -6px;
      right: -6px;
      height: 30px;
      background: linear-gradient(90deg, #228B22 0%, #32CD32 20%, #228B22 80%, #006400 100%);
      border: 3px solid #006400;
      border-radius: 4px;
    }

    .pipe-bottom {
      border-bottom: none;
      border-radius: 6px 6px 0 0;
    }

    .pipe-bottom::before {
      content: '';
      position: absolute;
      top: -4px;
      left: -6px;
      right: -6px;
      height: 30px;
      background: linear-gradient(90deg, #228B22 0%, #32CD32 20%, #228B22 80%, #006400 100%);
      border: 3px solid #006400;
      border-radius: 4px;
    }

    .bird {
      position: absolute;
      left: calc(50% - ${BIRD_SIZE / 2}px);
      width: ${BIRD_SIZE}px;
      height: ${BIRD_SIZE}px;
      transition: transform 0.1s ease-out;
      z-index: 10;
    }

    .bird-body {
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
      border-radius: 50%;
      position: relative;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    }

    .bird-eye {
      position: absolute;
      top: 6px;
      right: 4px;
      width: 10px;
      height: 10px;
      background: white;
      border-radius: 50%;
    }

    .bird-eye::after {
      content: '';
      position: absolute;
      top: 2px;
      right: 2px;
      width: 5px;
      height: 5px;
      background: black;
      border-radius: 50%;
    }

    .bird-beak {
      position: absolute;
      top: 12px;
      right: -8px;
      width: 0;
      height: 0;
      border-top: 5px solid transparent;
      border-bottom: 5px solid transparent;
      border-left: 12px solid #FF6347;
    }

    .bird-wing {
      position: absolute;
      top: 12px;
      left: 2px;
      width: 12px;
      height: 8px;
      background: #DAA520;
      border-radius: 50%;
    }

    .bird.flapping .bird-wing {
      animation: flap 0.15s ease-in-out infinite;
    }

    @keyframes flap {
      0%, 100% { transform: rotate(-20deg); top: 12px; }
      50% { transform: rotate(20deg); top: 8px; }
    }

    .overlay {
      position: absolute;
      inset: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: rgba(0, 0, 0, 0.5);
      z-index: 20;
    }

    .overlay h2 {
      margin: 0 0 10px 0;
      font-size: 36px;
      color: #fff;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }

    .overlay p {
      margin: 0 0 20px 0;
      font-size: 18px;
      color: #fff;
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    }

    .overlay.gameover h2 {
      color: #e74c3c;
    }

    .final-score {
      text-align: center;
      margin-bottom: 20px;
    }

    .final-score p {
      margin: 5px 0;
      font-size: 24px;
    }

    .new-best {
      color: #f1c40f !important;
      font-weight: bold;
      animation: pulse 0.5s ease infinite alternate;
    }

    @keyframes pulse {
      from { transform: scale(1); }
      to { transform: scale(1.1); }
    }

    .start-hint {
      padding: 15px 40px;
      background: #2ecc71;
      color: white;
      font-size: 20px;
      font-weight: bold;
      border-radius: 30px;
      box-shadow: 0 4px 15px rgba(46, 204, 113, 0.4);
      animation: bounce 1s ease infinite;
    }

    @keyframes bounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }

    .instructions {
      font-size: 14px;
      color: #666;
    }

    @media (max-width: 500px) {
      .game-area {
        width: 320px;
        height: 400px;
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

      .overlay h2 {
        font-size: 28px;
      }

      .start-hint {
        padding: 12px 30px;
        font-size: 16px;
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

      .current-score .value {
        color: #27ae60;
      }

      .high-score .value {
        color: #d4ac0d;
      }

      .instructions {
        color: #888;
      }
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'flappy-bird-game': FlappyBirdGame
  }
}
