import { combineReducers } from 'redux';

import WeatherReducer from './Weather';
import CityReducer from './City';

export default combineReducers({
  weather: WeatherReducer,
  cities: CityReducer,
});
