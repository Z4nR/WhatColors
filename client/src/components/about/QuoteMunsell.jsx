import { Avatar, Box, Stack, Text, useColorModeValue } from "@chakra-ui/react";

export default function QuoteMunsell() {
  return (
    <Stack
      py={{ base: 5, xs: 16, sm: 20 }}
      px={8}
      spacing={{ base: 8, md: 10 }}
      align={"center"}
      direction={"column"}
    >
      <Text
        fontSize={{ base: "lg", sm: "xl", md: "2xl" }}
        textAlign={"center"}
        maxW={"3xl"}
      >
        &quot;The score for a cap is the sum of the differences between the
        number of that cap and the numbers of the caps adjacent to it&quot;
      </Text>
      <Box textAlign={"center"}>
        <Avatar name="Dean Farnsworth" mb={2} />

        <Text fontWeight={600}>Dean Farnsworth - 1957</Text>
        <Text fontSize={"sm"} color={useColorModeValue("gray.400", "gray.400")}>
          Penemu Metode Farnsworth Munsell
        </Text>
      </Box>
    </Stack>
  );
}
