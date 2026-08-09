
import './App.css'
import About from './components/About.tsx'
import Experience from './components/Experience.tsx'
import Hero from './components/Hero.tsx'
import Navbar from "./components/Navbar.tsx"
import Project from './components/Project.tsx'
import Skills from './components/Skills.tsx'

function App() {
  return (
    <>
      <main className="flex flex-col items-center  ">
        <Navbar />
        <Hero />
        <About />
        <Skills/>
        <Project />
        <Experience />
      </main>
    </>
  )
}

export default App
