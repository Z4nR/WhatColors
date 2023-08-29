import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Heading,
  Icon,
  Image,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
  VStack,
  useBreakpointValue,
  useColorModeValue,
  useMediaQuery,
} from "@chakra-ui/react";
import colorBlindImg from "../assets/img/colourblind.webp";
import { FaInfoCircle } from "react-icons/fa";
import {
  FcAlarmClock,
  FcCollaboration,
  FcRadarPlot,
  FcSmartphoneTablet,
  FcViewDetails,
} from "react-icons/fc";

export default function LandingPage() {
  const [isMobile] = useMediaQuery("(max-width: 401px)");
  return (
    <Box mt={{ base: 4, sm: 2, md: 0 }}>
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
              >
                Cara Kerja
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
      <Box as={"section"} pt={16} id="tes">
        <VStack spacing={2} textAlign="center">
          <Heading as={"h1"} fontSize={{ base: "2xl", sm: "4xl" }}>
            Pilih Menu Tes
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
            Mencoba Tes Sendiri. Buat Grup Tes. Bergabung ke Grup Tes. Semua
            dalam satu website.
          </Text>
        </VStack>
        <Stack
          direction={{ base: "column", md: "row" }}
          textAlign="center"
          justify="center"
          spacing={{ base: 4, lg: 10 }}
          py={10}
        >
          <Box
            mb={4}
            shadow="base"
            borderWidth="1px"
            alignSelf={"center"}
            borderColor={useColorModeValue("gray.200", "gray.500")}
            borderRadius={"xl"}
            maxWidth={"297px"}
          >
            <Box py={4} px={12}>
              <Text fontWeight="500" fontSize={{ base: "xl", sm: "2xl" }}>
                Tes Individu
              </Text>
            </Box>
            <VStack
              bg={useColorModeValue("gray.50", "gray.700")}
              py={4}
              borderBottomRadius={"xl"}
            >
              <List spacing={3} textAlign="start" px={12}>
                <ListItem>
                  <HStack alignItems={"flex-start"}>
                    <ListIcon as={FaInfoCircle} color="gray.600" mt={1.5} />
                    <Text fontSize={{ base: "sm", sm: "md" }}>
                      Memilih Jenis Tes yang Diinginkan
                    </Text>
                  </HStack>
                </ListItem>
                <ListItem>
                  <HStack alignItems={"flex-start"}>
                    <ListIcon as={FaInfoCircle} color="gray.600" mt={1.5} />
                    <Text fontSize={{ base: "sm", sm: "md" }}>
                      Mengetahui Hasil Tes
                    </Text>
                  </HStack>
                </ListItem>
                <ListItem>
                  <HStack alignItems={"flex-start"}>
                    <ListIcon as={FaInfoCircle} color="gray.600" mt={1.5} />
                    <Text fontSize={{ base: "sm", sm: "md" }}>
                      Mengunduh Hasil Tes
                    </Text>
                  </HStack>
                </ListItem>
              </List>
              <Box w="80%" pt={7}>
                <Button w="full" colorScheme="orange" variant="outline">
                  Buat Tes
                </Button>
              </Box>
            </VStack>
          </Box>
          <Box
            mb={4}
            shadow="base"
            borderWidth="1px"
            alignSelf={"center"}
            borderColor={useColorModeValue("gray.200", "gray.500")}
            borderRadius={"xl"}
            maxWidth={"297px"}
          >
            <Box position="relative">
              <Box
                position="absolute"
                top="-16px"
                left="50%"
                style={{ transform: "translate(-50%)" }}
              >
                <Text
                  textTransform="uppercase"
                  bg={useColorModeValue("orange.300", "orange.700")}
                  px={3}
                  py={1}
                  color={useColorModeValue("gray.900", "gray.300")}
                  fontSize={{ base: "xs", lg: "sm" }}
                  fontWeight="600"
                  rounded="xl"
                >
                  Khusus Admin
                </Text>
              </Box>
              <Box py={4} px={12}>
                <Text fontWeight="500" fontSize={{ base: "xl", sm: "2xl" }}>
                  Buat Grup Tes
                </Text>
              </Box>
              <VStack
                bg={useColorModeValue("gray.50", "gray.700")}
                py={4}
                borderBottomRadius={"xl"}
              >
                <List spacing={3} textAlign="start" px={12}>
                  <ListItem>
                    <HStack alignItems={"flex-start"}>
                      <ListIcon as={FaInfoCircle} color="gray.600" mt={1.5} />
                      <Text fontSize={{ base: "sm", sm: "md" }}>
                        Manajemen Dasbor Grup Tes
                      </Text>
                    </HStack>
                  </ListItem>
                  <ListItem>
                    <HStack alignItems={"flex-start"}>
                      <ListIcon as={FaInfoCircle} color="gray.600" mt={1.5} />
                      <Text fontSize={{ base: "sm", sm: "md" }}>
                        Menentukan Jenis Tes
                      </Text>
                    </HStack>
                  </ListItem>
                  <ListItem>
                    <HStack alignItems={"flex-start"}>
                      <ListIcon as={FaInfoCircle} color="gray.600" mt={1.5} />
                      <Text fontSize={{ base: "sm", sm: "md" }}>
                        Menerima Email Kode
                      </Text>
                    </HStack>
                  </ListItem>
                  <ListItem>
                    <HStack alignItems={"flex-start"}>
                      <ListIcon as={FaInfoCircle} color="gray.600" mt={1.5} />
                      <Text fontSize={{ base: "sm", sm: "md" }}>
                        Membagikan Kode Verifikasi Grup
                      </Text>
                    </HStack>
                  </ListItem>
                  <ListItem>
                    <HStack alignItems={"flex-start"}>
                      <ListIcon as={FaInfoCircle} color="gray.600" mt={1.5} />
                      <Text fontSize={{ base: "sm", sm: "md" }}>
                        Mengunduh Data Dasbor
                      </Text>
                    </HStack>
                  </ListItem>
                  <ListItem>
                    <HStack alignItems={"flex-start"}>
                      <ListIcon as={FaInfoCircle} color="gray.600" mt={1.5} />
                      <Text fontSize={{ base: "sm", sm: "md" }}>
                        Menghapus Grup Tes
                      </Text>
                    </HStack>
                  </ListItem>
                </List>
                <Box w="80%" pt={7}>
                  <Button w="full" colorScheme="orange">
                    Buat Grup
                  </Button>
                </Box>
              </VStack>
            </Box>
          </Box>
          <Box
            mb={4}
            shadow="base"
            borderWidth="1px"
            alignSelf={"center"}
            borderColor={useColorModeValue("gray.200", "gray.500")}
            borderRadius={"xl"}
            maxWidth={"297px"}
          >
            <Box py={4} px={12}>
              <Text fontWeight="500" fontSize={{ base: "xl", sm: "2xl" }}>
                Gabung Tes
              </Text>
            </Box>
            <VStack
              bg={useColorModeValue("gray.50", "gray.700")}
              py={4}
              borderBottomRadius={"xl"}
            >
              <List spacing={3} textAlign="start" px={12}>
                <ListItem>
                  <HStack alignItems={"flex-start"}>
                    <ListIcon as={FaInfoCircle} color="gray.600" mt={1.5} />
                    <Text fontSize={{ base: "sm", sm: "md" }}>
                      Bergabung dengan Grup Tes
                    </Text>
                  </HStack>
                </ListItem>
                <ListItem>
                  <HStack alignItems={"flex-start"}>
                    <ListIcon as={FaInfoCircle} color="gray.600" mt={1.5} />
                    <Text fontSize={{ base: "sm", sm: "md" }}>
                      Mengerjakan Tes
                    </Text>
                  </HStack>
                </ListItem>
                <ListItem>
                  <HStack alignItems={"flex-start"}>
                    <ListIcon as={FaInfoCircle} color="gray.600" mt={1.5} />
                    <Text fontSize={{ base: "sm", sm: "md" }}>
                      Mengetahui Hasil Tes
                    </Text>
                  </HStack>
                </ListItem>
              </List>
              <Box w="80%" pt={7}>
                <Button w="full" colorScheme="orange" variant="outline">
                  Gabung Tes
                </Button>
              </Box>
            </VStack>
          </Box>
        </Stack>
      </Box>
      <Box as={"section"} pb={12}>
        <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
          <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
            Apa itu WhatColors?
          </Heading>
          <Text color={"gray.600"} fontSize={{ base: "sm", sm: "lg" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            obcaecati ut cupiditate pariatur, dignissimos, placeat amet
            officiis.
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
