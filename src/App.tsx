import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {


  return (
    <div>
      <Header></Header>
      <div>
        <Home></Home>
      </div>
      <div>
        <Projects></Projects> 
      </div>
      <div>
        <Skills></Skills>
      </div>
      <div>
        <Contact></Contact>
      </div>
    </div>
  )
}

export default App
