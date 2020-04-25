"use strict";
const axios = require("axios");


const formatData = (data)=>{
    return {
        location : `${data.location.name}` , 
        country : `${data.location.country}` ,
        condition : `${data.current.weather_descriptions[0]}`,
        code : `${data.current.weather_code}`,
        temperature : `${data.current.temperature}`,
        humidity: `${data.current.humidity}`,
    };
}

const getWeather = (location)=>{
    return new Promise(async (resolve, reject)=>{
            try{
                const url = "http://api.weatherstack.com/current?access_key="+"8ea6aa109702c687954ab4c395ef9cc9&query="+location; 
                const weatherConditions = await axios.get(url);
                resolve(formatData(weatherConditions.data));
            }catch(error){
                reject(error);
            }
    });
}

module.exports ={getWeather}