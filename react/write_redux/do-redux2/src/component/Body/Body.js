import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from '../../redux';
import Button from '../Button/Button';
class Body extends Component {
  render() {
    return (
      <div>
        <div className="body">{this.props.body}</div>
        <Button />
      </div>
    );
  }
}

export default connect(Body)