import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ForecastCard from "./ForcastCard";

export default class Forecast extends Component {
    render() {
      let lastDate;
      let currentDate;
      return(
            <div style={{display: "flex", flexWrap: "wrap"}}>
                {
                    this.props.data.map((row, index) => {
                      let result = [];
                      currentDate = row.dt_txt.split(" ")[0];

                      if (lastDate && lastDate !== currentDate) {
                        result.push(<ForecastCard key={index + "spacer"}/>)
                      }

                      result.push(<ForecastCard key={index} data={row}/>);

                      lastDate = currentDate;
                      return(result);
                    })
                }
            </div>
        );
    }
}

Forecast.propTypes = {
    data: PropTypes.array
};
