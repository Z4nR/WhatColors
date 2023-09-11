import { Box, HStack, Heading, IconButton } from "@chakra-ui/react";
import UserData from "@/components/test/UserData";
import TestSheet from "@/components/test/TestSheet";
import { useShuffle, useTestData } from "@/utils/customHooks";
import { userData } from "@/utils/test-helper";
import { useNavigate } from "react-router-dom";
import { CloseIcon } from "@chakra-ui/icons";

export default function TestPage() {
  const navigate = useNavigate();

  const [getTestData] = useTestData();
  const [getShuffle] = useShuffle(getTestData);

  const isClient = getTestData?.isClient;
  const user = userData(getTestData, isClient);

  const initiate = getTestData?.value;

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
      <TestSheet
        test={getShuffle}
        user={user}
        init={initiate}
        isClient={isClient}
      />
    </Box>
  );
}
