import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import "../assets/css/galeria.css";

import gestante from "../assets/images/gestante.jpg";
import newborn from "../assets/images/newborn.webp";
import smash from "../assets/images/smash.webp";
import acompanhamento from "../assets/images/acompanhamento.jpg";
import familia from "../assets/images/familia.webp";

const fotos = [
  { id: 1, imagem: gestante, categoria: "Gestantes", titulo: "A espera" },
  { id: 2, imagem: newborn, categoria: "Newborn", titulo: "Primeiros dias" },
  { id: 3, imagem: smash, categoria: "Bebês", titulo: "Pequenas descobertas" },
  { id: 4, imagem: acompanhamento, categoria: "Bebês", titulo: "Cada fase" },
  { id: 5, imagem: familia, categoria: "Família", titulo: "Nossa história" },
  { id: 6, imagem: gestante, categoria: "Gestantes", titulo: "Doce espera" },
];

const categorias = ["Todas", "Gestantes", "Newborn", "Bebês", "Família"];

export default function Galeria() {
  const [filtro, setFiltro] = useState("Todas");
  const [fotoAberta, setFotoAberta] = useState(null);
  const galeriaRef = useRef(null);

  const fotosFiltradas = fotos.filter(
    (foto) => filtro === "Todas" || foto.categoria === filtro,
  );

  useGSAP(
    () => {
      gsap.from(".foto-galeria", {
        opacity: 0,
        y: 25,
        duration: 0.7,
        stagger: 0.1,
        ease: "power2.out",
      });
    },
    { scope: galeriaRef, dependencies: [filtro], revertOnUpdate: true },
  );

  return (
    <section className="Galeria" id="galeria" ref={galeriaRef}>
      <header className="galeria-header">
        <span className="galeria-label">
          <i /> MEMÓRIAS EM IMAGENS
        </span>

        <h2>
          CADA IMAGEM,
          <br />
          <span>UMA HISTÓRIA.</span>
        </h2>

        <p>
          Momentos reais, sentimentos únicos e histórias que merecem ser
          lembradas para sempre.
        </p>
      </header>

      <nav className="galeria-filtros" aria-label="Filtrar galeria">
        {categorias.map((categoria) => (
          <button
            type="button"
            key={categoria}
            className={filtro === categoria ? "filtro ativo" : "filtro"}
            onClick={() => setFiltro(categoria)}
          >
            {categoria}
          </button>
        ))}
      </nav>

      <div className="galeria-grid">
        {fotosFiltradas.map((foto, index) => (
          <button
            type="button"
            className={`foto-galeria foto-pos-${index % 5}`}
            key={foto.id}
            onClick={() => setFotoAberta(foto)}
            aria-label={`Ampliar foto: ${foto.titulo}`}
          >
            <img src={foto.imagem} alt={foto.titulo} loading="lazy" />

            <span className="foto-overlay">
              <span className="foto-categoria">{foto.categoria}</span>
              <span className="foto-titulo">{foto.titulo}</span>
              <span className="foto-ampliar">
                <i className="ri-arrow-up-right-line" />
              </span>
            </span>
          </button>
        ))}
      </div>

      {fotoAberta && (
        <div className="galeria-lightbox" onClick={() => setFotoAberta(null)}>
          <button
            type="button"
            className="fechar-lightbox"
            onClick={() => setFotoAberta(null)}
            aria-label="Fechar imagem"
          >
            ×
          </button>

          <img
            src={fotoAberta.imagem}
            alt={fotoAberta.titulo}
            onClick={(e) => e.stopPropagation()}
          />

          <p>{fotoAberta.titulo}</p>
        </div>
      )}
    </section>
  );
}
