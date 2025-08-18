import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import CustomCursor from './components/CustomCursor'
import ScrollToTop from './components/ScrollToTop'
import ChatWidget from './components/ChatWidget'

function App() {
  return (
    <Router>
      <div className="App">
        <CustomCursor />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <ScrollToTop />
        <ChatWidget />
      </div>
    </Router>
  )
}

export default App