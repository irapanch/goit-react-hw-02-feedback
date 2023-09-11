import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div>
    <div>Good: {good}</div>
    <div>Neutral: {neutral}</div>
    <div>Bad: {bad}</div>
    <div>Total: {total}</div>
    <div>Positive Feedbacks: {positivePercentage}%</div>
  </div>
);

export default Statistics;

Statistics.propTypes = {
  total: PropTypes.number,
  positivePercentage: PropTypes.string,
  state: PropTypes.shape({
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  }),
};
