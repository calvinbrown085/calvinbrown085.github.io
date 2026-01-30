import { LitElement, css, html } from 'lit'
import { customElement, state } from 'lit/decorators.js'

type Suit = 'hearts' | 'diamonds' | 'clubs' | 'spades'
type Color = 'red' | 'black'

interface Card {
  suit: Suit
  rank: number // 1-13 (Ace to King)
  faceUp: boolean
}

interface DragState {
  cards: Card[]
  sourceType: 'tableau' | 'waste' | 'foundation'
  sourceIndex: number
  offsetX: number
  offsetY: number
  startCardIndex?: number // For tableau, which card in the pile
}

interface MousePos {
  x: number
  y: number
}

const SUITS: Suit[] = ['hearts', 'diamonds', 'clubs', 'spades']
const RANK_NAMES: Record<number, string> = {
  1: 'A', 2: '2', 3: '3', 4: '4', 5: '5', 6: '6', 7: '7',
  8: '8', 9: '9', 10: '10', 11: 'J', 12: 'Q', 13: 'K'
}

@customElement('solitaire-game')
export class SolitaireGame extends LitElement {
  @state() private stock: Card[] = []
  @state() private waste: Card[] = []
  @state() private foundations: Card[][] = [[], [], [], []]
  @state() private tableau: Card[][] = [[], [], [], [], [], [], []]
  @state() private dragState: DragState | null = null
  @state() private mousePos: MousePos = { x: 0, y: 0 }
  @state() private moves = 0
  @state() private gameWon = false

  private boundMouseMove = this._handleMouseMove.bind(this)
  private boundMouseUp = this._handleMouseUp.bind(this)

  connectedCallback() {
    super.connectedCallback()
    this._newGame()
  }

  private _handleMouseMove(e: MouseEvent) {
    if (this.dragState) {
      this.mousePos = { x: e.clientX, y: e.clientY }
      this.requestUpdate()
    }
  }

  private _handleMouseUp(e: MouseEvent) {
    if (this.dragState) {
      this._handleDrop(e)
      document.removeEventListener('mousemove', this.boundMouseMove)
      document.removeEventListener('mouseup', this.boundMouseUp)
    }
  }

  private _createDeck(): Card[] {
    const deck: Card[] = []
    for (const suit of SUITS) {
      for (let rank = 1; rank <= 13; rank++) {
        deck.push({ suit, rank, faceUp: false })
      }
    }
    return deck
  }

  private _shuffle(deck: Card[]): Card[] {
    const shuffled = [...deck]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
  }

  private _newGame() {
    const deck = this._shuffle(this._createDeck())
    
    // Deal to tableau
    this.tableau = [[], [], [], [], [], [], []]
    let cardIndex = 0
    for (let col = 0; col < 7; col++) {
      for (let row = 0; row <= col; row++) {
        const card = deck[cardIndex++]
        card.faceUp = row === col // Only top card face up
        this.tableau[col].push(card)
      }
    }
    
    // Remaining cards go to stock
    this.stock = deck.slice(cardIndex).map(c => ({ ...c, faceUp: false }))
    this.waste = []
    this.foundations = [[], [], [], []]
    this.moves = 0
    this.gameWon = false
    this.requestUpdate()
  }

  private _getColor(suit: Suit): Color {
    return suit === 'hearts' || suit === 'diamonds' ? 'red' : 'black'
  }

  private _getSuitSymbol(suit: Suit): string {
    switch (suit) {
      case 'hearts': return '♥'
      case 'diamonds': return '♦'
      case 'clubs': return '♣'
      case 'spades': return '♠'
    }
  }

  private _drawFromStock() {
    if (this.stock.length === 0) {
      // Reset stock from waste
      this.stock = this.waste.map(c => ({ ...c, faceUp: false })).reverse()
      this.waste = []
    } else {
      // Draw 1 card (or 3 for harder mode)
      const card = this.stock.pop()!
      card.faceUp = true
      this.waste.push(card)
      this.moves++
    }
    this.requestUpdate()
  }

