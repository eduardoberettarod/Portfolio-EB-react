import Mouse from '../components/Mouse.jsx';
import Navbar from '../components/Navbar.jsx'
import EfeitoV from '../components/Efeito.jsx';
import Titulo from '../components/Titulo.jsx';
import Redes from '../components/Redes.jsx';
import './Home.css'

function Home() {

    return (
        <>
            <section id='home-page'>
                <Navbar />
                <EfeitoV />
                <Titulo />
                <Redes />
            </section>
            <Mouse />
        </>
    )
}

export default Home
