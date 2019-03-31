import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';

const SubmitField = ({ value, disabled }) => (
  <Field>
    {({ input }) => (
      <div className="submit-field">
        <input {...input} type="submit" value={value} disabled={disabled} />
      </div>
    )}
  </Field>
);

SubmitField.propTypes = {
  value: PropTypes.string,
  disabled: PropTypes.bool,
};

SubmitField.defaultProps = ({
  value: '',
  disabled: false,
});

export default SubmitField;
