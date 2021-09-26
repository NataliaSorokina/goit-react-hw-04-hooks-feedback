import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <List>
      <ListItem>
        Good:<span> {good}</span>
      </ListItem>
      <ListItem>
        Neutral:<span> {neutral}</span>
      </ListItem>
      <ListItem>
        Bad:<span> {bad}</span>
      </ListItem>
      <ListItem>
        Total:<span> {total}</span>
      </ListItem>
      <ListItem>
        Positive feedback:<span> {positivePercentage}%</span>
      </ListItem>
    </List>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
