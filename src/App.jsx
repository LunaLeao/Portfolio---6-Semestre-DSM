import StarsBackground from './components/StarsBackground.jsx';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects';
import Hobbies from './components/Hobbies';
import Footer from './components/Footer';

function App() {
  return (
    <div className="portfolio-container">
      {<StarsBackground />}

      {<Header />}
      
      <main>
        
        {<Hero />}

        <section id="about">
          {<About />}
        </section>

        <section id="education">
          {<Education />}
        </section>

        <section id="skills">
          {<Skills />}
        </section>

        <section id="experience">
          {<Experience />}
        </section>

        <section id="projects">
          {<Projects />}
        </section>

        <section id="hobbies">
          {<Hobbies />}
        </section>
      </main>

      {<Footer />}
    </div>
  );
}

export default App;