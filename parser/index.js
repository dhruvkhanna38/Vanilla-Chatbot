'use strict';
const colors = require("colors");

const getFeel = (temp)=>{
    if(temp<5){
        return "shivering cold";
    }
    else if(temp >=5 && temp < 15){
        return "pretty cold";
    }
    else if(temp>=15 && temp<25){
        return "moderately cold";
    }
    else if(temp>=25 && temp<32){
        return "quiet warm";
    }
    else if(temp >=32 && temp<40){
        return "very hot";
    }
    else{
        return "super hot"
    }
}

const currentWeather = (response)=>{

    return `Right now it is ${response.condition.toLowerCase().red} in ${response.location}, ${response.country}. It is ${getFeel(Number(response.temperature))} at ${String(response.temperature).red} degrees Celcius...`;
}


module.exports = {currentWeather};