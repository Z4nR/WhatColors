import { Box } from "@chakra-ui/react";
import UserData from "@/components/test/UserData";
import TestSheet from "@/components/test/TestSheet";

export default function TestPage() {
  return (
    <Box my={6}>
      <UserData />
      <TestSheet />
    </Box>
  );
}
