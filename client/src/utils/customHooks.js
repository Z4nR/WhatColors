import { useEffect, useState } from "react";
import { shuffleColor } from "./methods/method-loader";
import storage from "@/utils/storage";
import { useToast } from "@chakra-ui/react";

//Load User Data in Test Page
const useTestData = () => {
  const [getTestData, setTestData] = useState(null);

  useEffect(() => {
    const data = storage.getJSON("user");
    setTestData(data);
  }, []);

  return [getTestData];
};

//To Handle Shuffle Color Position Process
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

//Display Discriminant Chart
const useChartDiscriminant = () => {
  const [getDiscriminant, setDiscriminant] = useState(null);

  useEffect(() => {
    const discriminant = storage.getJSON("discriminant");
    setDiscriminant(discriminant);
  }, []);

  return [getDiscriminant];
};

//Display Comparison Chart
const useChartComparison = () => {
  const [getComparison, setComparison] = useState(null);

  useEffect(() => {
    const comparison = storage.getJSON("comparison");
    setComparison(comparison);
  }, []);

  return [getComparison];
};

//Display Toast Message
const useToastMsg = () => {
  const toast = useToast();

  return (title, desc, status) =>
    toast({
      title: title,
      description: desc,
      status: status,
      isClosable: true,
      containerStyle: {
        padding: "15px 20px",
      },
    });
};

//Add Count Down When Already Run Some Func
const useCountDown = () => {
  const [countDown, setCountDown] = useState(0);

  useEffect(() => {
    if (countDown <= 0) return;

    const timeout = setTimeout(() => {
      setCountDown(countDown - 1);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [countDown]);

  const start = (time) => {
    setCountDown(time);
  };

  return { countDown, start };
};

//Handle Data to Download in Group Page
const useDownloadData = (data) => {
  const [csv, setCsv] = useState(null);

  useEffect(() => {
    if (data && !!data.length) {
      const comparisonId = Array(data[0].comparisonResult.length)
        .fill(null)
        .map((_, id) => `C${id + 1}`);

      const discriminantId = Array(data[0].discriminantResult.length)
        .fill(null)
        .map((_, id) => `D${id + 1}`);

      const header = [
        "Tanggal",
        "Nama",
        "Usia",
        "Jumlah Nilai Kesalahan",
        "Waktu Pengerjaan",
        "Status",
        "Perangkat",
        ...comparisonId,
        ...discriminantId,
      ];

      const csvData = data?.map((c) => {
        const date = c.date;
        const name = c.name;
        const age = c.age;
        const score = c.totalErrorScore;
        const time = c.time;
        const status = c.status;
        const device = c.device;
        const comparisonKey = c?.comparisonResult.map(
          (item) => item.comparison
        );
        const discriminantKey = c?.discriminantResult.map(
          (item) => item.discriminant
        );

        const newArray = [
          date,
          name,
          age,
          score,
          time,
          status,
          device,
          ...comparisonKey,
          ...discriminantKey,
        ];

        return newArray;
      });

      const finalData = [header, ...csvData];

      setCsv(finalData);
    }
  }, [data]);

  return [csv];
};

export {
  useTestData,
  useShuffle,
  useChartDiscriminant,
  useChartComparison,
  useToastMsg,
  useCountDown,
  useDownloadData,
};
