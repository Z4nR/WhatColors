import { testTypes } from "./method-type";

const createArray = (type) => {
  const test = testTypes.find((test) => test.type === type);
  const value = test.value;
  return value;
};

const shuffleColor = (array) => {
  let nowArray = array.length;

  while (0 !== nowArray) {
    let shuffle = Math.floor(Math.random() * nowArray);
    nowArray -= 1;

    let tmp = array[nowArray];
    array[nowArray] = array[shuffle];
    array[shuffle] = tmp;
  }

  return array;
};

const reunitedColor = (array) => {
  const reunite = array?.map((item) => {
    return {
      row: item.row,
      value: [item.first, ...item.value, item.last],
    };
  });
  return reunite;
};

export { createArray, shuffleColor, reunitedColor };
