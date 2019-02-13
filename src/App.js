import React from 'react';
import Titles from './components/Titles.js';
import Form from './components/Form.js';
import Weather from './components/Weather.js';

const API_KEY = "5288aa1d2466a82db3b4b6e1108fd441";


class App extends React.Component {

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  getWeather = async (e) => {                                     // async makes http calls easier
    e.preventDefault();                          // prevents entire page refresh on form submit.
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&APPID=${API_KEY}`);   //when u want to make a call use await , to make the api call use fetch  
    // `` are called template strings used to put variables in the url
    const data = await api_call.json();

    if (city && country){

      console.log(data);
      this.setState({
        temperature: data.main.temp,
        city:data.name,
        country:data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error:""
  
      });
    }
    
    else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter the values"
  
    });
  }
   
  }

  render(){

    return (
      <div>
        <Titles/>
        <Form getWeather={this.getWeather}/>   {/* Form has access to getWeather(). props getWeather is assigned to that function   */}  
        <Weather 
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}  
        />
      </div>
    );
  }
};

export default App;

