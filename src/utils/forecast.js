const request = require("request");

const forecast = (lat, long, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=d67f50a69bfb2d81bde2b073f0773ff0&query=" +
    lat +
    "," +
    long;

  request({ url, json: true }, (e, { body }) => {
    if (e) {
      callback("Unable to caonnect..!");
    } else {
      callback(
        undefined,
        `${body.current.weather_descriptions[0]} .It's ${body.current.temperature} degrees out and its feels like ${body.current.feelslike} degrees out. Humidity is ${body.current.humidity} %.`
      );
    }
  });
};

module.exports = forecast;
