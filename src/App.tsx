import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Technologies from './components/Technologies';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-sky-950 to-slate-950">
      <Header />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Technologies />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;