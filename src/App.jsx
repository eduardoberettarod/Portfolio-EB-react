import './App.css'

function App() {

  return (
    <>
      <div className="fundo-retangulo"></div>
      <div className="container-cubo">
        <img src="src\assets\imgs\bola-verde.png" alt="efeito de luz" className="bola" />
        <img src="src\assets\svg\cubo.svg" alt="cubo" className="cubo" />
        <img src="src\assets\svg\fundo-preto.svg" className="fundo" />
      </div>
      <div className="text-home">
        <h1 className="title">EDUARDO BERETTA</h1>
        <p className="subtitle">DESENVOLVEDOR WEB</p>
      </div>
    </>
  )
}

export default App
