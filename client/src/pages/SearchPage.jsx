import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";

export default function SearchPage() {
  return (
    <Tabs
      mt={{ base: 4, lg: 8 }}
      isFitted
      variant="enclosed"
      colorScheme="orange"
    >
      <TabList>
        <Tab fontSize={{ base: "xs", xs: "sm", lg: "md" }}>One</Tab>
        <Tab fontSize={{ base: "xs", xs: "sm", lg: "md" }}>Two</Tab>
        <Tab fontSize={{ base: "xs", xs: "sm", lg: "md" }}>Three</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <p>one!</p>
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
