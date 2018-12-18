import React from 'react';
import PropTypes from 'prop-types';
import './loader.css';

const Loader = ({ spinning=true, fullScreen }) => {
  return (
    <div className={`loader ${spinning?'':'hidden'} ${fullScreen ? 'fullScreen': ''}`}>
      <div className="warpper">
        <div className="inner" />
        <div className="text">LOADING</div>
      </div>
    </div>
  )
}

Loader.propTypes = {
  spinning: PropTypes.bool,
  fullScreen: PropTypes.bool
}

export default Loader;
