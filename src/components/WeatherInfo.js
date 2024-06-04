import React from "react";

function WeatherInfo ({data}) {
    if (!data || data.length === 0) {
        return null; // Render nothing if data is not available yet
    }
    const c = data.temp_c;
    const f = data.temp_f;
    const lastUpdated = data.last_updated;
    return (
        <div className="today-weather-container">
            <div>
                <img src={data.condition.icon} alt="icon" />
            </div>
            <div>
            <p>C&deg; {c}</p>
            <p>F&deg; {f}</p>
            <p>Last Updated {lastUpdated}</p>
            </div>
        </div>
    )
}

export default WeatherInfo;