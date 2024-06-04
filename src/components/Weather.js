import React, {useEffect, useState } from "react";
import axios from "axios";
import WeatherInfo from './WeatherInfo';
import OtherInfo from "./OtherInfo";

function Weather() {
    const [location, setLocation] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    // const [locLoading, setLocLoading] = useState(false);
    const [conLoading, setConLoading] = useState(false);
    const [locData, setLocData] = useState(null);


    useEffect(() => {
        const fetchLocation = async() => {
            // setLocLoading(true);
            console.log('fetch loc');
            try {
                const response = await axios.get('https://ipapi.co/json/');
                const data = response.data;
                setLocation(data.city);
            } catch (e) {
                console.error('Error :', e);
            }
            console.log('done');
            // setLocLoading(false);
        };
        fetchLocation();
    }, []);

    const handleSearch = async() => {
        if(location === '') return ;
        setWeatherData(null);
        setConLoading(true);
        try {
            const response = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=7afae986719f43e0b91135851240406&q=${location}`);
            const data = response.data;
            setLocData(data.location)
            setWeatherData(data.current);
            console.log(setWeatherData);
        } catch (e) {
            console.error('Error:', e);
        }
        setConLoading(false);
    };

    return (
        <div className="app-container">
            <h1>Weather App</h1>
            <div className="input-containe">
                <input
                    type="text"
                    value={location}
                    onChange={e => setLocation(e.target.value)}
                    // placeholder={locLoading ? 'Loding...':'Enter Location'}
                    className="input-location"
                />
                <button onClick={handleSearch}>search</button>
                {/* <p>{locLoding ? 'Loading...' : null}</p> */}
            </div>
            {conLoading && 
                <h3>Loading...</h3>
            }
            {weatherData && 
            <div className="info-container">
                <div>
                    <WeatherInfo data={weatherData} locData={locData} />
                </div>
                <div>
                    <OtherInfo data={weatherData} />
                </div>
                
            </div>
            }
        </div>
    )
}

export default Weather;