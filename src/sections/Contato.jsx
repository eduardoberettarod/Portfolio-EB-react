import './Contato.css';
import TituloContato from '../components/TituloContato.jsx';
import FormularioContato from '../components/FormularioContato.jsx';
import RedesSociais from '../components/RedesSociais.jsx';
import CardCV from '../components/CardCV.jsx';

function Contato() {
  return (
    <section id="contato">
      <div className="container-corrente">
        <img src="src/assets/svg/corrente.svg" className="corrente" alt="corrente" />
        <img src="src/assets/svg/orbita.svg" className="orbita" alt="orbita" />
      </div>

      <TituloContato />

      <div className="container-contato">
        <FormularioContato />

        <div className="cards-lado">
          <RedesSociais />
          <CardCV />
        </div>
      </div>
    </section>
  );
}

export default Contato;
