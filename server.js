var express = require('express');
var request = require('request');
const argv = require('yargs').argv;

var apiKey = '******'; // get the api key from https://home.openweathermap.org/api_keys
var zipcode = argv.z || '02169';
var url = 'http://api.openweathermap.org/data/2.5/weather?units=metric&zip=' + zipcode + '&appid=' + apiKey;

request(url, function (error, response, body) {
    if (error) {
        console.log('error:', error);
    } else {
        var weather = JSON.parse(body);
        var tempC = weather.main.temp;
        var city = weather.name;
        console.log('statusCode:', response && response.statusCode);
        console.log('Current weather in '+ city + ': '+ tempC + 'C');
    }
});