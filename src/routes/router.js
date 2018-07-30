import {
  createStackNavigator,
} from 'react-navigation';

import Cities from '@pages/Cities';
import Weather from '@pages/Weather';

const AppStack = createStackNavigator(
  {
    Cities,
    Weather,
  },
  {
    initialRouteName: 'Weather',
    navigationOptions: {
      header: null,
    },
  },
);

export default AppStack;
