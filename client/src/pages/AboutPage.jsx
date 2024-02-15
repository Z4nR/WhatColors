import QuoteMunsell from '@/components/about/QuoteMunsell';
import ReachMe from '@/components/about/ReachMe';
import ResponsiveExplaining from '@/components/about/ResponsiveExplaining';
import ResultExplaining from '@/components/about/ResultExplaining';
import WebExplaining from '@/components/about/WebExplaining';
import { Box } from '@chakra-ui/react';

export default function AboutPage() {
  return (
    <Box>
      <WebExplaining />
      <ResponsiveExplaining />
      <ResultExplaining />
      <QuoteMunsell />
      <ReachMe />
    </Box>
  );
}
