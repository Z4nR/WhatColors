import { Box } from "@chakra-ui/react";
import UserData from "@/components/test/UserData";
import TestSheet from "@/components/test/TestSheet";
import { useTestData } from "@/utils/customHooks";
import { userData } from "@/utils/test-helper";

export default function TestPage() {
  const [getTestData] = useTestData();
  const isClient = getTestData?.isClient;

  const user = userData(getTestData, isClient);

  console.log(user);

  return (
    <Box my={6}>
      <UserData user={user} />
      <TestSheet />
    </Box>
  );
}
