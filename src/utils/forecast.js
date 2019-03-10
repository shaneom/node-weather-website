const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/bfe1bdc7932e0426265f0a4c7b804532/' + latitude + ',' + longitude + '?units=si';

    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather services!', undefined);
        } else if (body.error) {
            callback('Unable to find location.', undefined);
        }     
        else {
            callback(undefined,`${body.daily.data[0].summary} It is currently ${body.currently.temperature} degree outside.  There is a ${body.currently.precipProbability * 100}% chance of rain.`)
        }
    });
};

module.exports = forecast;