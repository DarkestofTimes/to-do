export const filterByCompletion = (array) => {
  const filtered = array.filter((item) => item.complete === false);
  return filtered;
};
