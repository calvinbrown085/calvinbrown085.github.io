/**
 * Blog Posts
 * 
 * Add your blog posts here. Each post has:
 * - id: URL-friendly identifier
 * - title: The post title
 * - summary: Brief description shown on the card
 * - date: Publication date (YYYY-MM-DD)
 * - tags: Array of topic tags
 * - content: HTML content for the full post
 * 
 * Tips for writing content:
 * - Use <h3> for the main title (shown in full view)
 * - Use <h4> for section headings
 * - Use <p> for paragraphs
 * - Use <pre><code>...</code></pre> for code blocks
 * - Use <ul>/<ol> and <li> for lists
 * - Use <strong> for bold and <em> for italics
 */

export interface BlogPost {
  id: string
  title: string
  summary: string
  date: string
  tags: string[]
  content: string
}

export const blogPosts: BlogPost[] = [
  // ============================================
  // Effective Error Handling in Go
  // ============================================
//   {
//     id: 'error-handling-in-go',
//     title: 'Effective Error Handling in Go',
//     summary: 'Best practices for handling errors in Go applications, including wrapping, sentinel errors, and custom error types.',
//     date: '2026-01-30',
//     tags: ['Go', 'Error Handling', 'Best Practices'],
//     content: `
//       <h3>Effective Error Handling in Go</h3>
      
//       <p>Error handling in Go is explicit and straightforward, but there are patterns 
//       that make it more effective. Unlike languages with exceptions, Go treats errors 
//       as values, which encourages you to handle them at the point they occur.</p>
      
//       <h4>1. Wrapping Errors with Context</h4>
      
//       <p>Always add context when propagating errors up the call stack. This makes 
//       debugging much easier:</p>
      
//       <pre><code>if err != nil {
//     return fmt.Errorf("failed to process user %d: %w", userID, err)
// }</code></pre>
      
//       <p>The <code>%w</code> verb wraps the original error, preserving the error chain 
//       for inspection with <code>errors.Is()</code> and <code>errors.As()</code>.</p>
      
//       <h4>2. Sentinel Errors</h4>
      
//       <p>Define package-level error values for conditions callers need to check:</p>
      
//       <pre><code>var ErrNotFound = errors.New("resource not found")
// var ErrPermissionDenied = errors.New("permission denied")

// func GetUser(id int) (*User, error) {
//     user, err := db.FindUser(id)
//     if err != nil {
//         if errors.Is(err, sql.ErrNoRows) {
//             return nil, ErrNotFound
//         }
//         return nil, fmt.Errorf("database error: %w", err)
//     }
//     return user, nil
// }</code></pre>
      
//       <h4>3. Custom Error Types</h4>
      
//       <p>For errors that need to carry additional information:</p>
      
//       <pre><code>type ValidationError struct {
//     Field   string
//     Message string
// }

// func (e *ValidationError) Error() string {
//     return fmt.Sprintf("validation failed on %s: %s", e.Field, e.Message)
// }

// // Usage
// var valErr *ValidationError
// if errors.As(err, &valErr) {
//     log.Printf("Invalid field: %s", valErr.Field)
// }</code></pre>
      
//       <h4>Key Takeaways</h4>
      
//       <ul>
//         <li>Always handle errors explicitly—don't ignore them</li>
//         <li>Add context when wrapping errors</li>
//         <li>Use sentinel errors for expected conditions</li>
//         <li>Use custom error types when you need to carry extra data</li>
//       </ul>
//     `
//   },

//   // ============================================
//   // Go Concurrency Patterns
//   // ============================================
//   {
//     id: 'go-concurrency-patterns',
//     title: 'Go Concurrency Patterns',
//     summary: 'Exploring common concurrency patterns in Go: goroutines, channels, and sync primitives.',
//     date: '2026-01-25',
//     tags: ['Go', 'Concurrency', 'Goroutines'],
//     content: `
//       <h3>Go Concurrency Patterns</h3>
      
//       <p>Go's concurrency model, based on CSP (Communicating Sequential Processes), 
//       provides powerful primitives for writing concurrent code. Let's explore some 
//       common patterns.</p>
      
//       <h4>1. Worker Pool Pattern</h4>
      
//       <p>Distribute work across a fixed number of goroutines:</p>
      
//       <pre><code>func workerPool(numWorkers int, jobs <-chan Job, results chan<- Result) {
//     var wg sync.WaitGroup
    
//     for i := 0; i < numWorkers; i++ {
//         wg.Add(1)
//         go func(workerID int) {
//             defer wg.Done()
//             for job := range jobs {
//                 result := processJob(job)
//                 results <- result
//             }
//         }(i)
//     }
    
//     wg.Wait()
//     close(results)
// }</code></pre>
      
//       <h4>2. Fan-Out, Fan-In</h4>
      
//       <p>Distribute work to multiple goroutines (fan-out) and collect results (fan-in):</p>
      
//       <pre><code>func fanIn(channels ...<-chan Result) <-chan Result {
//     var wg sync.WaitGroup
//     merged := make(chan Result)
    
//     output := func(c <-chan Result) {
//         defer wg.Done()
//         for result := range c {
//             merged <- result
//         }
//     }
    
//     wg.Add(len(channels))
//     for _, c := range channels {
//         go output(c)
//     }
    
//     go func() {
//         wg.Wait()
//         close(merged)
//     }()
    
//     return merged
// }</code></pre>
      
//       <h4>3. Context for Cancellation</h4>
      
//       <p>Use context to propagate cancellation signals:</p>
      
//       <pre><code>func fetchWithTimeout(ctx context.Context, url string) ([]byte, error) {
//     ctx, cancel := context.WithTimeout(ctx, 5*time.Second)
//     defer cancel()
    
//     req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
//     if err != nil {
//         return nil, err
//     }
    
//     resp, err := http.DefaultClient.Do(req)
//     if err != nil {
//         return nil, err
//     }
//     defer resp.Body.Close()
    
//     return io.ReadAll(resp.Body)
// }</code></pre>
      
//       <h4>4. Select for Multiple Channels</h4>
      
//       <p>Handle multiple channel operations:</p>
      
//       <pre><code>func process(ctx context.Context, input <-chan Data) error {
//     for {
//         select {
//         case <-ctx.Done():
//             return ctx.Err()
//         case data, ok := <-input:
//             if !ok {
//                 return nil // channel closed
//             }
//             if err := handleData(data); err != nil {
//                 return err
//             }
//         }
//     }
// }</code></pre>
      
//       <h4>Key Takeaways</h4>
      
//       <ul>
//         <li>Use goroutines for concurrent work, channels for communication</li>
//         <li>Worker pools limit resource usage</li>
//         <li>Always use context for cancellation and timeouts</li>
//         <li>Select allows non-blocking operations on multiple channels</li>
//       </ul>
//     `
//   },

  // ============================================
  // Add your new blog posts below
  // ============================================
  
  // Example template:
  // {
  //   id: 'your-post-slug',
  //   title: 'Your Post Title',
  //   summary: 'A brief summary of the post...',
  //   date: '2026-02-01',
  //   tags: ['Go', 'Topic'],
  //   content: `
  //     <h3>Your Post Title</h3>
  //     <p>Your content here...</p>
  //   `
  // },
  {
    id: 'structured-logging-in-go',
    title: 'Structured Logging in Go',
    summary: 'How to use structured logging in Go to make your logs more readable and searchable.',
    date: '2026-01-30',
    tags: ['Go', 'Logging', 'Structured Logging'],
    content: `
      <h3>Structured Logging in Go</h3>
      <p>Structured logging is a way to log your logs in a structured format that can be easily parsed and searched.</p>
    
      <h4>1. Using the log package</h4>
      <p>The log package in Go is a simple way to log messages to the console.</p>
      <pre><code>log.Println("Hello, World!")</code></pre>
      Let's try it! <a href="https://go.dev/play/p/VvndytwieVX" target="_blank" rel="noopener noreferrer">https://go.dev/play/p/VvndytwieVX</a>
      
      You should see the following output:
      <pre><code>2026/01/30 12:00:00 Hello, World!</code></pre>

      This doesn't give us much information about the log message. We can do better!


      <h4>2. Using the slog package</h4>
      <p>The slog (stands for structured logging) package in Go is a simple way to log messages to the console.</p>
      <pre><code>slog.Println("Hello, World!")</code></pre>
      Let's try it! <a href="https://go.dev/play/p/2dxy_54OSXi" target="_blank" rel="noopener noreferrer">https://go.dev/play/p/VvndytwieVX</a>
      
      You should see the following output:
      <pre><code>2009/11/10 23:00:00 Hello, World!
2009/11/10 23:00:00 INFO hello, world</code></pre>

      This doesn't look very different from above. Let's try a different example!

      Let's say we have a userId that we want to log in each message. We can create a logger with a userId attribute.

      <pre><code>logger := slog.New(slog.NewTextHandler(os.Stdout, &slog.HandlerOptions{
        AddSource: true,
        Level:     slog.LevelInfo,
      })).With("userId", "fb8edcbf-8527-4151-8f06-1538f8fb13c3")
logger.Info("hello, world")</code></pre>
      Let's try it! <a href="https://go.dev/play/p/Zx7W8OR2QVK" target="_blank" rel="noopener noreferrer">https://go.dev/play/p/VvndytwieVX</a>
      
      You should see the following output:
      <pre><code>2009/11/10 23:00:00 Hello, World!
2009/11/10 23:00:00 INFO hello, world
time=2009-11-10T23:00:00.000Z level=INFO source=/tmp/sandbox3759996683/prog.go:20 msg="hello, world" userId=fb8edcbf-8527-4151-8f06-1538f8fb13c3</code></pre>

      Great! Now we have the userId in each message without having to add it manually each time.

      A lot of times log ingestion tools with take in JSON formatted logs. We can use the slog package to format our logs as JSON.

      <pre><code>logger := slog.New(slog.NewJSONHandler(os.Stdout, &slog.HandlerOptions{
        AddSource: true,
        Level:     slog.LevelInfo,
      })).With("userId", "fb8edcbf-8527-4151-8f06-1538f8fb13c3")
logger.Info("hello, world")</code></pre>
      Let's try it! <a href="https://go.dev/play/p/fFpA-5PnqhM" target="_blank" rel="noopener noreferrer">https://go.dev/play/p/VvndytwieVX</a>
      
      You should see the following output:

      <pre><code>2009/11/10 23:00:00 Hello, World!
2009/11/10 23:00:00 INFO hello, world
time=2009-11-10T23:00:00.000Z level=INFO source=/tmp/sandbox917016642/prog.go:20 msg="hello, world" userId=fb8edcbf-8527-4151-8f06-1538f8fb13c3
{"time":"2009-11-10T23:00:00Z","level":"INFO","source":{"function":"main.main","file":"/tmp/sandbox917016642/prog.go","line":26},"msg":"hello, world","userId":"fb8edcbf-8527-4151-8f06-1538f8fb13c3"}
</code></pre>

      You should be able to search by the key userId in your log ingestion tool and index that for quick log lookups!
      `

      
  }
]
