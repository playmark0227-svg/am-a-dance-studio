import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Header from './components/Header';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import ClassesPage from './pages/ClassesPage';
import SchedulePage from './pages/SchedulePage';
import PricePage from './pages/PricePage';
import ActivitiesPage from './pages/ActivitiesPage';
import ContactPage from './pages/ContactPage';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import AdminActivityPost from './pages/AdminActivityPost';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* 一般ユーザー向けルート（ヘッダー・フッター付き） */}
          <Route path="/" element={
            <div className="min-h-screen">
              <Header />
              <main><Home /></main>
              <Footer />
            </div>
          } />
          <Route path="/classes" element={
            <div className="min-h-screen">
              <Header />
              <main><ClassesPage /></main>
              <Footer />
            </div>
          } />
          <Route path="/schedule" element={
            <div className="min-h-screen">
              <Header />
              <main><SchedulePage /></main>
              <Footer />
            </div>
          } />
          <Route path="/price" element={
            <div className="min-h-screen">
              <Header />
              <main><PricePage /></main>
              <Footer />
            </div>
          } />
          <Route path="/activities" element={
            <div className="min-h-screen">
              <Header />
              <main><ActivitiesPage /></main>
              <Footer />
            </div>
          } />
          <Route path="/contact" element={
            <div className="min-h-screen">
              <Header />
              <main><ContactPage /></main>
              <Footer />
            </div>
          } />
          
          {/* 管理画面ルート（ヘッダー・フッターなし） */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          } />
          <Route path="/admin/activities/post" element={
            <ProtectedRoute>
              <AdminActivityPost />
            </ProtectedRoute>
          } />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
