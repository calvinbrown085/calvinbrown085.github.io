import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import headshotImage from './calvin-headshot.jpg'
import { blogPosts, type BlogPost } from './blog-posts'
import './snake-game'
import './solitaire-game'
import './tic-tac-toe-game'
import './checkers-game'
import './connect-four-game'
import './flappy-bird-game'
import './goodreads-shelf'

interface GitHubRepo {
  name: string
  url: string
  description: string
  language: string
  languageColor: string
}

type ViewType = 'home' | 'games' | 'now' | 'blog' | 'blog-post' | 'game-snake' | 'game-solitaire' | 'game-tictactoe' | 'game-checkers' | 'game-connectfour' | 'game-flappybird'

interface GameInfo {
  id: string
  name: string
  description: string
  icon: string
  color: string
}

@customElement('my-element')
export class MyElement extends LitElement {
  private selectedPost: BlogPost | null = null
  private blogPosts = blogPosts
  private currentView: ViewType = 'home'
  private _activeTag: string | null = null
  private _revealObserver: IntersectionObserver | null = null

  private games: GameInfo[] = [
    {
      id: 'snake',
      name: 'Snake',
      description: 'Classic snake game. Eat food, grow longer, avoid walls!',
      icon: '🐍',
      color: '#00ADD8'
    },
    {
      id: 'solitaire',
      name: 'Solitaire',
      description: 'Classic Klondike solitaire card game.',
      icon: '🃏',
      color: '#e74c3c'
    },
    {
      id: 'tictactoe',
      name: 'Tic Tac Toe',
      description: 'Challenge an AI opponent!',
      icon: '⭕',
      color: '#9b59b6'
    },
    {
      id: 'checkers',
      name: 'Checkers',
      description: 'Classic checkers against an AI opponent!',
      icon: '🔴',
      color: '#e67e22'
    },
    {
      id: 'connectfour',
      name: 'Connect Four',
      description: 'Drop pieces and connect 4 to win!',
      icon: '🔵',
      color: '#3498db'
    },
    {
      id: 'flappybird',
      name: 'Flappy Bird',
      description: 'Tap to flap and dodge the pipes!',
      icon: '🐤',
      color: '#f1c40f'
    }
  ]

  connectedCallback() {
    super.connectedCallback()
    // Check for hash on load
    this._checkUrlHash()
    // Listen for hash changes (browser back/forward)
    window.addEventListener('hashchange', this._handleHashChange)
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    window.removeEventListener('hashchange', this._handleHashChange)
  }

  private _handleHashChange = () => {
    this._checkUrlHash()
  }

