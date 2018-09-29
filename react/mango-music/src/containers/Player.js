import { connect } from 'react-redux';
import {showPlayer, changeSong} from '../redux/actions';
import Player from '../components/play/Player';

const mapStateToProps = (state) => ({
  showStatus: state.showStatus,
  currentSong: state.song,
  playSongs: state.songs
});

const mapDispatchToProps = (dispatch) => ({
  showMusicPlayer: (status) => {
    dispatch(showPlayer(status));
  },
  changeCurrentSong: (song) => {
    dispatch(changeSong(song));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Player);
