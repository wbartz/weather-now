import React from 'react';
import PropTypes from 'prop-types';
import {
  Thumbnail,
} from 'native-base';


const Image = (props) => {
  if (props.time === 'dia') {
    switch (props.code) {
      case 'cloudly_day':
        if (props.time === 'dia') {
          return <Thumbnail source={require('../assets/images/weather/day_cloud.png')} large />;
        }
        return <Thumbnail source={require('../assets/images/weather/night_cloud.png')} large />;
      case 'clear':
        if (props.time === 'dia') {
          return <Thumbnail source={require('../assets/images/weather/day_clear.png')} large />;
        }
        return <Thumbnail source={require('../assets/images/weather/night_clear.png')} large />;
      case 'cloud':
        return <Thumbnail source={require('../assets/images/weather/cloud.png')} large />;
      case 'rain':
        return <Thumbnail source={require('../assets/images/weather/rain.png')} large />;
      case 'snow':
        return <Thumbnail source={require('../assets/images/weather/snow.png')} large />;
      case 'storm':
        return <Thumbnail source={require('../assets/images/weather/storm.png')} large />;
      case 'hail':
        return <Thumbnail source={require('../assets/images/weather/hail.png')} large />;
      case 'drizzle':
        return <Thumbnail source={require('../assets/images/weather/drizzle.png')} large />;
      default:
        return <Thumbnail source={require('../assets/images/weather/rain.png')} large />;
    }
  }
};

Image.propTypes = {
  code: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default Image;
