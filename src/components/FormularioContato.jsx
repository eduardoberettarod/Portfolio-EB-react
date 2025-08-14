import './FormularioContato.css';

function FormularioContato() {
  return (
    <div className="card-form">
      <h1>Entre em contato</h1>
      <form>
        <label>Primeiro Nome</label>
        <input type="text" placeholder="Seu primeiro nome*" required />

        <label>Sobrenome</label>
        <input type="text" placeholder="Seu sobrenome*" required />

        <label>E-mail</label>
        <input type="email" placeholder="Seu e-mail*" required />

        <label>Mensagem</label>
        <textarea placeholder="Escreva sua mensagem*" required></textarea>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default FormularioContato;
