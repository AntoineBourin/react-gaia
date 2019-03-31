import React from 'react';
import { FormSpy } from 'react-final-form';
import PropTypes from 'prop-types';

const SyncWith = ({ update }) => (
  <FormSpy subscription={{ values: true }} onChange={({ values }) => update(values)} />
);

SyncWith.propTypes = {
  update: PropTypes.func.isRequired,
};

export default SyncWith;
