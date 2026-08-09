
import './App.css'
import Hero from './components/Hero.tsx'
import Navbar from "./components/Navbar.tsx"

function App() {
  return (
    <>
     <main className="flex flex-col items-center  ">
      <Navbar />
      <Hero />
      </main>
    </>
  )
}

export default App
