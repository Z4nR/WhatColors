import { Box, Button, Center, Flex, Text } from "@chakra-ui/react";
import { ReactSortable } from "react-sortablejs";

export default function TestSheet({ test, handle, submit }) {
  return (
    <Box pt={5}>
      {test?.map((data) => (
        <Flex
          flexWrap={"wrap"}
          flexDirection={"row"}
          key={data.row}
          margin={"8px auto"}
          width={{ xl: "5xl" }}
        >
          <Box
            flex={1}
            display={"flex"}
            justifyContent={"flex-start"}
            margin={"4px 8px 4px 1px"}
          >
            <Box
              key={data.first}
              backgroundColor={data.first.color}
              width={{ base: 6, xs: 8, lg: 10 }}
              height={{ base: 6, xs: 8, lg: 10 }}
            >
              <Text
                textAlign={"center"}
                fontSize={{ base: "7px", xs: "10px", lg: "small" }}
                fontWeight={"bold"}
                color={"white"}
              >
                Awal
              </Text>
            </Box>
          </Box>
          <ReactSortable
            className="row-box"
            group={{ name: "valueByRow", put: false }}
            animation={200}
            ghostClass="ghostbox"
            list={data.value}
            setList={(newState) => handle(data.row, newState)}
          >
            {data.value.map((item) => (
              <Box
                key={item.color}
                backgroundColor={item.color}
                margin={"4px 1px"}
                border={"1px solid #252525"}
                cursor={"pointer"}
                width={{ base: 6, xs: 8, lg: 10 }}
                height={{ base: 6, xs: 8, lg: 10 }}
              />
            ))}
          </ReactSortable>
          <Box
            flex={1}
            display={"flex"}
            justifyContent={"flex-end"}
            margin={"4px 1px 4px 8px"}
          >
            <Box
              key={data.last}
              backgroundColor={data.last.color}
              width={{ base: 6, xs: 8, lg: 10 }}
              height={{ base: 6, xs: 8, lg: 10 }}
            >
              <Text
                textAlign={"center"}
                fontSize={{ base: "7px", xs: "10px", lg: "small" }}
                fontWeight={"bold"}
                color={"white"}
              >
                Akhir
              </Text>
            </Box>
          </Box>
        </Flex>
      ))}
      <Center mt={5} bottom={0}>
        <Button
          size={{ base: "sm", sm: "md" }}
          colorScheme="teal"
          onClick={submit}
        >
          Selesai
        </Button>
      </Center>
    </Box>
  );
}
