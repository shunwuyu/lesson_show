import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
  render () {
    return (
      <div className="home">
      </div>
    )
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = {
} 

export default connect(mapStateToProps, mapDispatchToProps)(Home);