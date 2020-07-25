import React from 'react';
import Searchbar from './Components/Searchbar';
import './App.css';

class App extends React.Component {
  
  constructor(props) {
    super(props);


  }

  render() {

  return (
    <div className="App">
      <header className="App-header">
        
        <h1 className="logo-title">Weather App</h1>
        <Searchbar />

      </header>
    </div>
  );

  }

}

export default App;
