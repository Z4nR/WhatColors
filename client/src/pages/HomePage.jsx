import { Box, Text, useMediaQuery } from '@chakra-ui/react';
import HeroSection from '@/components/home/HeroSection';
import TestSection from '@/components/home/TestSection';
import ProductSection from '@/components/home/ProductSection';

export default function HomePage() {
  const [isMobile] = useMediaQuery('(max-width: 401px)');
  return (
    <Box mt={{ base: 4, sm: 2, md: 0 }}>
      <HeroSection />
      <TestSection />
      <ProductSection />
      {isMobile ? (
        <Text pb={4} fontSize={12} textAlign={'center'} color={'gray'}>
          Created by Zulham 👋 <br /> &copy; 2023
        </Text>
      ) : (
        ''
      )}
    </Box>
  );
}
