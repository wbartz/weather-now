import {
  StyleSheet,
} from 'react-native';

const defaultStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  input: {
    marginRight: 10,
  },
  button: {
    marginTop: 10,
    marginLeft: 10,
    backgroundColor: '#77b9c8',
  },
  weather_title_container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  weather_title_sub_container: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  weather_temperature: {
    flex: 0.5,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  weather_temperature_icon: {
    color: '#ff5722',
    fontSize: 22,
    paddingTop: 8,
    paddingLeft: 10,
  },
  weather_title_text: {
    fontSize: 60,
    fontStyle: 'italic',
    marginRight: 5,
    color: '#4682B4',
  },
  weather_temperature_min_max: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  weather_title_text_max: {
    fontSize: 20,
    marginLeft: 10,
    paddingTop: 8,
  },
  weather_title_text_min: {
    fontSize: 20,
    marginLeft: 13,
    paddingTop: 8,
  },
  weather_title_icons: {
    flex: 0.5,
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'row',
  },
  weather_container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  weather_container_text: {
    flex: 0.75,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  weather_container_icon: {
    flex: 0.25,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  weather_text: {
    fontSize: 12,
    marginRight: 5,
    paddingTop: 3,
  },
  weather_icon: {
    fontSize: 20,
    color: '#77b9c8',
  },
});

export default defaultStyle;
