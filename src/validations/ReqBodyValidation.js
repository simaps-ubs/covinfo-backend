import AppError from '../errors/AppError';

const reqBodyValidate = async (schema, body) => {
  const validation = await schema
    .validate(body, { abortEarly: false })
    .then((data) => console.log(data))
    .catch((err) => {
      console.log(err);
      console.log(JSON.stringify(err.errors));

      throw new AppError(err.errors, 400);
    });

  return validation;
};

export default reqBodyValidate;
