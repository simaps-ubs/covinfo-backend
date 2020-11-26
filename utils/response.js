module.exports = {
  responseJson(success = false, message = '', error = null, data = []) {
    const res = {
      success,
      message,
      error: `${error}`,
      data,
    };
    return res;
  },
};
