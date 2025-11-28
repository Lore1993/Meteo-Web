import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
import '../MeteoNavBar.css'


function MeteoNavBar() {
  return (
    <div >
      {/* Colonna centrale - contiene le navbar */}
      <div>
        {/* Prima Navbar */}
        <Navbar expand="lg" className="defaultbg mt-5">
          <Container className='mx-5'>
            <Link to="/" className="navbar-title">
              <img 
                src="src/assets/logo.meteo.png" 
                alt="logo" 
                style={{ width: 100, height: 100 }} 
                className='mx-5'
              />
              <h1 >Benvenuto, scopri che tempo fara' oggi nella tua citta'</h1>
            </Link>
          </Container>
        </Navbar>

        {/* QUI DENTRO VANNO GLI ALTRI COMPONENTI */}
        {/* Esempio: <div className="content-area">contenuto qui</div> */}
      </div>
    </div>
  );
}

export default MeteoNavBar;