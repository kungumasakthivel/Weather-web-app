import React, { useEffect, useState } from "react";
import axios from "axios";

function Weather() {
    const [location, setLocation] = useState('');
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        const fetchLocation = async() => {
            try {
                const response = await axios.get('https://ipapi.co/json/');
                const data = response.data;
                setLocation(data.city);
            } catch (e) {
                console.error('Error :', e);
            }
        };
        fetchLocation();
        console.log(location);
    }, []);

    const handleSearch = async() => {
        try {
            const response = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=7afae986719f43e0b91135851240406&q=${location}`);
            const data = response.data;
            setWeatherData(data.current);
            console.log(setWeatherData);
        } catch (e) {
            console.error('Error:', e);
        }
    };

    return (
        <div>
            <h1>Weather App</h1>
            <div>
                <input
                    type="text"
                    value={location}
                    onChange={e => setLocation(e.target.value)}
                    placeholder="Enter Location"
                    className="input-location"
                />
                <button onClick={handleSearch}>search</button>
            </div>
            
        </div>
    )
}

export default Weather;