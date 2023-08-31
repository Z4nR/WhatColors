import { Box, Container, Flex, Img } from "@chakra-ui/react";
import mobileLogo from "../../assets/logo/mobile-logo.svg";

export default function AppHeader() {
  return (
    <Box
      bg={"white"}
      as="header"
      boxShadow={"sm"}
      zIndex={11}
      top={0}
      left={0}
      right={0}
      position={"sticky"}
      width={"full"}
    >
      <Container maxW={"container.xl"} p={3}>
        <Flex alignItems={"center"} justifyContent={"center"}>
          <Img src={mobileLogo} alt="WhatColors Website Logo" width={"52px"} />
        </Flex>
      </Container>
    </Box>
  );
}
