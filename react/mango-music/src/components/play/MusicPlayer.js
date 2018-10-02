import React, { Component } from 'react'
import Player from '@/containers/Player'
import PlayerList from '@/containers/PlayerList'

class MusicPlayer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      currentSongIndex: 0,
      show: false
    }
  }
  changeCurrentIndex = (index) => {
    this.setState({
      currentSongIndex: index
    });
  }
  showList = (status) => {
    this.setState({
      show: status
    });
  }
  render () {
    return (
      <div className="music-player">
        <Player currentIndex={this.state.currentSongIndex}
          showList={this.showList}
          changeCurrentIndex={this.changeCurrentIndex}>
        </Player>
        <PlayerList currentIndex={this.state.currentSongIndex}
          showList={this.showList}
          show={this.state.show}
          changeCurrentIndex={this.changeCurrentIndex}>
        </PlayerList>
      </div>
    )
  }
}

export default MusicPlayer