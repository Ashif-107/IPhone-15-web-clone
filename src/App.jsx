import Hero from "./components/Hero"
import Highlights from "./components/Highlights"
import Model from "./components/Model"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <div>
      <main className="bg-black">
      <Navbar/>
      <Hero/>
      <Highlights/>
      <Model/>
      </main>
    </div>
  )
}

export default App
