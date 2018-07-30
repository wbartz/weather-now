import { CITY } from '@types/types';

const initialState = {
  cities: [],
  loading: false,
  error: null,
};

const CityReducer = (state = initialState, action) => {
  switch (action.type) {
    case CITY.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CITY.REQUEST_SUCCESS:
      if ('woeid' in action.payload.data.query.results.place) {
        return {
          ...state,
          loading: false,
          cities: {
            place: [action.payload.data.query.results.place],
          },
        };
      }

      return {
        ...state,
        loading: false,
        cities: action.payload.data.query.results,
      };
    case CITY.REQUEST_FAIL:
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

export default CityReducer;
