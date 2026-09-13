import "./Education.css";

export default function Education() {
  return (
    <section id="formacoes" className="education-section container-padding">
      <h2 className="section-title text-center">
        <span className="moon-icon">🌙</span> Formações e Certificados <span className="moon-icon">🌙</span>
      </h2>

      <div className="education-grid">
        
        {/* Card 1: Graduação */}
        <div className="education-card">
          <div className="card-header">
            <span className="edu-icon">🎓</span>
            <h3>Graduação</h3>
          </div>
          <ul className="edu-details">
            <li><span className="edu-label">Curso:</span> Desenvolvimento de Software Multiplataforma</li>
            <li><span className="edu-label">Instituição:</span> Fatec Zona Leste</li>
            <li><span className="edu-label">Duração:</span> 6 semestres</li>
            <li><span className="edu-label">Conclusão:</span> Dezembro de 2026</li>
          </ul>
        </div>

        {/* Card 2: Design Gráfico */}
        <div className="education-card">
          <div className="card-header">
            <span className="edu-icon">🎓</span>
            <h3>Design Gráfico</h3>
          </div>
          <ul className="edu-details">
            <li><span className="edu-label">Instituição:</span> Centro Social Nossa Senhora do Bom Parto</li>
            <li><span className="edu-label">Duração:</span> 400 horas</li>
            <li><span className="edu-label">Habilidades:</span> Photoshop, Adobe Illustrator, Identidade Visual, entre diversos.</li>
          </ul>
          
          {/* Botão de certificado que fica alinhado no fundo */}
          <div className="card-footer">
            <a href="#" className="cert-btn" target="_blank" rel="noopener noreferrer">
              👁 Ver certificado
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}