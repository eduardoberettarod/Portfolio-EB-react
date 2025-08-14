import './RedesSociais.css';

function RedesSociais() {
  return (
    <div>
      <h1 className="redes-contato">Redes Sociais</h1>
      <div className="redes">
        <a href="https://github.com/eduardoberettarod" target="_blank" rel="noreferrer">
          <img src="public/svg/github.svg" alt="GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/eduardo-beretta-a597ba356/" target="_blank" rel="noreferrer">
          <img src="public/svg/linkedin.svg" alt="LinkedIn" />
        </a>
      </div>
    </div>
  );
}

export default RedesSociais;
