import {
  Avatar,
  Box,
  Stack,
  Text,
  chakra,
  shouldForwardProp,
  useColorModeValue,
} from '@chakra-ui/react';
import { isValidMotionProp, motion } from 'framer-motion';

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

export default function QuoteMunsell() {
  return (
    <Stack
      py={{ base: 5, sm: 16, md: 20 }}
      px={8}
      spacing={{ base: 8, md: 10 }}
      align={'center'}
      direction={'column'}
    >
      <ChakraBox
        initial="offscreen"
        whileInView="onscreen"
        variants={{
          offscreen: {
            y: -50,
            opacity: 0,
          },
          onscreen: {
            y: 0,
            opacity: 1,
            transition: {
              ease: 'easeInOut',
              duration: 0.5,
            },
          },
        }}
      >
        <Text
          fontSize={{ base: 'lg', sm: 'xl', md: '2xl' }}
          textAlign={'center'}
          maxW={'3xl'}
        >
          &quot;The score for a cap is the sum of the differences between the
          number of that cap and the numbers of the caps adjacent to it&quot;
        </Text>
      </ChakraBox>
      <Box textAlign={'center'}>
        <ChakraBox
          initial="offscreen"
          whileInView="onscreen"
          variants={{
            offscreen: {
              y: 50,
              opacity: 0,
            },
            onscreen: {
              y: 0,
              opacity: 1,
              transition: {
                ease: 'easeInOut',
                duration: 0.5,
              },
            },
          }}
        >
          <Avatar name="Dean Farnsworth" mb={2} />

          <Text fontWeight={600}>Dean Farnsworth - 1957</Text>
          <Text
            fontSize={'sm'}
            color={useColorModeValue('gray.400', 'gray.400')}
          >
            Penemu Metode Farnsworth Munsell
          </Text>
        </ChakraBox>
      </Box>
    </Stack>
  );
}
