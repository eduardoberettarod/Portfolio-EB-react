import './EfeitoV.css'

function EfeitoV() {

    return (
        <>
            <div className="fundo-retangulo"></div>
            <div className="container-cubo">
                <img src="src\assets\imgs\bola-verde.png" alt="efeito de luz" className="bola" />
                <img src="src\assets\svg\cubo.svg" alt="cubo" className="cubo" />
                <img src="src\assets\svg\fundo-preto.svg" className="fundo" />
            </div>
            <div className="scroll">
                <p>SCROLL</p>
            </div>
        </>
    )
}

export default EfeitoV
