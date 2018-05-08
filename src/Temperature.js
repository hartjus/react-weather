import React from 'react';
import PropTypes from 'prop-types';

export const Temperature = ({temperature}) => {

    const convert = (temp) => {
      return Math.round(temp * (9/5) - 459.67);
    };

    let tempColor = () => {
      if (temperature > 292) return "red";
      if (temperature < 290) return "blue";
      return "green";
    };

    return(
      <div style={{fontWeight: "bold", color: tempColor()}}>
        Temp: {convert(temperature)} F
      </div>
    );
};

Temperature.propTypes = {
  temperature: PropTypes.number
};