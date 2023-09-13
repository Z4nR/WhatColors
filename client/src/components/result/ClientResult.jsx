import { getClientById } from "@/utils/call-api";
import storage from "@/utils/storage";
import { Box, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import Loading from "../utils/Loading";
import NotFound from "../utils/NotFound";

export default function ClientResult() {
  const id = storage.getJSON("id");
  const { data, error, isLoading, isError } = useQuery({
    queryKey: ["individual", id],
    queryFn: () => getClientById(id),
  });

  if (isLoading) return <Loading />;
  if (isError) return <NotFound error={error} />;

  return (
    <Box>
      <Text>{data.name}</Text>
    </Box>
  );
}
