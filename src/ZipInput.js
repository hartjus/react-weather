import React, {Component} from 'react';

// ADDED
import PropTypes from 'prop-types';

export default class ZipInput extends Component {

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
