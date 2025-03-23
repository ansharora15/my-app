import { useState, useEffect } from 'react';

function Home() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiKey = '128a58e14d28d46491179542de72a06d'; 
    const city = 'Halifax';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=Halifax&appid=128a58e14d28d46491179542de72a06d&units=metric`)
      .then(response => response.json())
      .then(data => {
        setWeather(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="hero-section bg-primary text-white text-center py-5">
      <div className="container">
        <h1>Welcome to My Portfolio</h1>
        <p className="lead">
          Hi, I'm a web developer passionate about creating amazing user experiences.
        </p>
        <p>
          I specialize in <strong>React</strong>, <strong>JavaScript</strong>, and <strong>Bootstrap</strong>.
          Check out my work in the <a href="/projects" className="text-white text-decoration-underline">Projects</a> section!
        </p>
        {loading && <p>Loading weather data...</p>}
        {error && <p>Error fetching weather data: {error}</p>}
        {weather && (
          <div className="mt-4">
            <h3>Weather in {weather.name}</h3>
            <p>Temperature: {weather.main.temp}°C</p>
            <p>Humidity: {weather.main.humidity}%</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;