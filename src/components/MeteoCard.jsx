const MeteoCard = ({ weather }) => {
  if (!weather || !weather.list) return <p>Caricamento...</p>;

  const info = weather.list[0]; // il primo risultato (adesso)
  
  return (
    <div
      className="card mx-auto p-4 sfondoCard"
    >
      <img
        src="assets/city.png"
        alt="weather"
        style={{ width: "120px" }}
        className="mx-auto mb-3"
      />

      <h2>{weather.city.name} </h2>
      <p><strong>Sea level:</strong> {info.main.sea_level ?? "N/A"}</p>
      <h3 className="text-muted">{info.weather[0].description}</h3>
     
<div className="details">
      <p><strong>Temp min:</strong> {info.main.temp_min}°C</p>
      <p><strong>Temp max:</strong> {info.main.temp_max}°C</p>
      <p><strong>Percepita:</strong> {info.main.feels_like}°C</p>
      </div>
    </div>
  );
};

export default MeteoCard;