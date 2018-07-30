import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import CustomImage from '@components/CustomImage';
import { CONDITION, WEEK } from '@types/types';

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  child: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 80,
    paddingLeft: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#4682B4',
  },
  forecast: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: '#ff5722',
    fontSize: 16,
    paddingTop: 10,
    paddingLeft: 20,
  },
  text: {
    fontSize: 16,
    paddingTop: 8,
    paddingLeft: 5,
  },
  show_icon: {
    fontSize: 36,
    color: '#77b9c8',
  },
});

class ForecastList extends React.Component {
  temperature = temp => parseInt((temp - 32) / 1.8, 10);

  date = (data) => {
    const date = new Date(data);
    let day = date.getDate();

    if (day < 10) {
      day = `${'0'.repeat(1)}${String(day)}`;
    }

    let month = date.getMonth() + 1;

    if (month < 10) {
      month = `${'0'.repeat(1)}${String(month)}`;
    }

    const newDate = `${day}/${month}`;

    return newDate;
  };

  renderItem = ({ item }) => (
    <View style={style.child}>
      <View style={{ flex: 0.2 }}>
        <CustomImage code={item.code} icon />
      </View>

      <View style={{ flex: 0.4 }}>
        <Text>
          {this.date(item.date)}
          {' '}
          {WEEK[item.day]}
        </Text>

        <Text>
          {CONDITION[item.code]}
        </Text>
      </View>

      <View style={{ flex: 0.4, flexDirection: 'row' }}>
        <View style={{ flex: 0.5, flexDirection: 'row' }}>
          <Icon name="md-arrow-up" style={[style.icon]} />
          <Text style={style.text}>
            {this.temperature(item.high)}
          </Text>
        </View>

        <View style={{ flex: 0.5, flexDirection: 'row' }}>
          <Icon name="md-arrow-down" style={[style.icon, { color: '#77b9c8' }]} />
          <Text style={style.text}>
            {this.temperature(item.low)}
          </Text>
        </View>
      </View>
    </View>
  );

  render() {
    const { forecasts } = this.props;

    return (
      <View>
        <FlatList
          data={forecasts}
          renderItem={this.renderItem}
          keyExtractor={item => String(item.code)}
        />
      </View>
    );
  }
}

ForecastList.propTypes = {
  forecasts: PropTypes.array,
};

ForecastList.defaultProps = {
  forecasts: {},
};

export default ForecastList;
