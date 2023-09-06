import { Box, HStack, Heading, IconButton } from "@chakra-ui/react";
import UserData from "@/components/test/UserData";
import TestSheet from "@/components/test/TestSheet";
import { useShuffle, useTestData } from "@/utils/customHooks";
import { testResult, userData } from "@/utils/test-helper";
import { useState } from "react";
import { reunitedColor } from "@/utils/methods/method-loader";
import { useNavigate } from "react-router-dom";
import { CloseIcon } from "@chakra-ui/icons";

export default function TestPage() {
  const navigate = useNavigate();

  const [getTestData] = useTestData();
  const [getShuffle] = useShuffle(getTestData);
  const [getTestResult, setTestResult] = useState(null);

  const isClient = getTestData?.isClient;
  const user = userData(getTestData, isClient);

  const handleTestResult = (row, newState) => {
    const newRemovable = getShuffle.map((removable) => {
      if (removable.row === row) {
        removable.value = newState;
      }

      return removable;
    });

    setTestResult(newRemovable);
  };

  const testData = reunitedColor(getTestResult);
  const initiate = getTestData?.value;
  const result = testResult(testData, initiate, user);

  const cancelTest = () => {
    navigate("/");
  };

  return (
    <Box my={6}>
      <HStack mb={8}>
        <Heading as={"h6"} fontSize={"lg"} textAlign={"center"} flex={1}>
          Pengerjaan Tes Buta Warna <br /> Metode Farnsworth-Munsell
        </Heading>
        <IconButton
          size={"sm"}
          colorScheme="red"
          icon={<CloseIcon />}
          onClick={cancelTest}
        />
      </HStack>
      <UserData user={user} />
      <TestSheet test={getShuffle} handle={handleTestResult} result={result} />
    </Box>
  );
}