  private _canPlaceOnTableau(card: Card, pile: Card[]): boolean {
    if (pile.length === 0) {
      return card.rank === 13 // Only Kings on empty piles
    }
    const topCard = pile[pile.length - 1]
    if (!topCard.faceUp) return false
    return (
      this._getColor(card.suit) !== this._getColor(topCard.suit) &&
      card.rank === topCard.rank - 1
    )
  }

  private _canPlaceOnFoundation(card: Card, pile: Card[]): boolean {
    if (pile.length === 0) {
      return card.rank === 1 // Only Aces on empty foundations
    }
    const topCard = pile[pile.length - 1]
    return card.suit === topCard.suit && card.rank === topCard.rank + 1
  }

  private _startDrag(e: MouseEvent, cards: Card[], sourceType: 'tableau' | 'waste' | 'foundation', sourceIndex: number, startCardIndex?: number) {
    e.preventDefault()
    const rect = (e.target as HTMLElement).getBoundingClientRect()
    this.dragState = { 
      cards, 
      sourceType, 
      sourceIndex, 
      offsetX: e.clientX - rect.left,
      offsetY: e.clientY - rect.top,
      startCardIndex
    }
    this.mousePos = { x: e.clientX, y: e.clientY }
    document.addEventListener('mousemove', this.boundMouseMove)
    document.addEventListener('mouseup', this.boundMouseUp)
    this.requestUpdate()
  }

  private _handleTableauCardMouseDown(e: MouseEvent, colIndex: number, cardIndex: number) {
    const pile = this.tableau[colIndex]
    const card = pile[cardIndex]
    
    if (!card.faceUp) {
      // Can only flip if it's the top card
      if (cardIndex === pile.length - 1) {
        card.faceUp = true
        this.requestUpdate()
      }
      return
    }

    // Start dragging these cards
    const cardsToMove = pile.slice(cardIndex)
    if (cardsToMove.every(c => c.faceUp)) {
      this._startDrag(e, cardsToMove, 'tableau', colIndex, cardIndex)
    }
  }

  private _handleWasteMouseDown(e: MouseEvent) {
    if (this.waste.length === 0) return
    const card = this.waste[this.waste.length - 1]
    this._startDrag(e, [card], 'waste', 0)
  }

  private _handleFoundationMouseDown(e: MouseEvent, foundationIndex: number) {
    const pile = this.foundations[foundationIndex]
    if (pile.length > 0) {
      const card = pile[pile.length - 1]
      this._startDrag(e, [card], 'foundation', foundationIndex)
    }
  }

  private _handleDrop(e: MouseEvent) {
    if (!this.dragState) return

    // Find what we're dropping on
    const elementsAtPoint = document.elementsFromPoint(e.clientX, e.clientY)
    
    for (const el of elementsAtPoint) {
      // Check for tableau pile
      const tableauPile = el.closest('.tableau-pile')
      if (tableauPile) {
        const colIndex = parseInt(tableauPile.getAttribute('data-col') || '-1')
        if (colIndex >= 0) {
          this._tryDropOnTableau(colIndex)
          break
        }
      }
      
      // Check for foundation
      const foundation = el.closest('.foundation')
      if (foundation) {
        const foundationIndex = parseInt(foundation.getAttribute('data-index') || '-1')
        if (foundationIndex >= 0) {
          this._tryDropOnFoundation(foundationIndex)
          break
        }
      }
    }

    this.dragState = null
    this.requestUpdate()
  }

  private _tryDropOnTableau(colIndex: number): boolean {
    if (!this.dragState) return false
    
    const { cards, sourceType, sourceIndex } = this.dragState
    const card = cards[0]
    const targetPile = this.tableau[colIndex]
    
    if (this._canPlaceOnTableau(card, targetPile)) {
      this._removeFromSource(sourceType, sourceIndex, cards.length)
      this.tableau[colIndex] = [...targetPile, ...cards]
      this.moves++
      this._checkWin()
      return true
    }
    return false
  }

