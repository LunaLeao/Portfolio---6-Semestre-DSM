import { useState, useEffect } from "react";
import "./ProjectModal.css";

export default function ProjectModal({ project, onClose }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [project]);

  if (!project) return null;

  const imagesGlob = import.meta.glob('../assets/**/*.{png,jpg,jpeg,svg}', { eager: true });

  const getImageUrl = (path) => {
    if (!path) return "";
    const relativePath = path.replace('/src/', '../');
    return imagesGlob[relativePath]?.default || path;
  };

  const rawImages = Array.isArray(project.images) ? project.images : [];
  const images = rawImages.map(img => getImageUrl(img));
  const hasMultipleImages = images.length > 1;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>

        {/* Wrapper que organiza o modal em colunas lado a lado */}
        <div className="modal-content-grid">
          
          {/* Coluna da Esquerda: Galeria */}
          {images.length > 0 && images[0] && (
            <div className="modal-gallery">
              {hasMultipleImages && (
                <button className="gallery-btn prev" onClick={prevImage}>❮</button>
              )}
              
              <img 
                src={images[currentImageIndex]} 
                alt={`${project.title} Tela ${currentImageIndex + 1}`} 
              />
              
              {hasMultipleImages && (
                <button className="gallery-btn next" onClick={nextImage}>❯</button>
              )}

              {hasMultipleImages && (
                <div className="gallery-dots">
                  {images.map((_, idx) => (
                    <span 
                      key={idx} 
                      className={`dot ${idx === currentImageIndex ? 'active' : ''}`}
                      onClick={() => setCurrentImageIndex(idx)}
                    />
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Coluna da Direita: Informações */}
          <div className="modal-info">
            <h2>{project.title}</h2>
            <p>{project.description}</p>

            {project.role && (
              <div className="modal-role-box">
                <span className="role-label">🌙 Meu Papel:</span>
                <p className="role-text">{project.role}</p>
              </div>
            )}

            <div className="modal-tech">
              {project.technologies && project.technologies.map((tech) => (
                <span key={tech} className="tech-badge">{tech}</span>
              ))}
            </div>

            <div className="modal-links">
              {project.link && (
                <a href={project.link} target="_blank" rel="noreferrer" className="modal-btn solid">
                  Ver no GitHub 🚀
                </a>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}