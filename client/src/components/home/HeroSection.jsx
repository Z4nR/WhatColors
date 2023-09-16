import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import colorBlindImg from "@/assets/img/colourblind.webp";
import { Link as ReactRouterLink } from "react-router-dom";

export default function HeroSection() {
  return (
    <Stack as={"section"} gap={4} direction={{ base: "column", md: "row" }}>
      <Flex
        p={"0 1.5rem 1.5remm 1.5rem"}
        flex={1}
        align={"center"}
        justify={"center"}
      >
        <Stack spacing={6} w={"full"}>
          <Heading as={"h1"} fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: useBreakpointValue({ base: "20%", md: "30%" }),
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "teal.400",
                zIndex: -1,
              }}
            >
              WhatColors
            </Text>
            <br />{" "}
            <Text color={"teal.400"} as={"span"}>
              Tes Buta Warna
            </Text>{" "}
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
            Lakukan tes uji coba berbasis internet secara gratis dan dapat
            digunakan secara berkelompok. Apakah sudah siap untuk mencoba?
          </Text>
          <Stack
            direction={{ base: "column", sm: "row" }}
            spacing={{ base: 2, sm: 4 }}
          >
            <Button
              sx={{
                "@media screen and (max-width: 48em) and (min-width: 37em)": {
                  flex: 1,
                },
              }}
              rounded={"full"}
              bg={"teal.400"}
              color={"white"}
              _hover={{
                bg: "teal.500",
              }}
              as={"a"}
              href="#tes"
            >
              Lakukan Tes
            </Button>
            <Button
              sx={{
                "@media screen and (max-width: 48em) and (min-width: 37em)": {
                  flex: 1,
                },
              }}
              rounded={"full"}
              _hover={{
                color: "white",
                bg: "gray.500",
              }}
              as={ReactRouterLink}
              to="/search"
            >
              Cari Data Tes
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={"Login Image"}
          objectFit={"cover"}
          src={colorBlindImg}
          borderRadius={{ base: "2xl", md: "none" }}
        />
      </Flex>
    </Stack>
  );
}
