import React, { useState } from 'react'
import { Form } from "../components/Form"
import { Card } from "../components/Card"

export const WeatherPanel = () => {
    const APIKey = '185dbcc57e27f9315a49d3f1c762ebd7'; //cf6dfe9efc1682d27c06de53e3233239
    let urlWeather = `https://api.openweathermap.org/data/2.5/weather?appid=${APIKey}&lang=es`;
    let cityUrl = "&q=";

    let urlForecast = `https://api.openweathermap.org/data/2.5/forecast?appid=${APIKey}&lang=es`;

    const [weather, setWeather] = useState([]);
    const [forecast, setForecast] = useState([]);
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    const [location, setLocation] = useState("");

    const getLocation = async(loc) => {
        setLoading(true);
        setLocation(loc);

        urlWeather = urlWeather + cityUrl + loc;

        await fetch(urlWeather).then((response) =>{
            if(!response.ok) throw {response}
            return response.json();
        }).then((weatherData) =>{
            console.log(weatherData);
            setWeather(weatherData);
        }).catch(error =>{
            console.log(error);
            setLoading(false);
            setShow(false);
        });

        urlForecast = urlForecast + cityUrl + loc;
        await fetch(urlForecast).then((response) =>{
            if(!response.ok) throw {response}
            return response.json();
        }).then((forecastData) =>{
            console.log(forecastData);
            setForecast(forecastData);
            setLoading(false);
            setShow(true);
        }).catch(error =>{
            console.log(error);
            setLoading(false);
            setShow(false);
        });
    }
  return (
    <React.Fragment>
        <Form
          newLocation = {getLocation}
        />
        <Card 
          showData = {show}
          loadingData = {loading}
          weather = {weather}
          forecast = {forecast}
          location = {location}
        />
    </React.Fragment>
  )
}
