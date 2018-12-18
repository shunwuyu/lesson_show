import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Loader from '../Loader';
import styles from './page.css';

export default class Page extends Component {
  render () {
    console.log(this.props);
    const { className, children, loading = false, inner = false } = this.props;
    const loadingStyle = {
      height: 'calc(100vh-184px)',
      overflow: 'hidden'
    };
    return (
      <div
        className={`${className} ${inner?'contentInner':'' }`}
        style={{height:'calc(100vh - 184px)',overflow:'hidden', backgroundColor: '#f0f2f5'}}>
        {loading ? <Loader spinning /> : ''}
        {children}
      </div>
    );
  }
}

Page.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  loading: PropTypes.bool,
  inner: PropTypes.bool
}