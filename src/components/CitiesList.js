import React from 'react';
import {
  ListItem,
  Text,
} from 'native-base';
import { NavigationActions, StackActions } from 'react-navigation';
import { FlatList, AsyncStorage, View } from 'react-native';
import Loading from './Loading';

class CitiesList extends React.Component {
  renderItem = ({ item }) => (
    <ListItem
      onPress={
        async () => {
          const { navigation } = this.props;

          await AsyncStorage.setItem('city', item.woeid)
            .then(() => {
              navigation.dispatch(StackActions.reset(
                {
                  index: 0,
                  actions: [
                    NavigationActions.navigate({ routeName: 'Weather' }),
                  ],
                },
              ));
            })
            .catch(error => console.log(error));
        }
      }
    >
      <Text>
        {`${item.name} - ${item.admin1.content} - ${item.country.content}`}
      </Text>
    </ListItem>
  );

  render() {
    const { data, loading } = this.props;

    if (loading) {
      return (
        <View style={{ marginTop: 10 }}>
          <Loading />
        </View>);
    }

    return (
      <View style={{ marginTop: 10 }}>
        <FlatList
          data={data.place}
          renderItem={this.renderItem}
          keyExtractor={item => String(item.woeid)}
        />
      </View>
    );
  }
}


export default CitiesList;
