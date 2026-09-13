import "./Hobbies.css";

export default function Hobbies() {
  const hobbies = [
    {
      id: 1,
      icon: "🎨",
      title: "Desenho Tradicional e Digital",
      description: "Adoro explorar meu lado artístico, seja no papel ou na mesa digitalizadora, criando ilustrações e deixando a criatividade fluir.",
      cardClass: "dark-card"
    },
    {
      id: 2,
      icon: "📚",
      title: "Leitura Diversificada",
      description: "Sempre com um livro por perto. Gosto de mergulhar em diversos gêneros literários para relaxar, aprender e expandir a mente.",
      cardClass: "gray-card"
    },
    {
      id: 3,
      icon: "🎲",
      title: "RPG de Mesa",
      description: "Sou mestre de RPG nas horas vagas! Gosto muito de conduzir narrativas usando sistemas com regras mais leves, como Kids on Bikes.",
      cardClass: "light-card"
    },
    {
      id: 4,
      icon: "🎮",
      title: "Games & Modpacks",
      description: "Jogo no PC e me divirto montando e otimizando meus próprios modpacks no Minecraft com CurseForge, configurando shaders e mods de performance.",
      cardClass: "dark-card"
    }
  ];

  return (
    <section id="hobbies" className="hobbies-section container-padding">
      <div className="hobbies-header text-center">
        <span className="section-subtitle">Modo Offline</span>
        <h2 className="section-title">🌙 Além do Código 🌙</h2>
        <p className="hobbies-intro">
          Quando não estou codando ou planejando arquiteturas de software, é aqui que você me encontra:
        </p>
      </div>

      <div className="hobbies-grid">
        {hobbies.map((hobby) => (
          <div className={`hobby-card ${hobby.cardClass}`} key={hobby.id}>
            <span className="hobby-icon">{hobby.icon}</span>
            <h3>{hobby.title}</h3>
            <p>{hobby.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}