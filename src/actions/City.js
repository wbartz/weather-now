import { CITY } from '../types';
import { CITY_URL } from '../env';

function getCity(place) {
  const query = `select * from geo.places where text = '${place}'`;

  return {
    type: CITY.REQUEST,
    payload: {
      request: {
        url: `${CITY_URL}&q=${encodeURI(query)}`,
      },
    },
  };
}

export default getCity;
