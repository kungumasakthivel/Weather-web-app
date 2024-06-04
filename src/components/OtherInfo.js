import React from "react";

function OtherInfo({data}) {
    return (
        <div className="other-info-container">
            <div>
                <p style={{textAlign:'center'}}>{data.condition.text}</p>
            </div>
            <div>
                <div className="other-info">
                    <p>UV: {data.uv}</p>
                    <p>Humidity: {data.humidity}</p>
                </div>
                <div className="other-info">
                    <p>Visibility: {data.vis_km}/kph</p>
                    <p>Wind Speed: {data.wind_kph}/kph</p>
                </div>
            </div>
        </div>
    )
}

export default OtherInfo;