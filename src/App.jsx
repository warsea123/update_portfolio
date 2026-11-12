import {Navbar} from './components/Navbar'
import Hero from './components/Hero'
import Contact from './components/Contact'
import About from './components/About'
import Project from './components/Project'
import Footer from './components/Footer'
import './App.css'

function App() {

  return (
    <div className="App min-h-screen flex flex-col">
      <Navbar />
      <main className="my-10 p-8 w-5/6 mx-auto flex-1">
        <Hero />
        <About/>
        <Project />
        <Contact />
        </main>
         <Footer />
        </div>
            
    
  )
}

export default App
