module.exports = {
  responseJson(success = false, message = '', errors = null, data = []) {
    const res = {
      success,
      message,
      errors: `${errors}`,
      data,
    };
    return res;
  },
};