  private _tryDropOnFoundation(foundationIndex: number): boolean {
    if (!this.dragState || this.dragState.cards.length !== 1) return false
    
    const { cards, sourceType, sourceIndex } = this.dragState
    const card = cards[0]
    const targetPile = this.foundations[foundationIndex]
    
    if (this._canPlaceOnFoundation(card, targetPile)) {
      this._removeFromSource(sourceType, sourceIndex, 1)
      this.foundations[foundationIndex] = [...targetPile, card]
      this.moves++
      this._checkWin()
      return true
    }
    return false
  }

  private _removeFromSource(sourceType: 'tableau' | 'waste' | 'foundation', sourceIndex: number, count: number) {
    if (sourceType === 'tableau') {
      this.tableau[sourceIndex] = this.tableau[sourceIndex].slice(0, -count)
      // Flip the new top card if needed
      const pile = this.tableau[sourceIndex]
      if (pile.length > 0 && !pile[pile.length - 1].faceUp) {
        pile[pile.length - 1].faceUp = true
      }
    } else if (sourceType === 'waste') {
      this.waste = this.waste.slice(0, -1)
    } else if (sourceType === 'foundation') {
      this.foundations[sourceIndex] = this.foundations[sourceIndex].slice(0, -1)
    }
  }

  private _tryAutoMove(card: Card, sourceType: 'tableau' | 'waste', sourceIndex: number) {
    // Try to move to foundation first
    for (let i = 0; i < 4; i++) {
      if (this._canPlaceOnFoundation(card, this.foundations[i])) {
        this._removeFromSource(sourceType, sourceIndex, 1)
        this.foundations[i] = [...this.foundations[i], card]
        this.moves++
        this._checkWin()
        this.requestUpdate()
        return true
      }
    }
    return false
  }

  private _handleDoubleClick(card: Card, sourceType: 'tableau' | 'waste', sourceIndex: number) {
    this._tryAutoMove(card, sourceType, sourceIndex)
  }

  private _checkWin() {
    const totalInFoundations = this.foundations.reduce((sum, pile) => sum + pile.length, 0)
    if (totalInFoundations === 52) {
      this.gameWon = true
    }
  }

