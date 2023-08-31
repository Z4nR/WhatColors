import { Box, Text, useMediaQuery } from "@chakra-ui/react";
import FirstSection from "../components/Home/FirstSection";
import SecondSection from "../components/Home/SecondSection";
import ThirdSection from "../components/Home/ThirdSection";

export default function Home() {
  const [isMobile] = useMediaQuery("(max-width: 401px)");
  return (
    <Box mt={{ base: 4, sm: 2, md: 0 }}>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      {isMobile ? (
        <Text pb={4} fontSize={12} textAlign={"center"} color={"gray"}>
          Created by Zulham 👋 <br /> &copy; 2023
        </Text>
      ) : (
        ""
      )}
    </Box>
  );
}
