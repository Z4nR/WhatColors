import { Box, SkeletonText } from "@chakra-ui/react";

export default function Loading() {
  return (
    <Box py={{ lg: 4 }} fontSize={{ base: "xs", xs: "sm", md: "md" }}>
      <SkeletonText mt={4} noOfLines={8} spacing={4} skeletonHeight={10} />
    </Box>
  );
}
