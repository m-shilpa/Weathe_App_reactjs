import React from 'react';

class Weather extends React.Component {

    render(){

        return (

            <div>
                { this.props.icon && <img src = {this.props.icon} alt="pic"/>}
                { this.props.city && this.props.country && <p><strong> Location: </strong> {this.props.city}, {this.props.country}</p> }
                { this.props.temperature && <p><strong> Temperature:</strong> {this.props.temperature} °C</p> }
                { this.props.humidity && <p><strong> Humidity:</strong> {this.props.humidity} g/m3</p> }
                { this.props.description && <p><strong> Description:</strong> {this.props.description}</p> }
                { this.props.error && <h5>{this.props.error}</h5>}
            </div>

        );
    }
};

export default Weather;