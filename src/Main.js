import React, { Component } from 'react';
import WeatherTicker from './components/WeatherTicker';
import './Main.css';

export default class Main extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <WeatherTicker />
        </header>
      </div>
    );
  }
}
