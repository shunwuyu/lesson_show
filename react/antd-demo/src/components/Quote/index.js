import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

function Quote({ name, content, title, avatar }) {
  return (
    <div className="quote">
      <div className="inner">{content}</div>
      <div className="footer">
        <div className="description">
          <p>-{name}-</p>
          <p>{title}</p>
        </div>
        <div
          className="avatar"
        />
      </div>
    </div>
  )
}

Quote.propTypes = {
  name: PropTypes.string,
  content: PropTypes.string,
  title: PropTypes.string,
  avatar: PropTypes.string,
}

export default Quote