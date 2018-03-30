import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
// @inheritedComponent Paper

import React from 'react';
import PropTypes from 'prop-types';
import Paper from '../Paper';

function Card(props) {
  const { raised } = props,
        other = _objectWithoutProperties(props, ['raised']);

  return React.createElement(Paper, _extends({ elevation: raised ? 8 : 2 }, other));
}

Card.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * If `true`, the card will use raised styling.
   */
  raised: PropTypes.bool
} : {};

Card.defaultProps = {
  raised: false
};

export default Card;