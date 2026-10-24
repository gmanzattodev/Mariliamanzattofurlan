import { useState } from "react";
import "../assets/css/contato.css";

export default function Contato() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [ensaio, setEnsaio] = useState("Gestante");
  const [mensagem, setMensagem] = useState("");

  function enviarWhatsApp(e) {
    e.preventDefault();

    const numeroWhatsApp = "551934638925"; 

    const texto = `
Olá! Gostaria de solicitar informações sobre um ensaio fotográfico.

Nome: ${nome}
Contato: ${telefone}
Tipo de ensaio: ${ensaio}

Mensagem: ${mensagem || "Gostaria de saber mais informações."}
    `;

    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(
      texto,
    )}`;

    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <section className="Contato" id="contato">
      <div className="contato-container">
        <div className="contato-info">
          <span className="contato-label">
            <span className="contato-ponto"></span>
            VAMOS CONVERSAR
          </span>

          <h2>
            SUA HISTÓRIA
            <br />
            MERECE SER
            <br />
            <span>REGISTRADA.</span>
          </h2>

          <p>
            Cada momento tem algo especial. Conte um pouco sobre o que você
            deseja registrar e vamos planejar juntos um ensaio único.
          </p>

          <div className="contato-detalhe">
            <span className="contato-icone">
              <i className="ri-whatsapp-line"></i>
            </span>

            <div>
              <small>FALE DIRETAMENTE</small>
              <h3>Vamos conversar pelo WhatsApp</h3>
            </div>
          </div>

          <div className="contato-detalhe">
            <span className="contato-icone">
              <i className="ri-camera-lens-line"></i>
            </span>

            <div>
              <small>FOTOGRAFIA COM PROPÓSITO</small>
              <h3>Momentos que ficam para sempre</h3>
            </div>
          </div>
        </div>

        <form className="contato-form" onSubmit={enviarWhatsApp}>
          <div className="form-topo">
            <span>01 / CONTATO</span>
            <span>VAMOS COMEÇAR</span>
          </div>

          <h3>Conte-nos sua ideia.</h3>

          <p>Preencha os campos abaixo para iniciar seu atendimento.</p>

          <label htmlFor="nome">Seu nome</label>
          <input
            id="nome"
            type="text"
            placeholder="Como podemos te chamar?"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />

          <label htmlFor="telefone">Seu telefone</label>
          <input
            id="telefone"
            type="tel"
            placeholder="(00) 00000-0000"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            required
          />

          <label htmlFor="ensaio">Qual ensaio você procura?</label>
          <select
            id="ensaio"
            value={ensaio}
            onChange={(e) => setEnsaio(e.target.value)}
          >
            <option value="Gestante">Gestante</option>
            <option value="Newborn">Newborn</option>
            <option value="Acompanhamento">Acompanhamento</option>
            <option value="Smash the Cake">Smash the Cake</option>
            <option value="Família">Família</option>
            <option value="Outro">Outro</option>
          </select>

          <label htmlFor="mensagem">
            Conte um pouco mais <span>(opcional)</span>
          </label>
          <textarea
            id="mensagem"
            placeholder="Data prevista, idade do bebê ou sua ideia..."
            rows="3"
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
          />

          <button type="submit" className="contato-enviar">
            INICIAR CONVERSA
            <i className="ri-arrow-right-up-line"></i>
          </button>

          <small className="contato-aviso">
            Você será direcionado ao WhatsApp para enviar sua mensagem.
          </small>
        </form>
      </div>

      <div className="contato-rodape">
        <span>MARÍLIA MANZATTO FOTO & VÍDEO</span>
        <span>HISTÓRIAS REAIS. MEMÓRIAS ETERNAS.</span>
      </div>
    </section>
  );
}
