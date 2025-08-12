import './SobreTexto.css'

function SobreTexto() {
    return (
        <>
            <h1 className="titulo-sobre">Sobre</h1>
            <div className="card-sobre">
                <p className="texto-sobre">
                    Sou um <span style={{ color: 'var(--cor-primaria)' }}>desenvolvedor web</span> especializado na criação de
                    aplicações modernas, funcionais e responsivas. Meu objetivo é transformar ideias em{' '}
                    <span style={{ color: 'var(--cor-primaria)' }}>
                        soluções digitais eficientes,
                    </span>{' '}
                    unindo design intuitivo a um código de alta qualidade. Tenho paixão por tecnologia e estou sempre explorando
                    novas ferramentas para aprimorar meu trabalho. O que me proponho a fazer,{' '}
                    <span style={{ color: 'var(--cor-primaria)' }}>faço com excelência e dedicação.</span>
                </p>
            </div>
        </>
    )
}

export default SobreTexto;
