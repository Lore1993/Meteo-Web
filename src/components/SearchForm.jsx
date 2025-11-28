import { Container, Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ImageWithSearch() {
  const [city, setCity] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!city) return;
    navigate(`/city/${city}`);
  };

  return (
    <div className="image-container">
      {/* Immagine di sfondo */}
      <img
        src="src/assets/searchbar.png"
        alt="Meteo"
        className="background-image"
      />

      {/* Search Bar centrata */}
      <div className="search-bar-container">
        <Form className="d-flex" onSubmit={handleSubmit}>
          <Form.Control
            type="text"
            placeholder="Cerca città..."
            className="me-5"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <Button variant="primary" type="submit">
            Cerca
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default ImageWithSearch;
