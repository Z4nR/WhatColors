import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import DiscriminantResult from "./individual/DiscriminantResult";
import ComparisonResult from "./individual/ComparisonResult";
import StatementResult from "./individual/StatementResult";
import storage from "@/utils/storage";
import { useQuery } from "@tanstack/react-query";
import { getIndividualById } from "@/utils/call-api";
import Loading from "../utils/Loading";
import NotFound from "../utils/NotFound";

export default function ResultPage() {
  const id = storage.getJSON("id");
  const { data, error, isLoading, isError } = useQuery({
    queryKey: ["individual", id],
    queryFn: () => getIndividualById(id),
  });

  if (isLoading) return <Loading />;
  if (isError) return <NotFound error={error} />;

  return (
    <Tabs
      mt={{ base: 4, lg: 8 }}
      isFitted
      variant="enclosed"
      colorScheme="orange"
    >
      <TabList>
        <Tab fontSize={{ base: "xs", xs: "sm", lg: "md" }}>Pernyataan</Tab>
        <Tab fontSize={{ base: "xs", xs: "sm", lg: "md" }}>Komparasi</Tab>
        <Tab fontSize={{ base: "xs", xs: "sm", lg: "md" }}>Diskriminan</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <StatementResult data={data} />
        </TabPanel>
        <TabPanel>
          <ComparisonResult data={data} />
        </TabPanel>
        <TabPanel>
          <DiscriminantResult data={data} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
