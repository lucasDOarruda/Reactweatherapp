import React, { useEffect, useState } from "react";
import './/style.css'
import axios from 'axios';


function Home() {

  const [ data, setData] = useState ({
    celcius: 10,
    name: 'London',
    humidity: 10,
    speed: 2
  })

    useEffect(()=> {

      const apiUrl ='https://api.openweathermap.org/data/2.5/weather?q=London&appid=94571ad5bfa119c8ca0026d8d2e72434&units=metric';
      axios.get(apiUrl)
      .then(res => console.log(res))
      .catch( err => console.log(err));


    },[])

  return (
    <div className="container">
      <div className=" weather">
        <div className=" search">
          <input type= "text" placeholder='Enter City Name'/>
          <button><img src="/Images/amazon/search.png" alt=" "/></button>
        </div>
        <div className="winfo">
          <img src="/Images/amazon/clouds.png" alt=""/>
          <h1>22°c</h1>
          <h2>London</h2>

          <div className="details">

            <div className="col">
              <img src="/Images/amazon/humidity.png"></img>
              <div className="humidity">
                <p>20%</p>
                <p>humidity</p>
              </div>
            </div>

            <div className="col">
            
              <img src="/Images/amazon/wind.png"></img>
              <div className="wind">
                <p>2 km/h</p>
                <p>Wind</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}


export default Home