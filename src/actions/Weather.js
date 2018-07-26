import { WEATHER } from '../types';
import { WEATHER_URL } from '../env';

function getWeather(woeid = 455823, format = 'json') {
  return {
    type: WEATHER.REQUEST,
    payload: {
      request: {
        url: `${WEATHER_URL}weather/?format=${format}&woeid=${woeid}`,
      },
    },
  };
}

export default getWeather;
