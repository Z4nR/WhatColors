import { useEffect, useState } from "react";

const useTestData = () => {
  const [getTestData, setTestData] = useState(null);

  useEffect(() => {
    const data = sessionStorage.getItem("user");
    setTestData(JSON.parse(data));
  }, []);

  return [getTestData];
};

export { useTestData };
