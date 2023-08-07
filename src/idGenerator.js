export const generateId = () => {
  let value = 0;

  return function () {
    return ++value;
  };
};

export let generatedId = generateId();
