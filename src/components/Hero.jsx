import { useState, useEffect } from "react";
import "./Hero.css";
import Imagem from "../assets/Perfil_porfolio.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  const roles = [
    "Desenvolvedora de Software",
    "Entusiasta de UI/UX",
    "Criadora de Experiências Digitais",
  ];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const fullText = roles[currentRoleIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 2000);
          setTypingSpeed(100);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(150);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex, typingSpeed]);

  return (
    <section id="hero" className="hero-section container-padding">
      {/* Camada de estrelas e estrela cadente de fundo */}

      <div className="hero-card">
        <div className="hero-stars-container">
          <span className="shooting-star star-1"></span>
          <span className="shooting-star star-2"></span>
          <span className="shooting-star star-3"></span>
          
          <span className="twinkle-star" style={{ top: '15%', left: '10%' }}></span>
          <span className="twinkle-star" style={{ top: '75%', left: '85%' }}></span>
          <span className="twinkle-star" style={{ top: '30%', left: '90%' }}></span>
          <span className="twinkle-star" style={{ top: '50%', left: '50%' }}></span>
        </div>

        <div className="hero-content-wrapper">
          <div className="hero-image-container">
            <img src={Imagem} alt="Luna Leão" className="hero-photo" />
          </div>

          <div className="hero-text-content">
            <span className="hero-greeting-name">Luna Leão</span>
            <h1 className="hero-title">🌙 Oi! Me chamo Luna! 🌙</h1>

            <p className="hero-subtitle">
              Sou uma <span className="typed-text">{currentText}</span>
              <span className="cursor-blink">|</span>
            </p>

            <div className="hero-actions">
              <a href="#cv" className="hero-btn-cv">
                Download CV 📥
              </a>

              <div className="hero-social-status">
                <div className="status-badge">
                  <span className="status-dot"></span>
                  Disponível para novos projetos
                </div>
                <div className="hero-social-links">
                  <a
                    href="https://github.com/SEU-USUARIO"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <FaGithub size={20} />
                  </a>
                  <a
                    href="https://linkedin.com/in/SEU-USUARIO"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-quote-footer">
          <p>
            "5 minutos a mais no planejamento podem evitar 3 horas a mais de
            código"
          </p>
        </div>
      </div>
    </section>
  );
}
