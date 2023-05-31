import React from "react";
import './/style.css'

function Home() {
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