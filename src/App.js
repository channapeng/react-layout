import { Routes, Route } from 'react-router-dom'
import Home from './components/pages/users/Home'
import About from './components/pages/users/About'
import Service from './components/pages/users/Service'
import Contact from './components/pages/users/Contact'

const App = () => {
  return (
    <Routes>
      <Route path="/" exact={true} element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/service" element={<Service />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
};

export default App