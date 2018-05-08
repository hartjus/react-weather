import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Temperature} from "./Temperature";

export default class ForecastCard extends Component {
  render() {
    const cardStyle = {
      width: "200px",
      height: "200px",
      borderWidth: "1px",
      borderColor: "#9d9d9d",
      borderStyle: "solid",
      margin: "10px",
      backgroundColor: "#878787"
    };

    const dataBlockStyle = {
      backgroundColor: "white",
      width: "180px",
      height:"180px",
      overflow:"none",
      padding: "10px",
    };

    return (
      <div style={cardStyle}>
        {this.props.data &&
          <div style={dataBlockStyle}>
            {this.props.data.dt_txt}
            <Temperature temperature={this.props.data.main.temp}/>
            <img src={`http://openweathermap.org/img/w/${this.props.data.weather[0].icon}.png`} alt=""/>
            <div>
              {this.props.data.weather[0].description}
            </div>
          </div>
        }
      </div>
    );
  }
}

ForecastCard.propTypes = {
  data: PropTypes.object
};