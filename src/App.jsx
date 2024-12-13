import Hero from "./components/Hero"
import About from "./components/About"
import Navbar from "./components/Navbar"
import Features from "./components/Features"
import Story from "./components/Story"

function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidde">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Story />
    </main>
  )
}

export default App
