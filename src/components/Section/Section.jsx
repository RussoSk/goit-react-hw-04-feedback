import React from 'react';
import PropTypes from 'prop-types';

// Компонент Section для відображення секції із заголовком
export const Section = ({ title, children }) => {
    return (
      <div>
        <h2>{title}</h2>
        {children}
      </div>
    );
  };

  Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  };