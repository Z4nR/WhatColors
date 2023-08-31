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
  FcAlarmClock,
  FcCollaboration,
  FcRadarPlot,
  FcSmartphoneTablet,
  FcViewDetails,
} from "react-icons/fc";

export default function ProductSection() {
  return (
    <Box as={"section"} pb={12}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
          Apa itu WhatColors?
        </Heading>
        <Text color={"gray.600"} fontSize={{ base: "sm", sm: "lg" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          obcaecati ut cupiditate pariatur, dignissimos, placeat amet officiis.
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
                as={"a"}
                href="/about"
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
                <Heading size="md">Detil Hasil</Heading>
                <Text mt={1} fontSize={"sm"}>
                  Mengetahui semua informasi hasil tes.
                </Text>
              </Box>
              <Button
                as={"a"}
                href="/about"
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
                as={"a"}
                href="/about"
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
                as={"a"}
                href="/about"
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
                <Icon as={FcAlarmClock} w={10} h={10} />
              </Flex>
              <Box mt={2}>
                <Heading size="md">Terbatas</Heading>
                <Text mt={1} fontSize={"sm"}>
                  Kerjakan secepat mungkin sebelum waktu habis.
                </Text>
              </Box>
              <Button
                as={"a"}
                href="/about"
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
