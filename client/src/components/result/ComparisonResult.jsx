import {
  Box,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

export default function ComparisonResult({ data }) {
  return (
    <Box textAlign={"center"} py={{ lg: 4 }}>
      <Heading size={{ base: "sm", sm: "md" }}>Hasil Komparasi Warna:</Heading>
      <Text mt={2} fontSize={{ base: "xs", xs: "sm", md: "md" }}>
        *Hasil komparasi diambil dari hasil tes yang kamu lakukan kemudian
        dibandingkan dengan nilai asli.
      </Text>
      <TableContainer my={4}>
        <Table size={"sm"}>
          <Thead>
            <Tr>
              <Th textAlign={"center"} maxWidth={75} color="teal">
                Kode Warna
              </Th>
              <Th textAlign={"center"} color="teal">
                Nilai
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {data?.comparisonResult?.map((value) => (
              <Tr key={value._id}>
                <Td textAlign={"center"} maxWidth={75}>
                  {value._id}
                </Td>
                <Td textAlign={"center"}>{value.comparison}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}
