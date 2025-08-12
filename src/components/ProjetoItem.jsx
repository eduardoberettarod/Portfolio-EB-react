import './ProjetoItem.css';

function ProjetoItem({ projeto, abrirLightbox }) {
  return (
    <div className="projeto-item">
      <a href={projeto.previewLink} target="_blank" className="projeto-img-wrapper" rel="noreferrer">
        <img src={projeto.img} alt={projeto.alt} />
      </a>
      <h2>{projeto.titulo}</h2>
      <a className="ver-github" href={projeto.github} target="_blank" rel="noreferrer">Ver no GitHub</a>
      <p>{projeto.descricao}</p>
      <button 
        className="botao-fullscreen" 
        onClick={() => abrirLightbox(projeto)}
      />
    </div>
  );
}

export default ProjetoItem;
