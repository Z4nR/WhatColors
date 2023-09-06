import { colorBlindName, colorBlindRange } from "./methods/method-type";
import storage from "./storage";

const userData = (data, isClient) => {
  const date = new Date().toLocaleDateString("id-ID", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const name = isClient === true ? `Inisial ${data?.fullName}` : data?.fullName;
  const age = data?.age;
  const gender = data?.gender;
  const device = data?.device;
  const type = data?.testType;

  return {
    date,
    name,
    age,
    gender,
    device,
    type,
  };
};

const blindStatus = (totalScore) => {
  let type;
  if (totalScore <= 16) {
    type = "Bagus";
  } else if (totalScore >= 10 && totalScore <= 100) {
    type = "Rerata";
  } else {
    type = "Lemah";
  }

  return type;
};

const compareValue = (result, initiate) => {
  const compare = result?.map((item, rowIndex) => {
    const res = [];
    const initialRow = initiate[rowIndex];

    for (let i = 0; i < item.value.length; i++) {
      const resultValue = item.value[i];
      if (resultValue.status !== "removable") {
        continue;
      }

      const initialValue = initialRow.value[i];
      res.push(resultValue === initialValue);
    }

    return res;
  });

  const comparisonResult = compare?.flat(1);

  const value = [];
  for (let i = 0; i < comparisonResult?.length; i++) {
    const compare = `${comparisonResult[i]}`;
    const upperCompare = compare.toUpperCase();
    value.push({ _id: `C${i + 1}`, comparison: upperCompare });
  }

  return { value: value, result: comparisonResult };
};

const discriminantValue = (result, initiate) => {
  const discriminant = result?.map((item, rowIndex) => {
    const res = [];
    const initialRow = initiate[rowIndex];

    for (let i = 0; i < item.value.length; i++) {
      const resultValue = item.value[i];
      const resultNumber = resultValue.number;

      if (resultValue.status !== "removable") {
        continue;
      }

      const initialValue = initialRow.value[i];
      const initialNumber = initialValue.number;

      const countingDiscriminant =
        resultNumber >= initialNumber
          ? resultNumber - initialNumber
          : initialNumber - resultNumber;

      res.push(countingDiscriminant);
    }

    return res;
  });

  const discriminantResult = discriminant?.flat(1);

  const number = [];
  for (let i = 0; i < discriminantResult?.length; i++) {
    number.push(i + 1);
  }

  const value = [];
  for (let i = 0; i < discriminantResult?.length; i++) {
    value.push({ _id: `D${number[i]}`, discriminant: discriminantResult[i] });
  }

  discriminantResult?.reverse();
  number.reverse();

  return {
    number: number,
    result: discriminantResult,
    value: value,
  };
};

const methodCalculate = (result) => {
  const method = result?.map((item) => {
    const res = [];

    for (let i = 0; i < item.value.length; i++) {
      const iCap = item.value[i];
      if (iCap.status !== "removable") {
        continue;
      }
      const capNumber = iCap.number;

      const beforeCap = item.value[i - 1];
      const capBefore = beforeCap.number;

      const afterCap = item.value[i + 1];
      const capAfter = afterCap.number;

      const beforeCapCount = capNumber - capBefore;
      const afterCapCount = capAfter - capNumber;
      const totalCapError = beforeCapCount + afterCapCount;
      const countingMethod = Math.abs(totalCapError - 2);

      res.push(countingMethod);
    }

    const result = res.reduce((sum, cap) => sum + cap, 0);

    return {
      result: result,
    };
  });

  const methodMapping = method?.map((item) => item.result);
  const totalErrorScore = methodMapping?.reduce((sum, cap) => sum + cap, 0);

  return totalErrorScore;
};

const blindType = (type, compareResult) => {
  const blindRange = colorBlindRange[type];
  const resultColor = {};
  Object.keys(blindRange).forEach((color) => {
    const selectedColor = blindRange[color];
    let falseValue = 0;
    for (let i = selectedColor.min; i <= selectedColor.max; i++) {
      if (!compareResult[i]) falseValue++;
    }

    resultColor[color] = falseValue;
  });

  let maxFalse = 0;
  let blindType;
  for (let prop in resultColor) {
    if (resultColor[prop] > maxFalse) {
      maxFalse = resultColor[prop];
      blindType = prop;
    }
  }

  const result = colorBlindName[blindType];
  return result;
};

const colorBlindType = (t, compare) => {
  let type;
  if (t === "Menengah (80 Warna)") {
    type = "type85";
  } else if (t === "Sulit (85 Warna)") {
    type = "type100";
  } else {
    return null;
  }

  const findBlindType = blindType(type, compare);

  return findBlindType;
};

const testResult = (result, initiate, user, time) => {
  const comparison = compareValue(result, initiate);
  const discriminant = discriminantValue(result, initiate);
  const totalErrorScore = methodCalculate(result);
  const blindType = colorBlindType(user.type, comparison.result);
  const blindCheck = !blindType ? "Normal" : blindType;
  const errorScoreStatus = blindStatus(totalErrorScore);

  const comparisonResult = comparison.value;
  const discriminantResult = discriminant.value;

  storage.setJSON("discriminant", discriminant);

  return {
    ...user,
    totalErrorScore,
    errorScoreStatus,
    blindCheck,
    comparisonResult,
    discriminantResult,
    time,
  };
};

export { userData, testResult };
