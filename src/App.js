import React from 'react';
import Searchbar from './Components/Searchbar';
import './App.css';
import axios from 'axios';
import Weather from './Components/Weather';

class App extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      searchVal : '',
      currentWeather : null,
      location : null,
      apierror : null,
      units : 'm',
      deg : null,
    }
  }

  handleSearchWeather = () => {
    console.log(this.state.searchVal);
    axios.get(`http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_ACCESS_KEY}&query=${this.state.searchVal}&units=${this.state.units}`)
    .then(response => {
        console.log(response);
        if(response.data.error) {
          this.setState({
            currentWeather : null,
            location : null,
            searchVal : '',
            deg : null,
            apierror : 'Unable to fetch details. Please try again later.'
          })
        }
        else {
          this.setState({
            currentWeather : response.data.current,
            location : response.data.location,
            searchVal : '',
            deg : response.data.request.unit,
            apierror : null
          })
        }
        
    })
    .catch(error => {
        console.log(error);
        this.setState({
          apierror : 'Unable to fetch details. Please try again later.'
        })
    })

  }

  handleInputChange = event => {
    //console.log(event.target.value);
    this.setState({
      searchVal : event.target.value
    })
  }

  handleTempChange = event => {
    //console.log(event.target.value);
    this.setState({
      units : event.target.value
    })
  }

  render() {

  return (
    <div className="App">
      <header className="App-header">
        
        <h1 className="logo-title">Weather App</h1>
        <Searchbar getWeatherData={this.handleSearchWeather} onChange={this.handleInputChange} searchInput={this.state.searchVal} radioBtnChange={this.handleTempChange}/>
        {this.state.currentWeather && this.state.location && <Weather currentWeather={this.state.currentWeather} location={this.state.location} scale={this.state.deg}/> }
        {this.state.apierror && <h3 className="error-head">{this.state.apierror}</h3>}

      </header>
    </div>
  );

  }

}

export default App;
