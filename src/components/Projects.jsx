import { useState } from "react";
import ProjectModal from "./ProjectModal";
import { projectsData } from "../data/projects";
import "./Projects.css";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Como exibimos 2 cards por vez, o índice máximo deve parar 2 posições antes do fim
  const maxIndex = Math.max(0, projectsData.length - 2);

  const nextSlide = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <section id="projects" className="projects-section container-padding">
      <h2 className="section-title text-center">🌙 Projetos Acadêmicos 🌙</h2>

      <div className="carousel-wrapper">
        <button 
          className="carousel-arrow" 
          onClick={prevSlide} 
          disabled={currentIndex === 0}
        >
          ❮
        </button>

        <div className="carousel-window">
          <div 
            className="carousel-track"
            // Ajustado para 50% para que cada passo desloque o equivalente a 1 card (já que cabem 2 na tela)
            style={{ transform: `translateX(calc(-${currentIndex * 50}% - ${currentIndex * 12}px))` }}
          >
            {projectsData.map((project) => (
              <div 
                className="project-card gray-card" 
                key={project.id}
                onClick={() => setSelectedProject(project)}
                style={{ cursor: "pointer" }}
              >
                {/* Área da Logo do Projeto */}
                <div className="project-card-logo">
                  <img 
                    src={project.logo || "/assets/logos/default-logo.png"} 
                    alt={`Logo ${project.title}`} 
                  />
                </div>

                <div className="project-card-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
                
                <span className="btn-dark text-center mt-3" style={{ display: 'block' }}>
                  Ver detalhes e fotos 👁️
                </span>
              </div>
            ))}
          </div>
        </div>

        <button 
          className="carousel-arrow" 
          onClick={nextSlide} 
          disabled={currentIndex >= maxIndex}
        >
          ❯
        </button>
      </div>

      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
}