
import './App.css'
import About from './components/About.tsx'
import Hero from './components/Hero.tsx'
import Navbar from "./components/Navbar.tsx"

function App() {
  return (
    <>
     <main className="flex flex-col items-center  ">
      <Navbar />
      <Hero />
      <About/>
      </main>
    </>
  )
}

export default App
