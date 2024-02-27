import {
  Box,
  Flex,
  Heading,
  Icon,
  Image,
  SimpleGrid,
  Stack,
  StackDivider,
  Text,
  chakra,
  shouldForwardProp,
  useColorModeValue,
} from '@chakra-ui/react';
import { isValidMotionProp, motion } from 'framer-motion';
import {
  IoLaptopOutline,
  IoPhonePortraitOutline,
  IoTabletPortrait,
} from 'react-icons/io5';

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

export default function ResponsiveExplaining() {
  return (
    <Box py={{ base: 5, xs: 8, sm: 16 }}>
      <SimpleGrid columns={{ base: 1, xl: 2 }} spacing={10}>
        <ChakraBox
          initial="offscreen"
          whileInView="onscreen"
          variants={{
            offscreen: {
              scale: 0,
              opacity: 0,
            },
            onscreen: {
              scale: 1,
              opacity: 1,
              transition: {
                type: 'spring',
                bounce: 0.4,
                duration: 1,
              },
            },
          }}
        >
          <Stack spacing={4}>
            <Text
              textTransform={'uppercase'}
              color={'blue.400'}
              fontWeight={600}
              fontSize={'sm'}
              bg={useColorModeValue('blue.50', 'blue.900')}
              p={2}
              alignSelf={'flex-start'}
              rounded={'md'}
            >
              Responsif
            </Text>
            <Heading fontSize={{ base: '2xl', sm: '4xl' }}>
              Gunakan semua perangkat
            </Heading>
            <Text
              textAlign={'justify'}
              color={'gray.500'}
              fontSize={{ base: 'sm', sm: 'md', md: 'lg' }}
            >
              Website ini mendukung simulasi dengan menggunakan berbagai
              perangkat, baik menggunakan alat bantu maupun dengan tangan secara
              langsung. Anda dapat menggunakan berbagai jenis ukuran perangkat
              yang anda punya.
            </Text>
            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.100', 'gray.700')}
                />
              }
            >
              <Stack direction={'row'} align={'center'}>
                <Flex
                  w={8}
                  h={8}
                  align={'center'}
                  justify={'center'}
                  rounded={'full'}
                  bg={useColorModeValue('yellow.100', 'yellow.900')}
                >
                  <Icon as={IoLaptopOutline} color={'yellow.500'} w={5} h={5} />
                </Flex>
                <Text fontSize={{ base: 'xs', xs: 'md' }} fontWeight={600}>
                  Laptop / Notebook / Komputer
                </Text>
              </Stack>
              <Stack direction={'row'} align={'center'}>
                <Flex
                  w={8}
                  h={8}
                  align={'center'}
                  justify={'center'}
                  rounded={'full'}
                  bg={useColorModeValue('purple.100', 'purple.900')}
                >
                  <Icon
                    as={IoTabletPortrait}
                    color={'purple.500'}
                    w={5}
                    h={5}
                  />
                </Flex>
                <Text fontSize={{ base: 'xs', xs: 'md' }} fontWeight={600}>
                  Tablet ( Landscape / Potrait )
                </Text>
              </Stack>
              <Stack direction={'row'} align={'center'}>
                <Flex
                  w={8}
                  h={8}
                  align={'center'}
                  justify={'center'}
                  rounded={'full'}
                  bg={useColorModeValue('green.100', 'green.900')}
                >
                  <Icon
                    as={IoPhonePortraitOutline}
                    color={'green.500'}
                    w={5}
                    h={5}
                  />
                </Flex>
                <Text fontSize={{ base: 'xs', xs: 'md' }} fontWeight={600}>
                  Smartphone ( Landscape / Potrait )
                </Text>
              </Stack>
            </Stack>
          </Stack>
        </ChakraBox>
        <ChakraBox
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          variants={{
            offscreen: {
              y: 100,
              opacity: 0,
            },
            onscreen: {
              y: 0,
              opacity: 1,
              transition: {
                type: 'spring',
                bounce: 0.4,
                duration: 0.8,
              },
            },
          }}
        >
          <Flex flexDirection={'column'} alignItems={'center'}>
            <Image
              rounded={'md'}
              alt={'Device Size'}
              src={
                'https://images.unsplash.com/photo-1426024084828-5da21e13f5dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1774&q=80'
              }
              objectFit={'cover'}
            />
            <Text fontSize={'x-small'}>
              Photo by{' '}
              <a href="https://unsplash.com/@firmbee?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                Firmbee.com
              </a>{' '}
              on{' '}
              <a href="https://unsplash.com/photos/2mc2B5iX6as?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                Unsplash
              </a>
            </Text>
          </Flex>
        </ChakraBox>
      </SimpleGrid>
    </Box>
  );
}
