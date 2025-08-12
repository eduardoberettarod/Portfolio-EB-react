import './Redes.css'

function Redes() {

  return (
    <>
    <div className="social-container">
      <a href="https://www.linkedin.com/in/eduardo-beretta-a597ba356/" target="_blank" className="social-link">
        <img src="src\assets\svg\linkedin.svg" alt="LinkedIn" className="social-icon" />
      </a>
      <a href="https://github.com/eduardoberettarod" target="_blank" className="social-link">
        <img src="src\assets\svg\github.svg" alt="GitHub" className="social-icon" />
      </a>
      <a href="public/assets/curriculo.pdf" download="curriculo-eduardo-beretta.pdf" className="social-link">
        <img src="src\assets\svg\file-earmark-person-fill.svg" alt="Baixar Currículo" className="social-icon" />
      </a>
    </div>
    </>
  )
}

export default Redes
