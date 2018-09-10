import React, {Component} from 'react';

import {connect} from 'react-redux';
import WeatherStore from './weather-store';

// ADDED
import PropTypes from 'prop-types';

class ZipInput extends Component {

    constructor(props) {
      super(props);
      this.state = {
          zipCode: ""
      }
    }

    onInputChange = (event) => {
        const {value} = event.target;
        this.setState({zipCode: value});
    };

    onForecastClick = () => {
        this.props.onChange(this.state.zipCode);
    };

    render() {
        return(
            <div>
                <label>Zip code: </label>
                <input type="number" onChange={this.onInputChange} value={this.state.zipCode}/>
                <button type="button" className="primary-button" style={{marginLeft: "10px"}} onClick={this.onForecastClick}>Get Forecast</button>
            </div>
        );
    }
}

ZipInput.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.string
};

const mapStateToProps = (store) => {
    return {
        value: store.weather.zipCode
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        onChange: (zipCode) => {
            dispatch(WeatherStore.updateZipCode(zipCode));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ZipInput);
