import React from 'react';
import PropTypes from 'prop-types';
import {
  Header,
  Title,
  Body,
  Left,
  Button,
  Icon,
} from 'native-base';


const CustomHeader = (props) => {
  const { title, navigation } = props;
  return (
    <Header androidStatusBarColor="#4F6D7A" style={{ backgroundColor: '#4682B4' }}>
      <Left>
        <Button
          transparent
          onPress={
            () => (title !== 'Cidades'
              ? navigation.navigate('City')
              : navigation.goBack())
          }
        >
          <Icon name={title !== 'Cidades' ? 'search' : 'arrow-back'} color="#ffffff" />
        </Button>
      </Left>
      <Body>
        <Title>
          {title}
        </Title>
      </Body>
    </Header>
  );
};

CustomHeader.propTypes = {
  title: PropTypes.string,
  navigation: PropTypes.object.isRequired,
};

CustomHeader.defaultProps = {
  title: 'Cidades',
  navigation: {},
};

export default CustomHeader;
