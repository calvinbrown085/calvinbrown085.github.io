package main

import (
	"log"

	"github.com/maxence-charriere/go-app/v10/pkg/app"
)

// home is a component that displays a personal portfolio page.
// It embeds app.Compo to satisfy the app.Component interface.
type home struct {
	app.Compo
}

// Render builds the UI of the component.
// It is defined as a method of the component's struct.
func (h *home) Render() app.UI {
	// The UI is built using a declarative syntax, where Go functions represent HTML elements.
	return app.Div().Class("bg-gray-900 text-gray-200 min-h-screen font-sans").Body(
		app.Div().Class("container mx-auto p-8 max-w-3xl").Body(

			// Header Section
			app.Header().Class("text-center mb-12").Body(
				app.H1().Class("text-5xl md:text-6xl font-bold text-white mb-2").Text("Calvin Brown"),
				app.P().Class("text-xl md:text-2xl text-cyan-400").Text("Sr. Staff Software Engineer at Jack Henry"),
			),

			// About Me Section
			app.Main().Class("space-y-12").Body(
				app.Section().Body(
					app.P().Class("text-lg leading-relaxed").Text(
						"I'm a passionate software engineer focused on building reliable, scalable, and observable distributed systems. With a strong background in Go and a keen interest in Rust, I enjoy creating robust infrastructure and tooling that empowers fellow developers.",
					),
				),

				// Featured Project Section
				app.Section().Body(
					app.H2().Class("text-3xl font-bold text-white border-b-2 border-cyan-400 pb-2 mb-6").Text("Featured Project"),
					app.Div().Class("bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105").Body(
						app.H3().Class("text-2xl font-semibold text-white mb-2").Text("warp-prometheus"),
						app.P().Class("text-gray-400 mb-4").Text("A Prometheus metrics exporter for the Warp web server framework in Rust, making it easy to add observability to high-performance web services."),
						app.A().Class("text-cyan-400 hover:text-cyan-300 font-semibold").
							Href("https://github.com/calvinbrown085/warp-prometheus").
							Target("_blank").
							Text("View on GitHub →"),
					),
				),

				// Links Section
				app.Section().Body(
					app.H2().Class("text-3xl font-bold text-white border-b-2 border-cyan-400 pb-2 mb-6").Text("Find Me Online"),
					app.Nav().Class("flex items-center space-x-6").Body(
						app.A().Class("text-lg text-cyan-400 hover:text-cyan-300 font-semibold").
							Href("https://www.linkedin.com/in/calvin-brown-6ab208aa/").
							Target("_blank").
							Text("LinkedIn"),
						app.A().Class("text-lg text-cyan-400 hover:text-cyan-300 font-semibold").
							Href("https://github.com/calvinbrown085").
							Target("_blank").
							Text("GitHub"),
					),
				),
			),

			// Footer
			app.Footer().Class("text-center mt-16 pt-8 border-t border-gray-700").Body(
				app.P().Class("text-gray-500").Text("Built with Go & WebAssembly using go-app."),
			),
		),
	)
}

// main is the application's entry point.
func main() {
	// The first thing to do is to associate the home component with a path.
	// Here, we associate the home component with the "/" path.
	app.Route("/", func() app.Composer { return &home{} })
	app.Route("/hello", func() app.Composer { return &home{} })

	// Once the routes are set up, the next thing to do is to run the app.
	// This will build the static HTML pages and start the server.
	// It is done by calling app.RunWhenOnBrowser().
	app.RunWhenOnBrowser()

	err := app.GenerateStaticWebsite(".", &app.Handler{
		Name:        "Calvin Brown's Portfolio",
		Description: "A personal portfolio site built with go-app.",
		Styles: []string{
			// Loading Tailwind CSS for styling. You can replace this with your own stylesheet.
			"https://cdn.tailwindcss.com",
		},
		Resources: app.GitHubPages("calvinbrown085.github.io"),
	})
	if err != nil {
		log.Fatal(err)
	}
}
