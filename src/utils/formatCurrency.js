const formatCurrency = (value, currency) => {
  return value.toLocaleString('en-US', {
    style: 'currency',
    currency,
  });
};
export default formatCurrency;
