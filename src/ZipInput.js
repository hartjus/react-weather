import React, {Component} from 'react';

// ADDED
import PropTypes from 'prop-types';

export default class ZipInput extends Component {

    onInputChange = (event) => {
        const {value} = event.target;

        this.setState({zipCode: value});
    }

    onForecastClick = () => {
        this.props.onChange(this.state.zipCode);
    }

    render() {
        return(
            <div>
                <label>Zip code: </label>
                <input type="number" onChange={this.onInputChange} />
                <button type="button" onClick={this.onForecastClick}>Get Forecast</button>
            </div>
        );
    }
}

ZipInput.propTypes = {
    onChange: PropTypes.func
};
