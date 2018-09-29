import { connect } from 'react-redux'
import { changeSong, removeSong } from '../redux/actions'
import PlayerList from '../components/play/PlayerList'

const mapStateToProps = (state) => ({
  currentSong: state.song,
  playSongs: state.songs
});

const mapDispatchToProps = (dispatch) => ({
  changeCurrentSong: (song) => {
    dispatch(changeSong(song));
  },
  removeSong: (id) => {
    dispatch(removeSong(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayerList);