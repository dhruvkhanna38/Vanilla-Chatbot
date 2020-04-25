'use strict';

const Readline = require("readline");
const rl =Readline.createInterface({
    input : process.stdin,
    output : process.stdout,
    terminal : false
});
const {matchPattern} = require("./matcher/index");
const {getWeather} =  require("./weather/index");
const {currentWeather} = require("./parser/index")

rl.setPrompt('>');
rl.prompt();

rl.on("line", (reply)=>{
    matchPattern(reply, (data)=>{
            switch(data.intent){
                case "Hello" :  console.log(`${data.entities.greeting} to you too!`);
                                rl.prompt();
                                break;
                case "Exit" :   console.log("Have a great day");
                                process.exit(0);
                case "CurrentWeather" : console.log(`checking weather for ${data.entities.city}`);
                                        getWeather(data.entities.city).then(response =>{
                                                const parsedResult = currentWeather(response);
                                                console.log(parsedResult);
                                        }).
                                        catch(error=>{
                                            console.log(error);
                                            console.log("Location not found");
                                        });
                                        rl.prompt();
                                        break;
                default : {
                    console.log("Sorry! I don't understand what you mean.");
                    rl.prompt();
                }
            }
    });

});