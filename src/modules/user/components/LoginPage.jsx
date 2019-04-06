import React from 'react';
import * as yup from 'yup';
import PropTypes from 'prop-types';

import { Redirect } from 'react-router';
import BasicForm from '../../../lib/components/form/BasicForm';
import TextField from '../../../lib/components/form/field/TextField';
import InlineError from '../../../lib/components/ui/InlineError';
import { routes } from '../../../routes';

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const LoginPage = ({ isFetchingAccount, isUserLoggedIn, handleUserLoggedIn, loginError }) => (
  <div>
    {!isUserLoggedIn
      ? (
        <BasicForm schema={schema} onUpdate={() => {}} onSubmit={handleUserLoggedIn} initialValues={{}}>
          <TextField type="text" name="email" placeholder="E-mail" />
          <TextField type="password" name="password" placeholder="Mot de passe" />
          <input type="submit" value="Connexion" disabled={isFetchingAccount} />
        </BasicForm>
      ) : <Redirect to={routes.dashboard} />}
    <InlineError error={loginError} />
  </div>
);

LoginPage.propTypes = {
  isFetchingAccount: PropTypes.bool.isRequired,
  isUserLoggedIn: PropTypes.bool.isRequired,
  handleUserLoggedIn: PropTypes.func.isRequired,
  loginError: PropTypes.string,
};

LoginPage.defaultProps = ({
  loginError: null,
});

export default LoginPage;
