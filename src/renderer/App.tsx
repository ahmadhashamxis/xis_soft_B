import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from '../pages/Home';
import Navbar from '../components/Navbar';
import Stream from '../pages/Stream';
import Theme from '../components/Theme';

export default function App() {
  return (
    <Router>
      <Theme />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stream" element={<Stream />} />
      </Routes>
    </Router>
  );
}
