import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Projects from './components/Projects'

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
    </div>
  )
}

export default App
