import {
  Box,
  Button,
  FormControl,
  HStack,
  Input,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";

export default function SearchPage() {
  return (
    <Box mt={{ base: 4, lg: 8 }}>
      <HStack gap={15} justifyContent={"center"} alignItems={"center"}>
        <FormControl maxWidth={"400px"}>
          <Input placeholder="Masukan Data Yang Ingin Dicari" />
        </FormControl>
        <Button>Cari</Button>
      </HStack>
      <Tabs
        mt={{ base: 4, lg: 8 }}
        isFitted
        variant="line"
        colorScheme="orange"
      >
        <TabList>
          <Tab fontSize={{ base: "xs", xs: "sm", lg: "md" }}>Individu</Tab>
          <Tab fontSize={{ base: "xs", xs: "sm", lg: "md" }}>Peserta</Tab>
          <Tab fontSize={{ base: "xs", xs: "sm", lg: "md" }}>Grup Tes</Tab>
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
    </Box>
  );
}
