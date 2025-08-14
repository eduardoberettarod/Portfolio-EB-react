import './Servicos.css';
import ServicoCard from '../components/ServicoCard.jsx';
import TecnologiaCard from '../components/TecnologiaCard.jsx';

function Servicos() {
  const servicos = [
    {
      titulo: 'Criação de Sites Responsivos',
      status: 'Disponível',
      statusClass: 'disponivel',
      itens: [
        'Design moderno e adaptável',
        'Performance otimizada',
        'Compatível com todos os dispositivos'
      ]
    },
    {
      titulo: 'Aplicações Web Interativas',
      status: 'Disponível',
      statusClass: 'disponivel',
      itens: [
        'Interfaces dinâmicas',
        'Integração com APIs',
        'Experiência fluida'
      ]
    },
    {
      titulo: 'Teste de Penetração (Pentest)',
      status: 'Em breve',
      statusClass: 'em-breve',
      idDiferente: true,
      itens: [
        'Identificação de vulnerabilidades',
        'Relatórios detalhados',
        'Correções recomendadas'
      ]
    }
  ];

  const tecnologias = [
    { src: 'public/svg/bootstrap.svg', alt: 'Bootstrap', nome: 'Bootstrap' },
    { src: 'public/svg/html.svg', alt: 'HTML', nome: 'HTML' },
    { src: 'public/svg/css.svg', alt: 'CSS', nome: 'CSS' },
    { src: 'public/svg/github.svg', alt: 'GitHub', nome: 'GitHub' },
    { src: 'public/svg/javascript.svg', alt: 'JavaScript', nome: 'JavaScript' },
    { src: 'public/svg/python.svg', alt: 'Python', nome: 'Python' },
    { src: 'public/svg/react.svg', alt: 'React', nome: 'React' },
    { src: 'public/svg/git.svg', alt: 'Git', nome: 'Git' },
  ];

  return (
    <section id="serviços">
      <div className="container-linha">
        <img className="linha" src="public/svg/linha.svg" alt="efeito visual" />
      </div>

      <div className="container-serviços">
        <h1 className="titulo-serviços">Serviços</h1>

        <div className="cards-servicos">
          {servicos.map((servico, i) => (
            <ServicoCard key={i} servico={servico} />
          ))}
        </div>

        <div className="container-skills">
          <div className="container-tecnologias">
            <h2>Tecnologias</h2>
            <div className="icons-tecnologias">
              {tecnologias.map((tec, i) => (
                <TecnologiaCard key={i} tecnologia={tec} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Servicos;
