import './ServicoCard.css';

function ServicoCard({ servico }) {
  return (
    <div className="servico-card">
      <div className="servico-header">
        <h3>{servico.titulo}</h3>
        <span
          className={`status ${servico.statusClass}`}
          {...(servico.idDiferente ? { id: 'diferente' } : {})}
        >
          {servico.status}
        </span>
      </div>
      <ul>
        {servico.itens.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ServicoCard;
