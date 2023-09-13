import ClientResult from "@/components/result/ClientResult";
import IndividualResult from "@/components/result/IndividualResult";
import storage from "@/utils/storage";

export default function ResultPage() {
  const client = storage.getJSON("user");
  if (client.isClient) return <ClientResult />;

  return <IndividualResult />;
}
