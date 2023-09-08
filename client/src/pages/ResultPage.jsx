import ClientResult from "@/components/result/ClientResult";
import StatementResult from "@/components/result/StatementResult";
import { useLoadUser } from "@/utils/customHooks";
import storage from "@/utils/storage";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import DiscriminantResult from "@/components/result/DiscriminantResult";
import ComparisonResult from "@/components/result/ComparisonResult";

export default function ResultPage() {
  const client = storage.getJSON("user");
  const [getResultData] = useLoadUser();

  if (client.isClient) return <ClientResult />;

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
          <StatementResult data={getResultData} />
        </TabPanel>
        <TabPanel>
          <ComparisonResult data={getResultData} />
        </TabPanel>
        <TabPanel>
          <DiscriminantResult data={getResultData} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
