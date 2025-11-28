import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import MeteoCard from "./MeteoCard";

const API_KEY = "d5fde90ea0a96b15e20005703bf9bea2";

const CityDetails = () => {
  const { city } = useParams();
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric&lang=it`;
      const res = await fetch(url);
      const data = await res.json();
      setWeather(data);
    };

    fetchWeather();
  }, [city]);

  return (
    <div className="container py-4">
      <h1 className="mb-4">Meteo per {city}</h1>
      <MeteoCard weather={weather} />
    </div>
  );
};

export default CityDetails;