import './App.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
