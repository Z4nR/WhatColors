import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Grid,
  GridItem,
  HStack,
  Heading,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react";

export default function GroupSearch({ data }) {
  if (!data)
    return (
      <Flex minHeight={"50vh"} justifyContent={"center"} alignItems={"center"}>
        <Heading color={"gray.300"} size={"lg"} textAlign={"center"}>
          Masukan Data Yang Ingin Dicari
        </Heading>
      </Flex>
    );

  return (
    <Grid
      templateColumns={{ sm: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
      gap={4}
    >
      {data.map((data) => (
        <GridItem key={data.score}>
          <Card>
            <CardHeader>
              <HStack justifyContent={"space-between"}>
                <Heading size={{ base: "xs", xs: "sm" }}>{data.name}</Heading>
                <Tag colorScheme="teal" size={"sm"}>
                  {data.initial}
                </Tag>
              </HStack>
              <Text fontSize={{ base: "xs", xs: "sm" }}>{data.date}</Text>
            </CardHeader>
            <CardBody pt={0.5}>
              <Box>
                <Heading size={"xs"} textTransform="uppercase">
                  Hasil
                </Heading>
                <VStack mt={2} alignItems={"flex-start"} gap={0}>
                  <Text fontSize={{ base: "xs", sm: "md" }}>
                    Skor Kesalahan Maksimal : <b>{data.score}</b>
                  </Text>
                  <Text fontSize={{ base: "xs", sm: "md" }}>
                    Tipe Tes : <b>{data.type}</b>
                  </Text>
                  <Text fontSize={{ base: "xs", sm: "md" }}>
                    Jumlah Peserta : <b>{data.clients}</b>
                  </Text>
                </VStack>
              </Box>
            </CardBody>
          </Card>
        </GridItem>
      ))}
    </Grid>
  );
}
