import React from 'react'
import { Loading } from "./Loading"
import "../styles/card.css"
import { AirOutlined, WavesOutlined } from '@mui/icons-material';
import { NotFound } from './NotFound';
import { Welcome } from './Welcome';

export const Card = ({showData, loadingData, weather, forecast, location}) => {
  var today = new Date();
  var day = today.getDate();
  var month = today.getMonth() + 1;
  var year = today.getFullYear();
  var date = day + "/" + month + "/" + year;

  var url = "";
  var iconUrl = "";

  var iconUrl3 = "";
  var iconUrl6 = "";
  var iconUrl9 = "";

  var forecastDate3 = "";
  var forecastDate6 = "";
  var forecastDate9 = "";

  var paisaje = "";

  console.log(location.length);

  if(loadingData) {
    return <Loading />
  }

  if(showData) {
    url = "http://openweathermap.org/img/w/";
    iconUrl = url + weather.weather[0].icon + ".png";

    iconUrl3 = url + forecast.list[1].weather[0].icon + ".png";
    iconUrl6 = url + forecast.list[1].weather[0].icon + ".png";
    iconUrl9 = url + forecast.list[1].weather[0].icon + ".png";

    forecastDate3 = forecast.list[1].dt_txt.substring(8, 10) + '/' + forecast.list[1].dt_txt.substring(5, 7) + '/' + forecast.list[1].dt_txt.substring(0, 4) + ' ' +  forecast.list[1].dt_txt.substring(11, 13);
    forecastDate6 = forecast.list[2].dt_txt.substring(8, 10) + '/' + forecast.list[2].dt_txt.substring(5, 7) + '/' + forecast.list[2].dt_txt.substring(0, 4) + ' ' +  forecast.list[2].dt_txt.substring(11, 13);
    forecastDate9 = forecast.list[3].dt_txt.substring(8, 10) + '/' + forecast.list[3].dt_txt.substring(5, 7) + '/' + forecast.list[3].dt_txt.substring(0, 4) + ' ' +  forecast.list[3].dt_txt.substring(11, 13);
    
    if(weather.weather[0].description == "muy nuboso") {
      paisaje = "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/storm-clouds-falling-in-black-and-white-vertical-gill-billington.jpg";
    }
    
    if(weather.weather[0].description == "nubes dispersas") {
      paisaje = "https://us.123rf.com/450wm/a454/a4541601/a454160100016/50886536-nubes-dispersas-por-el-cielo-las-nubes-se-dispersaron-en-un-d%C3%ADa-claro-y-despejado-.jpg";
    }

    if(weather.weather[0].description == "cielo claro") {
      paisaje = "https://img.freepik.com/fotos-premium/cielo-azul-claro-gradiente-oscuro-claro-vertical_156745-1219.jpg"
    }

    if(weather.weather[0].description == "llovizna ligera") {
      paisaje = "https://w0.peakpx.com/wallpaper/591/944/HD-wallpaper-drizzle-drops-glass-outside-rain-water-weather-window.jpg"
    }

    if(weather.weather[0].description == "nubes") {
      paisaje = "https://i.pinimg.com/originals/f5/40/4b/f5404bf8c55f73d41e00eee5a8d05ed1.jpg"
    }

    if(weather.weather[0].description == "lluvia ligera") {
      paisaje = "https://img.freepik.com/fotos-premium/gotas-lluvia-caen-sobre-ventana-fuertes-lluvias_67721-447.jpg?w=2000";
    }

    if(weather.weather[0].description == "lluvia moderada") {
      paisaje = "https://i.pinimg.com/236x/a0/ac/63/a0ac6357ef6a3337514e0af94ea070f1.jpg"
    }

    if(weather.weather[0].description == "algo de nubes") {
      paisaje = "https://img.freepik.com/fotos-premium/cielo-azul-nubes-fondo-vertical-espacio-texto_483040-2621.jpg?w=2000"
    }

    if(weather.weather[0].description == "nevada ligera") {
      paisaje = "https://w0.peakpx.com/wallpaper/606/225/HD-wallpaper-winter-red-berries-berries-trees-plants-vertical-snow-snow-covered.jpg"
    }

    if(weather.weather[0].description == "tormenta con lluvia ligera") {
      paisaje = "https://w0.peakpx.com/wallpaper/543/429/HD-wallpaper-storm-blue-galaxy-grey-rain-sky.jpg"
    }

    if(weather.weather[0].description == "niebla") {
      paisaje = "https://pbs.twimg.com/media/DKwkawvXUAEjtxP?format=jpg&name=small"
    }
  }
  
  return (
    <div className='container-card-full'>
      {
        location.length == 0 ? <Welcome /> : 
        showData === true ? (
          <div className='container-card'>
            <div className='card'>
              <div className='card-content'>
                <div className='column1'>
                  <img src={paisaje} alt="..."/>
                  <div className='parte-superior'>
                    <h2 className="card-title">{weather.name}</h2>
                    <p className='card-date'>{date}</p>
                  </div>

                  <div className='parte-inferior'>
                    <img src={iconUrl} alt="icon" className='image-card'/>
                    <h1 className="card-temp">{(weather.main.temp - 273.15).toFixed(1)}°C</h1>
                    <p className='card-desc'>
                      {weather.weather[0].description}
                    </p>
                  </div>
                </div>

                <div className='column2'>
                  <div className='card-body'>
                    <div className='humidity'>
                      <WavesOutlined />
                      <h4 className="card-text">Humedad: <br />{weather.main.humidity}%</h4>
                    </div>
                    <div className='wind'>
                      <AirOutlined />
                      <h4 className="card-text">Velocidad del viento: <br />{weather.wind.speed}m/s</h4>
                    </div>
                  </div>

                  <div className='days'>
                    <div className="hora">
                      <p>{forecastDate3}h</p>
                      <p className='temperature-hour'>{(forecast.list[1].main.temp - 273.15).toFixed(1)}ºC</p>
                      <img src={iconUrl3} alt="icon"/>
                      <p className="description">{forecast.list[1].weather[0].description}</p>
                    </div>
                    <div className="hora">
                      <p>{forecastDate6}h</p>
                      <p className='temperature-hour'>{(forecast.list[2].main.temp - 273.15).toFixed(1)}ºC</p>
                      <img src={iconUrl6} alt="icon"/>
                      <p className="description">{forecast.list[2].weather[0].description}</p>
                    </div>
                    <div className="hora">
                      <p>{forecastDate9}h</p>
                      <p className='temperature-hour'>{(forecast.list[3].main.temp - 273.15).toFixed(1)}ºC</p>
                      <img src={iconUrl9} alt="icon"/>
                      <p className="description">{forecast.list[3].weather[0].description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ):(
          <NotFound />
        )
      }
    </div>
  );
}
