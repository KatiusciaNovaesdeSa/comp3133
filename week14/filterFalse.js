function filterFalse(inputArr) {
    return inputArr.filter(function (arrayElement) {
      return arrayElement.authenticated || arrayElement.user_id.match(false);
    });
  }

  module.exports = filterFalse;