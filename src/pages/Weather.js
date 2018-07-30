import React from 'react';
import {
  connect,
} from 'react-redux';
import {
  View,
  ScrollView,
  AsyncStorage,
  Dimensions,
} from 'react-native';
import Header from '@components/Header';
import Button from '@components/Button';
import Loading from '@components/Loading';
import ForecastList from '@components/ForecastList';
import getWeather from '@actions/Weather';
import defaultStyle from '@assets/styles';

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
          navigation.navigate('Cities');
        }
      })
      .catch(() => navigation.navigate('Cities'));
  }

  render() {
    const { weather, loading, navigation } = this.props;

    if (loading) return <Loading />;
    weather.item.forecast.shift();
    console.log(Dimensions.get('window').width);
    return (
      <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
        <Header item={weather.item} title={weather.location.city} />
        <Button
          style={{
            position: 'absolute',
            zIndex: 1,
            marginTop: 200,
            marginLeft: (Dimensions.get('window').width - 90),
          }}
          navigation={navigation}
        />

        <View style={defaultStyle.day_info} />

        <ScrollView style={{ marginTop: -45 }}>
          <ForecastList forecasts={weather.item.forecast} />
        </ScrollView>
      </View>
    );
  }
}


const mapStateToProps = (state) => {
  const { weather, loading, error } = state.weather;

  return {
    loading,
    weather,
    error,
  };
};

const mapDispatchToProps = dispatch => ({
  getWeather: city => dispatch(getWeather(city)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
