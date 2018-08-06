import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import {
  temperature,
  date,
} from '@types/utils';
import CustomImage from '@components/CustomImage';
import defaultStyle from '@assets/styles';
import {
  CONDITION,
  WEEK,
} from '@types/types';

const styles = StyleSheet.create({
  container: {
    height: 270,
    backgroundColor: '#4682B4',
  },
  title_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    flex: 0.2,
    fontSize: 30,
    color: '#FFFFFF',
  },
  current_day: {
    fontSize: 14,
    color: '#FFFFFF',
  },
  temp_container: {
    flex: 0.2,
    flexDirection: 'row',
  },
  temperature: {
    fontSize: 40,
    color: '#FFFFFF',
  },
  condition: {
    fontSize: 18,
    color: '#FFFFFF',
  },
});

const Header = (props) => {
  const { item, title } = props;
  const forecast = item.forecast.shift();

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="rgba(0, 0, 0, 0.251)"
      />

      <CustomImage code={forecast.code} />
      <View style={styles.title_container}>
        <Text style={styles.title}>
          {title}
        </Text>
        <Text style={styles.current_day}>
          {date(forecast.date)}
          {' - '}
          {WEEK[forecast.day]}
        </Text>

        <View style={styles.temp_container}>
          <Text style={styles.temperature}>
            {temperature(item.condition.temp)}
          </Text>
          <Icon name="temperature-celsius" style={[defaultStyle.weather_icon, { marginTop: 8 }]} />
        </View>

        <View style={[defaultStyle.weather_title_container, { marginTop: -23 }]}>
          <View style={defaultStyle.weather_title_icons}>
            <Icon name="arrow-up" style={defaultStyle.weather_temperature_icon} />
            <Text style={defaultStyle.weather_title_text_max}>
              {temperature(forecast.high)}
            </Text>
          </View>

          <View style={defaultStyle.weather_title_icons}>
            <Icon name="arrow-down" style={[defaultStyle.weather_temperature_icon, { color: '#0000FF' }]} />
            <Text style={defaultStyle.weather_title_text_min}>
              {temperature(forecast.low)}
            </Text>
          </View>
        </View>

        <Text style={styles.condition}>
          {CONDITION[forecast.code]}
        </Text>
      </View>
    </View>
  );
};

Header.propTypes = {
  item: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;
