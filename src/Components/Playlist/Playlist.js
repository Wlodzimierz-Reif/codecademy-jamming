import React from 'react';
import './Playlist.css';

import Tracklist from '../Tracklist/Tracklist';

class Playlist extends React.Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
  }
  handleNameChange(event) {
    this.props.onNameChange(event.target.value);
  }
  // you need to add dom method to change value in DOM
  render() {
    const defaultValue = 'New Playlist';
    return (
      <div className='Playlist'>
        <input value={defaultValue} onChange={this.handleNameChange} />
        <Tracklist
          tracks={this.props.playlistTracks}
          onRemove={this.props.onRemove}
          isRemoval={true}
        />
        <button className='Playlist-save' onClick={this.props.onSave}>
          SAVE TO SPOTIFY
        </button>
      </div>
    );
  }
}

export default Playlist;
