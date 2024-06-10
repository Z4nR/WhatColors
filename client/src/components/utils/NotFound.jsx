import { Box, Heading, Text, Button, Flex } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';

export default function NotFound({ error }) {
  return (
    <Flex minHeight={'80vh'} justifyContent={'center'} alignItems={'center'}>
      <Box textAlign="center" py={10} px={6}>
        <Heading
          display="inline-block"
          as="h2"
          size="2xl"
          bgGradient="linear(to-r, teal.400, teal.600)"
          backgroundClip="text"
        >
          {error.response.data.status}
        </Heading>
        <Text
          fontSize={{ base: '1rem', lg: '18px' }}
          color={'gray.500'}
          mt={3}
          mb={2}
        >
          Sepertinya ada yang tidak beres
        </Text>
        <Text fontSize={{ base: '2xl', lg: '3xl' }} lineHeight={'short'} mb={6}>
          {error.response.data.message}
        </Text>

        <Button
          as={ReactRouterLink}
          to={'/'}
          colorScheme="teal"
          bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
          color="white"
          variant="solid"
          size={{ base: 'xs', xs: 'sm', md: 'md' }}
        >
          Kembali Ke Beranda
        </Button>
      </Box>
    </Flex>
  );
}
