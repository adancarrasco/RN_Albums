import React from 'react';
import {View, Text} from 'react-native';

class AlbumList extends React.Component {
  UNSAFE_componentWillMount() {
    console.log('component');
  }

  render() {
    return (
      <View>
        <Text>Album List</Text>
      </View>
    );
  }
}

export default AlbumList;
