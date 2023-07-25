import './App.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Main } from './pages/Main'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { Counter } from './pages/Counter'
import { Patterns } from './pages/Patterns'

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/counter' element={<Counter />}></Route>
          <Route path='/patterns' element={<Patterns />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
