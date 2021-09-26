import React from 'react';
import PropTypes from 'prop-types';
import { Segment, Title } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <Segment>
      <Title>{title}</Title>
      {children}
    </Segment>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
