import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import "./progress.styl"

class Progress extends Component {
  componentDidUpdate () {
    if (!this.progressBarWidth) {
      this.progressBarWidth = ReactDOM.findDOMNode(this.refs.progressBar).offsetWidth;
    }
  }
  componentDidMount () {
    let progressBarDOM = ReactDOM.findDOMNode(this.refs.progressBar);
    let progressDOM = ReactDOM.findDOMNode(this.refs.progress);
    let progressBtnDOM = ReactDOM.findDOMNode(this.refs.progressBtn);
    this.progressBarWidth = progressBarDOM.offsetWidth
  }
  render () {
    let { progress, disableButton } = this.props;
    if (!progress) progress = 0;
    let progressButtonOffsetLeft = 0;
    if (this.progressBarWidth) {
      progressButtonOffsetLeft = progress * this.progressBarWidth
    }
    return (
      <div className="progress-bar" ref="progressBar">
        <div className="progress" style={{width:`${progress * 100}%`}} ref="progress"></div>
        {
          disableButton === true ? "" : 
          <div className="progress-button" style={{left:progressButtonOffsetLeft}} ref="progressBtn"></div>
        }
      </div>
    )
  }
}

Progress.propTypes = {
  progress: PropTypes.number.isRequired,
  disableButton: PropTypes.bool,
  disableDrag: PropTypes.bool,
  onDragStart: PropTypes.func,
  onDrag: PropTypes.func,
  onDragEnd: PropTypes.func
}

export default Progress