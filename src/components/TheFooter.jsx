import { Container, Row, Col} from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";


const MeteoFooter = () => {
  return (
    <footer className="text-light pt-5 pb-3 defaultbg">
      <Container>
        {/* Icone social */}
        <Row className=" mb-4">
          <Col className="text-center">
            <i className="bi bi-facebook me-2 footer-icon"></i>
            <i className="bi bi-instagram me-2 footer-icon"></i>
            <i className="bi bi-twitter-x me-2 footer-icon"></i>
            <i className="bi bi-youtube footer-icon"></i>
          </Col>
        </Row>

        {/* Link footer */}
        <Row className="row-cols-1 row-cols-sm-2 row-cols-md-4 text-center text-md-start mb-4">
          <Col className="mb-3">
            <p><a href="#" className="text-decoration-none text-light">Audio and Subtitles</a></p>
            <p><a href="#" className="text-decoration-none text-light">Media Center</a></p>
            <p><a href="#" className="text-decoration-none text-light">Privacy</a></p>
            <p><a href="#" className="text-decoration-none text-light">Contact us</a></p>
          </Col>
          <Col className="mb-3">
            <p><a href="#" className="text-decoration-none text-light">Help Center</a></p>
            <p><a href="#" className="text-decoration-none text-light">Jobs</a></p>
            <p><a href="#" className="text-decoration-none text-light">Cookie Preferences</a></p>
          </Col>
          <Col className="mb-3">
            <p><a href="#" className="text-decoration-none text-light">Gift Cards</a></p>
            <p><a href="#" className="text-decoration-none text-light">Terms of Use</a></p>
            <p><a href="#" className="text-decoration-none text-light">Corporate Information</a></p>
          </Col>
        </Row>

        {/* Copyright */}
        <Row className="justify-content-center">
          <Col className="text-center small">
            © 1993-2025 Meteo, Inc.
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default MeteoFooter;