import './FormularioContato.css';
import emailjs from 'emailjs-com';
import { useRef } from 'react';

function FormularioContato() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_eduardo',     // Service ID
      'template_o2k4ixp',    // Template ID
      form.current,
      'ipdcWkPMh0o-WwtED'    // Public Key
    )
    .then(() => {
      alert("Mensagem enviada com sucesso!");
      form.current.reset();
    })
    .catch((err) => {
      alert("Erro ao enviar: " + err.text);
    });
  };

  return (
    <div className="card-form">
      <h1>Entre em contato</h1>
      <form ref={form} onSubmit={sendEmail}>
        <label>Primeiro Nome</label>
        <input type="text" name="primeiro_nome" placeholder="Seu primeiro nome*" required />

        <label>Sobrenome</label>
        <input type="text" name="sobrenome" placeholder="Seu sobrenome*" required />

        <label>E-mail</label>
        <input type="email" name="email" placeholder="Seu e-mail*" required />

        <label>Mensagem</label>
        <textarea name="mensagem" placeholder="Escreva sua mensagem*" required></textarea>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default FormularioContato;
