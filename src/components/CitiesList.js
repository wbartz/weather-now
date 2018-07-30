import React from 'react';
import { NavigationActions, StackActions } from 'react-navigation';
import {
  FlatList,
  AsyncStorage,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import Loading from '@components/Loading';

class CitiesList extends React.Component {
  renderItem = ({ item }) => (
    <TouchableOpacity
      style={{
        height: 40,
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#4682B4',
        paddingLeft: 10,
      }}
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
    </TouchableOpacity>
  );

  render() {
    const { data, loading } = this.props;

    if (loading) return <Loading transparent />;

    return (
      <View style={{ marginTop: 10, paddingLeft: 15, paddingRight: 15 }}>
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
