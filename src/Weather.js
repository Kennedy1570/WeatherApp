import { useState } from "react"

const apiKey = "c3c38c8f99fd3b7d0b2ce2ac0b036da0"
//"IgUsidBBhtira57h5aAiPTHydEMcYzlajJ2FXN1TZNrxAJ66px1DShXXXKSP"

export default function Weather() {

    const[weather, weatherInfo] = useState({})

    function handleSubmit(event) {
        event.preventDefault()
    
        let city = event.target.city.value
        if(!city) {
            alert("Enter a valid city")
            return
        }
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + apiKey)
        .then(response => {
            if(!response.ok){
                throw new Error()
            }
            return response.json()
        })
        .then(data => {
            weatherInfo({
                icon: "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png",
                temp: data.main.temp,
                city: data.name,
                humidity: data.main.humidity,
                speed: data.wind.speed
            })
        })
        .catch(error => {
            alert("Unable to find weather forecast")
        })
    
    }
    return (
        <div className="container my-5">
            <div className="mx-auto rounded border text-center text-white p-4" style={{backgroundColor: "#3B5FAB", width: "400px"}}>
                <h2  className="fw-bold mb-5">Weather Forecast</h2>
                <form className="d-flex mb-3" onSubmit={handleSubmit}>
                    <input className="form-control me-2" placeholder="City" name="city"/>
                    <button className="btn btn-outline-light" type="submit">Search</button>
                </form>

                <img src={weather.icon} alt="Weather icon" />
                <h1 className="display-4 fw-medium">{weather.temp}°C</h1>
                <h1 className="mb-5">{weather.city}</h1>

                <div className="row mb-3">
                    <div className="col">
                        <i className="bi bi-water"></i>Humidity<br/>
                        {weather.humidity}%
                    </div>
                    <div className="col">
                        <i className="bi bi-wind"></i>Wind Speed<br/>
                        {weather.speed}km/h
                    </div>
                </div>
            </div>
        </div>
    )
}