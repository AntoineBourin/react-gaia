import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';

export const TextField = ({ name, type, placeholder, disabled }) => (
  <Field name={name}>
    {({ input, meta }) => (
      <div className="text-field">
        <input {...input} type={type} placeholder={placeholder} disabled={disabled} />
        {meta.error && meta.touched && <span className="field-error">{meta.error}</span>}
      </div>
    )}
  </Field>
);

TextField.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};

TextField.defaultProps = {
  placeholder: '',
  disabled: false,
};

export default TextField;
