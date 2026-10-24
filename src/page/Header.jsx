import { useEffect, useState } from "react";
import "../assets/css/header.css";

export default function Header({ menu, setMenu, mobile, setMobile }) {
  const [animacao, setAnimacao] = useState(false);

  useEffect(() => {
    function verificarScroll() {
      setAnimacao(window.scrollY > 40);
    }

    function verificarLargura() {
      const isMobile = window.innerWidth <= 1000;

      setMobile(isMobile);

      if (!isMobile) {
        setMenu(false);
      }
    }

    verificarScroll();
    verificarLargura();

    window.addEventListener("scroll", verificarScroll, { passive: true });
    window.addEventListener("resize", verificarLargura);

    return () => {
      window.removeEventListener("scroll", verificarScroll);
      window.removeEventListener("resize", verificarLargura);
    };
  }, [setMobile, setMenu]);

  function fecharMenu() {
    setMenu(false);
  }

  return (
    <header className={animacao ? "header header-scroll" : "header"}>
      <a
        href="#inicio"
        className="header-logo"
        aria-label="Voltar ao início"
        onClick={fecharMenu}
      >
        <img src="/logo.png" alt="Marília Manzatto Foto e Vídeo" />
      </a>

      <nav
        id="menu-principal"
        className={`navbar ${mobile ? "navbar-mobile" : ""} ${
          mobile && menu ? "menu-aberto" : ""
        }`}
        aria-label="Navegação principal"
      >
        <a href="#sobre" onClick={fecharMenu}>
          Sobre
        </a>
        <a href="#ensaios" onClick={fecharMenu}>
          Ensaios
        </a>
        <a href="#revelacao" onClick={fecharMenu}>
          Revelação
        </a>
        <a href="#galeria" onClick={fecharMenu}>
          Galeria
        </a>
        <a href="#contato" onClick={fecharMenu}>
          Contato
        </a>
      </nav>

      <div className="header-acoes">
        <a href="#contato" className="header-agendar" onClick={fecharMenu}>
          <span>Agendar ensaio</span>
          <i className="ri-arrow-up-right-line" aria-hidden="true"></i>
        </a>

        {mobile && (
          <button
            type="button"
            className={`menu-toggle ${menu ? "toggle-ativo" : ""}`}
            onClick={() => setMenu((anterior) => !anterior)}
            aria-label={menu ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menu}
            aria-controls="menu-principal"
          >
            <i
              className={menu ? "ri-close-line" : "ri-menu-4-line"}
              aria-hidden="true"
            ></i>
          </button>
        )}
      </div>
    </header>
  );
}
