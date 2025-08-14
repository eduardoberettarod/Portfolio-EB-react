import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2025 Eduardo Beretta — Todos os direitos reservados.</p>
        <div className="footer-links">
          <a href="https://github.com/eduardoberettarod" target="_blank" rel="noreferrer">
            <img src="src/assets/svg/github.svg" alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/seu-linkedin" target="_blank" rel="noreferrer">
            <img src="src/assets/svg/linkedin.svg" alt="LinkedIn" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
