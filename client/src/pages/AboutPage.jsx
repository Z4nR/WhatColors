import ResponsiveExplaining from "@/components/about/ResponsiveExplaining";
import WebExplaining from "@/components/about/WebExplaining";
import { Box } from "@chakra-ui/react";

export default function AboutPage() {
  return (
    <Box>
      <WebExplaining />
      <ResponsiveExplaining />
    </Box>
  );
}
