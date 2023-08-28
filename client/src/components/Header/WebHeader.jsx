import { Box, Container, Flex, Img, Spacer } from "@chakra-ui/react";
import Navbar from "../Navigation/Navbar";
import desktopLogo from "../../assets/logo/desktop-logo.svg";

export default function WebHeader() {
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
      <Container maxW={"container.xl"} p={{ xs: 3, sm: 5 }}>
        <Flex minWidth="max-content" alignItems="center" gap="2">
          <Img
            src={desktopLogo}
            alt="WhatColors Website Logo"
            width={{ base: "42px", xs: "150px", md: "auto" }}
          />
          <Spacer />
          <Navbar />
        </Flex>
      </Container>
    </Box>
  );
}
