<div align="center">

<img src="./public/logo.png" alt="Marília Manzatto Foto & Vídeo" width="190" />

# Marília Manzatto Furlan
### Histórias reais. Memórias eternas.

Site de fotografia que reúne ensaios, memórias e atendimento em uma experiência visual com React e GSAP.

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=111111)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=111111)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-3-88CE02?style=for-the-badge&logo=greensock&logoColor=111111)
![CSS](https://img.shields.io/badge/CSS-663399?style=for-the-badge&logo=css&logoColor=white)

[Sobre](#sobre-o-projeto) · [Recursos](#recursos) · [Executar](#como-executar) · [Estrutura](#organização-do-código)

</div>

---

## Sobre o projeto

Uma vitrine digital para o trabalho de **Marília Manzatto Furlan**, com foco em fotografia de gestantes, newborn, bebês e famílias.

O site organiza a apresentação da fotógrafa, os tipos de ensaio, a galeria e o contato em uma única página. A identidade visual combina fundos escuros, detalhes em tons de cobre, tipografia Bodoni Moda e Montserrat e fotografias em destaque.

> “Fotografia é o meu jeito de ver o mundo.”

## Recursos

| Experiência | O que está implementado |
| --- | --- |
| **Apresentação visual** | Seção inicial com animação de texto por caracteres usando GSAP SplitText. |
| **Navegação adaptável** | Cabeçalho fixo com mudança de aparência na rolagem e menu para telas menores. |
| **Por trás das lentes** | Apresentação da fotógrafa com animação acionada por ScrollTrigger. |
| **Ensaios** | Cards para Gestante, Newborn, Smash, Acompanhamento e Família. |
| **Galeria interativa** | Filtros por categoria, animação na troca de filtro e ampliação de imagens em lightbox. |
| **Revelação de fotos** | Seleção de formatos e quantidades, agrupamento por tamanho, remoção de itens e total de fotos. |
| **Atendimento pelo WhatsApp** | Preparação de mensagens com os itens de revelação ou os dados do formulário de contato. |

### Como funciona o pedido de revelação

1. Escolha entre **10×15, 13×18, 15×21, 20×25 e 20×30 cm**.
2. Informe a quantidade e adicione o formato ao pedido.
3. Confira os itens e o total de fotos.
4. Abra o WhatsApp com a mensagem pronta para enviar e combinar o atendimento.

O pedido é mantido no estado do React durante a sessão da página. O fluxo atual prepara a conversa pelo WhatsApp; não inclui pagamento, upload de fotos ou gravação de pedidos em um servidor.

## Tecnologias

| Tecnologia | Uso no projeto |
| --- | --- |
| **React 19 + React DOM** | Componentes, estados e renderização da interface. |
| **JavaScript / JSX** | Filtros, interação com formulários e composição dos pedidos. |
| **CSS** | Layout, identidade visual, transições e media queries. |
| **GSAP + @gsap/react** | Integração das animações com os componentes React. |
| **SplitText + ScrollTrigger** | Animação por caracteres e efeitos vinculados à rolagem. |
| **Vite 8** | Servidor de desenvolvimento e build de produção. |
| **ESLint** | Análise estática do código. |
| **Remix Icon + Google Fonts** | Ícones e fontes carregados por serviços externos. |

## Como executar

Tenha **Node.js em uma versão compatível com Vite 8**, npm e Git instalados.

```bash
git clone https://github.com/gmanzattodev/Mariliamanzattofurlan.git
cd Mariliamanzattofurlan
npm ci
npm run dev
```

Abra no navegador o endereço informado pelo Vite no terminal.

### Comandos disponíveis

| Comando | Função |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento. |
| `npm run build` | Gera os arquivos de produção em `dist/`. |
| `npm run preview` | Disponibiliza uma prévia local do build de produção. |
| `npm run lint` | Executa o ESLint no projeto. |

Para visualizar a versão de produção localmente:

```bash
npm run build
npm run preview
```

## Organização do código

| Caminho | Responsabilidade |
| --- | --- |
| `public/logo.png` | Logotipo utilizado no cabeçalho. |
| `src/main.jsx` | Ponto de entrada da aplicação. |
| `src/App.jsx` | Composição das seções e registro dos plugins GSAP. |
| `src/page/Header.jsx` | Navegação, menu mobile e comportamento do cabeçalho. |
| `src/page/Hero.jsx` | Apresentação inicial e animação do título. |
| `src/page/Sobre.jsx` | Apresentação da fotógrafa. |
| `src/page/Ensaios.jsx` | Categorias de ensaios fotográficos. |
| `src/page/Revelacao.jsx` | Montagem dos pedidos de revelação. |
| `src/page/Galeria.jsx` | Filtros e visualização ampliada das fotos. |
| `src/page/Contato.jsx` | Formulário que prepara a mensagem para o WhatsApp. |
| `src/assets/components/cards.jsx` | Componente reutilizável dos cards de ensaio. |
| `src/assets/css/` | Estilos organizados por seção. |
| `src/assets/images/` | Fotografias e imagens de fundo. |
| `index.html` | Documento base, fontes e biblioteca de ícones. |

## Personalização

- **Fotografias:** substitua os arquivos em `src/assets/images/` e ajuste os imports quando necessário.
- **Galeria:** edite os arrays `fotos` e `categorias` em `src/page/Galeria.jsx`.
- **Formatos de revelação:** altere `tamanhosDisponiveis` em `src/page/Revelacao.jsx` e ajuste os estilos das proporções em `src/assets/css/revelacao.css`.
- **WhatsApp:** atualize `telefone` em `Revelacao.jsx` e `numeroWhatsApp` em `Contato.jsx`, usando o número com código do país e DDD, apenas com dígitos.
- **Identidade visual:** ajuste os arquivos em `src/assets/css/`, o logotipo em `public/` e as fontes em `index.html`.

## Autor e licença

Desenvolvido por **[Giovani Manzatto](https://github.com/gmanzattodev)** para apresentar o trabalho de **Marília Manzatto Foto & Vídeo**.

Este repositório contém uma licença **[MIT](./LICENSE)**.

---

<div align="center">

**Cada imagem, uma história. Cada fase, uma memória.**

</div>