  private _checkUrlHash() {
    const hash = window.location.hash.slice(1) // Remove the #
    
    // Check for individual game pages
    if (hash === 'games/snake') {
      this.currentView = 'game-snake'
      this.selectedPost = null
      this.requestUpdate()
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    
    if (hash === 'games/solitaire') {
      this.currentView = 'game-solitaire'
      this.selectedPost = null
      this.requestUpdate()
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    if (hash === 'games/tictactoe') {
      this.currentView = 'game-tictactoe'
      this.selectedPost = null
      this.requestUpdate()
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    if (hash === 'games/checkers') {
      this.currentView = 'game-checkers'
      this.selectedPost = null
      this.requestUpdate()
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    if (hash === 'games/connectfour') {
      this.currentView = 'game-connectfour'
      this.selectedPost = null
      this.requestUpdate()
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    if (hash === 'games/flappybird') {
      this.currentView = 'game-flappybird'
      this.selectedPost = null
      this.requestUpdate()
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    // Check for now page
    if (hash === 'now') {
      this.currentView = 'now'
      this.selectedPost = null
      this.requestUpdate()
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    // Check for games hub page
    if (hash === 'games') {
      this.currentView = 'games'
      this.selectedPost = null
      this.requestUpdate()
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    
    // Check for blog list page
    if (hash === 'blog') {
      this.currentView = 'blog'
      this.selectedPost = null
      this.requestUpdate()
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    // Check for blog post (new URL format: #blog/post-id)
    if (hash.startsWith('blog/')) {
      const postId = hash.slice(5)
      const post = this.blogPosts.find(p => p.id === postId)
      if (post) {
        this.currentView = 'blog-post'
        this.selectedPost = post
        this.requestUpdate()
        window.scrollTo({ top: 0, behavior: 'smooth' })
        return
      }
    }

    // Backward compat: old #post-id links redirect to #blog/post-id
    if (hash) {
      const post = this.blogPosts.find(p => p.id === hash)
      if (post) {
        window.history.replaceState(null, '', `#blog/${post.id}`)
        this.currentView = 'blog-post'
        this.selectedPost = post
        this.requestUpdate()
        window.scrollTo({ top: 0, behavior: 'smooth' })
        return
      }
    }

    // Default to home
    this.currentView = 'home'
    this.selectedPost = null
    this.requestUpdate()
  }

  private _navigateTo(view: ViewType | string) {
    if (view === 'home') {
      window.history.pushState(null, '', window.location.pathname)
      this.currentView = 'home'
    } else if (view === 'games') {
      window.history.pushState(null, '', '#games')
      this.currentView = 'games'
    } else if (view === 'now') {
      window.history.pushState(null, '', '#now')
      this.currentView = 'now'
    } else if (view === 'blog') {
      window.history.pushState(null, '', '#blog')
      this.currentView = 'blog'
    } else if (view.startsWith('game-')) {
      const gameId = view.replace('game-', '')
      window.history.pushState(null, '', `#games/${gameId}`)
      this.currentView = view as ViewType
    }
    this.selectedPost = null
    this.requestUpdate()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  private repos: GitHubRepo[] = [
    {
      name: 'warp-prometheus',
      url: 'https://github.com/calvinbrown085/warp-prometheus',
      description: 'Prometheus metrics extension for Rust\'s Warp library',
      language: 'Rust',
      languageColor: '#dea584'
    },
    {
      name : 'us-state-info-rs',
      url: 'https://github.com/calvinbrown085/us-state-info-rs',
      description: 'Rust library for getting information about the states of the United States',
      language: 'Rust',
      languageColor: '#dea584'
    }
  ]

  render() {
    return html`
      ${this._renderNav()}
      ${this._renderCurrentView()}
    `
  }

  private _renderCurrentView() {
    switch (this.currentView) {
      case 'blog':
        return this._renderBlogPage()
      case 'blog-post':
        return this._renderBlogPostPage()
      case 'games':
        return this._renderGamesHub()
      case 'now':
        return this._renderNowPage()
      case 'game-snake':
        return this._renderGamePage('snake')
      case 'game-solitaire':
        return this._renderGamePage('solitaire')
      case 'game-tictactoe':
        return this._renderGamePage('tictactoe')
      case 'game-checkers':
        return this._renderGamePage('checkers')
      case 'game-connectfour':
        return this._renderGamePage('connectfour')
      case 'game-flappybird':
        return this._renderGamePage('flappybird')
      default:
        return this._renderHomePage()
    }
  }

  private _renderNav() {
    const isHome = this.currentView === 'home'
    const isGames = this.currentView === 'games' || this.currentView.startsWith('game-')
    const isNow = this.currentView === 'now'
    const isBlog = this.currentView === 'blog' || this.currentView === 'blog-post'
    return html`
      <nav class="site-nav">
        <button class="nav-brand" @click=${() => this._navigateTo('home')}>Calvin Brown</button>
        <div class="nav-links">
          <button class="nav-link ${isHome ? 'active' : ''}" @click=${() => this._navigateTo('home')}>Home</button>
          <button class="nav-link ${isBlog ? 'active' : ''}" @click=${() => this._navigateTo('blog')}>Blog</button>
          <button class="nav-link ${isGames ? 'active' : ''}" @click=${() => this._navigateTo('games')}>Games</button>
          <button class="nav-link ${isNow ? 'active' : ''}" @click=${() => this._navigateTo('now')}>Reading</button>
        </div>
      </nav>
    `
  }

  private _renderBlogPage() {
    const allTags = [...new Set(this.blogPosts.flatMap(p => p.tags))]
    const filtered = this._activeTag
      ? this.blogPosts.filter(p => p.tags.includes(this._activeTag!))
      : this.blogPosts
    return html`
      <div class="container blog-page">
        <header class="page-header">
          <button class="back-link" @click=${() => this._navigateTo('home')}>
            ← Back to Home
          </button>
          <h1 class="blog-page-title">
            <svg viewBox="0 0 24 24" fill="currentColor" class="header-icon blog-header-icon">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
            </svg>
            Blog
          </h1>
          <p class="page-subtitle">Thoughts on software engineering</p>
        </header>

        <div class="blog-filter-bar">
          <button
            class="tag-filter-btn ${!this._activeTag ? 'active' : ''}"
            @click=${() => { this._activeTag = null; this.requestUpdate() }}>
            All
          </button>
          ${allTags.map(tag => html`
            <button
              class="tag-filter-btn ${this._activeTag === tag ? 'active' : ''}"
              @click=${(e: Event) => { e.stopPropagation(); this._activeTag = tag; this.requestUpdate() }}>
              ${tag}
            </button>
          `)}
        </div>

        <div class="blog-grid">
          ${filtered.map(post => html`
            <article class="blog-card" @click=${() => this._openPost(post)}>
              <div class="blog-header">
                <span class="blog-date">${this._formatDate(post.date)}</span>
                <div class="blog-tags">
                  ${post.tags.map(tag => html`<span class="tag">${tag}</span>`)}
                </div>
              </div>
              <h3 class="blog-title">${post.title}</h3>
              <p class="blog-summary">${post.summary}</p>
              <div class="blog-card-footer">
                <span class="read-more">Read more →</span>
                <span class="reading-time">${this._readingTime(post.content)} min read</span>
              </div>
            </article>
          `)}
          ${filtered.length === 0 ? html`
            <article class="blog-card add-more">
              <p>No posts with this tag yet.</p>
            </article>
          ` : ''}
        </div>
      </div>
    `
  }

  private _renderBlogPostPage() {
    const post = this.selectedPost!
    const postUrl = `${window.location.origin}${window.location.pathname}#blog/${post.id}`
    return html`
      <div class="container blog-post-page">
        <header class="blog-post-page-header">
          <button class="back-link" @click=${() => this._navigateTo('blog')}>
            ← Back to Blog
          </button>
          <button class="share-btn" @click=${() => this._copyPostLink(postUrl)} title="Copy link to share">
            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
              <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
            </svg>
            Copy Link
          </button>
        </header>

        <article class="post-content standalone-post">
          <div class="post-meta">
            <span class="blog-date">${this._formatDate(post.date)}</span>
            <div class="blog-tags">
              ${post.tags.map(tag => html`<span class="tag">${tag}</span>`)}
            </div>
          </div>
          <div class="reading-time-banner">${this._readingTime(post.content)} min read</div>
          <div .innerHTML=${post.content}></div>
        </article>

        <div class="post-footer-nav">
          <button class="back-button" @click=${() => this._navigateTo('blog')}>
            ← Back to all posts
          </button>
          <button class="share-btn" @click=${() => this._copyPostLink(postUrl)} title="Copy link to share">
            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
              <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
            </svg>
            Copy Link
          </button>
        </div>
      </div>
    `
  }

  private _copyPostLink(url: string) {
    navigator.clipboard.writeText(url).then(() => {
      // Briefly show feedback by toggling a class on the button
      const btn = this.shadowRoot?.querySelector('.share-btn') as HTMLElement | null
      if (btn) {
        const original = btn.textContent
        btn.textContent = '✓ Copied!'
        setTimeout(() => { btn.textContent = original }, 2000)
      }
    })
  }

  private _renderGamesHub() {
    return html`
      <div class="container games-page">
        <header class="page-header">
          <button class="back-link" @click=${() => this._navigateTo('home')}>
            ← Back to Home
          </button>
          <h1>
            <svg viewBox="0 0 24 24" fill="currentColor" class="header-icon">
              <path d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-10 7H8v3H6v-3H3v-2h3V8h2v3h3v2zm4.5 2c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4-3c-.83 0-1.5-.67-1.5-1.5S18.67 9 19.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
            </svg>
            Break from Coding
          </h1>
          <p class="page-subtitle">Take a break and play some games!</p>
        </header>

        <section class="games-grid">
          ${this.games.map(game => html`
            <div class="game-card" @click=${() => this._navigateTo(`game-${game.id}`)}>
              <div class="game-card-icon" style="background: ${game.color}">
                <span>${game.icon}</span>
              </div>
              <div class="game-card-content">
                <h3>${game.name}</h3>
                <p>${game.description}</p>
              </div>
              <div class="game-card-arrow">→</div>
            </div>
          `)}
        </section>
      </div>
    `
  }

  private _renderNowPage() {
    return html`
      <div class="container now-page">
        <header class="page-header">
          <button class="back-link" @click=${() => this._navigateTo('home')}>
            ← Back to Home
          </button>
          <h1>
            <span class="now-icon">📚</span>
            Reading
          </h1>
          <p class="page-subtitle">What I'm currently reading</p>
        </header>

        <div class="now-content">
          <section class="now-section">
            <h2>📚 Currently Reading</h2>
            <goodreads-shelf shelf="currently-reading" limit="6"></goodreads-shelf>
          </section>

          <section class="now-section">
            <h2>✅ Recently Read</h2>
            <goodreads-shelf shelf="read" limit="6"></goodreads-shelf>
          </section>
        </div>

      </div>
    `
  }

  private _renderGamePage(gameId: string) {
    const game = this.games.find(g => g.id === gameId)
    if (!game) return html`<p>Game not found</p>`

    return html`
      <div class="container game-page">
        <header class="page-header">
          <button class="back-link" @click=${() => this._navigateTo('games')}>
            ← Back to Games
          </button>
          <h1>
            <span class="game-emoji">${game.icon}</span>
            ${game.name}
          </h1>
        </header>

        <section class="game-container">
          ${gameId === 'snake' ? html`<snake-game></snake-game>` : ''}
          ${gameId === 'solitaire' ? html`<solitaire-game></solitaire-game>` : ''}
          ${gameId === 'tictactoe' ? html`<tic-tac-toe-game></tic-tac-toe-game>` : ''}
          ${gameId === 'checkers' ? html`<checkers-game></checkers-game>` : ''}
          ${gameId === 'connectfour' ? html`<connect-four-game></connect-four-game>` : ''}
          ${gameId === 'flappybird' ? html`<flappy-bird-game></flappy-bird-game>` : ''}
        </section>
      </div>
    `
  }

  private _renderHomePage() {
    return html`
      <div class="container">
        <!-- Hero Section -->
        <section class="hero">
          <div class="hero-bg" aria-hidden="true">
            <span class="bubble b1"></span>
            <span class="bubble b2"></span>
            <span class="bubble b3"></span>
            <span class="bubble b4"></span>
            <span class="bubble b5"></span>
            <span class="bubble b6"></span>
            <span class="bubble b7"></span>
            <span class="bubble b8"></span>
            <span class="bubble b9"></span>
            <span class="bubble b10"></span>
          </div>
          <div class="avatar-wrapper">
            <div class="avatar-ring"></div>
            <div class="profile-picture">
              <img src=${headshotImage} alt="Calvin Brown" class="avatar-image" />
            </div>
          </div>

          <h1>Calvin Brown</h1>
          <p class="tagline">Software Engineer</p>
          
          <div class="social-links">
            <a href="https://github.com/calvinbrown085" target="_blank" rel="noopener noreferrer" class="social-link">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/calvin-brown-6ab208aa" target="_blank" rel="noopener noreferrer" class="social-link linkedin">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </section>

        <!-- About Section -->
        <section class="about reveal-section">
          <h2>About Me</h2>
          <p>
            Welcome to my personal site! I'm a software engineer passionate about building 
            robust and scalable systems. I enjoy working with technologies like Rust, Go, 
            and TypeScript to create tools that make developers' lives easier.
          </p>
          <p>
            <!-- Add more about yourself here -->
            Feel free to explore my projects below and reach out if you'd like to collaborate!
          </p>
        </section>

        <!-- Skills Section -->
        <section class="skills reveal-section">
          <h2>Technologies</h2>
          <div class="skills-cloud">
            <span class="skill-badge rust">Rust</span>
            <span class="skill-badge go">Go</span>
            <span class="skill-badge ts">TypeScript</span>
            <span class="skill-badge">Scala</span>
            <span class="skill-badge">Kafka</span>
            <span class="skill-badge">PostgreSQL</span>
            <span class="skill-badge">Docker</span>
            <span class="skill-badge">Kubernetes</span>
            <span class="skill-badge">AWS</span>
            <span class="skill-badge">Lit</span>
            <span class="skill-badge">gRPC</span>
            <span class="skill-badge">GraphQL</span>
          </div>
        </section>

        <!-- Projects Section -->
        <section class="projects reveal-section">
          <h2>Featured Projects</h2>
          <div class="repo-grid">
            ${this.repos.map(repo => html`
              <a href=${repo.url} target="_blank" rel="noopener noreferrer" class="repo-card">
                <div class="repo-header">
                  <svg viewBox="0 0 16 16" fill="currentColor" class="repo-icon">
                    <path d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"/>
                  </svg>
                  <span class="repo-name">${repo.name}</span>
                </div>
                <p class="repo-description">${repo.description}</p>
                <div class="repo-footer">
                  <span class="language">
                    <span class="language-dot" style="background-color: ${repo.languageColor}"></span>
                    ${repo.language}
                  </span>
                </div>
              </a>
            `)}
            
          
          </div>
        </section>

        <!-- Blog Section -->
        <section class="blog reveal-section">
          <div class="blog-section-header">
            <h2>
              <svg viewBox="0 0 24 24" fill="currentColor" class="section-icon">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
              </svg>
              Recent Posts
            </h2>
            <button class="view-all-btn" @click=${() => this._navigateTo('blog')}>View all posts →</button>
          </div>
          ${this._renderRecentPosts()}
        </section>

        <!-- Quick Links -->
        <section class="quick-links-section">
          <div class="quick-links-grid">
            <div class="quick-link-card now-link" @click=${() => this._navigateTo('now')}>
              <div class="quick-link-icon">
                <span>📚</span>
              </div>
              <div class="quick-link-content">
                <h3>Reading</h3>
                <p>What I'm currently reading</p>
              </div>
              <div class="quick-link-arrow">→</div>
            </div>

            <div class="quick-link-card games-link" @click=${() => this._navigateTo('games')}>
              <div class="quick-link-icon">
                <span>🎮</span>
              </div>
              <div class="quick-link-content">
                <h3>Games</h3>
                <p>Take a break and play!</p>
              </div>
              <div class="quick-link-arrow">→</div>
            </div>
          </div>
        </section>

        <!-- Footer -->
        <footer>
          <p><a href="mailto:me@calvinbrown.dev">me@calvinbrown.dev</a></p>
          <p>&copy; ${new Date().getFullYear()} Calvin Brown. Built with Lit + Vite.</p>
        </footer>
      </div>
    `
  }

  private _renderRecentPosts() {
    const recent = this.blogPosts.slice(0, 3)
    return html`
      <div class="blog-grid">
        ${recent.map(post => html`
          <article class="blog-card" @click=${() => this._openPost(post)}>
            <div class="blog-header">
              <span class="blog-date">${this._formatDate(post.date)}</span>
              <div class="blog-tags">
                ${post.tags.map(tag => html`<span class="tag">${tag}</span>`)}
              </div>
            </div>
            <h3 class="blog-title">${post.title}</h3>
            <p class="blog-summary">${post.summary}</p>
            <div class="blog-card-footer">
              <span class="read-more">Read more →</span>
              <span class="reading-time">${this._readingTime(post.content)} min read</span>
            </div>
          </article>
        `)}
      </div>
    `
  }

  private _openPost(post: BlogPost) {
    this.selectedPost = post
    window.history.pushState(null, '', `#blog/${post.id}`)
    this.currentView = 'blog-post'
    this.requestUpdate()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  private _readingTime(content: string): number {
    const text = content.replace(/<[^>]*>/g, ' ')
    const words = text.trim().split(/\s+/).filter(w => w.length > 0).length
    return Math.max(1, Math.ceil(words / 200))
  }

  private _formatDate(dateStr: string): string {
    const date = new Date(dateStr)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  protected firstUpdated() {
    this._revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            this._revealObserver?.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    this._observeRevealSections()
  }

  protected updated() {
    this._observeRevealSections()
  }

  private _observeRevealSections() {
    this.shadowRoot?.querySelectorAll('.reveal-section:not(.revealed)').forEach(el => {
      this._revealObserver?.observe(el)
    })
  }

  static styles = css`
    :host {
      display: block;
      max-width: 900px;
      margin: 0 auto;
      padding: 2rem;
    }

    .container {
      display: flex;
      flex-direction: column;
      gap: 3rem;
    }

    /* Hero Section */
    .hero {
      text-align: center;
      padding: 2rem 0;
    }

    .profile-picture {
      margin-bottom: 1.5rem;
    }

    .placeholder-avatar {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
      box-shadow: 0 10px 40px rgba(102, 126, 234, 0.3);
    }

    .placeholder-avatar svg {
      width: 80px;
      height: 80px;
      color: white;
      opacity: 0.9;
    }

    .avatar-image {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      object-fit: cover;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
    }

    h1 {
      font-size: 2.5rem;
      margin: 0 0 0.5rem 0;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .tagline {
      font-size: 1.25rem;
      color: #888;
      margin: 0 0 1.5rem 0;
    }

    .social-links {
      display: flex;
      gap: 1rem;
      justify-content: center;
    }

    .social-link {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.75rem 1.5rem;
      border-radius: 8px;
      background: #1a1a1a;
      color: white;
      text-decoration: none;
      transition: all 0.2s ease;
    }

    .social-link:hover {
      background: #333;
      transform: translateY(-2px);
    }

    .social-link.linkedin:hover {
      background: #0077b5;
    }

    .social-link svg {
      width: 20px;
      height: 20px;
    }

    /* About Section */
    .about {
      background: rgba(255, 255, 255, 0.05);
      border-radius: 16px;
      padding: 2rem;
      border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .about h2 {
      margin-top: 0;
      font-size: 1.5rem;
    }

    .about p {
      color: #aaa;
      line-height: 1.8;
      margin-bottom: 1rem;
    }

    .about p:last-child {
      margin-bottom: 0;
    }

    /* Projects Section */
    .projects h2 {
      font-size: 1.5rem;
      margin-bottom: 1.5rem;
    }

    .repo-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 1.5rem;
    }

    .repo-card {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 12px;
      padding: 1.5rem;
      text-decoration: none;
      color: inherit;
      transition: all 0.2s ease;
      display: flex;
      flex-direction: column;
    }

    .repo-card:hover {
      border-color: #667eea;
      transform: translateY(-4px);
      box-shadow: 0 10px 30px rgba(102, 126, 234, 0.2);
    }

    .repo-card.add-more {
      border-style: dashed;
      justify-content: center;
      align-items: center;
      color: #666;
    }

    .repo-card.add-more:hover {
      transform: none;
      box-shadow: none;
    }

    .repo-header {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-bottom: 0.75rem;
    }

    .repo-icon {
      width: 16px;
      height: 16px;
      color: #888;
    }

    .repo-name {
      font-weight: 600;
      color: #667eea;
    }

    .repo-description {
      color: #aaa;
      font-size: 0.9rem;
      line-height: 1.5;
      flex-grow: 1;
      margin: 0 0 1rem 0;
    }

    .repo-footer {
      display: flex;
      gap: 1rem;
    }

    .language {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.85rem;
      color: #888;
    }

    .language-dot {
      width: 12px;
      height: 12px;
      border-radius: 50%;
    }

    /* Blog Section */
    .blog h2 {
      font-size: 1.5rem;
      margin: 0;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .section-icon {
      width: 24px;
      height: 24px;
      color: #00ADD8;
    }

    .blog-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 1.5rem;
    }

    .blog-card {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 12px;
      padding: 1.5rem;
      cursor: pointer;
      transition: all 0.2s ease;
      display: flex;
      flex-direction: column;
    }

    .blog-card:hover {
      border-color: #00ADD8;
      transform: translateY(-4px);
      box-shadow: 0 10px 30px rgba(0, 173, 216, 0.2);
    }

    .blog-card.add-more {
      border-style: dashed;
      justify-content: center;
      align-items: center;
      color: #666;
      cursor: default;
    }

    .blog-card.add-more:hover {
      transform: none;
      box-shadow: none;
      border-color: rgba(255, 255, 255, 0.1);
    }

    .blog-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 0.75rem;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .blog-date {
      font-size: 0.85rem;
      color: #888;
    }

    .blog-tags {
      display: flex;
      gap: 0.5rem;
      flex-wrap: wrap;
    }

    .tag {
      font-size: 0.75rem;
      padding: 0.25rem 0.5rem;
      background: rgba(0, 173, 216, 0.2);
      color: #00ADD8;
      border-radius: 4px;
    }

    .blog-title {
      font-size: 1.25rem;
      margin: 0 0 0.75rem 0;
      color: #fff;
    }

    .blog-summary {
      color: #aaa;
      font-size: 0.9rem;
      line-height: 1.6;
      flex-grow: 1;
      margin: 0 0 1rem 0;
    }

    .read-more {
      color: #00ADD8;
      font-size: 0.9rem;
      font-weight: 500;
    }

    /* Full Post View */
    .full-post {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 12px;
      padding: 2rem;
    }

    .back-button {
      background: none;
      border: none;
      color: #00ADD8;
      cursor: pointer;
      font-size: 0.9rem;
      padding: 0;
      margin-bottom: 1.5rem;
      display: flex;
      align-items: center;
      gap: 0.25rem;
    }

    .back-button:hover {
      text-decoration: underline;
    }

    .post-meta {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.5rem;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .post-content {
      line-height: 1.8;
    }

    .post-content h3 {
      font-size: 1.75rem;
      margin: 0 0 1rem 0;
    }

    .post-content h4 {
      font-size: 1.25rem;
      margin: 1.5rem 0 0.75rem 0;
      color: #00ADD8;
    }

    .post-content p {
      color: #bbb;
      margin-bottom: 1rem;
    }

    .post-content pre {
      background: #1a1a1a;
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 8px;
      padding: 1rem;
      overflow-x: auto;
      margin: 1rem 0;
    }

    .post-content code {
      font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Fira Mono', monospace;
      font-size: 0.9rem;
      color: #e0e0e0;
    }

    /* Quick Links Section */
    .quick-links-section {
      margin: 1rem 0;
    }

    .quick-links-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1rem;
    }

    .quick-link-card {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1.25rem;
      border-radius: 12px;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .quick-link-card.now-link {
      background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
      border: 1px solid rgba(102, 126, 234, 0.3);
    }

    .quick-link-card.now-link:hover {
      border-color: #667eea;
      transform: translateY(-4px);
      box-shadow: 0 10px 30px rgba(102, 126, 234, 0.2);
    }

    .quick-link-card.games-link {
      background: linear-gradient(135deg, rgba(255, 107, 107, 0.1) 0%, rgba(255, 142, 83, 0.1) 100%);
      border: 1px solid rgba(255, 107, 107, 0.3);
    }

    .quick-link-card.games-link:hover {
      border-color: #ff6b6b;
      transform: translateY(-4px);
      box-shadow: 0 10px 30px rgba(255, 107, 107, 0.2);
    }

    .quick-link-icon {
      width: 50px;
      height: 50px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      flex-shrink: 0;
    }

    .now-link .quick-link-icon {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    }

    .games-link .quick-link-icon {
      background: linear-gradient(135deg, #ff6b6b 0%, #ff8e53 100%);
    }

    .quick-link-content {
      flex-grow: 1;
    }

    .quick-link-content h3 {
      margin: 0 0 0.25rem 0;
      font-size: 1.1rem;
    }

    .now-link .quick-link-content h3 {
      color: #667eea;
    }

    .games-link .quick-link-content h3 {
      color: #ff6b6b;
    }

    .quick-link-content p {
      margin: 0;
      color: #888;
      font-size: 0.9rem;
    }

    .quick-link-arrow {
      font-size: 1.25rem;
      color: #888;
      transition: transform 0.2s ease;
    }

    .quick-link-card:hover .quick-link-arrow {
      transform: translateX(4px);
      color: #fff;
    }

    /* Games Page */
    .games-page {
      min-height: 100vh;
    }

    .page-header {
      text-align: center;
      margin-bottom: 2rem;
    }

    .back-link {
      background: none;
      border: none;
      color: #667eea;
      cursor: pointer;
      font-size: 1rem;
      padding: 0.5rem 0;
      margin-bottom: 1rem;
      display: inline-flex;
      align-items: center;
      gap: 0.25rem;
    }

    .back-link:hover {
      text-decoration: underline;
    }

    .page-header h1 {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      font-size: 2rem;
      margin: 0 0 0.5rem 0;
      background: linear-gradient(135deg, #ff6b6b 0%, #ff8e53 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .header-icon {
      width: 32px;
      height: 32px;
      color: #ff6b6b;
      /* Reset the gradient text for the icon */
      -webkit-text-fill-color: initial;
    }

    .page-subtitle {
      color: #888;
      margin: 0;
    }

    /* Games Grid */
    .games-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 1.5rem;
    }

    .game-card {
      display: flex;
      align-items: center;
      gap: 1.25rem;
      padding: 1.5rem;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 12px;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .game-card:hover {
      border-color: rgba(255, 255, 255, 0.3);
      transform: translateY(-4px);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    }

    .game-card-icon {
      width: 64px;
      height: 64px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      font-size: 2rem;
    }

    .game-card-content {
      flex-grow: 1;
    }

    .game-card-content h3 {
      margin: 0 0 0.25rem 0;
      font-size: 1.25rem;
    }

    .game-card-content p {
      margin: 0;
      color: #888;
      font-size: 0.9rem;
    }

    .game-card-arrow {
      font-size: 1.5rem;
      color: #888;
      transition: transform 0.2s ease;
    }

    .game-card:hover .game-card-arrow {
      transform: translateX(4px);
      color: #fff;
    }

    /* Individual Game Page */
    .game-page .page-header h1 {
      background: none;
      -webkit-text-fill-color: initial;
      color: #fff;
    }

    .game-emoji {
      font-size: 2rem;
      margin-right: 0.25rem;
    }

    /* Now Page */
    .now-page .page-header h1 {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .now-icon {
      font-size: 2rem;
      margin-right: 0.25rem;
      -webkit-text-fill-color: initial;
    }

    .now-updated {
      font-size: 0.85rem;
      color: #666;
      margin-top: 0.5rem;
    }

    .now-content {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      margin-top: 2rem;
    }

    .now-section {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 12px;
      padding: 1.5rem;
    }

    .now-section h2 {
      margin: 0 0 1rem 0;
      font-size: 1.25rem;
      color: #667eea;
    }

    .now-section ul {
      margin: 0;
      padding-left: 1.5rem;
    }

    .now-section li {
      margin-bottom: 0.5rem;
      color: #aaa;
      line-height: 1.6;
    }

    .now-section li:last-child {
      margin-bottom: 0;
    }

    .now-section em {
      color: #bbb;
    }

    .now-footer {
      margin-top: 2rem;
      padding-top: 1.5rem;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      text-align: center;
    }

    .now-footer p {
      color: #666;
      font-size: 0.9rem;
    }

    .now-footer a {
      color: #667eea;
      text-decoration: none;
    }

    .now-footer a:hover {
      text-decoration: underline;
    }

    .game-container {
      display: flex;
      justify-content: center;
    }

    /* Footer */
    footer {
      text-align: center;
      padding: 2rem 0;
      color: #666;
      font-size: 0.9rem;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
    }

    /* ── Floating bubbles ── */
    .hero {
      position: relative;
      overflow: hidden;
      padding: 3rem 0 2rem;
    }

    .hero-bg {
      position: absolute;
      inset: 0;
      pointer-events: none;
      z-index: 0;
    }

    .hero > *:not(.hero-bg) {
      position: relative;
      z-index: 1;
    }

    .bubble {
      position: absolute;
      bottom: -120px;
      border-radius: 50%;
      opacity: 0;
      animation: bubble-rise linear infinite;
    }

    @keyframes bubble-rise {
      0%   { transform: translateY(0) scale(1);   opacity: 0;   }
      10%  { opacity: 1; }
      90%  { opacity: 0.5; }
      100% { transform: translateY(-420px) scale(0.7); opacity: 0; }
    }

    .b1  { width: 60px;  height: 60px;  left: 8%;   animation-duration: 9s;  animation-delay: 0s;    background: radial-gradient(circle at 35% 35%, rgba(102,126,234,0.55), rgba(102,126,234,0.05)); }
    .b2  { width: 90px;  height: 90px;  left: 18%;  animation-duration: 13s; animation-delay: 1.5s;  background: radial-gradient(circle at 35% 35%, rgba(118,75,162,0.45), rgba(118,75,162,0.05)); }
    .b3  { width: 40px;  height: 40px;  left: 30%;  animation-duration: 8s;  animation-delay: 3s;    background: radial-gradient(circle at 35% 35%, rgba(0,173,216,0.5),  rgba(0,173,216,0.05));  }
    .b4  { width: 110px; height: 110px; left: 45%;  animation-duration: 15s; animation-delay: 0.5s;  background: radial-gradient(circle at 35% 35%, rgba(102,126,234,0.35), rgba(102,126,234,0.02)); }
    .b5  { width: 55px;  height: 55px;  left: 58%;  animation-duration: 10s; animation-delay: 2s;    background: radial-gradient(circle at 35% 35%, rgba(0,173,216,0.4),  rgba(0,173,216,0.05));  }
    .b6  { width: 75px;  height: 75px;  left: 70%;  animation-duration: 12s; animation-delay: 4s;    background: radial-gradient(circle at 35% 35%, rgba(118,75,162,0.5),  rgba(118,75,162,0.05)); }
    .b7  { width: 45px;  height: 45px;  left: 80%;  animation-duration: 7s;  animation-delay: 1s;    background: radial-gradient(circle at 35% 35%, rgba(102,126,234,0.6), rgba(102,126,234,0.05)); }
    .b8  { width: 85px;  height: 85px;  left: 90%;  animation-duration: 11s; animation-delay: 3.5s;  background: radial-gradient(circle at 35% 35%, rgba(0,173,216,0.35), rgba(0,173,216,0.02));  }
    .b9  { width: 50px;  height: 50px;  left: 25%;  animation-duration: 14s; animation-delay: 5s;    background: radial-gradient(circle at 35% 35%, rgba(118,75,162,0.4),  rgba(118,75,162,0.05)); }
    .b10 { width: 70px;  height: 70px;  left: 55%;  animation-duration: 16s; animation-delay: 6s;    background: radial-gradient(circle at 35% 35%, rgba(102,126,234,0.45), rgba(102,126,234,0.05)); }

    /* ── Animated avatar ring ── */
    .avatar-wrapper {
      position: relative;
      width: 158px;
      height: 158px;
      margin: 0 auto 1.5rem;
    }

    .avatar-ring {
      position: absolute;
      inset: -4px;
      border-radius: 50%;
      background: conic-gradient(from 0deg, #667eea, #764ba2, #00ADD8, #667eea);
      animation: spin-ring 4s linear infinite;
      z-index: 0;
    }

    @keyframes spin-ring {
      to { transform: rotate(360deg); }
    }

    .avatar-wrapper .profile-picture {
      position: relative;
      z-index: 1;
      margin: 0;
      padding: 3px;
      background: #1a1a1a;
      border-radius: 50%;
      width: 150px;
      height: 150px;
      box-sizing: border-box;
    }

    .avatar-wrapper .avatar-image {
      width: 144px;
      height: 144px;
      border-radius: 50%;
      object-fit: cover;
      display: block;
    }

    /* ── Skills section ── */
    .skills h2 {
      font-size: 1.5rem;
      margin-bottom: 1.25rem;
    }

    .skills-cloud {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
    }

    .skill-badge {
      display: inline-block;
      padding: 0.45rem 1rem;
      border-radius: 999px;
      font-size: 0.85rem;
      font-weight: 500;
      background: rgba(255, 255, 255, 0.06);
      border: 1px solid rgba(255, 255, 255, 0.12);
      color: #ccc;
      transition: all 0.2s ease;
      cursor: default;
      backdrop-filter: blur(4px);
    }

    .skill-badge:hover {
      transform: translateY(-3px);
      border-color: rgba(102, 126, 234, 0.5);
      background: rgba(102, 126, 234, 0.12);
      color: #fff;
      box-shadow: 0 6px 20px rgba(102, 126, 234, 0.25);
    }

    .skill-badge.rust {
      border-color: rgba(222, 165, 132, 0.4);
      color: #dea584;
    }

    .skill-badge.rust:hover {
      background: rgba(222, 165, 132, 0.12);
      box-shadow: 0 6px 20px rgba(222, 165, 132, 0.2);
    }

    .skill-badge.go {
      border-color: rgba(0, 173, 216, 0.4);
      color: #00ADD8;
    }

    .skill-badge.go:hover {
      background: rgba(0, 173, 216, 0.12);
      box-shadow: 0 6px 20px rgba(0, 173, 216, 0.2);
    }

    .skill-badge.ts {
      border-color: rgba(49, 120, 198, 0.4);
      color: #4d9de0;
    }

    .skill-badge.ts:hover {
      background: rgba(49, 120, 198, 0.12);
      box-shadow: 0 6px 20px rgba(49, 120, 198, 0.2);
    }

    /* ── Enhanced glassmorphism cards ── */
    .about {
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid rgba(255, 255, 255, 0.08);
    }

    .repo-card {
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
    }

    .blog-card {
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
    }

    /* ── Site navigation ── */
    .site-nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.75rem 0;
      margin-bottom: 0.5rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    }

    .nav-brand {
      background: none;
      border: none;
      cursor: pointer;
      font-size: 1rem;
      font-weight: 700;
      color: #667eea;
      padding: 0;
      letter-spacing: -0.02em;
      transition: color 0.15s ease;
    }

    .nav-brand:hover {
      color: #764ba2;
    }

    .nav-links {
      display: flex;
      gap: 0.25rem;
    }

    .nav-link {
      background: none;
      border: none;
      cursor: pointer;
      font-size: 0.875rem;
      color: #888;
      padding: 0.4rem 0.75rem;
      border-radius: 6px;
      transition: all 0.15s ease;
    }

    .nav-link:hover {
      background: rgba(255, 255, 255, 0.06);
      color: #ddd;
    }

    .nav-link.active {
      color: #fff;
      background: rgba(102, 126, 234, 0.18);
    }

    /* ── Blog tag filter ── */
    .blog-filter-bar {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-bottom: 1.5rem;
    }

    .tag-filter-btn {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 999px;
      color: #aaa;
      cursor: pointer;
      font-size: 0.8rem;
      padding: 0.3rem 0.75rem;
      transition: all 0.15s ease;
    }

    .tag-filter-btn:hover {
      border-color: #00ADD8;
      color: #00ADD8;
    }

    .tag-filter-btn.active {
      background: rgba(0, 173, 216, 0.15);
      border-color: #00ADD8;
      color: #00ADD8;
    }

    /* ── Blog card footer (read more + reading time) ── */
    .blog-card-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .reading-time {
      font-size: 0.8rem;
      color: #666;
    }

    /* ── Scroll reveal animations ── */
    .reveal-section {
      opacity: 0;
      transform: translateY(28px);
      transition: opacity 0.6s ease, transform 0.6s ease;
    }

    .reveal-section.revealed {
      opacity: 1;
      transform: translateY(0);
    }

    /* Blog section header (home page) */
    .blog-section-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1.5rem;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .blog-section-header h2 {
      margin: 0;
    }

    .view-all-btn {
      background: none;
      border: 1px solid rgba(0, 173, 216, 0.4);
      border-radius: 999px;
      color: #00ADD8;
      cursor: pointer;
      font-size: 0.85rem;
      padding: 0.4rem 1rem;
      transition: all 0.15s ease;
    }

    .view-all-btn:hover {
      background: rgba(0, 173, 216, 0.1);
      border-color: #00ADD8;
    }

    /* Blog list page */
    .blog-page {
      min-height: 100vh;
    }

    .blog-page-title {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      background: linear-gradient(135deg, #00ADD8 0%, #667eea 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .blog-header-icon {
      -webkit-text-fill-color: initial;
      color: #00ADD8;
    }

    /* Blog post page */
    .blog-post-page {
      min-height: 100vh;
    }

    .blog-post-page-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 2rem;
      padding-bottom: 1rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    }

    .standalone-post {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 12px;
      padding: 2.5rem;
      line-height: 1.8;
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
    }

    .reading-time-banner {
      font-size: 0.85rem;
      color: #666;
      margin-bottom: 2rem;
      padding-bottom: 1.5rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    }

    .post-footer-nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 2rem;
      padding-top: 1.5rem;
      border-top: 1px solid rgba(255, 255, 255, 0.08);
    }

    /* Share button */
    .share-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      background: none;
      border: 1px solid rgba(102, 126, 234, 0.4);
      border-radius: 8px;
      color: #667eea;
      cursor: pointer;
      font-size: 0.85rem;
      padding: 0.5rem 1rem;
      transition: all 0.15s ease;
    }

    .share-btn:hover {
      background: rgba(102, 126, 234, 0.1);
      border-color: #667eea;
    }

    /* Light mode adjustments */
    @media (prefers-color-scheme: light) {
      .site-nav {
        border-bottom-color: rgba(0, 0, 0, 0.1);
      }

      .nav-link:hover {
        background: rgba(0, 0, 0, 0.05);
        color: #213547;
      }

      .nav-link.active {
        color: #213547;
        background: rgba(102, 126, 234, 0.1);
      }

      .tagline {
        color: #555;
      }

      .tag-filter-btn {
        background: rgba(0, 0, 0, 0.03);
        border-color: rgba(0, 0, 0, 0.12);
        color: #555;
      }

      .tag-filter-btn:hover {
        color: #00ADD8;
        border-color: #00ADD8;
      }

      .tag-filter-btn.active {
        background: rgba(0, 173, 216, 0.08);
        color: #00ADD8;
        border-color: #00ADD8;
      }

      .reading-time {
        color: #999;
      }

      .social-link {
        background: #f0f0f0;
        color: #333;
      }

      .social-link:hover {
        background: #e0e0e0;
      }

      .social-link.linkedin:hover {
        background: #0077b5;
        color: white;
      }

      .about {
        background: rgba(0, 0, 0, 0.03);
        border-color: rgba(0, 0, 0, 0.1);
      }

      .about p {
        color: #555;
      }

      .repo-card {
        background: rgba(0, 0, 0, 0.03);
        border-color: rgba(0, 0, 0, 0.1);
      }

      .repo-description {
        color: #555;
      }

      .blog-card {
        background: rgba(0, 0, 0, 0.03);
        border-color: rgba(0, 0, 0, 0.1);
      }

      .blog-card:hover {
        border-color: #00ADD8;
      }

      .blog-card.add-more:hover {
        border-color: rgba(0, 0, 0, 0.1);
      }

      .blog-title {
        color: #213547;
      }

      .blog-summary {
        color: #555;
      }

      .full-post {
        background: rgba(0, 0, 0, 0.03);
        border-color: rgba(0, 0, 0, 0.1);
      }

      .post-content p {
        color: #555;
      }

      .post-content pre {
        background: #f5f5f5;
        border-color: rgba(0, 0, 0, 0.1);
      }

      .post-content code {
        color: #333;
      }

      footer {
        border-color: rgba(0, 0, 0, 0.1);
        color: #888;
      }

      .game-card {
        background: rgba(0, 0, 0, 0.03);
        border-color: rgba(0, 0, 0, 0.1);
      }

      .game-card:hover {
        border-color: rgba(0, 0, 0, 0.3);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
      }

      .game-card-content p {
        color: #666;
      }

      .game-card-arrow {
        color: #999;
      }

      .game-card:hover .game-card-arrow {
        color: #333;
      }

      .game-page .page-header h1 {
        color: #213547;
      }

      .now-section {
        background: rgba(0, 0, 0, 0.03);
        border-color: rgba(0, 0, 0, 0.1);
      }

      .now-section li {
        color: #555;
      }

      .now-section em {
        color: #444;
      }

      .now-footer {
        border-color: rgba(0, 0, 0, 0.1);
      }

      .now-footer p {
        color: #888;
      }

      .quick-link-content p {
        color: #666;
      }

      .blog-post-page-header {
        border-bottom-color: rgba(0, 0, 0, 0.1);
      }

      .standalone-post {
        background: rgba(0, 0, 0, 0.03);
        border-color: rgba(0, 0, 0, 0.1);
      }

      .reading-time-banner {
        border-bottom-color: rgba(0, 0, 0, 0.1);
      }

      .post-footer-nav {
        border-top-color: rgba(0, 0, 0, 0.1);
      }
    }

    /* Responsive */
    @media (max-width: 600px) {
      :host {
        padding: 1rem;
      }

      h1 {
        font-size: 2rem;
      }

      .placeholder-avatar,
      .avatar-image {
        width: 120px;
        height: 120px;
      }

      .placeholder-avatar svg {
        width: 60px;
        height: 60px;
      }

      .nav-brand {
        font-size: 0.9rem;
      }

      .nav-link {
        font-size: 0.8rem;
        padding: 0.35rem 0.5rem;
      }

      .blog-filter-bar {
        gap: 0.4rem;
      }

      .tag-filter-btn {
        font-size: 0.75rem;
        padding: 0.25rem 0.6rem;
      }
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement
  }
}
