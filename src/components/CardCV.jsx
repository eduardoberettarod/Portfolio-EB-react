import './CardCV.css';

function CardCV() {
  return (
    <div className="card-info" id="cv">
      <h1>Baixar CV</h1>
      <a 
        href="/documents/curriculo.pdf" 
        download="curriculo-eduardo-beretta.pdf" 
        className="btn-download"
      >
        Download PDF
      </a>
    </div>
  );
}

export default CardCV;
