import { LitElement, css, html } from 'lit'
import { customElement, state } from 'lit/decorators.js'

const COLS = 10
const ROWS = 20
const CELL = 28

type PieceName = 'I' | 'O' | 'T' | 'S' | 'Z' | 'J' | 'L'
type Cell = string | null
type Board = Cell[][]

interface Piece {
  name: PieceName
  rot: number
  row: number
  col: number
}

// Each piece: 4 rotations, each rotation: array of [row, col] offsets from bounding-box top-left
const SHAPES: Record<PieceName, number[][][]> = {
  I: [
    [[1,0],[1,1],[1,2],[1,3]],
    [[0,2],[1,2],[2,2],[3,2]],
    [[2,0],[2,1],[2,2],[2,3]],
    [[0,1],[1,1],[2,1],[3,1]],
  ],
  O: [
    [[0,1],[0,2],[1,1],[1,2]],
    [[0,1],[0,2],[1,1],[1,2]],
    [[0,1],[0,2],[1,1],[1,2]],
    [[0,1],[0,2],[1,1],[1,2]],
  ],
  T: [
    [[0,1],[1,0],[1,1],[1,2]],
    [[0,1],[1,1],[1,2],[2,1]],
    [[1,0],[1,1],[1,2],[2,1]],
    [[0,1],[1,0],[1,1],[2,1]],
  ],
  S: [
    [[0,1],[0,2],[1,0],[1,1]],
    [[0,1],[1,1],[1,2],[2,2]],
    [[1,1],[1,2],[2,0],[2,1]],
    [[0,0],[1,0],[1,1],[2,1]],
  ],
  Z: [
    [[0,0],[0,1],[1,1],[1,2]],
    [[0,2],[1,1],[1,2],[2,1]],
    [[1,0],[1,1],[2,1],[2,2]],
    [[0,1],[1,0],[1,1],[2,0]],
  ],
  J: [
    [[0,0],[1,0],[1,1],[1,2]],
    [[0,1],[0,2],[1,1],[2,1]],
    [[1,0],[1,1],[1,2],[2,2]],
    [[0,1],[1,1],[2,0],[2,1]],
  ],
  L: [
    [[0,2],[1,0],[1,1],[1,2]],
    [[0,1],[1,1],[2,1],[2,2]],
    [[1,0],[1,1],[1,2],[2,0]],
    [[0,0],[0,1],[1,1],[2,1]],
  ],
}

const COLORS: Record<PieceName, string> = {
  I: '#00f5ff',
  O: '#ffe600',
  T: '#bf5fff',
  S: '#00ff6e',
  Z: '#ff4d6d',
  J: '#4d79ff',
  L: '#ff9500',
}

const GLOWS: Record<PieceName, string> = {
  I: 'rgba(0,245,255,0.7)',
  O: 'rgba(255,230,0,0.7)',
  T: 'rgba(191,95,255,0.7)',
  S: 'rgba(0,255,110,0.7)',
  Z: 'rgba(255,77,109,0.7)',
  J: 'rgba(77,121,255,0.7)',
  L: 'rgba(255,149,0,0.7)',
}

const PIECE_NAMES: PieceName[] = ['I', 'O', 'T', 'S', 'Z', 'J', 'L']

// Score for 1/2/3/4 cleared lines (multiplied by level)
const LINE_SCORES = [0, 100, 300, 500, 800]

function getLevelSpeed(level: number): number {
  return Math.max(80, 800 - (level - 1) * 65)
}

@customElement('tetris-game')
export class TetrisGame extends LitElement {
  @state() private _score = 0
  @state() private _highScore = 0
  @state() private _level = 1
  @state() private _lines = 0
  @state() private _gameState: 'idle' | 'playing' | 'paused' | 'gameover' = 'idle'

  private _board: Board = []
  private _activePiece: Piece | null = null
  private _nextPiece: PieceName | null = null
  private _holdPiece: PieceName | null = null
  private _canHold = true
  private _bag: PieceName[] = []
  private _clearingRows: Set<number> = new Set()
  private _clearAnimStart = 0

