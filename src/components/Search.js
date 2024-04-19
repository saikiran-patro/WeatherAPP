import Axios from 'axios';
import {useState} from 'react'
import Details from './Details';

const Search=function(){
    const API_KEY='1635890035cbba097fd5c26c8ea672a1';
    const [city , setCity]=useState('')
    const [weatherData,setWeatherData]=useState([])
    const [loader,setLoader]=useState(false)
    const HelpCircleIcon = (props) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={15} height={15} color={"#f2f2f3"} fill={"none"} {...props}>
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
          <path d="M10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9C14 9.39815 13.8837 9.76913 13.6831 10.0808C13.0854 11.0097 12 11.8954 12 13V13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M11.992 17H12.001" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ); 
      const LoaderIcon = (props) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={15} height={15} color={"#161616"} fill={"none"} {...props}>
          <path d="M9 8C7.7945 8.85994 7 10.3304 7 12C7 13.6696 7.7945 15.1401 9 16M15 8C16.2055 8.85994 17 10.3304 17 12C17 13.6696 16.2055 15.1401 15 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
      const getGeoLocation = async (City)=>{
        setLoader(true)
          const geoLoactionUrl=`https://api.openweathermap.org/geo/1.0/direct?q=${City}&limit=5&appid=${API_KEY}`
          const geoData= await Axios.get(geoLoactionUrl);
          
           if(geoData.data.length>0)
          {
             const lat=geoData.data[0].lat;
             const lon=geoData.data[0].lon;
             const weatherApiUrl=`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`
             const weatherDetails= await Axios.get(weatherApiUrl);
             const dynamiclist=[]
             dynamiclist.push(weatherDetails.data.list[0])
             let count=1;
             let index=5
             while(count<5){
               dynamiclist.push(weatherDetails.data.list[index])
               index+=8
               count++;
             }
             const weatherList=dynamiclist;
             console.log(weatherList);
             setLoader(false)
             setWeatherData(weatherList)
             


          }
        
           
  
  
      }
    return(
      <div>


     
        <div  className="searchContainer">
                
            <h1>Weather in your city</h1>
            <div className="searchBox">
                <input type="text" onInput={(e)=>(setCity(e.target.value))}></input>
                <button onClick={()=> getGeoLocation(city)}  style={{display: 'flex',justifyContent: 'center',alignItems: 'center',gap: '10px'}}><HelpCircleIcon/>Search</button>
                {

                    loader? (
                        <span className="spinnerRotate"><LoaderIcon/></span>
                    ):(
                      <span></span>
                    )
                }
            </div>

              
            

        </div>
        
        <div className="detailsContainer">
             {weatherData.map((element, index) => (
            
            <Details key={index} date={element.dt_txt?.slice(0,10).split('-').reverse().join('-')} minTemp={element.main.temp_min} maxTemp={element.main.temp_max} pressure={element.main.pressure} humidity={element.main.humidity} />
             
           ))}



             </div>
        </div>

       
    )

}


export default Search;