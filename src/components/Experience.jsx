import "./Experience.css";

export default function Experience() {
  const experiences = [
    {
      company: "Amazon",
      role: "Jovem Aprendiz Administrativo",
      period: "Mai 2026",
      description: "Listagem de produtos dos fornecedores no site de compras da Amazon.com, melhorias de processos através de automações, análise de dados."
    },
    {
      company: "Chiquinho Sorvetes",
      role: "Atendente",
      period: "Set 2024 a Jun 2025",
      description: "Atendimento ao público, preparo dos pedidos, organização da loja, abertura e fechamento de caixa."
    }
  ];

  return (
    <section id="jornada" className="experience-section container-padding">
      <h2 className="section-title text-center">
        <span className="moon-icon">🌙</span> Jornada Profissional <span className="moon-icon">🌙</span>
      </h2>

      <div className="timeline-container">
        {experiences.map((exp, index) => (
          <div className="timeline-item" key={index}>
            {/* Ponto luminoso na linha do tempo */}
            <div className="timeline-dot"></div>

            <div className="timeline-card">
              <div className="timeline-header">
                <div>
                  <h3 className="timeline-company">{exp.company}</h3>
                  <span className="timeline-role">{exp.role}</span>
                </div>
                <span className="timeline-period">{exp.period}</span>
              </div>
              <p className="timeline-description">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}