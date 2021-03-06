import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './style.css';

const Card = (props) => {
  const { values } = props;
  return (
    <ul className="category__box">
      {values && values.map((element) => {
        const {
          name: section, id, count: questions, avatar_url: imageUrl,
        } = element;
        return (
          <li key={id} className="category__card">
            <Link to={`/main/${section}`}>
              <div className="category__card--content">
                <img
                  src={imageUrl}
                  alt="img"
                  className="category__card--img"
                />
                <div className="category__card--section">{section}</div>
                <div className="category__card--content--box">
                  {questions}
                  {' '}
                  Questions
                </div>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

Card.propTypes = {
  values: PropTypes.instanceOf(Array).isRequired,
};

export default Card;
