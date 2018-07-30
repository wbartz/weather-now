import {
  StyleSheet,
} from 'react-native';

const defaultStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    height: 80,
    backgroundColor: '#4682B4',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
  },
  header_text: {
    fontSize: 24,
    color: '#FFFFFF',
  },
  input: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 5,
  },
  button: {
    marginTop: 10,
    marginLeft: 10,
    backgroundColor: '#77b9c8',
    paddingLeft: 10,
  },
  weather_title_container: {
    flex: 0.3,
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
    color: '#FF5722',
    fontSize: 22,
    paddingTop: 12,
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
    paddingTop: 8,
    color: '#FFFFFF',
  },
  weather_title_text_min: {
    fontSize: 20,
    paddingTop: 8,
    color: '#FFFFFF',
  },
  weather_title_icons: {
    flex: 0.3,
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
    color: '#FFFFFF',
  },
  show_icon: {
    fontSize: 35,
    color: '#77b9c8',
  },
  day_info: {
    flex: 0.1,
    backgroundColor: '#FFFFFF',
    marginLeft: 10,
    marginRight: 10,
    marginTop: -30,
    borderRadius: 5,
  },
  info: {
    paddingLeft: 10,
    paddingTop: 10,
  },
});

export default defaultStyle;
