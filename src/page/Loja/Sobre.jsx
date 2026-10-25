import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "../../assets/css/sobre.css";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Sobre() {
  const titulo = useRef(null);

  useGSAP(() => {
    gsap.from(titulo.current, {
      y: 100,
      duration: 3,
      opacity: 0,
      ease: "bounce.out",
      scrollTrigger: {
        trigger: ".Sobre",
        start: "top 80%",
        toggleActions: "play none none reverse",
       
      },
    });
  });

  return (
    <>
      <section className="Sobre" id="sobre">
        <article className="info-sobre">
          <h3>POR TRÁS DAS LENTES</h3>
          <h2 ref={titulo}>
            <span>FOTOGRAFIA</span>
            <br />É O MEU JEITO <br />
            DE VER O MUNDO.
          </h2>
          <p>
            Sou a Marília Manzatto Furlan, fotógrafa apaixonada <br /> por
            contar histórias reais através de imagens. Cada clique <br /> é um
            pedaço de vida, e meu propósito é transformar <br /> momentos
            simples em lembranças que duram para sempre.
          </p>
        </article>
      </section>
    </>
  );
}
