import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Tutors from './pages/Tutors'
import HowItWorks from './pages/HowItWorks.tsx'
import Pricing from './pages/Pricing.tsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
  <Route path="/tutors" element={<Tutors />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
  <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </Router>
  )
}

export default App
