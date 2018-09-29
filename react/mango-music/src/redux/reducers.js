import { combineReducers } from 'redux'
import * as ActionTypes from './actionTypes'

const initialState = {
  showStatus: false,
  song: {},
  songs: []
}

function song(song = initialState.song, action) {
  switch (action.type) {
    case ActionTypes.CHANGE_SONG:
      return action.song
    default:
      return song
  }
}

function songs(songs = initialState.songs, action) {
  switch (action.type) {
    case ActionTypes.SET_SONGS:
      return action.songs;
    case ActionTypes.REMOVE_SONG_FROM_LIST:
      return songs.filter(song => song.id !== action.id)
    default:
      return songs;
  }
}

function showStatus(showStatus = initialState.showStatus, action) {
  switch (action.type) {
    case ActionTypes.SHOW_PLAYER:
      return action.showStatus;
    default:
      return showStatus;
  }
}

const reducer = combineReducers({
  song,
  songs,
  showStatus
});

export default reducer