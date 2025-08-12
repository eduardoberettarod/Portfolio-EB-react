import './Lightbox.css';

function Lightbox({ projeto, fecharLightbox }) {
  if (!projeto) return null;

  return (
    <div id="lightbox" className="lightbox" onClick={e => e.target === e.currentTarget && fecharLightbox()}>
      <div className="lightbox-caixa">
        <button className="fechar" aria-label="Fechar lightbox" onClick={fecharLightbox}>&times;</button>
        <div className="card-projeto">
          <div className="col-esquerda">
            <img id="lb-img" src={projeto.img} alt={projeto.alt} />
            <a id="lb-link" href={projeto.previewLink} target="_blank" rel="noreferrer" className="btn-previa">
              Prévia
              <img src="src/assets/svg/display.svg" alt="Ícone Prévia" className="icon-previa" />
            </a>
          </div>
          <div className="col-direita">
            <div className="info nome">
              <h3>Nome do projeto</h3>
              <h2 id="lb-titulo">{projeto.titulo}</h2>
            </div>
            <div className="info ano-mes">
              <h3>Data de criação</h3>
              <p id="lb-ano">{projeto.mesAno}</p>
            </div>
            <div className="info descricao">
              <h3>Descrição</h3>
              <p id="lb-desc">{projeto.descricao}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lightbox;
