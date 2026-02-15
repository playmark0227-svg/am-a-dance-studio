import Header from './components/Header';
import Hero from './components/Hero';
import Classes from './components/Classes';
import Schedule from './components/Schedule';
import Price from './components/Price';
import Activities from './components/Activities';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Classes />
        <Schedule />
        <Price />
        <Activities />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
