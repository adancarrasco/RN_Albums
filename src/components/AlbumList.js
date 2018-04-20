import React from 'react';
import {View} from 'react-native';
import Axios from 'axios';

import AlbumDetail from './AlbumDetail';

class AlbumList extends React.Component {
  state = {
    albums: [],
  };

  UNSAFE_componentWillMount() {
    console.log('component');

    const self = this;
    Axios.get('https://rallycoding.herokuapp.com/api/music_albums').then(
      response => {
        self.setState({
          albums: response.data,
        });
      }
    );
  }

  renderAlbumns() {
    return this.state.albums.map((album, index) => (
      <AlbumDetail key={album.title} album={album} />
    ));
  }

  render() {
    return <View>{this.renderAlbumns()}</View>;
  }
}

export default AlbumList;
