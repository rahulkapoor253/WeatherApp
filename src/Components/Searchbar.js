import React from 'react';
import './Searchbar.css';
import axios from 'axios';

class Searchbar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      searchInput : ''
    }
  }

  handleInputWeather = (event) => {
    console.log(event.target.value);

    this.setState({
        searchInput : event.target.value
    })
  }

  handleSearchWeather = () => {
    console.log(this.state.searchInput);
    axios.get(`http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_ACCESS_KEY}&query=${this.state.searchInput}`)
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.log(err);
    })

  }

  render() {

  return (
    <div className="search-container">
        <input className="input-field" type="text" onChange={this.handleInputWeather} placeholder="Search a country to get current weather"></input>
        <button className="search-btn" onClick={this.handleSearchWeather}>Search</button>
    </div>
  );

  }

}
export default Searchbar;
