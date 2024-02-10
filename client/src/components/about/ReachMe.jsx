import {
  Box,
  HStack,
  Link,
  Stack,
  Text,
  chakra,
  shouldForwardProp,
} from '@chakra-ui/react';
import { isValidMotionProp, motion } from 'framer-motion';
import { GrGithub, GrLinkedin, GrProjects } from 'react-icons/gr';

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

export default function ReachMe() {
  //Push Reach Me 1 February

  return (
    <Stack as={Box} textAlign={'center'} pb={10}>
      <ChakraBox
        initial="offscreen"
        whileInView="onscreen"
        variants={{
          offscreen: {
            y: 100,
            scale: 0,
            opacity: 0,
          },
          onscreen: {
            y: 0,
            scale: 1,
            opacity: 1,
            transition: {
              type: 'spring',
              bounce: 0.4,
              duration: 0.8,
            },
          },
        }}
      >
        <Text fontWeight={600} fontSize={'xl'} pb={2}>
          Reach Me
        </Text>
        <HStack spacing={8} justifyContent={'center'}>
          <Link href="https://github.com/Z4nR" isExternal>
            <GrProjects size={20} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/zulham-ari-nur-ridhwan"
            isExternal
          >
            <GrLinkedin size={20} />
          </Link>
          <Link href="https://github.com/Z4nR" isExternal>
            <GrGithub size={20} />
          </Link>
        </HStack>
      </ChakraBox>
    </Stack>
  );
}
