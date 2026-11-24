import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Admin from './Admin';

function App() {
  return (
    <Router>
      <Routes>
        {/* Main Website */}
        <Route path="/" element={<Home />} />

        {/* Admin Dashboard */}
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;