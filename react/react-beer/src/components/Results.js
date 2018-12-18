import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Beer from './Beer';
import Loader from './Loader';

class Results extends Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    beers: PropTypes.array.isRequired
  }
  render () {
    if (this.props.loading) {
      return <Loader message="🍻 Beer run!" />
    }
    return (
      <div className="results">
        <div className="beers">
          {this.props.beers.map((details, i) => <Beer details={details} key={details.id} />)}
        </div>
      </div>
    )
  }
}

export default Results;