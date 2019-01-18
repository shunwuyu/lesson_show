import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from '../../redux';

const propsType = {
  store: PropTypes.object,
}

class Head extends Component {
  render() {
    return (
      <div className="head">{this.props.head}</div>
    );
  }
}

export default connect(Head, propsType);