import React from 'react'
import "./miniplayer.styl"
import Progress from './Progress'

class MiniPlayer extends React.Component {
  handlePlayOrPause =  (e) => {
    e.stopPropagation();
    if (this.props.song.url) {
      this.props.playOrPause();
    }
  }
  handleNext = (e) => {
    e.stopPropagation();
    if (this.props.song.url) {
      this.props.next();
    }
  }
  render () {
    let song = this.props.song;
    // console.log(song);
    let playerStyle = {};
    if (this.props.showStatus) {
      playerStyle = { display: 'none'};
    }
    if (!song.img) {
      song.img = require('@/assets/imgs/music.png');
    }
    let imgStyle = {};
    if (song.playStatus) {
      imgStyle['WebkitAnimationPlayState'] = 'running';
      imgStyle['animtionPlayState'] = 'running';
    } else {
      imgStyle['WebkitAnimationPlayState'] = 'paused';
      imgStyle['animationPlayState'] = 'paused';
    }
    let playButtonClass = song.playStatus ?  "icon-pause": "icon-play";
    return (
      <div className="mini-player" style={playerStyle}>
        <div className="player-img rotate" style={imgStyle}>
          <img src={song.img} alt={song.name}/>
        </div>
        <div className="player-center">
          <div className="progress-wrapper">
            <Progress disableButton={true} progress={this.props.progress}></Progress>
          </div>
          <span className="song">
            {song.name}
          </span>
          <span className="singer">
            {song.singer}
          </span>
        </div>
        <div className="player-right">
          <i className={playButtonClass} onClick={this.handlePlayOrPause}></i>
          <i className="icon-next ml-10" onClick={this.handleNext}></i>
        </div>
        <div className="filter"></div>
      </div>
    )
  }
}

export default MiniPlayer;