  private _dropTimer: number | null = null
  private _rafId: number | null = null
  private _rafRunning = false

  private _boardCanvas: HTMLCanvasElement | null = null
  private _nextCanvas: HTMLCanvasElement | null = null
  private _holdCanvas: HTMLCanvasElement | null = null

  connectedCallback() {
    super.connectedCallback()
    const saved = localStorage.getItem('tetris-high-score')
    if (saved) this._highScore = parseInt(saved, 10)
    this._handleKeydown = this._handleKeydown.bind(this)
    window.addEventListener('keydown', this._handleKeydown)
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    window.removeEventListener('keydown', this._handleKeydown)
    this._stopGame()
    this._stopRenderLoop()
  }

  // ── Board helpers ────────────────────────────────────────────────────────────

  private _initBoard(): Board {
    return Array.from({ length: ROWS }, () => Array<Cell>(COLS).fill(null))
  }

  private _getCells(piece: Piece): [number, number][] {
    return SHAPES[piece.name][piece.rot].map(([dr, dc]) => [piece.row + dr, piece.col + dc] as [number, number])
  }

  private _isValid(piece: Piece, board: Board): boolean {
    for (const [r, c] of this._getCells(piece)) {
      if (c < 0 || c >= COLS || r >= ROWS) return false
      if (r >= 0 && board[r][c] !== null) return false
    }
    return true
  }

  private _getGhost(): Piece | null {
    if (!this._activePiece) return null
    let ghost = { ...this._activePiece }
    while (this._isValid({ ...ghost, row: ghost.row + 1 }, this._board)) {
      ghost = { ...ghost, row: ghost.row + 1 }
    }
    return ghost
  }

  // ── Randomizer (7-bag) ───────────────────────────────────────────────────────

