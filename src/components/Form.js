import React from 'react';

class Form extends React.Component {

    fstyle={
        margin:10,
      }

    render(){

        return (
            <div>
            <form onSubmit={this.props.getWeather} >
                <input type='text' name='city' placeholder='city'  style={this.fstyle}/>
                <input type='text' name='country' placeholder='country'  style={this.fstyle}/>
                <button  style={this.fstyle}>Get Weather</button>
            </form><br />
            </div>
            
        );
    }
};

export default Form;