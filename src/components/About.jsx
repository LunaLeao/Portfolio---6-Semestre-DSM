import './About.css'

export default function About() {
  return (
    <section id="sobre" className="about-section container-padding">
      <div className="about-container">
        
        {/* Bloco de Texto à Esquerda */}
        <div className="about-text-content">
          <span className="about-tagline">Me conheça!</span>
          <h2 className="section-title">
            🌙 Sobre Mim 🌙
          </h2>
          <p className="about-description">
            Estudante de Desenvolvimento de Software com o objetivo de se encontrar nesse universo e deixar minha marca, sempre com meu toque artístico.
          </p>
        </div>

        {/* Card de Filosofia de Vida à Direita */}
        <div className="about-card-philosophy">
          <div className="philosophy-glow"></div>
          <span className="philosophy-badge">Filosofia de Vida</span>
          <blockquote className="philosophy-quote">
            "Se nunca fizeram antes, seja você o primeiro a fazer"
          </blockquote>
          <div className="philosophy-moon-icon">🌙</div>
        </div>

      </div>
    </section>
  );
}