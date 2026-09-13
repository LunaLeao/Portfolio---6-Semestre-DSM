import "./Skills.css";
// Exemplo de importação de imagens (substitua pelos caminhos reais das imagens que você escolher para cada bloco):
import idiomasImg from "../assets/idiomas.png";
import frontendImg from "../assets/frontend.png";
import backendImg from "../assets/backend.png";
import designImg from "../assets/design.png";

export default function Skills() {
  return (
    <section id="habilidades" className="skills-section container-padding">
      <h2 className="section-title text-center">🌙 Habilidades & Tecnologias 🌙</h2>

      <div className="skills-grid">
        {/* 1. Línguas */}
        <div className="skill-card">
          <div className="skill-card-image">
            <img src={idiomasImg} alt="Ilustração de Línguas" />
          </div>
          <div className="skill-card-header">
            <span className="skill-icon">🌐</span>
            <h3>Línguas</h3>
          </div>
          <ul className="language-list">
            <li>
              <span className="lang-name">Português</span>
              <span className="lang-level nativo">Nativo</span>
            </li>
            <li>
              <span className="lang-name">Inglês</span>
              <span className="lang-level avancado">Avançado</span>
            </li>
            <li>
              <span className="lang-name">Espanhol</span>
              <span className="lang-level basico">Básico</span>
            </li>
          </ul>
        </div>

        {/* 2. Frontend */}
        <div className="skill-card">
          <div className="skill-card-image">
            <img src={frontendImg} alt="Ilustração de Frontend" />
          </div>
          <div className="skill-card-header">
            <span className="skill-icon">&lt;/&gt;</span>
            <h3>Frontend</h3>
          </div>
          <div className="tech-chips">
            <span className="tech-chip">HTML5</span>
            <span className="tech-chip">CSS3</span>
            <span className="tech-chip">JavaScript</span>
            <span className="tech-chip">React</span>
            <span className="tech-chip">TypeScript</span>
            <span className="tech-chip">Bootstrap</span>
            <span className="tech-chip">Tailwind</span>
          </div>
        </div>

        {/* 3. Backend & Dados */}
        <div className="skill-card">
          <div className="skill-card-image">
            <img src={backendImg} alt="Ilustração de Backend e Dados" />
          </div>
          <div className="skill-card-header">
            <span className="skill-icon">⚡</span>
            <h3>Backend & Dados</h3>
          </div>
          <div className="tech-chips">
            <span className="tech-chip">Python</span>
            <span className="tech-chip">Java</span>
            <span className="tech-chip">C#</span>
            <span className="tech-chip">Node.js</span>
            <span className="tech-chip">Spring Boot</span>
            <span className="tech-chip">SQL</span>
            <span className="tech-chip">NoSQL</span>
            <span className="tech-chip">Git & GitHub</span>
          </div>
        </div>

        {/* 4. Design & Criatividade */}
        <div className="skill-card">
          <div className="skill-card-image">
            <img src={designImg} alt="Ilustração de Design" />
          </div>
          <div className="skill-card-header">
            <span className="skill-icon">🎨</span>
            <h3>Design & Criatividade</h3>
          </div>
          <div className="tech-chips">
            <span className="tech-chip">Figma</span>
            <span className="tech-chip">UI / UX</span>
            <span className="tech-chip">Prototipagem</span>
            <span className="tech-chip">Wireframing</span>
            <span className="tech-chip">Design System</span>
            <span className="tech-chip">Ilustração Digital</span>
          </div>
        </div>
      </div>
    </section>
  );
}