import React, { Component } from 'react';
import axios from "axios";
import { config } from '../utils/config';
import '../Main.css';

export default class WeatherTicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: {},
      speed: 2
    };

    this.getArticles = this.getArticles.bind(this);
  }

  componentDidMount() {
    this.getArticles();
  }

  getArticles = async () => {
    let reqConfig = {
      headers: {
        Accept: "application/json"
      }
    }
    let res = await axios.get(`http://api.weatherunlocked.com/api/current/-31.642,115.706?app_id=${config.APPID}&app_key=${config.APIKEY}`, reqConfig);
    let data = res.data;
    this.setState({ weather: data })
    console.log(this.state.weather)
    console.log(typeof this.state.weather)
  };

  render() {
    return (
      <div className="App">
        {/* {this.state.weather.length === 0 ? (
          <div>
            <i className="fas fa-spinner" style={{ animation: `spin ${this.state.speed}s linear infinite` }} /><br />
            <span className="blink_me">Loading...</span>
          </div>
        ) : (
            this.state.weather.map((e, i) => {
              return <div key={i}>{e.temp_c}</div>;
            })
          )
        } */}
      </div>
    );
  };
}