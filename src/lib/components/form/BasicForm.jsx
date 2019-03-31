import React from 'react';
import { Form } from 'react-final-form';
import PropTypes from 'prop-types';

import validateForm from './yupValidation';
import SyncWith from './syncWith';

const BasicForm = ({ children, onSubmit, schema, initialValues, withSync, onUpdate }) => (
  <Form
    onSubmit={onSubmit}
    validate={values => validateForm(values, schema)}
    initialValues={initialValues}
    render={({ handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        { children }
        {withSync && <SyncWith update={onUpdate} />}
      </form>
    )}
  />
);

BasicForm.propTypes = {
  children: PropTypes.array,
  onSubmit: PropTypes.func,
  schema: PropTypes.object,
  initialValues: PropTypes.object,
  withSync: PropTypes.bool,
  onUpdate: PropTypes.func,
};

BasicForm.defaultProps = {
  initialValues: {},
  children: [],
  onSubmit: () => {},
  schema: null,
  withSync: false,
  onUpdate: null,
};

export default BasicForm;