  private _refillBag() {
    const pieces = [...PIECE_NAMES]
    for (let i = pieces.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pieces[i], pieces[j]] = [pieces[j], pieces[i]]
    }
    this._bag.push(...pieces)
  }

  private _nextFromBag(): PieceName {
    if (this._bag.length <= 1) this._refillBag()
    return this._bag.shift()!
  }

  private _makePiece(name: PieceName): Piece {
    return { name, rot: 0, row: 0, col: 3 }
  }

  // ── Game flow ────────────────────────────────────────────────────────────────

  private _startGame() {
    this._board = this._initBoard()
    this._score = 0
    this._level = 1
    this._lines = 0
    this._holdPiece = null
    this._canHold = true
    this._bag = []
    this._clearingRows = new Set()
    this._refillBag()
    this._nextPiece = this._nextFromBag()
    this._spawnNext()
    this._gameState = 'playing'
    this._scheduleDropTimer()
    this._startRenderLoop()
  }

  private _spawnNext() {
    const name = this._nextPiece!
    this._nextPiece = this._nextFromBag()
    const piece = this._makePiece(name)
    if (!this._isValid(piece, this._board)) {
      this._activePiece = null
      this._gameOver()
      return
    }
    this._activePiece = piece
    this._canHold = true
  }

  private _scheduleDropTimer() {
    if (this._dropTimer !== null) clearInterval(this._dropTimer)
    this._dropTimer = window.setInterval(() => this._drop(), getLevelSpeed(this._level))
  }

  private _stopGame() {
    if (this._dropTimer !== null) {
      clearInterval(this._dropTimer)
      this._dropTimer = null
    }
  }

  private _drop() {
    if (this._gameState !== 'playing' || !this._activePiece) return
    const moved = { ...this._activePiece, row: this._activePiece.row + 1 }
    if (this._isValid(moved, this._board)) {
      this._activePiece = moved
    } else {
      this._lockPiece()
    }
  }

  private _lockPiece() {
    if (!this._activePiece) return
    const cells = this._getCells(this._activePiece)
    const color = COLORS[this._activePiece.name]

    if (cells.some(([r]) => r < 0)) {
      this._gameOver()
      return
    }

    const newBoard = this._board.map(row => [...row])
    for (const [r, c] of cells) {
      if (r >= 0) newBoard[r][c] = color
    }

    const fullRows = newBoard.reduce<number[]>((acc, row, i) => {
      if (row.every(c => c !== null)) acc.push(i)
      return acc
    }, [])

    this._board = newBoard
    this._activePiece = null

    if (fullRows.length > 0) {
      this._clearingRows = new Set(fullRows)
      this._clearAnimStart = performance.now()
      setTimeout(() => this._clearRows(fullRows), 250)
    } else {
      this._spawnNext()
    }
  }

  private _clearRows(rows: number[]) {
    const newBoard = this._board.filter((_, i) => !rows.includes(i))
    while (newBoard.length < ROWS) newBoard.unshift(Array<Cell>(COLS).fill(null))

    this._board = newBoard
    this._clearingRows = new Set()

    const cleared = rows.length
    this._lines += cleared
    this._score += LINE_SCORES[cleared] * this._level

    const newLevel = Math.floor(this._lines / 10) + 1
    if (newLevel !== this._level) {
      this._level = newLevel
      this._scheduleDropTimer()
    }

    this._spawnNext()
  }

  private _gameOver() {
    this._gameState = 'gameover'
    this._stopGame()
    if (this._score > this._highScore) {
      this._highScore = this._score
      localStorage.setItem('tetris-high-score', this._highScore.toString())
    }
  }

  // ── Piece actions ────────────────────────────────────────────────────────────

  private _movePiece(dc: number) {
    if (!this._activePiece || this._gameState !== 'playing') return
    const moved = { ...this._activePiece, col: this._activePiece.col + dc }
    if (this._isValid(moved, this._board)) this._activePiece = moved
  }

  private _rotatePiece(dir: 1 | -1) {
    if (!this._activePiece || this._gameState !== 'playing') return
    const newRot = ((this._activePiece.rot + dir + 4) % 4) as 0 | 1 | 2 | 3
    const rotated = { ...this._activePiece, rot: newRot }
    // Try position offsets for wall kicks
    for (const dc of [0, -1, 1, -2, 2]) {
      const kicked = { ...rotated, col: rotated.col + dc }
      if (this._isValid(kicked, this._board)) {
        this._activePiece = kicked
        return
      }
    }
  }

  private _hardDrop() {
    if (!this._activePiece || this._gameState !== 'playing') return
    let dropped = 0
    let piece: Piece = this._activePiece
    while (true) {
      const moved: Piece = { ...piece, row: piece.row + 1 }
      if (this._isValid(moved, this._board)) {
        piece = moved
        dropped++
      } else {
        break
      }
    }
    this._activePiece = piece
    this._score += dropped * 2
    this._lockPiece()
  }

  private _softDrop() {
    if (!this._activePiece || this._gameState !== 'playing') return
    const moved = { ...this._activePiece, row: this._activePiece.row + 1 }
    if (this._isValid(moved, this._board)) {
      this._activePiece = moved
      this._score += 1
    }
  }

  private _holdAction() {
    if (!this._activePiece || !this._canHold || this._gameState !== 'playing') return
    const current = this._activePiece.name
    this._canHold = false
    if (this._holdPiece) {
      const held = this._holdPiece
      this._holdPiece = current
      const piece = this._makePiece(held)
      if (!this._isValid(piece, this._board)) {
        this._gameOver()
        return
      }
      this._activePiece = piece
    } else {
      this._holdPiece = current
      this._activePiece = null
      this._spawnNext()
    }
  }

  // ── Input ────────────────────────────────────────────────────────────────────

  private _handleKeydown(e: KeyboardEvent) {
    if (this._gameState === 'idle' || this._gameState === 'gameover') {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault()
        this._startGame()
      }
      return
    }

    if (e.key === 'p' || e.key === 'P' || e.key === 'Escape') {
      e.preventDefault()
      if (this._gameState === 'playing') {
        this._gameState = 'paused'
        this._stopGame()
      } else if (this._gameState === 'paused') {
        this._gameState = 'playing'
        this._scheduleDropTimer()
      }
      return
    }

    if (this._gameState !== 'playing') return

    switch (e.key) {
      case 'ArrowLeft':
      case 'a':
      case 'A':
        e.preventDefault()
        this._movePiece(-1)
        break
      case 'ArrowRight':
      case 'd':
      case 'D':
        e.preventDefault()
        this._movePiece(1)
        break
      case 'ArrowDown':
      case 's':
      case 'S':
        e.preventDefault()
        this._softDrop()
        break
      case 'ArrowUp':
      case 'x':
      case 'X':
        e.preventDefault()
        this._rotatePiece(1)
        break
      case 'z':
      case 'Z':
        e.preventDefault()
        this._rotatePiece(-1)
        break
      case ' ':
        e.preventDefault()
        this._hardDrop()
        break
      case 'c':
      case 'C':
      case 'Shift':
        e.preventDefault()
        this._holdAction()
        break
    }
  }

  // ── Render loop ──────────────────────────────────────────────────────────────

  private _startRenderLoop() {
    if (this._rafRunning) return
    this._rafRunning = true
    const loop = () => {
      if (!this._rafRunning) return
      this._drawAll()
      this._rafId = requestAnimationFrame(loop)
    }
    this._rafId = requestAnimationFrame(loop)
  }

  private _stopRenderLoop() {
    this._rafRunning = false
    if (this._rafId !== null) {
      cancelAnimationFrame(this._rafId)
      this._rafId = null
    }
  }

  private _resolveCanvases() {
    if (!this._boardCanvas) this._boardCanvas = this.renderRoot.querySelector('#board-canvas') as HTMLCanvasElement | null
    if (!this._nextCanvas) this._nextCanvas = this.renderRoot.querySelector('#next-canvas') as HTMLCanvasElement | null
    if (!this._holdCanvas) this._holdCanvas = this.renderRoot.querySelector('#hold-canvas') as HTMLCanvasElement | null
  }

  private _drawAll() {
    this._resolveCanvases()
    if (this._boardCanvas) this._drawBoard()
    if (this._nextCanvas) this._drawPreview(this._nextCanvas, this._nextPiece)
    if (this._holdCanvas) this._drawPreview(this._holdCanvas, this._holdPiece, !this._canHold)
  }

  // ── Canvas drawing ───────────────────────────────────────────────────────────

  private _drawCell(
    ctx: CanvasRenderingContext2D,
    r: number, c: number,
    color: string, glow: string,
    cellSize = CELL,
    alpha = 1
  ) {
    const x = c * cellSize
    const y = r * cellSize
    const s = cellSize - 1

    ctx.globalAlpha = alpha
    ctx.shadowColor = glow
    ctx.shadowBlur = 14
    ctx.fillStyle = color
    ctx.fillRect(x + 1, y + 1, s - 1, s - 1)

    // Bevel highlight
    ctx.shadowBlur = 0
    ctx.fillStyle = 'rgba(255,255,255,0.25)'
    ctx.fillRect(x + 1, y + 1, s - 1, 3)
    ctx.fillRect(x + 1, y + 1, 3, s - 1)

    // Dark bottom-right edge
    ctx.fillStyle = 'rgba(0,0,0,0.25)'
    ctx.fillRect(x + 1, y + s - 2, s - 1, 2)
    ctx.fillRect(x + s - 2, y + 1, 2, s - 1)

    ctx.globalAlpha = 1
    ctx.shadowBlur = 0
  }

  private _nameFromColor(color: string): PieceName | null {
    return (Object.entries(COLORS).find(([, v]) => v === color)?.[0] as PieceName) ?? null
  }

  private _drawBoard() {
    const canvas = this._boardCanvas!
    const ctx = canvas.getContext('2d')!

    // Background
    ctx.fillStyle = '#0a0a12'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Subtle grid
    ctx.strokeStyle = 'rgba(255,255,255,0.03)'
    ctx.lineWidth = 1
    for (let r = 0; r <= ROWS; r++) {
      ctx.beginPath(); ctx.moveTo(0, r * CELL); ctx.lineTo(COLS * CELL, r * CELL); ctx.stroke()
    }
    for (let c = 0; c <= COLS; c++) {
      ctx.beginPath(); ctx.moveTo(c * CELL, 0); ctx.lineTo(c * CELL, ROWS * CELL); ctx.stroke()
    }

    const now = performance.now()

    // Board cells
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        const color = this._board[r][c]
        if (!color) continue

        const name = this._nameFromColor(color)
        const glow = name ? GLOWS[name] : 'rgba(255,255,255,0.4)'

        if (this._clearingRows.has(r)) {
          const elapsed = now - this._clearAnimStart
          const flash = Math.sin((elapsed / 250) * Math.PI * 6) * 0.5 + 0.5
          const alpha = 0.4 + flash * 0.6
          this._drawCell(ctx, r, c, '#ffffff', 'rgba(255,255,255,0.9)', CELL, alpha)
        } else {
          this._drawCell(ctx, r, c, color, glow)
        }
      }
    }

    // Ghost piece
    const ghost = this._getGhost()
    if (ghost && this._activePiece && ghost.row !== this._activePiece.row) {
      const color = COLORS[ghost.name]
      ctx.strokeStyle = color
      ctx.lineWidth = 1
      for (const [r, c] of this._getCells(ghost)) {
        if (r >= 0) {
          ctx.globalAlpha = 0.3
          ctx.fillStyle = color
          ctx.fillRect(c * CELL + 1, r * CELL + 1, CELL - 2, CELL - 2)
          ctx.globalAlpha = 0.6
          ctx.strokeRect(c * CELL + 0.5, r * CELL + 0.5, CELL - 1, CELL - 1)
          ctx.globalAlpha = 1
        }
      }
    }

    // Active piece
    if (this._activePiece) {
      const color = COLORS[this._activePiece.name]
      const glow = GLOWS[this._activePiece.name]
      for (const [r, c] of this._getCells(this._activePiece)) {
        if (r >= 0) this._drawCell(ctx, r, c, color, glow)
      }
    }
  }

  private _drawPreview(canvas: HTMLCanvasElement, name: PieceName | null, dimmed = false) {
    const ctx = canvas.getContext('2d')!
    const w = canvas.width
    const h = canvas.height

    ctx.fillStyle = '#0a0a12'
    ctx.fillRect(0, 0, w, h)

    if (!name) return

    const cells = SHAPES[name][0]
    const color = COLORS[name]
    const glow = GLOWS[name]

    const rows = cells.map(([r]) => r)
    const cols = cells.map(([, c]) => c)
    const minR = Math.min(...rows)
    const maxR = Math.max(...rows)
    const minC = Math.min(...cols)
    const maxC = Math.max(...cols)
    const pieceH = maxR - minR + 1
    const pieceW = maxC - minC + 1

    const pad = 8
    const cs = Math.floor(Math.min((w - pad * 2) / pieceW, (h - pad * 2) / pieceH))
    const ox = Math.floor((w - pieceW * cs) / 2)
    const oy = Math.floor((h - pieceH * cs) / 2)

    ctx.globalAlpha = dimmed ? 0.35 : 1

    ctx.shadowColor = glow
    ctx.shadowBlur = 10
    ctx.fillStyle = color

    for (const [r, c] of cells) {
      const dr = r - minR
      const dc = c - minC
      const x = ox + dc * cs
      const y = oy + dr * cs
      ctx.fillRect(x + 1, y + 1, cs - 2, cs - 2)
      ctx.shadowBlur = 0
      ctx.fillStyle = 'rgba(255,255,255,0.22)'
      ctx.fillRect(x + 1, y + 1, cs - 2, 3)
      ctx.fillRect(x + 1, y + 1, 3, cs - 2)
      ctx.fillStyle = color
      ctx.shadowColor = glow
      ctx.shadowBlur = 10
    }

    ctx.shadowBlur = 0
    ctx.globalAlpha = 1
  }

  // ── Lit lifecycle ────────────────────────────────────────────────────────────

  updated() {
    this._boardCanvas = null
    this._nextCanvas = null
    this._holdCanvas = null
    this._resolveCanvases()

    if (this._gameState === 'playing' && !this._rafRunning) {
      this._startRenderLoop()
    }
    if (this._nextCanvas) this._drawPreview(this._nextCanvas, this._nextPiece)
    if (this._holdCanvas) this._drawPreview(this._holdCanvas, this._holdPiece, !this._canHold)
    if (this._boardCanvas) this._drawBoard()
  }

  render() {
    const boardW = COLS * CELL
    const boardH = ROWS * CELL

    return html`
      <div class="game-container">
        <div class="game-layout">

          <!-- Left panel: Hold + score -->
          <div class="side-panel left-panel">
            <div class="panel-box">
              <div class="panel-label">HOLD</div>
              <canvas id="hold-canvas" width="104" height="80"></canvas>
            </div>
            <div class="panel-box">
              <div class="panel-label">SCORE</div>
              <div class="panel-value score-val">${this._score.toLocaleString()}</div>
            </div>
            <div class="panel-box">
              <div class="panel-label">BEST</div>
              <div class="panel-value">${this._highScore.toLocaleString()}</div>
            </div>
          </div>

          <!-- Main board -->
          <div class="board-wrapper">
            <canvas id="board-canvas" width="${boardW}" height="${boardH}"></canvas>

            ${this._gameState === 'idle' ? html`
              <div class="overlay">
                <h2 class="title-glow">TETRIS</h2>
                <div class="key-grid">
                  <span class="key">←→</span><span>Move</span>
                  <span class="key">↑ / X</span><span>Rotate CW</span>
                  <span class="key">Z</span><span>Rotate CCW</span>
                  <span class="key">↓</span><span>Soft Drop</span>
                  <span class="key">Space</span><span>Hard Drop</span>
                  <span class="key">C / Shift</span><span>Hold</span>
                </div>
                <button class="start-btn" @click=${this._startGame}>Start Game</button>
                <p class="hint">or press Space / Enter</p>
              </div>
            ` : ''}

            ${this._gameState === 'paused' ? html`
              <div class="overlay">
                <h2 class="title-glow">PAUSED</h2>
                <button class="start-btn" @click=${() => { this._gameState = 'playing'; this._scheduleDropTimer() }}>Resume</button>
                <p class="hint">P or Esc to toggle</p>
              </div>
            ` : ''}

            ${this._gameState === 'gameover' ? html`
              <div class="overlay">
                <h2 class="title-glow red-glow">GAME OVER</h2>
                <p class="final-score">Score: ${this._score.toLocaleString()}</p>
                ${this._score > 0 && this._score === this._highScore
                  ? html`<p class="new-record">✦ New High Score! ✦</p>`
                  : ''}
                <button class="start-btn" @click=${this._startGame}>Play Again</button>
                <p class="hint">or press Space / Enter</p>
              </div>
            ` : ''}
          </div>

          <!-- Right panel: Next + level + lines -->
          <div class="side-panel right-panel">
            <div class="panel-box">
              <div class="panel-label">NEXT</div>
              <canvas id="next-canvas" width="104" height="80"></canvas>
            </div>
            <div class="panel-box">
              <div class="panel-label">LEVEL</div>
              <div class="panel-value">${this._level}</div>
            </div>
            <div class="panel-box">
              <div class="panel-label">LINES</div>
              <div class="panel-value">${this._lines}</div>
            </div>
          </div>

        </div>

        <div class="controls-hint">
          <span>Move: ←→ / AD</span>
          <span>Rotate: ↑/X · Z</span>
          <span>Hard Drop: Space</span>
          <span>Hold: C</span>
          <span>Pause: P / Esc</span>
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

    .game-layout {
      display: flex;
      gap: 12px;
      align-items: flex-start;
    }

    /* ── Side panels ── */

    .side-panel {
      display: flex;
      flex-direction: column;
      gap: 10px;
      width: 116px;
    }

    .panel-box {
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 6px;
      padding: 8px 10px;
    }

    .panel-label {
      font-size: 0.6rem;
      letter-spacing: 0.12em;
      color: #555;
      margin-bottom: 4px;
      font-weight: 600;
    }

    .panel-value {
      font-size: 1.3rem;
      font-weight: 700;
      color: #00f5ff;
      text-shadow: 0 0 10px rgba(0,245,255,0.4);
      line-height: 1;
    }

    .score-val {
      font-size: 1.1rem;
    }

    canvas#hold-canvas,
    canvas#next-canvas {
      display: block;
      width: 100%;
      border-radius: 4px;
    }

    /* ── Board ── */

    .board-wrapper {
      position: relative;
      flex-shrink: 0;
    }

    canvas#board-canvas {
      display: block;
      border: 2px solid rgba(255,255,255,0.12);
      border-radius: 4px;
    }

    /* ── Overlays ── */

    .overlay {
      position: absolute;
      inset: 0;
      background: rgba(5, 5, 15, 0.92);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 0.6rem;
      text-align: center;
      padding: 1.5rem 1rem;
      border-radius: 2px;
    }

    .title-glow {
      margin: 0 0 0.4rem;
      font-size: 2.4rem;
      font-weight: 900;
      letter-spacing: 0.25em;
      color: #00f5ff;
      text-shadow: 0 0 20px rgba(0,245,255,0.7), 0 0 40px rgba(0,245,255,0.3);
    }

    .red-glow {
      color: #ff4d6d;
      text-shadow: 0 0 20px rgba(255,77,109,0.7), 0 0 40px rgba(255,77,109,0.3);
    }

    .key-grid {
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 4px 12px;
      font-size: 0.8rem;
      text-align: left;
      margin-bottom: 0.4rem;
    }

    .key {
      background: rgba(255,255,255,0.08);
      border: 1px solid rgba(255,255,255,0.15);
      border-radius: 4px;
      padding: 1px 6px;
      font-family: monospace;
      font-size: 0.75rem;
      color: #00f5ff;
      white-space: nowrap;
      text-align: center;
    }

    .key-grid span:not(.key) {
      color: #888;
      line-height: 1.6;
    }

    .start-btn {
      padding: 0.7rem 2.2rem;
      font-size: 1rem;
      font-weight: 700;
      letter-spacing: 0.05em;
      background: #00f5ff;
      color: #05050f;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.18s ease;
      margin-top: 0.2rem;
    }

    .start-btn:hover {
      background: #33f7ff;
      transform: scale(1.04);
      box-shadow: 0 0 20px rgba(0,245,255,0.5);
    }

    .hint {
      margin: 0;
      font-size: 0.75rem;
      color: #444;
    }

    .final-score {
      margin: 0;
      font-size: 1.1rem;
      color: #ccc;
    }

    .new-record {
      margin: 0;
      color: #ffe600;
      font-weight: 700;
      font-size: 0.95rem;
      text-shadow: 0 0 10px rgba(255,230,0,0.6);
      animation: record-pulse 0.7s ease-in-out infinite alternate;
    }

    @keyframes record-pulse {
      from { text-shadow: 0 0 6px rgba(255,230,0,0.4); }
      to   { text-shadow: 0 0 18px rgba(255,230,0,0.9); }
    }

    /* ── Controls hint ── */

    .controls-hint {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 0.3rem 1.5rem;
      font-size: 0.78rem;
      color: #444;
    }

    /* ── Responsive ── */

    @media (max-width: 560px) {
      .game-layout {
        flex-direction: column;
        align-items: center;
      }

      .side-panel {
        flex-direction: row;
        width: auto;
        flex-wrap: wrap;
        justify-content: center;
      }

      .left-panel {
        order: 2;
      }

      .right-panel {
        order: 3;
      }

      .board-wrapper {
        order: 1;
      }

      .panel-box {
        min-width: 80px;
      }
    }

    @media (prefers-color-scheme: light) {
      canvas#board-canvas {
        border-color: rgba(0,0,0,0.15);
      }

      .panel-box {
        background: rgba(0,0,0,0.03);
        border-color: rgba(0,0,0,0.1);
      }

      .overlay {
        background: rgba(250,250,255,0.94);
      }

      .key {
        background: rgba(0,0,0,0.06);
        border-color: rgba(0,0,0,0.15);
      }

      .key-grid span:not(.key) {
        color: #555;
      }
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'tetris-game': TetrisGame
  }
}
