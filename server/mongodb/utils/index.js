const __getSort = (sort) => {
  const result = {};
  result[sort] = -1;
  return result;
};

const __sort = (data, sortBy, order = -1) => {
  return data.sort((a, b) => order * (a[sortBy] - b[sortBy]));
};

const __parseTimestamp = (timestamp) => {
  return new Date(timestamp).toLocaleString('lt-LT', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
};

module.exports = {
  __getSort,
  __sort,
  __parseTimestamp,
};