  render() {
    return html`
      <div class="solitaire">
        <div class="header">
          <div class="stats">
            <span>Moves: ${this.moves}</span>
          </div>
          <button class="new-game-btn" @click=${this._newGame}>New Game</button>
        </div>

        <div class="game-board">
          <!-- Stock and Waste -->
          <div class="top-row">
            <div class="stock-waste">
              <div class="stock pile" @click=${this._drawFromStock}>
                ${this.stock.length > 0 
                  ? html`<div class="card back"></div>`
                  : html`<div class="card empty refresh">↻</div>`
                }
              </div>
              <div class="waste pile" @mousedown=${(e: MouseEvent) => this._handleWasteMouseDown(e)}>
                ${this.waste.length > 0 
                  ? this._renderCard(this.waste[this.waste.length - 1], this.dragState?.sourceType === 'waste')
                  : html`<div class="card empty"></div>`
                }
              </div>
            </div>

            <!-- Foundations -->
            <div class="foundations">
              ${this.foundations.map((pile, i) => html`
                <div 
                  class="foundation pile" 
                  data-index="${i}"
                  @mousedown=${(e: MouseEvent) => pile.length > 0 ? this._handleFoundationMouseDown(e, i) : null}
                >
                  ${pile.length > 0 
                    ? this._renderCard(pile[pile.length - 1], this.dragState?.sourceType === 'foundation' && this.dragState?.sourceIndex === i)
                    : html`<div class="card empty">${this._getSuitSymbol(SUITS[i])}</div>`
                  }
                </div>
              `)}
            </div>
          </div>

          <!-- Tableau -->
          <div class="tableau">
            ${this.tableau.map((pile, colIndex) => html`
              <div class="tableau-pile" data-col="${colIndex}">
                ${pile.length === 0 
                  ? html`<div class="card empty"></div>`
                  : pile.map((card, cardIndex) => {
                      const isDragging = this.dragState?.sourceType === 'tableau' && 
                        this.dragState?.sourceIndex === colIndex && 
                        this.dragState?.startCardIndex !== undefined &&
                        cardIndex >= this.dragState.startCardIndex
                      return html`
                        <div 
                          class="card-wrapper ${isDragging ? 'dragging' : ''}"
                          style="top: ${cardIndex * 25}px"
                          @mousedown=${(e: MouseEvent) => this._handleTableauCardMouseDown(e, colIndex, cardIndex)}
                          @dblclick=${() => card.faceUp && cardIndex === pile.length - 1 ? this._handleDoubleClick(card, 'tableau', colIndex) : null}
                        >
                          ${this._renderCard(card, isDragging)}
                        </div>
                      `
                    })
                }
              </div>
            `)}
          </div>
        </div>

        <!-- Dragging cards overlay -->
        ${this.dragState ? html`
          <div 
            class="drag-overlay"
            style="left: ${this.mousePos.x - this.dragState.offsetX}px; top: ${this.mousePos.y - this.dragState.offsetY}px;"
          >
            ${this.dragState.cards.map((card, i) => html`
              <div class="drag-card" style="top: ${i * 25}px">
                ${this._renderCard(card, false)}
              </div>
            `)}
          </div>
        ` : ''}

        ${this.gameWon ? html`
          <div class="win-overlay">
            <div class="win-content">
              <h2>🎉 You Win! 🎉</h2>
              <p>Completed in ${this.moves} moves</p>
              <button @click=${this._newGame}>Play Again</button>
            </div>
          </div>
        ` : ''}
      </div>
    `
  }

  private _renderCard(card: Card, isSelected: boolean = false) {
    if (!card.faceUp) {
      return html`<div class="card back"></div>`
    }
    
    const color = this._getColor(card.suit)
    const symbol = this._getSuitSymbol(card.suit)
    const rank = RANK_NAMES[card.rank]
    
    return html`
      <div class="card face ${color} ${isSelected ? 'selected' : ''}">
        <div class="card-corner top-left">
          <span class="rank">${rank}</span>
          <span class="suit">${symbol}</span>
        </div>
        <div class="card-center">
          <span class="suit large">${symbol}</span>
        </div>
        <div class="card-corner bottom-right">
          <span class="rank">${rank}</span>
          <span class="suit">${symbol}</span>
        </div>
      </div>
    `
  }

