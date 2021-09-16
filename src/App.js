import React, { useEffect, useState } from "react";
import { Navbar, Container, Form, FormControl, Button } from "react-bootstrap";
import City from "./City";
import Error from "./Error";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [city, setCity] = useState([]);
  const [cityNameInput, setCityNameInput] = useState("");
  const [errorControl, setErrorControl] = useState(false);

  const addCity = (e) => {
    e.preventDefault();
    fetchData(cityNameInput);
  };

  const fetchData = async (c) => {
    try {
      const response = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          c +
          "&units=metric&appid=8d93620cb764f16c628ecfff59e3b991&lang=it"
      );
      /* console.log(response.data); */
      setErrorControl(false);
      setCity(response.data);
    } catch (error) {
      setErrorControl(true);
      /* console.log(error); */
    }
  };

  useEffect(() => {
    if (cityNameInput.length > 0) {
      setErrorControl(false);
    }
  }, [cityNameInput]);

  return (
    <div>
      <Navbar expand="lg" variant="dark" bg="dark">
        <Container>
          <Navbar.Brand href="#">Meteo</Navbar.Brand>
          <Form className="d-flex" onSubmit={addCity}>
            <FormControl
              type="search"
              placeholder="Nome della città"
              className="mr-2"
              aria-label="Search"
              value={cityNameInput}
              onChange={(e) => setCityNameInput(e.target.value)}
            />
            <Button variant="light">Cerca</Button>
          </Form>
        </Container>
      </Navbar>

      {/* <form onSubmit={addCity}>
          <label>Nome della città
              <input type="text" value={cityNameInput} onChange={(e) => setCity(e.target.value)}/>
          </label>
          <input type="submit" value="Cerca"/>
      </form> */}

      <Container className="d-flex justify-content-center align-items-center cardContainer">
        {city.length === undefined && errorControl === false && (
          <City
            className=""
            name={city.name}
            temp={Math.round(city.main.temp)}
            description={city.weather[0].description}
            iconId={city.weather[0].icon}
            windSpeed={city.wind.speed}
          />
        )}
        {errorControl === true && <Error errore={cityNameInput} />}
      </Container>
    </div>
  );
}

export default App;
