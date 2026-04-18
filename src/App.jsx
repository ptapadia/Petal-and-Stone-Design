import Hero from './components/Hero';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-warm-white">
      <Hero />
      <Gallery />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
