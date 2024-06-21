import { useState ,useEffect } from 'react'
import './App.css'
import axios from 'axios';
function App() {

  const [weatherData , setWeatherData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const apiKey = "204a0c5622917486aed6dfefdd435131";
      try {
        const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Hyderabad&appid=${apiKey}`);
        setWeatherData(res.data);
        console.log(res.data);
      } catch (error) {
           console.log(error);
      }
    }
    fetchData();
    
  }, []);
  
   
  return (
    <>
      {/* <h1 className='text-xl font-bold text-green-400'>
      {weatherData ? (
        <>
          <h1>City : {weatherData.name}</h1>
          <h1>Pressure : {weatherData.main.pressure}</h1>
          <h1>Temperature : {weatherData.main.temp}</h1>
          </>
          
        ) : (<p>Loading Data</p>)
        }
      </h1> */}


      
    </>
  )
}

export default App
