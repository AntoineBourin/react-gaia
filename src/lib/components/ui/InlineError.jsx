import React from 'react';
import PropTypes from 'prop-types';

const InlineError = ({ error }) => (
  error && <p className="error">{ error }</p>
);

InlineError.propTypes = {
  error: PropTypes.string,
};

InlineError.defaultProps = ({
  error: null,
});

export default InlineError;
