const toDate = (timestamp) => {
  return new Date(timestamp).toLocaleString('lt-LT', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  });
};

module.exports = {
  toDate,
};
