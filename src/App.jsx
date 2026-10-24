import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Header from "./page/Header";
import Hero from "./page/Hero";
import "./App.css";
import Sobre from "./page/Sobre";
import Ensaios from "./page/Ensaios";
import Revelacao from "./page/Revelacao";
import Galeria from "./page/Galeria"
import Contato from "./page/Contato";

gsap.registerPlugin(SplitText, useGSAP, ScrollTrigger);

function App() {
  const [menu, setMenu] = useState(false);
  const [mobile, setMobile] = useState(window.innerWidth <= 1000);
  const [animacaoFixed, setAnimacaoFixed] = useState(false);

  useEffect(() => {
    const AnimationFixed = () => {
      if (window.scrollY > 900) {
        setAnimacaoFixed(true);
      } else {
        setAnimacaoFixed(false);
      }
    };

    window.addEventListener("scroll", AnimationFixed);

    return () => {
      window.removeEventListener("scroll", AnimationFixed);
    };
  }, []);

  return (
    <>
      <Header
        menu={menu}
        setMenu={setMenu}
        setMobile={setMobile}
        mobile={mobile}
      />
      <Hero mobile={mobile} />
      <section className="foto-fundo">
        <Sobre />
        <Ensaios />
      </section>
      <Revelacao />
      <Galeria />
      <Contato />
    </>
  );
}

export default App;
