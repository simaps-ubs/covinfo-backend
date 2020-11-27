import AppError from '../errors/AppError';

const reqBodyValidate = async (schema, body) => {
  return await schema
    .validate(body, { abortEarly: false })
    .then()
    .catch((err) => {
      throw new AppError(err.errors, 400);
    });
};

export default reqBodyValidate;
