const request = require('request');

const forecast = (latitude, longitude, callback) => {
        url =  'https://api.darksky.net/forecast/f32c3d0cdfaadac6417c8d35cd083a6e/'+ encodeURIComponent(latitude) +','+ encodeURIComponent(longitude) +'';

        request({ url : url , json : true }, (error, response) => {
            if (error) {
                callback('Connection Issues', undefined) 
            } else if ( response.body.error ) {
                callback('Was not found', undefined)
            } else {
                callback(undefined, {
                    currentTemp: response.body.currently.temperature,
                    currentRain: response.body.currently.precipProbability
                });
            }
        });
};

module.exports = forecast;
