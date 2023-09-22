import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import {
  FcCalculator,
  FcCollaboration,
  FcRadarPlot,
  FcSmartphoneTablet,
  FcViewDetails,
} from "react-icons/fc";
import { Link as ReactRouterLink } from "react-router-dom";

export default function ProductSection() {
  return (
    <Box as={"section"} pb={12}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
          Apa itu WhatColors?
        </Heading>
        <Text color={"gray.600"} fontSize={{ base: "sm", sm: "lg" }}>
          Simulasi Tes Buta Warna dengan Metode Farnsworth Munsell yang kompleks
          dengan sejumlah fitur yang membantu pengguna dalam menggunakan website
        </Text>
      </Stack>

      <Container px={0} maxW={"5xl"} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          {stats.map((stat) => (
            <Box
              key={stat.num}
              maxW={{ base: "full", md: "275px" }}
              w={"full"}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              p={5}
            >
              <Stack align={"start"} spacing={2}>
                <Flex
                  w={16}
                  h={16}
                  align={"center"}
                  justify={"center"}
                  color={"white"}
                  rounded={"full"}
                  bg={"gray.100"}
                >
                  <Icon as={stat.icon} w={10} h={10} />
                </Flex>
                <Box mt={2}>
                  <Heading size="md">Responsif</Heading>
                  <Text mt={1} fontSize={"sm"}>
                    {stat.desc}
                  </Text>
                </Box>
                <Button
                  as={ReactRouterLink}
                  to="/about"
                  variant={"link"}
                  colorScheme={"orange"}
                  size={"sm"}
                >
                  Selengkapnya
                </Button>
              </Stack>
            </Box>
          ))}
        </Flex>
      </Container>
    </Box>
  );
}

const stats = [
  {
    num: 1,
    icon: FcSmartphoneTablet,
    desc: "Dapat berjalan diberbagai jenis perangkat",
  },
  {
    num: 2,
    icon: FcViewDetails,
    desc: "Mengetahui semua informasi hasil tes.",
  },
  {
    num: 3,
    icon: FcRadarPlot,
    desc: "Ketahui hasil melalui visual yang sesuai",
  },
  {
    num: 4,
    icon: FcCollaboration,
    desc: "Meminimalisir terjadinya kecurangan dalam tes.",
  },
  {
    num: 5,
    icon: FcCalculator,
    desc: "Menggunakan Metode Farnsworth-Munsell untuk menghitung hasil",
  },
];
