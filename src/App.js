import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import axios from "axios";
import { useEffect, useState } from "react";

function App() {

  const apiKey ="f56f24967aaf51182d1d4df628297c6d"
  const [inputCity,setInputCity] = useState("")
const [data,setData] = useState({})

const getWeatherDetails = (cityName) => {
  if (!cityName) return
  const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey
  axios.get(apiURL).then((res)=>{
    console.log("response",res)
    setData(res.data)
  }).catch((err)=>{
    console.log("err",err)
    
  })
}

const handleChangeInput = (e) => {
  console.log("value",e.target.value)
  setInputCity(e.target.value)
}

const handleSearch = () => {
  getWeatherDetails(inputCity)
}

useEffect(()=>{
  getWeatherDetails("delhi")
}, [])

  return (
    <div className="col-md-12">
      <div className="weatherbg">
        <h1 className="heading">Weather App</h1>
        
        <div className="d-grid gap-3 col-4 mt-4">
        <input type="text" className="form-control" onChange={handleChangeInput} value={inputCity}/>
        <button className="btn btn-primary" type="button" onClick={handleSearch}>Search</button>
        </div>
        </div>

        <div className="col-md-12 text-center mt-5">
          <div className="shadow rounded weatherResultBox">

         <img className="weathericon" src="https://cdn.jim-nielsen.com/ios/512/weather-2021-12-07.png" />
         <h5 className="weathercity">
          {data?.name}
         </h5>
         <h6 className="weathertemp">{((data?.main?.temp)-273.15).toFixed(2)}°C</h6>
         </div>
      </div>
    </div>
  );
}

export default App;
