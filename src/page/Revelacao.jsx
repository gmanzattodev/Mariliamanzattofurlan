import { useState } from "react";
import "../assets/css/revelacao.css";

const tamanhosDisponiveis = ["10x15", "13x18", "15x21", "20x25", "20x30"];

export default function Revelacao() {
  const [tamanho, setTamanho] = useState("10x15");
  const [quantidade, setQuantidade] = useState(1);
  const [pedido, setPedido] = useState([]);

  function adicionarPedido() {
    const tamanhoValido = tamanhosDisponiveis.find(
      (item) => item === tamanho.trim(),
    );

    if (!tamanhoValido || Number(quantidade) < 1) {
      alert("Selecione um tamanho válido e uma quantidade maior que zero.");
      return;
    }

    setPedido((anterior) => {
      const existente = anterior.find((item) => item.tamanho === tamanhoValido);

      if (existente) {
        return anterior.map((item) =>
          item.tamanho === tamanhoValido
            ? {
                ...item,
                quantidade: item.quantidade + Number(quantidade),
              }
            : item,
        );
      }

      return [
        ...anterior,
        {
          tamanho: tamanhoValido,
          quantidade: Number(quantidade),
        },
      ];
    });

    setQuantidade(1);
  }

  function removerItem(tamanhoRemover) {
    setPedido((anterior) =>
      anterior.filter((item) => item.tamanho !== tamanhoRemover),
    );
  }

  function enviarWhatsApp() {
    if (pedido.length === 0) {
      alert("Adicione pelo menos um tamanho ao pedido.");
      return;
    }

    const telefone = "551934638925"; // Troque pelo WhatsApp da cliente

    const itens = pedido
      .map(
        (item) =>
          `• Tamanho: ${item.tamanho} cm | Quantidade: ${item.quantidade} foto(s)`,
      )
      .join("\n");

    const mensagem = `Olá! Gostaria de fazer um pedido de revelação de fotos.\n${itens}\nGostaria de confirmar meu pedido!`;

    const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, "_blank", "noopener,noreferrer");
  }

  const totalFotos = pedido.reduce((total, item) => total + item.quantidade, 0);

  return (
    <section className="revelacao">
      <div className="revelacao-header">
        <span className="revelacao-label">
          <span className="ponto-laranja" />
          REVELAÇÃO DE FOTOS
        </span>

        <h2>
          Suas memórias,
          <br />
          <span>impressas para sempre.</span>
        </h2>

        <p>
          Escolha os tamanhos, informe a quantidade e prepare seu pedido de
          revelação.
        </p>
      </div>

      <div className="painel-revelacao">
        <div className="painel-titulo">
          <div>
            <span className="etapa">01 / FORMATOS</span>
            <h3>Escolha o tamanho</h3>
          </div>

          <span className="contador-formatos">
            {tamanhosDisponiveis.length} opções
          </span>
        </div>

        <div className="tamanhos">
          {tamanhosDisponiveis.map((item) => (
            <button
              type="button"
              key={item}
              className={`tamanho-card ${
                tamanho === item ? "selecionado" : ""
              }`}
              onClick={() => setTamanho(item)}
            >
              <span className="tamanho-icone">
                <span
                  className={`foto-proporcao proporcao-${item.replace("x", "-")}`}
                />
              </span>

              <strong>{item}</strong>
              <span className="tamanho-unidade">cm</span>

              {tamanho === item && <span className="check-tamanho">✓</span>}
            </button>
          ))}
        </div>

        <div className="formulario-revelacao">
          <label>
            Tamanho da foto
            <input
              type="text"
              list="lista-tamanhos"
              value={tamanho}
              onChange={(e) => setTamanho(e.target.value)}
              placeholder="Ex.: 10x15"
            />
            <datalist id="lista-tamanhos">
              {tamanhosDisponiveis.map((item) => (
                <option key={item} value={item} />
              ))}
            </datalist>
          </label>

          <label>
            Quantidade de fotos
            <input
              type="number"
              min="1"
              step="1"
              value={quantidade}
              onChange={(e) => setQuantidade(e.target.value)}
            />
          </label>

          <button
            type="button"
            className="botao-adicionar"
            onClick={adicionarPedido}
          >
            Adicionar ao pedido
            <span>＋</span>
          </button>
        </div>

        <div className="pedido-revelacao">
          <div className="pedido-titulo">
            <h3>Seu pedido</h3>
            <span>{totalFotos} fotos</span>
          </div>

          {pedido.length === 0 ? (
            <div className="pedido-vazio">
              <span className="pedido-vazio-icone">＋</span>
              <p>Suas fotos aparecerão aqui.</p>
              <span>Selecione um formato e adicione ao pedido.</span>
            </div>
          ) : (
            <div className="lista-pedido">
              {pedido.map((item) => (
                <div className="pedido-item" key={item.tamanho}>
                  <div className="miniatura-pedido">
                    <span
                      className={`foto-proporcao proporcao-${item.tamanho.replace(
                        "x",
                        "-",
                      )}`}
                    />
                  </div>

                  <div className="pedido-item-info">
                    <strong>{item.tamanho} cm</strong>
                    <span>Revelação fotográfica</span>
                  </div>

                  <span className="pedido-quantidade">
                    {item.quantidade} un.
                  </span>

                  <button
                    type="button"
                    className="remover-item"
                    onClick={() => removerItem(item.tamanho)}
                    aria-label={`Remover tamanho ${item.tamanho}`}
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          )}

          {pedido.length > 0 && (
            <button
              type="button"
              className="botao-whatsapp"
              onClick={enviarWhatsApp}
            >
              <i className="ri-whatsapp-line" />
              Enviar pedido pelo WhatsApp
              <span>↗</span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
