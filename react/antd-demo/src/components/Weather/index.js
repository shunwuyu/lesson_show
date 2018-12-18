import React from 'react';
import PropTypes from 'prop-types';
import { Spin } from 'antd';
import './weather.css';

function Weather ({ }) {
  return (
    <Spin spinning={true}>
      <div className="weather">
        <div className="left">
          <div className="icon">
            <p>深圳</p>
          </div>
          <div className="right">
            <h1 className="temperature">
            0°
            </h1>
            <p className="description">
            深圳,12-14
            </p>
          </div>
        </div>
      </div>
    </Spin>
  );
}

Weather.propTypes = {
  city: PropTypes.string,
  icon: PropTypes.string,
  dateTime: PropTypes.string,
  temperature: PropTypes.string,
  loading: PropTypes.bool
}

export default Weather;