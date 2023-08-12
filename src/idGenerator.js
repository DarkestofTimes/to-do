export let storedId = 0;

const generateId = () => {
  return function () {
    storedId++;
    return storedId;
  };
};

export let generatedId = generateId();
export const setStoredId = (value) => {
  storedId = value;
};
