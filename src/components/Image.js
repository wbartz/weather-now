import React from 'react';
import PropTypes from 'prop-types';
import {
  Thumbnail,
} from 'native-base';


const Image = (props) => {
  switch (Number(props.code)) {
    case 27:
    case 29:
      return <Thumbnail source={require('../assets/images/weather/night_cloud.png')} large />;
    case 28:
    case 30:
      return <Thumbnail source={require('../assets/images/weather/day_cloud.png')} large />;
    case 31:
    case 32:
    case 33:
    case 34:
      return <Thumbnail source={require('../assets/images/weather/day_clear.png')} large />;
    case 26:
    case 44:
      return <Thumbnail source={require('../assets/images/weather/cloud.png')} large />;
    case 8:
    case 9:
    case 10:
    case 12:
      return <Thumbnail source={require('../assets/images/weather/rain.png')} large />;
    case 'snow':
      return <Thumbnail source={require('../assets/images/weather/snow.png')} large />;
    case 37:
    case 38:
    case 39:
    case 40:
    case 45:
    case 47:
      return <Thumbnail source={require('../assets/images/weather/storm.png')} large />;
    case 6:
    case 17:
    case 18:
    case 35:
      return <Thumbnail source={require('../assets/images/weather/hail.png')} large />;
    case 11:
      return <Thumbnail source={require('../assets/images/weather/drizzle.png')} large />;
    default:
      return <Thumbnail source={require('../assets/images/weather/rain.png')} large />;
  }
};

Image.propTypes = {
  code: PropTypes.string.isRequired,
};

export default Image;
