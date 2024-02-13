import { Box, Text } from '@chakra-ui/react';

export default function Footer() {
  const copyrightYear = new Date().getFullYear();

  return (
    <Box as="footer" display={'block'} width={'full'}>
      <Box width={'full'} bg={'teal'} color={'white'} pt={6} pb={8}>
        <Text align={'center'} fontSize={'smaller'}>
          &copy; {copyrightYear}
          <br />
          Created by Ijan
        </Text>
      </Box>
    </Box>
  );
}
