import HandImage from '../components/HandImage.jsx';
import SobreTexto from '../components/SobreTexto.jsx';
import SoftSkills from '../components/SoftSkills.jsx';
import './Sobre.css'

function Sobre() {
  return (
    <>
      <section id="sobre">
        <HandImage />
        <div className="container-sobre">
          <SobreTexto />
          <SoftSkills />
        </div>
      </section>
    </>
  )
}

export default Sobre;
