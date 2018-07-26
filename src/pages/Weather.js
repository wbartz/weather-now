import React from 'react';
import {
  connect,
} from 'react-redux';
import {
  Content,
  Card,
  CardItem,
  Body,
  Icon,
} from 'native-base';
import {
  AsyncStorage,
  View,
  Text,
} from 'react-native';
import defaultStyle from '../assets';

import CustomHeader from '../components/CustomHeader';
import Loading from '../components/Loading';
import NoContent from '../components/NoContent';
import { GetWeather } from '../actions';
import Image from '../components/Image';
import { CONDITION } from '../types';

class Weather extends React.Component {
  componentDidMount() {
    this.getCity();
  }

  async getCity() {
    const { navigation, getWeather } = this.props;

    await AsyncStorage.getItem('city')
      .then((city) => {
        if (city !== '' && city !== null) {
          getWeather(city);
        } else {
          navigation.navigate('City');
        }
      })
      .catch(() => navigation.navigate('City'));
  }

  temperature = temp => parseInt((temp - 32) / 1.8);

  velocity = vel => parseFloat(vel * 1.609344).toFixed(2);

  date = (data) => {
    const date = new Date(data);

    const day = date.getDate();
    const month = `${'0'.repeat(1)}${String(date.getMonth() + 1)}`;
    const year = date.getFullYear();

    const newDate = `${day}/${month}/${year}`;

    return newDate;
  }

  render() {
    const { weather, loading, navigation } = this.props;
    console.log(weather);
    if (loading) return <Loading />;

    return (
      <View style={{ flex: 1 }}>
        <CustomHeader title={weather.location.city} navigation={navigation} />
        <Content padder style={defaultStyle.container}>
          <Card>
            <CardItem header bordered>
              <Text>
                {String(weather.title).replace('Yahoo! Weather - ', '')}
                {' - '}
                {this.date(weather.item.forecast[0].date)}
              </Text>
            </CardItem>

            <CardItem>
              <Body style={defaultStyle.weather_title_container}>
                <View style={defaultStyle.weather_title_sub_container}>
                  <Image code={weather.item.condition.code} />
                  <Text>
                    {CONDITION[weather.item.condition.code]}
                  </Text>
                </View>

                <View style={defaultStyle.weather_title_sub_container}>
                  <View style={defaultStyle.weather_temperature}>
                    <View style={{ flex: 1, justifyContent: 'flex-start', flexDirection: 'row' }}>
                      <Text style={defaultStyle.weather_title_text}>
                        {this.temperature(weather.item.condition.temp)}
                      </Text>
                      <Icon type="MaterialCommunityIcons" name="temperature-celsius" style={[defaultStyle.weather_icon, { marginTop: 15 }]} />
                    </View>
                  </View>
                </View>
              </Body>
            </CardItem>

            <CardItem>
              <Body>
                <View style={[defaultStyle.weather_title_container, { marginTop: -23 }]}>
                  <View style={defaultStyle.weather_title_icons}>
                    <Icon name="arrow-up" style={defaultStyle.weather_temperature_icon} />
                    <Text style={defaultStyle.weather_title_text_max}>
                      {this.temperature(weather.item.forecast[0].high)}
                    </Text>
                  </View>

                  <View style={defaultStyle.weather_title_icons}>
                    <Icon name="arrow-down" style={[defaultStyle.weather_temperature_icon, { color: '#77b9c8' }]} />
                    <Text style={defaultStyle.weather_title_text_min}>
                      {this.temperature(weather.item.forecast[0].low)}
                    </Text>
                  </View>
                </View>
              </Body>
            </CardItem>

            <CardItem>
              <Body style={{ marginTop: -18 }}>
                <View style={defaultStyle.weather_container}>
                  <View style={defaultStyle.weather_container_text}>
                    <Text style={defaultStyle.weather_text}>
                      Humidade (%):
                    </Text>
                  </View>
                  <View style={defaultStyle.weather_container_icon}>
                    <Text style={defaultStyle.weather_text}>
                      {weather.atmosphere.humidity}
                    </Text>
                    <Icon type="MaterialCommunityIcons" name="water-percent" style={defaultStyle.weather_icon} />
                  </View>
                </View>

                <View style={defaultStyle.weather_container}>
                  <View style={defaultStyle.weather_container_text}>
                    <Text style={defaultStyle.weather_text}>
                      Vento (km/h):
                    </Text>
                  </View>
                  <View style={defaultStyle.weather_container_icon}>
                    <Text style={defaultStyle.weather_text}>
                      {this.velocity(weather.wind.speed)}
                    </Text>
                    <Icon type="MaterialCommunityIcons" name="weather-windy" style={defaultStyle.weather_icon} />
                  </View>
                </View>
              </Body>
            </CardItem>

            {/* <CardItem footer bordered>
              <Text>
                {`${weather.date} às ${weather.time}`}
              </Text>
            </CardItem> */}
          </Card>
        </Content>
      </View>
    );
  }
}

Weather.navigationOptions = {
  title: 'Clima',
};

const mapStateToProps = (state) => {
  const { weather, loading, error } = state.weather;

  return {
    loading,
    weather,
    error,
  };
};

const mapDispatchToProps = dispatch => ({
  getWeather: city => dispatch(GetWeather(city)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
