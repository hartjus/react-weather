import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// ADDED
import Forecast from './Forecast';
import ZipInput from './ZipInput';
import WeatherService from './WeatherService';

const weatherService = new WeatherService();

class App extends Component {

  // ADDED
  componentWillMount() {
    this.setState({
      forecast: []
    });
  }

  // ADDED
  onZipInputChange = (zipCode) => {
    this.setState({zipCode});
    weatherService.getForecast(zipCode).then((result) => {
      this.setState({forecast: result.data.list});
      console.log(result.data.list);
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        {/* ADDED */}
        <ZipInput onChange={this.onZipInputChange} />
        <Forecast data={this.state.forecast} />
      </div>
    );
  }
}

export default App;
