import { useState, useEffect } from "react";
import "./Header.css";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Se rolou mais de 50px para baixo, ativa o estado de "scrolled"
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    // Limpeza do evento quando o componente for desmontado
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // A classe 'scrolled' é adicionada dinamicamente
    <header className={`floating-header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-logo">
        <a href="#top">Luna.Dev</a>
      </div>
      
      <nav className="header-nav">
        <ul>
          <li><a href="#about">Sobre</a></li>
          <li><a href="#education">Formações</a></li>
          <li><a href="#skills">Habilidades</a></li>
          <li><a href="#experience">Experiência</a></li>
          <li><a href="#projects">Projetos</a></li>
          <li><a href="#hobbies">Offline</a></li>
        </ul>
      </nav>
    </header>
  );
}