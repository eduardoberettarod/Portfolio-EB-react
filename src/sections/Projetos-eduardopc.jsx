import React, { useState } from 'react';
import './Projetos.css';
import ProjetoItem from '../components/ProjetoItem.jsx';
import Lightbox from '../components/Lightbox.jsx';

function Projetos() {
  const projetos = [
    {
      img: "./imgs/cyberlab.png",
      alt: "projeto cyberlab",
      titulo: "CyberLab",
      github: "https://github.com/eduardoberettarod/CyberLab",
      previewLink: "https://eduardoberettarod.github.io/CyberLab/",
      mesAno: "Maio 2025",
      descricao: "Plataforma educacional interativa sobre cibersegurança, com recursos 3D e animações avançadas."
    },
    {
      img: "./imgs/rastro-urbano.png",
      alt: "projeto rastro-urbano",
      titulo: "Rastro Urbano",
      github: "https://github.com/eduardoberettarod/RastroUrbanoGitDesktop",
      previewLink: "https://eduardoberettarod.github.io/RastroUrbanoGitDesktop/",
      mesAno: "Abril 2025",
      descricao: "Loja virtual responsiva com design moderno e interações dinâmicas."
    },
    {
      img: "./imgs/portfolio.png",
      alt: "projeto portfolio",
      titulo: "Portfólio",
      github: "https://github.com/eduardoberettarod/Portfolio-EB-react",
      previewLink: "https://portfolio-eb-react.vercel.app/",
      mesAno: "Agosto 2025",
      descricao: "Site responsivo para apresentar meus projetos, construído com React e Bootstrap."
    },
    {
      img: "./imgs/pokemon.png",
      alt: "Captura de tela da Pokédex, mostrando uma lista de Pokémon com suas imagens, nomes e tipos.",
      titulo: "Pokédex Simples",
      github: "https://github.com/eduardoberettarod/aula-react-pokemon",
      previewLink: "https://aula-react-pokemon.vercel.app/",
      mesAno: "Agosto 2025",
      descricao: "Aplicação web em React que exibe uma lista de Pokémon com números, nomes, tipos e imagens oficiais da PokéAPI, com design responsivo para celulares e desktops."
    }
  ];

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [projetoSelecionado, setProjetoSelecionado] = useState(null);

  function abrirLightbox(projeto) {
    setProjetoSelecionado(projeto);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  }

  function fecharLightbox() {
    setLightboxOpen(false);
    setProjetoSelecionado(null);
    document.body.style.overflow = '';
  }

  return (
    <>
      <section id="projetos">
        <span className="circulo"></span>

        <div className="container-projetos">
          <h1 className="titulo-projetos">Projetos</h1>

          <div className="cards-projetos">
            {projetos.map((projeto, i) => (
              <ProjetoItem
                key={i}
                projeto={projeto}
                abrirLightbox={abrirLightbox}
              />
            ))}
          </div>
        </div>

        {lightboxOpen && (
          <Lightbox
            projeto={projetoSelecionado}
            fecharLightbox={fecharLightbox}
          />
        )}
      </section>
    </>
  );
}

export default Projetos;
