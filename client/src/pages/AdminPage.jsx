import Loading from "@/components/utils/Loading";
import NotFound from "@/components/utils/NotFound";
import { getClientData, getGroupById } from "@/utils/call-api";
import storage from "@/utils/storage";
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
import { useQuery } from "@tanstack/react-query";

export default function AdminPage() {
  const id = storage.getJSON("id");

  const group = useQuery({
    queryKey: ["group", id],
    queryFn: async () => await getGroupById(id),
  });

  const client = useQuery({
    queryKey: ["clients", id],
    queryFn: async () => await getClientData(id),
  });

  if (group.isLoading || client.isLoading) return <Loading />;
  if (group.isError || client.isError)
    return <NotFound error={group.error || client.error} />;

  return (
    <Box py={{ lg: 4 }} maxHeight={"77vh"}>
      <Box textAlign={"center"} fontSize={{ base: "xs", xs: "sm", md: "md" }}>
        <Heading mt={{ base: 4, md: 2 }} size={{ base: "sm", md: "md" }}>
          {group.data.name} ({group.data.initial})
        </Heading>
        <Text>Dibuat pada {group.data.date}</Text>
      </Box>
      <TableContainer my={4}>
        <Table size={"sm"}>
          <Thead>
            <Tr>
              <Th>#</Th>
              <Th>Nama</Th>
              <Th>Status</Th>
              <Th>Skor Tes</Th>
              <Th>Waktu</Th>
              <Th>Perangkat</Th>
            </Tr>
          </Thead>
          <Tbody>
            {client.data.map((data, index) => (
              <Tr key={data._id}>
                <Td>{index + 1}</Td>
                <Td>{data.name}</Td>
                <Td>{data.status}</Td>
                <Td>{data.totalErrorScore}</Td>
                <Td>{data.time}</Td>
                <Td>{data.device}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}
