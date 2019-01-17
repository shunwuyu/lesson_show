import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import { filmAction } from './action';

class AppUI extends Component {
  componentDidMount() {
    this.props.getFilmData();
}
render() {
    return (
        <div>
            <ul>
                {
                    this.props.films.map((item, index)=>{
                        return <li key={index}>
                            <h2>{item.name}</h2>
                            <img src={item.poster} alt={item.name}/>
                        </li>;
                    })
                }
            </ul>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    films: state.films
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getFilmData: () => {
      dispatch((dispatch) => {
        filmAction(dispatch);
        
      })
    }
  }
}

const App = connect(mapStateToProps, mapDispatchToProps)(AppUI);
export default App;