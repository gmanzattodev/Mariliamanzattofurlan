import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Header from "../../page/Loja/Header";
import Hero from "../../page/Loja/Hero";
import "./App.css";
import Sobre from "../../page/Loja/Sobre";
import Ensaios from "../../page/Loja/Ensaios";
import Revelacao from "../../page/Loja/Revelacao";
import Galeria from "../../page/Loja/Galeria"
import Contato from "../../page/Loja/Contato";

gsap.registerPlugin(SplitText, useGSAP, ScrollTrigger);

function App() {
  const [menu, setMenu] = useState(false);
  const [mobile, setMobile] = useState(window.innerWidth <= 1000);


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
