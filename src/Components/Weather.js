import React from 'react';
import './Weather.css';

class Weather extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {

  return (
    <div className="weather-container">
        
        <div>
            <img src={this.props.currentWeather.weather_icons[0]} />
        </div>
        <h3>Region - {this.props.location.region}, {this.props.location.country}</h3>
        <h3>Temperature - {this.props.currentWeather.temperature} {this.props.scale === 'm' ? 'Celsius' : 'Fahrenheit' }</h3>
        <h3>Weather - {this.props.currentWeather.weather_descriptions[0]}</h3>
        <h3>Cloud cover - {this.props.currentWeather.cloudcover} %</h3>
        <h3>Visibility - {this.props.currentWeather.visibility} %</h3>
        <h3>Humidity - {this.props.currentWeather.humidity} %</h3>
        <h3>Wind - {this.props.currentWeather.wind_dir}</h3>
        
    </div>
  );

  }

}
export default Weather;
