import React from 'react';

import {
  connect,
} from 'react-redux';
import {
  View,
  Keyboard,
  Button,
  Text,
  TextInput,
} from 'react-native';

import getCity from '@actions/City';

import CitiesList from '@components/CitiesList';
import defaultStyle from '@assets/styles';

class Cities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  onChangeText(text) {
    this.setState({
      text,
    });
  }

  render() {
    const {
      loading,
      cities,
      getCity,
      navigation,
    } = this.props;
    const { text } = this.state;

    return (
      <View style={{ flex: 1 }}>
        <View style={defaultStyle.header}>
          <Text style={defaultStyle.header_text}>
            Escolha sua cidade
          </Text>
        </View>

        <View padder style={[defaultStyle.container, { paddingTop: 5 }]}>
          <View style={{ padding: 15 }}>
            <TextInput
              style={defaultStyle.input}
              placeholder="Cidade"
              onChangeText={
                text => this.onChangeText(text)
              }
              borderBottomWidth={1}
              autoCapitalize="words"
              blurOnSubmit
              value={text}
            />

            <Button
              title="Buscar"
              style={defaultStyle.button}
              disabled={loading}
              onPress={
                () => {
                  Keyboard.dismiss();
                  getCity(text);
                }}
            />
          </View>

          <CitiesList
            data={cities}
            loading={loading}
            navigation={navigation}
          />
        </View>
      </View>
    );
  }
}

Cities.navigationOptions = {
  title: 'Cidades',
};

const mapStateToProps = (state) => {
  const { loading, error, cities } = state.cities;
  return {
    loading,
    error,
    cities,
  };
};

const mapDispatchToProps = dispatch => ({
  getCity: place => dispatch(getCity(place)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cities);
