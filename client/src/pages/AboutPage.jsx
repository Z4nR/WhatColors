import ResponsiveExplaining from "@/components/about/ResponsiveExplaining";
import ResultExplaining from "@/components/about/ResultExplaining";
import WebExplaining from "@/components/about/WebExplaining";
import { Box } from "@chakra-ui/react";

export default function AboutPage() {
  return (
    <Box>
      <WebExplaining />
      <ResponsiveExplaining />
      <ResultExplaining />
    </Box>
  );
}
