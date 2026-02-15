import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ClassesPage from './pages/ClassesPage';
import SchedulePage from './pages/SchedulePage';
import PricePage from './pages/PricePage';
import ActivitiesPage from './pages/ActivitiesPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/classes" element={<ClassesPage />} />
            <Route path="/schedule" element={<SchedulePage />} />
            <Route path="/price" element={<PricePage />} />
            <Route path="/activities" element={<ActivitiesPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
