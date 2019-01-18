import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  componentDidMount () {
    const that = this;
    axios.get("https://www.easy-mock.com/mock/5bca9240e6742c1bf8220bbd/kicamp/movies#!method=get")
      .then(function(res){
          // console.log(res);
          that.props.store.dispatch({
              type: "GET_FILM_DATA",
              payload: res.data.data.films
          })
      })
  }
  render () {
    var films = this.props.store.getState().films;
    console.log(films);
    return (
      <div>
        <ul>
          {
            films.map((item, index) => {
              return <li key={index}>
                <h2>{item.name}</h2>
                <img src={item.poster} alt={item.name}/>
              </li>
            })
          }
        </ul>
      </div>
    )
  }
}

export default App;