import Currency from './components/Currency'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Length from './components/Length'
import NavBar from './components/NavBar'

function App() {
  return (
    <div className='App'>
      <Router>
        <NavBar />
        <Routes>
          <Route path={'/'} element={<Currency />} />
          <Route path={'/length'} element={<Length />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
