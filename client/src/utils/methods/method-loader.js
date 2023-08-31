import testTypes from "./method-type";

const createArray = (type) => {
  const test = testTypes.find((test) => test.type === type);
  const value = test.value;
  return value;
};

export { createArray };
