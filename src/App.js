import React, {useEffect, useState} from 'react';
import City from './City';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {
  const [city, setCity]=useState([])

  const [cityNameInput, setCityNameInput] = useState()
  

  const addCity = (e) => {
    e.preventDefault();
    fetchData(city)
  }

  const fetchData = async (c) => {
    try {
      const response = await axios.get('https://api.openweathermap.org/data/2.5/weather?q='+ c + '&units=metric&appid=8d93620cb764f16c628ecfff59e3b991&lang=it')
      console.log(response.data);
      setCity(response.data)
      /* const data = response.data */
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() =>{
    /* if (city !== null) {
      console.log(city);
    } else {
      
    } */
    console.log(city);
    /* console.log(Object.keys(city).length); */
    console.log(city.weather);

    

  }, [city])
  return (
    <div>

      <form onSubmit={addCity}>
          <label>Nome della città
              <input type="text" value={cityNameInput} onChange={(e) => setCity(e.target.value)}/>
          </label>
          <input type="submit" value="Cerca"/>
      </form>
      {city.length === undefined && <City name={city.name} temp={city.main.temp} description={city.weather[0].description}></City>}
      
    </div>
  );
}

export default App;
