import Loading from "@/components/utils/Loading";
import NotFound from "@/components/utils/NotFound";
import { getClientData, getGroupById } from "@/utils/call-api";
import { useDownloadData } from "@/utils/customHooks";
import storage from "@/utils/storage";
import { DeleteIcon, DownloadIcon } from "@chakra-ui/icons";
import {
  Box,
  Heading,
  IconButton,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { CSVLink } from "react-csv";

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

  const [csv] = useDownloadData(client.data);

  console.log(csv);

  if (group.isLoading || client.isLoading) return <Loading />;
  if (group.isError || client.isError)
    return <NotFound error={group.error || client.error} />;

  return (
    <Box py={{ lg: 4 }}>
      <Box textAlign={"center"} fontSize={{ base: "xs", xs: "sm", md: "md" }}>
        <Heading mt={{ base: 4, md: 2 }} size={{ base: "sm", md: "md" }}>
          {group.data.name} ({group.data.initial})
        </Heading>
        <Text>Dibuat pada {group.data.date}</Text>
      </Box>
      <TableContainer
        mt={6}
        mb={2}
        minHeight={{ base: "68vh", xs: "75vh", md: "58vh" }}
      >
        <Table size={"sm"}>
          <Thead>
            <Tr>
              <Th textAlign={{ md: "center" }}>#</Th>
              <Th textAlign={{ md: "center" }}>Nama</Th>
              <Th textAlign={{ md: "center" }}>Waktu</Th>
              <Th textAlign={{ md: "center" }}>Skor Tes</Th>
              <Th textAlign={{ md: "center" }}>Status</Th>
              <Th textAlign={{ md: "center" }}>Perangkat</Th>
            </Tr>
          </Thead>
          <Tbody>
            {client.data.map((data, index) => (
              <Tr key={data._id}>
                <Td textAlign={{ md: "center" }}>{index + 1}</Td>
                <Td textAlign={{ md: "center" }}>{data.name}</Td>
                <Td textAlign={"center"}>{data.time}</Td>
                <Td textAlign={"center"}>{data.totalErrorScore}</Td>
                <Td textAlign={"center"}>{data.status}</Td>
                <Td textAlign={"center"}>{data.device}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <VStack
        zIndex={10}
        position={"absolute"}
        bottom={{ base: 24, xs: 40 }}
        right={{ base: 5, xs: 10 }}
      >
        {csv ? (
          <CSVLink
            data={csv}
            separator={";"}
            filename={`${group.data.name} ${group.data.initial}.csv`}
          >
            <IconButton
              aria-label="Download table"
              size={{ base: "md", md: "lg" }}
              colorScheme="teal"
              sx={{
                ":hover": {
                  color: "black",
                  bg: "teal.300",
                },
              }}
              icon={<DownloadIcon />}
            />
          </CSVLink>
        ) : (
          <IconButton
            isDisabled
            variant={"outline"}
            aria-label="Download table"
            size={{ base: "md", md: "lg" }}
            icon={<DownloadIcon />}
          />
        )}
        <IconButton
          aria-label="Download table"
          size={{ base: "md", md: "lg" }}
          colorScheme="red"
          sx={{
            ":hover": {
              color: "black",
              bg: "red.300",
            },
          }}
          icon={<DeleteIcon />}
        />
      </VStack>
    </Box>
  );
}
