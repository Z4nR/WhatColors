import { useEffect, useState } from "react";
import { shuffleColor } from "./methods/method-loader";
import storage from "@/utils/storage";
import { useToast } from "@chakra-ui/react";

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

const useDiagramDiscriminant = () => {
  const [getDiscriminant, setDiscriminant] = useState(null);

  useEffect(() => {
    const discriminant = storage.getJSON("discriminant");
    setDiscriminant(discriminant);
  }, []);

  return [getDiscriminant];
};

const useDiagramComparison = () => {
  const [getComparison, setComparison] = useState(null);

  useEffect(() => {
    const comparison = storage.getJSON("comparison");
    setComparison(comparison);
  }, []);

  return [getComparison];
};

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

export {
  useTestData,
  useShuffle,
  useDiagramDiscriminant,
  useDiagramComparison,
  useToastMsg,
};
