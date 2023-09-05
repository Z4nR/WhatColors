import { useEffect, useRef, useState } from "react";
import { shuffleColor } from "./methods/method-loader";
import storage from "@/utils/storage";

const useTestData = () => {
  const [getTestData, setTestData] = useState(null);

  useEffect(() => {
    const data = storage.getJSON("user");
    setTestData(data);
  }, []);

  return [getTestData];
};

const useShuffle = (data) => {
  const [getShuffle, setShuffle] = useState(null);

  useEffect(() => {
    const shuffled = data?.value.map((item) => {
      const arrayValue = item.value;
      const filterRemovable = arrayValue.filter(
        (val) => val.status === "removable"
      );
      const firstArray = arrayValue[0];
      const shuffle = shuffleColor(filterRemovable);
      const lastArray = arrayValue[arrayValue.length - 1];
      const newArrayValue = [...shuffle];
      return {
        row: item.row,
        value: newArrayValue,
        first: firstArray,
        last: lastArray,
      };
    });
    setShuffle(shuffled);
  }, [data]);

  return [getShuffle];
};

const useStopWatch = (minutes) => {
  const [getTime, setTime] = useState(null);
  const interval = useRef(null);
  const timeMax = useRef(null);

  const timeNow = new Date();
  timeMax.current = new Date(timeNow.getTime() + minutes * 60000);

  interval.current = setInterval(() => {
    if (timeNow >= timeMax.current) {
      clearInterval(interval.current);
      interval.current = null;
      setTime("Waktu Sudah Habis");
      return;
    }

    const startTime = new Date(timeMax.current - timeNow);
    setTime(`${startTime.getMinutes()}:${startTime.getSeconds()}`);
  }, 1000);

  return [getTime];
};

export { useTestData, useShuffle, useStopWatch };
