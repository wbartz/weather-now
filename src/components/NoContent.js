import React from 'react';
import PropTypes from 'prop-types';
import {
  Content,
  Card,
  CardItem,
  Body,
} from 'native-base';
import {
  View,
  Text,
} from 'react-native';
import CustomHeader from './CustomHeader';
import defaultStyle from '../assets';

const NoContent = props => (
  <View style={{ flex: 1 }}>
    <CustomHeader title="Cidade não encontrada" navigation={props.navigation} />
    <Content padder style={defaultStyle.container}>
      <Card>
        <CardItem>
          <Body style={defaultStyle.weather_title_container}>
            <View style={defaultStyle.weather_title_sub_container}>
              <Text>
                Nenhuma informação encontrada
              </Text>
            </View>
          </Body>
        </CardItem>
      </Card>
    </Content>
  </View>
);

NoContent.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default NoContent;
