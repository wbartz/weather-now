import React from 'react';

import {
  connect,
} from 'react-redux';
import {
  Content,
  Form,
  Item,
  Label,
  Input,
  Button,
  Text,
} from 'native-base';
import {
  View,
  Keyboard,
} from 'react-native';
import defaultStyle from '../assets';

import { GetCity } from '../actions';

import CitiesList from '../components/CitiesList';
import CustomHeader from '../components/CustomHeader';

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
      loading, cities, getCity, navigation,
    } = this.props;
    const { text } = this.state;

    return (
      <View style={{ flex: 1 }}>
        <CustomHeader navigation={navigation} />
        <Content padder style={defaultStyle.container}>
          <Form>
            <Item floatingLabel>
              <Label>
                Cidade
              </Label>
              <Input
                style={defaultStyle.input}
                onChangeText={
                  text => this.onChangeText(text)
                }
                autoCapitalize="words"
                blurOnSubmit
                value={text}
              />
            </Item>

            <Button
              block
              info
              style={defaultStyle.button}
              disabled={loading}
              onPress={
                () => {
                  Keyboard.dismiss();
                  getCity(text);
                }}
            >
              <Text>
                Buscar
              </Text>
            </Button>
          </Form>

          <CitiesList
            data={cities}
            loading={loading}
            navigation={navigation}
          />
        </Content>
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
  getCity: place => dispatch(GetCity(place)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cities);
