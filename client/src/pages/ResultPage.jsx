import ClientResult from "@/components/result/ClientResult";
import StatementResult from "@/components/result/StatementResult";
import { getIndividualById } from "@/utils/call-api";
import storage from "@/utils/storage";
import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function ResultPage() {
  const toast = useToast();
  const [getResultData, setResultData] = useState(null);
  const client = storage.getJSON("user");

  useEffect(() => {
    const id = storage.getJSON("id");

    getIndividualById(id).then((data) => {
      const { err, d } = data;
      if (!err) {
        setResultData(d);
      } else {
        toast({
          title: `Terjadi Kesalahan`,
          description: `${d}`,
          status: "error",
          isClosable: true,
          containerStyle: {
            padding: "15px 20px",
          },
        });
      }
    });
  }, [toast]);

  if (client.isClient) return <ClientResult />;

  return (
    <Tabs
      my={{ base: 4, lg: 8 }}
      isFitted
      variant="enclosed"
      colorScheme="orange"
    >
      <TabList>
        <Tab fontSize={{ base: "xs", xs: "sm", lg: "md" }}>Pernyataan</Tab>
        <Tab fontSize={{ base: "xs", xs: "sm", lg: "md" }}>Tabel</Tab>
        <Tab fontSize={{ base: "xs", xs: "sm", lg: "md" }}>Diagram</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <StatementResult data={getResultData} />
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
        <TabPanel>
          <p>three!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
