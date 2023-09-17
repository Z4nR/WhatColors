import {
  Stack,
  Container,
  Box,
  Text,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";

export default function ResultExplaining() {
  return (
    <Box py={{ base: 5, xs: 8, sm: 16 }} bg={"gray.800"}>
      <Container maxW={"7xl"} zIndex={10}>
        <Stack direction={{ base: "column", lg: "row" }}>
          <Stack flex={1} color={"gray.400"} justify={{ lg: "center" }} py={4}>
            <Box mb={{ base: 8, md: 20 }}>
              <Text
                fontFamily={"heading"}
                fontWeight={700}
                textTransform={"uppercase"}
                mb={3}
                fontSize={"xl"}
                color={"gray.500"}
              >
                Technology
              </Text>
              <Heading
                color={"white"}
                mb={5}
                fontSize={{ base: "3xl", md: "5xl" }}
              >
                21st century agriculture
              </Heading>
              <Text fontSize={"xl"} color={"gray.400"}>
                The NewLife™ technology allows you to monitor your crops and get
                complete insights at real time. The proprietary
                software/hardware ecosystem prevents your plants from getting
                neglected.
              </Text>
            </Box>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              {stats.map((stat) => (
                <Box key={stat.title}>
                  <Text
                    fontFamily={"heading"}
                    fontSize={"3xl"}
                    color={"white"}
                    mb={3}
                  >
                    {stat.title}
                  </Text>
                  <Text fontSize={"xl"} color={"gray.400"}>
                    {stat.content}
                  </Text>
                </Box>
              ))}
            </SimpleGrid>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

const stats = [
  {
    title: "10+",
    content: (
      <>
        <Text as={"span"} fontWeight={700} color={"white"}>
          Software modules
        </Text>
        for detailed monitoring and real-time analytics
      </>
    ),
  },
  {
    title: "24/7",
    content: (
      <>
        <Text as={"span"} fontWeight={700} color={"white"}>
          Analytics
        </Text>
        enabled right in your dashboard without history limitations
      </>
    ),
  },
  {
    title: "13%",
    content: (
      <>
        <Text as={"span"} fontWeight={700} color={"white"}>
          Farms
        </Text>
        in North America has chosen NewLife™ as their management solution
      </>
    ),
  },
  {
    title: "250M+",
    content: (
      <>
        <Text as={"span"} fontWeight={700} color={"white"}>
          Plants
        </Text>
        currently connected and monitored by the NewLife™ software
      </>
    ),
  },
];
