import { useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import "../../assets/css/hero.css";

export default function Hero({ mobile }) {
  const heroRef = useRef(null);

  useGSAP(() => {
      const texto = SplitText.create(".titulo", {
        type: "chars",
        charsClass: "char",
      });

      gsap.from(texto.chars, {
        opacity: 0,
        y: 50,
        duration: 2,
        stagger: 0.10,
        ease: "power3.out",
      });

      return () => texto.revert();
  },{ scope: heroRef },);

  return (
    <section ref={heroRef} className="Hero" id="inicio">
      <article className={mobile ? "info-hero mobilehero" : "info-hero"}>
        <h3>CAPTURANDO O QUE REALMENTE IMPORTA</h3>

        <h1 className="titulo">FOTOGRAFIA</h1>

        <p>
          Histórias reais, emoções autênticas
          <br />
          e momentos que merecem ser
          <br />
          lembrados para sempre.
        </p>

        <button>
          CONHEÇA MEU TRABALHO
          <i className="ri-arrow-right-line"></i>
        </button>
      </article>

      <div className="informacoes">
        <p className={mobile ? "mobiP" : ""}>
          ENSAIOS - NEWBORN - GESTANTES - FAMÍLIA
        </p>

        <i className="ri-arrow-down-line"></i>
      </div>
    </section>
  );
}
