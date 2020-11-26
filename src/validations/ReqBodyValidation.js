import AppError from '../errors/AppError';

const reqBodyValidate = async (schema, body) => {
  const validation = await schema
    .validate(body, { abortEarly: false })
    .then()
    .catch((err) => {
      throw new AppError(err.errors, 400);
    });

  return validation;
};

export default reqBodyValidate;
