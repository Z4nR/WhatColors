import { SkeletonText } from "@chakra-ui/react";

export default function Loading() {
  return (
    <SkeletonText
      py={{ lg: 4 }}
      fontSize={{ base: "xs", xs: "sm", md: "md" }}
      mt={4}
      noOfLines={8}
      spacing={4}
      skeletonHeight={10}
    />
  );
}
