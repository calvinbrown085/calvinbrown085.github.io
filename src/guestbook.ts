import { LitElement, css, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { db } from './firebase'
import {
  collection,
  addDoc,
  query,
  orderBy,
  limit,
  onSnapshot,
  serverTimestamp,
  Timestamp
} from 'firebase/firestore'

interface Comment {
  id: string
  name: string
  message: string
  timestamp: Timestamp | null
}

@customElement('blog-comments')
export class BlogComments extends LitElement {
  @property({ type: String }) postId = ''

  @state() private comments: Comment[] = []
  @state() private name = ''
  @state() private message = ''
  @state() private isSubmitting = false
  @state() private error = ''
  @state() private success = ''
  @state() private honeypot = '' // Spam protection

  private unsubscribe: (() => void) | null = null

  connectedCallback() {
    super.connectedCallback()
    console.log('BlogComments connected, postId:', this.postId)
    if (this.postId) {
      this._loadComments()
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    if (this.unsubscribe) {
      this.unsubscribe()
    }
  }

  updated(changedProperties: Map<string, unknown>) {
    if (changedProperties.has('postId') && this.postId) {
      if (this.unsubscribe) {
        this.unsubscribe()
      }
      this._loadComments()
    }
  }

  private _loadComments() {
    const q = query(
      collection(db, 'posts', this.postId, 'comments'),
      orderBy('timestamp', 'desc'),
      limit(50)
    )

    this.unsubscribe = onSnapshot(q, (snapshot) => {
      this.comments = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      } as Comment))
    }, (error) => {
      console.error('Error loading comments:', error)
      this.error = 'Failed to load comments. Please try again later.'
    })
  }

  private async _handleSubmit(e: Event) {
    e.preventDefault()

    // Honeypot check - if filled, it's likely a bot
    if (this.honeypot) {
      this.success = 'Thanks for your comment!'
      return
    }

    if (!this.postId) {
      this.error = 'Invalid post'
      return
    }

    const name = this.name.trim()
    const message = this.message.trim()

    if (!name || !message) {
      this.error = 'Please fill in both fields'
      return
    }

    if (name.length > 50) {
      this.error = 'Name is too long (max 50 characters)'
      return
    }

    if (message.length > 500) {
      this.error = 'Message is too long (max 500 characters)'
      return
    }

    this.isSubmitting = true
    this.error = ''
    this.success = ''

    console.log('Attempting to post comment:', { postId: this.postId, name, message })

    try {
      console.log('Writing to path:', `posts/${this.postId}/comments`)
      const docRef = await addDoc(collection(db, 'posts', this.postId, 'comments'), {
        name,
        message,
        timestamp: serverTimestamp()
      })
      console.log('Comment posted with ID:', docRef.id)

      this.name = ''
      this.message = ''
      this.success = 'Comment posted!'

      setTimeout(() => {
        this.success = ''
      }, 3000)
    } catch (error: unknown) {
      console.error('Error adding comment:', error)
      if (error instanceof Error) {
        this.error = `Failed to submit: ${error.message}`
      } else {
        this.error = 'Failed to submit. Please try again.'
      }
    } finally {
      this.isSubmitting = false
    }
  }

  private _formatDate(timestamp: Timestamp | null): string {
    if (!timestamp) return 'Just now'

    const date = timestamp.toDate()
    const now = new Date()
    const diffMs = now.getTime() - date.getTime()
    const diffMins = Math.floor(diffMs / 60000)
    const diffHours = Math.floor(diffMs / 3600000)
    const diffDays = Math.floor(diffMs / 86400000)

    if (diffMins < 1) return 'Just now'
    if (diffMins < 60) return `${diffMins}m ago`
    if (diffHours < 24) return `${diffHours}h ago`
    if (diffDays < 7) return `${diffDays}d ago`

    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: date.getFullYear() !== now.getFullYear() ? 'numeric' : undefined
    })
  }

  render() {
    return html`
      <div class="comments-section">
        <div class="header">
          <h3>
            <span class="icon">💬</span>
            Comments (${this.comments.length})
          </h3>
        </div>

        <form class="form" @submit=${this._handleSubmit}>
          <!-- Honeypot field - hidden from real users -->
          <input
            type="text"
            name="website"
            class="honeypot"
            tabindex="-1"
            autocomplete="off"
            .value=${this.honeypot}
            @input=${(e: Event) => this.honeypot = (e.target as HTMLInputElement).value}
          />

          <div class="form-row">
            <input
              type="text"
              placeholder="Your name"
              .value=${this.name}
              @input=${(e: Event) => this.name = (e.target as HTMLInputElement).value}
              ?disabled=${this.isSubmitting}
              maxlength="50"
              class="input name-input"
            />
          </div>

          <div class="form-row">
            <textarea
              placeholder="Write a comment..."
              .value=${this.message}
              @input=${(e: Event) => this.message = (e.target as HTMLTextAreaElement).value}
              ?disabled=${this.isSubmitting}
              maxlength="500"
              rows="3"
              class="input message-input"
            ></textarea>
          </div>

          <div class="form-footer">
            <span class="char-count">${this.message.length}/500</span>
            <button type="submit" ?disabled=${this.isSubmitting} class="submit-btn">
              ${this.isSubmitting ? 'Posting...' : 'Post Comment'}
            </button>
          </div>

          ${this.error ? html`<div class="error">${this.error}</div>` : ''}
          ${this.success ? html`<div class="success">${this.success}</div>` : ''}
        </form>

        <div class="comments-list">
          ${this.comments.length === 0 ? html`
            <div class="empty">
              <p>No comments yet. Be the first to comment!</p>
            </div>
          ` : this.comments.map(comment => html`
            <div class="comment">
              <div class="comment-header">
                <span class="comment-name">${comment.name}</span>
                <span class="comment-date">${this._formatDate(comment.timestamp)}</span>
              </div>
              <p class="comment-message">${comment.message}</p>
            </div>
          `)}
        </div>
      </div>
    `
  }

  static styles = css`
    :host {
      display: block;
    }

    .comments-section {
      margin-top: 2rem;
      padding-top: 2rem;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
    }

    .header {
      margin-bottom: 1.5rem;
    }

    .header h3 {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin: 0;
      font-size: 1.25rem;
    }

    .icon {
      font-size: 1.1rem;
    }

    .form {
      margin-bottom: 2rem;
    }

    .honeypot {
      position: absolute;
      left: -9999px;
      opacity: 0;
      pointer-events: none;
    }

    .form-row {
      margin-bottom: 1rem;
    }

    .input {
      width: 100%;
      padding: 0.75rem 1rem;
      font-size: 1rem;
      font-family: inherit;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 8px;
      color: inherit;
      transition: all 0.2s ease;
      box-sizing: border-box;
    }

    .input:focus {
      outline: none;
      border-color: #667eea;
      box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.2);
    }

    .input::placeholder {
      color: #666;
    }

    .message-input {
      resize: vertical;
      min-height: 80px;
    }

    .form-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .char-count {
      font-size: 0.85rem;
      color: #666;
    }

    .submit-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
      font-weight: 600;
      color: white;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border: none;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .submit-btn:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
    }

    .submit-btn:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    .error {
      margin-top: 1rem;
      padding: 0.75rem 1rem;
      background: rgba(231, 76, 60, 0.1);
      border: 1px solid rgba(231, 76, 60, 0.3);
      border-radius: 8px;
      color: #e74c3c;
      font-size: 0.9rem;
    }

    .success {
      margin-top: 1rem;
      padding: 0.75rem 1rem;
      background: rgba(46, 204, 113, 0.1);
      border: 1px solid rgba(46, 204, 113, 0.3);
      border-radius: 8px;
      color: #2ecc71;
      font-size: 0.9rem;
    }

    .comments-list {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .empty {
      text-align: center;
      padding: 2rem;
      color: #666;
    }

    .comment {
      padding: 1rem;
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 10px;
      transition: all 0.2s ease;
    }

    .comment:hover {
      background: rgba(255, 255, 255, 0.05);
    }

    .comment-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.5rem;
    }

    .comment-name {
      font-weight: 600;
      color: #667eea;
    }

    .comment-date {
      font-size: 0.85rem;
      color: #666;
    }

    .comment-message {
      margin: 0;
      color: #aaa;
      line-height: 1.6;
      white-space: pre-wrap;
      word-break: break-word;
    }

    @media (prefers-color-scheme: light) {
      .comments-section {
        border-color: rgba(0, 0, 0, 0.1);
      }

      .input {
        background: white;
        border-color: rgba(0, 0, 0, 0.15);
        color: #333;
      }

      .input::placeholder {
        color: #999;
      }

      .char-count {
        color: #888;
      }

      .comment {
        background: rgba(0, 0, 0, 0.02);
        border-color: rgba(0, 0, 0, 0.08);
      }

      .comment:hover {
        background: rgba(0, 0, 0, 0.04);
      }

      .comment-name {
        color: #5a67d8;
      }

      .comment-date {
        color: #888;
      }

      .comment-message {
        color: #555;
      }

      .empty {
        color: #888;
      }
    }

    @media (max-width: 600px) {
      .guestbook {
        padding: 1.5rem;
      }

      .form-footer {
        flex-direction: column;
        gap: 1rem;
        align-items: stretch;
      }

      .char-count {
        text-align: right;
      }

      .submit-btn {
        width: 100%;
      }
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'blog-comments': BlogComments
  }
}
