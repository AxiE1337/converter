import Currency from './components/Currency'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Length from './components/Length'
import NavBar from './components/NavBar'
import Mass from './components/Mass'

function App() {
  return (
    <div className='App'>
      <Router>
        <NavBar />
        <Routes>
          <Route path={'/'} element={<Currency />} />
          <Route path={'/length'} element={<Length />} />
          <Route path={'/mass'} element={<Mass />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
