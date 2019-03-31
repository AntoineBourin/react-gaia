import { setLocale } from 'yup/lib';

setLocale({
  mixed: {
    default: 'Saisie invalide',
    required: 'Champs requis',
  },
  string: {
    // eslint-disable-next-line
    min: 'Doit contenir au minimum ${min} caractères',
    email: 'Ne correspond pas à un e-mail valide',
  },
  number: {
    required: 'Ce champs est requis',
    // eslint-disable-next-line
    min: 'Doit contenir au minimum ${min} caractères',
    // eslint-disable-next-line
    max: 'Doit contenir au maximum ${min} caractères',
  },
});

export const validation = async (val, schema) => schema.validate(val);

export const validateForm = (val, schema) => validation(val, schema)
  .then(() => ({}))
  .catch(err => ({ [err.path]: err.message }));

export default validateForm;