  static styles = css`
    :host {
      display: block;
    }

    .solitaire {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 1rem;
      background: #0d5c2e;
      border-radius: 12px;
      min-height: 600px;
    }

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: white;
    }

    .stats {
      font-size: 1rem;
    }

    .new-game-btn {
      padding: 0.5rem 1rem;
      background: rgba(255, 255, 255, 0.2);
      border: 1px solid rgba(255, 255, 255, 0.3);
      border-radius: 6px;
      color: white;
      cursor: pointer;
      font-size: 0.9rem;
      transition: all 0.2s ease;
    }

    .new-game-btn:hover {
      background: rgba(255, 255, 255, 0.3);
    }

    .game-board {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .top-row {
      display: flex;
      justify-content: space-between;
    }

    .stock-waste {
      display: flex;
      gap: 0.75rem;
    }

    .foundations {
      display: flex;
      gap: 0.75rem;
    }

    .pile {
      cursor: pointer;
    }

    .card {
      width: 70px;
      height: 100px;
      border-radius: 6px;
      position: relative;
      user-select: none;
    }

    .card.empty {
      background: rgba(255, 255, 255, 0.1);
      border: 2px dashed rgba(255, 255, 255, 0.3);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      color: rgba(255, 255, 255, 0.4);
    }

    .card.empty.refresh {
      font-size: 2rem;
      cursor: pointer;
    }

    .card.empty.refresh:hover {
      background: rgba(255, 255, 255, 0.15);
    }

    .card.back {
      background: linear-gradient(135deg, #1a4c7c 0%, #2d6aa3 100%);
      border: 2px solid #0d3a5c;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }

    .card.back::after {
      content: '';
      position: absolute;
      inset: 6px;
      border: 2px solid rgba(255, 255, 255, 0.2);
      border-radius: 4px;
    }

    .card.face {
      background: white;
      border: 1px solid #ccc;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
      display: flex;
      flex-direction: column;
    }

    .card.face.selected {
      box-shadow: 0 0 0 3px #ffeb3b, 0 4px 8px rgba(0, 0, 0, 0.3);
      transform: translateY(-2px);
    }

    .card.face.red {
      color: #d32f2f;
    }

    .card.face.black {
      color: #212121;
    }

    .card-corner {
      position: absolute;
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 0.75rem;
      line-height: 1;
    }

    .card-corner.top-left {
      top: 4px;
      left: 4px;
    }

    .card-corner.bottom-right {
      bottom: 4px;
      right: 4px;
      transform: rotate(180deg);
    }

    .card-corner .rank {
      font-weight: bold;
      font-size: 0.9rem;
    }

    .card-corner .suit {
      font-size: 0.8rem;
    }

    .card-center {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .card-center .suit.large {
      font-size: 2rem;
    }

    .tableau {
      display: flex;
      gap: 0.75rem;
      justify-content: center;
    }

    .tableau-pile {
      position: relative;
      width: 70px;
      min-height: 100px;
    }

    .card-wrapper {
      position: absolute;
      left: 0;
      cursor: pointer;
    }

    .card-wrapper:hover .card.face {
      box-shadow: 0 0 0 2px rgba(255, 235, 59, 0.5);
    }

    /* Dragging */
    .card-wrapper.dragging {
      opacity: 0.4;
    }

    .drag-overlay {
      position: fixed;
      pointer-events: none;
      z-index: 1000;
    }

    .drag-card {
      position: absolute;
      left: 0;
      filter: drop-shadow(0 8px 16px rgba(0, 0, 0, 0.4));
    }

    /* Win Overlay */
    .win-overlay {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.8);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
    }

    .win-content {
      background: linear-gradient(135deg, #1a4c7c 0%, #2d6aa3 100%);
      padding: 3rem;
      border-radius: 16px;
      text-align: center;
      color: white;
      animation: bounce 0.5s ease;
    }

    @keyframes bounce {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.05); }
    }

    .win-content h2 {
      margin: 0 0 1rem 0;
      font-size: 2rem;
    }

    .win-content p {
      margin: 0 0 1.5rem 0;
      font-size: 1.1rem;
      opacity: 0.9;
    }

    .win-content button {
      padding: 0.75rem 2rem;
      font-size: 1rem;
      font-weight: 600;
      background: #ffeb3b;
      color: #1a4c7c;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .win-content button:hover {
      background: #fff;
      transform: scale(1.05);
    }

    /* Responsive */
    @media (max-width: 600px) {
      .card {
        width: 45px;
        height: 65px;
      }

      .card-corner .rank {
        font-size: 0.7rem;
      }

      .card-corner .suit {
        font-size: 0.6rem;
      }

      .card-center .suit.large {
        font-size: 1.25rem;
      }

      .tableau-pile {
        width: 45px;
        min-height: 65px;
      }

      .card-wrapper {
        top: calc(var(--index, 0) * 18px) !important;
      }

      .solitaire {
        padding: 0.5rem;
      }

      .stock-waste, .foundations {
        gap: 0.35rem;
      }

      .tableau {
        gap: 0.35rem;
      }
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'solitaire-game': SolitaireGame
  }
}
