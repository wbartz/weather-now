import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Image,
} from 'react-native';

const styles = StyleSheet.create({
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: null,
    height: 300,
    resizeMode: 'cover',
  },
});


const CustomImage = (props) => {
  const {
    code,
    icon,
  } = props;

  switch (Number(code)) {
    case 27:
    case 29:
      if (icon) {
        return <Image source={require('../assets/images/weather/icon_night_cloud.png')} style={{ width: 40, height: 40 }} />;
      }

      return (
        <Image
          style={[
            styles.backgroundImage,
            {
              opacity: 0.5,
            },
          ]}
          source={require('../assets/images/weather/night_cloud.jpg')}
        />
      );
    case 28:
    case 30:
      if (icon) {
        return <Image source={require('../assets/images/weather/icon_day_cloud.png')} style={{ width: 40, height: 40 }} />;
      }

      return (
        <Image
          style={[
            styles.backgroundImage,
            {
              opacity: 0.5,
            },
          ]}
          source={require('../assets/images/weather/day_cloud.jpg')}
        />
      );
    case 31:
    case 32:
    case 33:
    case 34:
      if (icon) {
        return <Image source={require('../assets/images/weather/icon_day_clear.png')} style={{ width: 40, height: 40 }} />;
      }

      return (
        <Image
          style={[
            styles.backgroundImage,
            {
              opacity: 0.5,
            },
          ]}
          source={require('../assets/images/weather/day_clear.jpg')}
        />
      );
    case 26:
    case 44:
      if (icon) {
        return <Image source={require('../assets/images/weather/icon_cloud.png')} style={{ width: 40, height: 40 }} />;
      }

      return (
        <Image
          style={[
            styles.backgroundImage,
            {
              opacity: 0.5,
            },
          ]}
          source={require('../assets/images/weather/cloud.jpg')}
        />
      );
    case 8:
    case 9:
    case 10:
    case 12:
      if (icon) {
        return <Image source={require('../assets/images/weather/icon_rain.png')} style={{ width: 40, height: 40 }} />;
      }

      return (
        <Image
          style={[
            styles.backgroundImage,
            {
              opacity: 0.5,
            },
          ]}
          source={require('../assets/images/weather/rain.jpg')}
        />
      );
    case 13:
    case 14:
    case 16:
    case 41:
    case 42:
    case 46:
      if (icon) {
        return <Image source={require('../assets/images/weather/icon_snow.png')} style={{ width: 40, height: 40 }} />;
      }

      return (
        <Image
          style={[
            styles.backgroundImage,
            {
              opacity: 0.5,
            },
          ]}
          source={require('../assets/images/weather/snow.jpg')}
        />
      );
    case 37:
    case 38:
    case 39:
    case 40:
    case 45:
    case 47:
      if (icon) {
        return <Image source={require('../assets/images/weather/icon_storm.png')} style={{ width: 40, height: 40 }} />;
      }

      return (
        <Image
          style={[
            styles.backgroundImage,
            {
              opacity: 0.5,
            },
          ]}
          source={require('../assets/images/weather/storm.jpg')}
        />
      );
    case 6:
    case 17:
    case 18:
    case 35:
      if (icon) {
        return <Image source={require('../assets/images/weather/icon_hail.png')} style={{ width: 40, height: 40 }} />;
      }

      return (
        <Image
          style={[
            styles.backgroundImage,
            {
              opacity: 0.5,
            },
          ]}
          source={require('../assets/images/weather/hail.jpg')}
        />
      );
    case 11:
      if (icon) {
        return <Image source={require('../assets/images/weather/icon_drizzle.png')} style={{ width: 40, height: 40 }} />;
      }

      return (
        <Image
          style={[
            styles.backgroundImage,
            {
              opacity: 0.5,
            },
          ]}
          source={require('../assets/images/weather/drizzle.jpg')}
        />
      );
    case 19:
    case 20:
    case 21:
    case 22:
      if (icon) {
        return <Image source={require('../assets/images/weather/icon_fog.png')} style={{ width: 40, height: 40 }} />;
      }

      return (
        <Image
          style={[
            styles.backgroundImage,
            {
              opacity: 0.5,
            },
          ]}
          source={require('../assets/images/weather/fog.jpg')}
        />
      );
    default:
      if (icon) {
        return <Image source={require('../assets/images/weather/icon_rain.png')} style={{ width: 40, height: 40 }} />;
      }

      return (
        <Image
          style={[
            styles.backgroundImage,
            {
              opacity: 0.5,
            },
          ]}
          source={require('../assets/images/weather/rain.jpg')}
        />
      );
  }
};

CustomImage.propTypes = {
  code: PropTypes.string.isRequired,
  icon: PropTypes.bool,
};

CustomImage.defaultProps = {
  icon: false,
};

export default CustomImage;
