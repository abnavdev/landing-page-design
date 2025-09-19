import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Tutors from './pages/Tutors'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
  <Route path="/tutors" element={<Tutors />} />
      </Routes>
    </Router>
  )
}

export default App
