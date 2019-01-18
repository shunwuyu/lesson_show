import React from 'react';
import PropTypes from 'prop-types';
import Clock from './Clock.jsx';

export default class ClockContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: props.time
    };
    this._update = this._updateTime.bind(this);
  }

  componentDidMount() {
    this._interval = setInterval(this._update, 1000);
  }

  componentWillUnMount () {
    clearInterval(this._interval);
  }

  _updateTime() {
    this.setState({
      time: new Date(this.state.time.getTime() + 1000)
    });
  }

  render () {
    return <Clock { ...this._exact(this.state.time) } />;
  }

  _exact(time) {
    return {
      hours: time.getHours(),
      minutes: time.getMinutes(),
      seconds: time.getSeconds()
    }
  }
}

ClockContainer.propTypes = {
  time: PropTypes.object.isRequired
};