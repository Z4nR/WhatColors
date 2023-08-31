import { useEffect, useState } from "react";

const useUserData = () => {
  const [getUserData, setUserData] = useState(null);

  useEffect(() => {
    const dataInput = localStorage.getItem("user");
    setUserData(JSON.parse(dataInput));
  }, []);

  return [getUserData];
};

export { useUserData };
