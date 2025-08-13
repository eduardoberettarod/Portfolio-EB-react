import './TecnologiaCard.css';

function TecnologiaCard({ tecnologia }) {
  return (
    <div className="tecnologia-card">
      <img src={tecnologia.src} alt={tecnologia.alt} className="tecnologias" />
      <span>{tecnologia.nome}</span>
    </div>
  );
}

export default TecnologiaCard;
