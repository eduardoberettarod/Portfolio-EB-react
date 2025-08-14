import './EfeitoV.css'

function EfeitoV() {

    return (
        <>
            <div className="fundo-retangulo"></div>
            <div className="container-cubo">
                <img src="./imgs/bola-verde.png" alt="efeito de luz" className="bola" />
                <img src="./svg/cubo.svg" alt="cubo" className="cubo" />
                <img src="./svg/fundo-preto.svg" className="fundo" />
            </div>
            <div className="scroll">
                <p>SCROLL</p>
            </div>
        </>
    )
}

export default EfeitoV
