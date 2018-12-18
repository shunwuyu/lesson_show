import React, { Component } from 'react';
import slug from 'slugify';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


class Beer extends Component {
  static propTypes = {
    details: PropTypes.object.isRequired
  }
  render () {
    const { name, labels, id } = this.props.details;
    console.log(this.props.details);
    const image = labels ? labels.medium : 'https://img14.360buyimg.com/n7/jfs/t20569/97/1194982666/203143/26dfa4f7/5b22050aNfd2ffc77.jpg';
    return (
      <div className="beer">
        <Link to={`/beer/${id}/${slug(name)}`}>
          <h2>{name}</h2>
          <img src={image} alt={name}/>
        </Link>
      </div>
    )
  }
} 

export default Beer;
