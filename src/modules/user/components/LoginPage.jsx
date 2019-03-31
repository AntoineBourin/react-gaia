import React from 'react';
import * as yup from 'yup';
import PropTypes from 'prop-types';

import { Redirect } from 'react-router';
import BasicForm from '../../../lib/components/form/BasicForm';
import TextField from '../../../lib/components/form/field/TextField';
import SubmitField from '../../../lib/components/form/field/SubmitField';
import { routes } from '../../../routes';
import InlineError from '../../../lib/components/ui/InlineError';

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const LoginPage = ({ isFetchingAccount, isUserDefined, handleUserLoggedIn, loginError }) => (
  <div>
    {isFetchingAccount || !isUserDefined ? (
      <BasicForm schema={schema} onSubmit={handleUserLoggedIn}>
        <TextField type="text" name="email" placeholder="E-mail" />
        <TextField type="password" name="password" placeholder="Mot de passe" />
        <SubmitField value="Connexion" disabled={isFetchingAccount} />
      </BasicForm>
    ) : <Redirect to={routes.dashboard} />
    }
    <InlineError error={loginError} />
  </div>
);

LoginPage.propTypes = {
  isFetchingAccount: PropTypes.bool.isRequired,
  isUserDefined: PropTypes.bool.isRequired,
  handleUserLoggedIn: PropTypes.func.isRequired,
  loginError: PropTypes.string,
};

LoginPage.defaultProps = ({
  loginError: null,
});

export default LoginPage;
