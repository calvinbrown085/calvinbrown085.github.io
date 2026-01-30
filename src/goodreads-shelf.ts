import { LitElement, css, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'

interface Book {
  title: string
  author: string
  cover: string
  link: string
}

@customElement('goodreads-shelf')
export class GoodreadsShelf extends LitElement {
  @property({ type: String }) userId = '172768160'
  @property({ type: String }) shelf = 'currently-reading' // or 'read'
  @property({ type: Number }) limit = 10

  @state() private books: Book[] = []
  @state() private loading = true
  @state() private error = ''

  connectedCallback() {
    super.connectedCallback()
    this._fetchBooks()
  }

  private async _fetchBooks() {
    this.loading = true
    this.error = ''

    try {
      const rssUrl = `https://www.goodreads.com/review/list_rss/${this.userId}?shelf=${this.shelf}`
      const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`

      const response = await fetch(apiUrl)
      const data = await response.json()

      if (data.status !== 'ok') {
        throw new Error('Failed to fetch Goodreads data')
      }

      this.books = data.items.slice(0, this.limit).map((item: Record<string, string>) => {
        // Extract author from description
        const authorMatch = item.description?.match(/author:\s*([^<]+)/i)
        const author = authorMatch ? authorMatch[1].trim() : 'Unknown Author'

        // Extract cover image from description and get higher resolution
        const imgMatch = item.description?.match(/<img[^>]+src="([^"]+)"/)
        let cover = imgMatch ? imgMatch[1] : ''

        // Replace small thumbnail size with larger size
        // Goodreads URLs contain _SX50_ or _SY75_ etc - replace with larger size
        if (cover) {
          cover = cover.replace(/_S[XY]\d+_/g, '_SX300_')
        }

        return {
          title: item.title || 'Unknown Title',
          author,
          cover,
          link: item.link || '#'
        }
      })
    } catch (err) {
      console.error('Error fetching Goodreads:', err)
      this.error = 'Could not load books'
    } finally {
      this.loading = false
    }
  }

  render() {
    if (this.loading) {
      return html`<div class="loading">Loading books...</div>`
    }

    if (this.error) {
      return html`<div class="error">${this.error}</div>`
    }

    if (this.books.length === 0) {
      return html`<div class="empty">No books found</div>`
    }

    return html`
      <div class="books-grid">
        ${this.books.map(book => html`
          <a href=${book.link} target="_blank" rel="noopener noreferrer" class="book">
            ${book.cover ? html`
              <img src=${book.cover} alt=${book.title} class="book-cover" loading="lazy" />
            ` : html`
              <div class="book-cover placeholder">
                <span>📖</span>
              </div>
            `}
            <div class="book-info">
              <span class="book-title">${book.title}</span>
              <span class="book-author">${book.author}</span>
            </div>
          </a>
        `)}
      </div>
      <a href="https://www.goodreads.com/user/show/${this.userId}" target="_blank" rel="noopener noreferrer" class="goodreads-link">
        View on Goodreads →
      </a>
    `
  }

  static styles = css`
    :host {
      display: block;
    }

    .loading, .error, .empty {
      padding: 1rem;
      text-align: center;
      color: #888;
    }

    .error {
      color: #e74c3c;
    }

    .books-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
      gap: 1rem;
    }

    .book {
      display: flex;
      flex-direction: column;
      text-decoration: none;
      color: inherit;
      transition: transform 0.2s ease;
    }

    .book:hover {
      transform: translateY(-4px);
    }

    .book-cover {
      width: 100%;
      aspect-ratio: 2/3;
      object-fit: cover;
      border-radius: 6px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    }

    .book-cover.placeholder {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
    }

    .book-info {
      margin-top: 0.5rem;
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
    }

    .book-title {
      font-size: 0.85rem;
      font-weight: 600;
      color: #fff;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .book-author {
      font-size: 0.75rem;
      color: #888;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .goodreads-link {
      display: inline-block;
      margin-top: 1rem;
      color: #667eea;
      text-decoration: none;
      font-size: 0.9rem;
    }

    .goodreads-link:hover {
      text-decoration: underline;
    }

    @media (prefers-color-scheme: light) {
      .book-title {
        color: #333;
      }

      .book-author {
        color: #666;
      }

      .book-cover {
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      }
    }

    @media (max-width: 500px) {
      .books-grid {
        grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
        gap: 0.75rem;
      }

      .book-title {
        font-size: 0.75rem;
      }

      .book-author {
        font-size: 0.7rem;
      }
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'goodreads-shelf': GoodreadsShelf
  }
}
