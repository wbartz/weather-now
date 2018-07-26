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

  render() {
    const { weather, loading, navigation } = this.props;
    if (loading) return <Loading />;

    if (weather.forecast.length === 0) return <NoContent navigation={navigation} />;

    return (
      <View style={{ flex: 1 }}>
        <CustomHeader title={weather.city_name} navigation={navigation} />
        <Content padder style={defaultStyle.container}>
          <Card>
            <CardItem header bordered>
              <Text>
                {weather.city_name}
                {' '}
                -
                {' '}
                {weather.date}
              </Text>
            </CardItem>

            <CardItem>
              <Body style={defaultStyle.weather_title_container}>
                <View style={defaultStyle.weather_title_sub_container}>
                  <Image code={weather.condition_slug} time={weather.currently} />
                  <Text>
                    {weather.description}
                  </Text>
                </View>

                <View style={defaultStyle.weather_title_sub_container}>
                  <View style={defaultStyle.weather_temperature}>
                    <View style={{ flex: 1, justifyContent: 'flex-start', flexDirection: 'row' }}>
                      <Text style={defaultStyle.weather_title_text}>
                        {weather.temp}
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
                      {weather.forecast[0].max}
                    </Text>
                  </View>

                  <View style={defaultStyle.weather_title_icons}>
                    <Icon name="arrow-down" style={[defaultStyle.weather_temperature_icon, { color: '#77b9c8' }]} />
                    <Text style={defaultStyle.weather_title_text_min}>
                      {weather.forecast[0].min}
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
                      {weather.humidity}
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
                      {String(weather.wind_speedy).replace('km/h', '')}
                    </Text>
                    <Icon type="MaterialCommunityIcons" name="weather-windy" style={defaultStyle.weather_icon} />
                  </View>
                </View>
              </Body>
            </CardItem>

            <CardItem footer bordered>
              <Text>
                {`${weather.date} às ${weather.time}`}
              </Text>
            </CardItem>
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
