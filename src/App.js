import React, { useState } from 'react';
import axios from 'axios';


function App() {

  const [data,setData]=useState({})
  const [location,setLocation]=useState({})
   const url=`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=d6e34fb5918efe04a3e32e8020867786`;

   const searchLocation = (event) => {
    if(event.key === 'Enter')
    axios.get(url).then((respone)=>{
      setData(respone.data)
      console.log(respone.data)
    })
    setLocation('');
   }
  return (
    <>
    <div className="app">
      <div className="Search">
        <input type={"text"}
        placeholder="Enter Location"
        onChange={event => setLocation(event.target.value)}
        onKeyPress={searchLocation}/>
      </div>
    <div className="container">
      <div className='top'>
        <div className='location'>
          <p>{data.name}</p>
        </div>
        <div className='temprature'>
          {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
        </div>
        <div className='description'>
          {data.weather ? <p>{data.weather[0].main}</p>:null}
        </div>
      </div>
      { data.name !=undefined && 
        <div className='bottom'>
        <div className='feels'>
            {data.main ? <p className='bold'>{data.main.feels_like}°F</p>: null}
            <p>Feels Like</p>
          </div>
          <div className='humidity'>
          {data.main ? <p className='bold'>{data.main.humidity}%</p>: null}
            <p>
              Humidity</p>
          </div>
          <div className='Wind'>
          {data.main ? <p className='bold'>{data.wind.speed}MPH</p>: null}
            <p>Wind</p>
          </div>
        </div> 

      }
       
    </div>
    </div>
    </>
  );
}

export default App;
