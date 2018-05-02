import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Forecast extends Component {
    render() {
        return(
            <div>
                <ul>
                {
                    this.props.data.map((x, index) => {
                        return(<li key={index}>{x.dt_txt} - {x.weather[0].description}</li>);
                    })
                }
                </ul>
            </div>
        );
    }
}

Forecast.propTypes = {
    data: PropTypes.array
};
