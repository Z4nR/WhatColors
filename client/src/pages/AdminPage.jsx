import Loading from "@/components/utils/Loading";
import NotFound from "@/components/utils/NotFound";
import { getGroupById } from "@/utils/call-api";
import storage from "@/utils/storage";
import { Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";

export default function AdminPage() {
  const id = storage.getJSON("id");

  const { data, error, isLoading, isError } = useQuery({
    queryKey: ["group", id],
    queryFn: async () => await getGroupById(id),
  });

  if (isLoading) return <Loading />;
  if (isError) return <NotFound error={error} />;

  return <Text>{data.name}</Text>;
}
