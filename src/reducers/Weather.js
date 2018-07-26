import { WEATHER } from '../types';

const initialState = {
  weather: [],
  loading: true,
  error: null,
};

const WeatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case WEATHER.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case WEATHER.REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        weather: action.payload.data.results,
      };
    case WEATHER.REQUEST_FAIL:
      console.log(action.payload);
      return {
        ...state,
        loading: false,
        error: 'Não foi possível buscar as informações',
      };
    default:
      return state;
  }
};

export default WeatherReducer;
