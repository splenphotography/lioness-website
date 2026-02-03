import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { PalettePage } from './pages/PalettePage';
import { GroomingPage } from './pages/GroomingPage';

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/palette" element={<PalettePage />} />
        <Route path="/grooming" element={<GroomingPage />} />
      </Routes>
    </Router>
  );
}
