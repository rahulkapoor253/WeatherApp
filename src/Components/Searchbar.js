import React from 'react';
import './Searchbar.css';

function Searchbar(props) {
  return (
    <div className="search-container">
        <input className="input-field" type="text" value={props.searchInput} onChange={props.onChange} placeholder="Search a country to get current weather"></input>
        <input type="radio" name="temp" value="m" onChange={props.radioBtnChange}/><span>Cel.</span>
        <input type="radio" name="temp" value="f" onChange={props.radioBtnChange}/><span>Fah.</span>
        <button className="search-btn" onClick={props.getWeatherData}>Search</button>
    </div>
  );
}

export default Searchbar;
