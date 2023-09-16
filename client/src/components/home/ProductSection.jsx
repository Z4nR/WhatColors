import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
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
          <Box
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
                bg={useColorModeValue("gray.100", "gray.700")}
              >
                <Icon as={FcSmartphoneTablet} w={10} h={10} />
              </Flex>
              <Box mt={2}>
                <Heading size="md">Responsif</Heading>
                <Text mt={1} fontSize={"sm"}>
                  Dapat berjalan diberbagai jenis perangkat
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
          <Box
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
                bg={useColorModeValue("gray.100", "gray.700")}
              >
                <Icon as={FcViewDetails} w={10} h={10} />
              </Flex>
              <Box mt={2}>
                <Heading size="md">Rincian Hasil</Heading>
                <Text mt={1} fontSize={"sm"}>
                  Mengetahui semua informasi hasil tes.
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
          <Box
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
                bg={useColorModeValue("gray.100", "gray.700")}
              >
                <Icon as={FcRadarPlot} w={10} h={10} />
              </Flex>
              <Box mt={2}>
                <Heading size="md">Visual</Heading>
                <Text mt={1} fontSize={"sm"}>
                  Ketahui hasil melalui visual yang sesuai
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
          <Box
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
                bg={useColorModeValue("gray.100", "gray.700")}
              >
                <Icon as={FcCollaboration} w={10} h={10} />
              </Flex>
              <Box mt={2}>
                <Heading size="md">Individu</Heading>
                <Text mt={1} fontSize={"sm"}>
                  Meminimalisir terjadinya kecurangan dalam tes.
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
          <Box
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
                bg={useColorModeValue("gray.100", "gray.700")}
              >
                <Icon as={FcCalculator} w={10} h={10} />
              </Flex>
              <Box mt={2}>
                <Heading size="md">Akurat</Heading>
                <Text mt={1} fontSize={"sm"}>
                  Menggunakan Metode Farnsworth-Munsell untuk menghitung hasil
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
        </Flex>
      </Container>
    </Box>
  );
}
