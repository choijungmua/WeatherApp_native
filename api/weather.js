import axios from "axios";
import { apiKey } from "../constants";

const forecastEndpoint = (params) =>
  `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${params.cityName}&days=${params.day}&aqi=no&alerts=no`;
const locationEndpoint = (params) =>
  `http://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${params.cityName}`;

const apiCall = async (method, url) => {
  try {
    const res = await axios.request({
      method: method, // HTTP 요청 방법 (여기서는 "get"을 사용할 것입니다)
      url: url, // 요청할 URL
    });
    return res.data;
  } catch (err) {
    console.error("error", err);
    return null;
  }
};

export const fetchWeatherForecast = (params) => {
  const endpoint = forecastEndpoint(params);
  return apiCall("get", endpoint);
};

export const fetchLocations = (params) => {
  const endpoint = locationEndpoint(params);
  return apiCall("get", endpoint);
};
