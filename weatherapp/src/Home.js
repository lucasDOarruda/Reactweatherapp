import React, { useEffect, useState } from "react";
import './/style.css'
import axios from 'axios';


function Home() {

  const [ data, setData] = useState ({
    celcius: 10,
    name: 'London',
    humidity: 10,
    speed: 2,
    image:'/Images/amazon/clouds.png'
  })
    const[name, setName] = useState('');


const handleClick =() => {
  if(name !== "") {
    const apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=94571ad5bfa119c8ca0026d8d2e72434&units=metric`;
    axios.get(apiUrl)
    .then(res => {
      let imagePath ='';

      if(res.data.weather[0].main== "Clouds"){
        imagePath = "/Images/amazon/clouds.png"
      } else if(res.data.weather[0].main == "Clear"){
        imagePath ="/Images/amazon/clear.png"
      }else if(res.data.weather[0].main == "Rain"){
        imagePath ="/Images/amazon/rain.png"
      }else if(res.data.weather[0].main == "Drizzle"){
        imagePath ="/Images/amazon/drizzle.png"
      }else if(res.data.weather[0].main == "Mist"){
        imagePath ="/Images/amazon/clouds.png"
      } 

    
      console.log(res.data);
      setData({...data, celcius: res.data.main.temp, name: res.data.name, humidity: res.data.main.humidity, speed: res.data.wind.speed, imagePath})

    })
    .catch( err => console.log(err));
  }

}

  return (
    <div className="container">
      <div className=" weather">
        <div className=" search">
          <input type= "text" placeholder='Enter City Name'onChange={e => setName(e.target.value)}/>
          <button><img src="/Images/amazon/search.png" onClick={handleClick} alt=" "/></button>
        </div>
        <div className="winfo">
          <img src={data.image} alt=""/>
          <h1>{Math.round(data.celcius)}°c</h1>
          <h2>{data.name}</h2>

          <div className="details">

            <div className="col">
              <img src="/Images/amazon/humidity.png"></img>
              <div className="humidity">
                <p>{Math.round(data.humidity)}%</p>
                <p>humidity</p>
              </div>
            </div>

            <div className="col">
            
              <img src="/Images/amazon/wind.png"></img>
              <div className="wind">
                <p>{Math.round(data.speed)}</p>
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