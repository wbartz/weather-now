import { WEATHER } from '../types';
import { CITY_URL } from '../env';

function getWeather(woeid = 455823) {
  const query = `select * from weather.forecast where woeid = '${woeid}'`;

  return {
    type: WEATHER.REQUEST,
    payload: {
      request: {
        url: `${CITY_URL}&q=${encodeURI(query)}`,
      },
    },
  };
}

export default getWeather;
