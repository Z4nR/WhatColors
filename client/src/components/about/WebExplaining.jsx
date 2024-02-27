import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  ListItem,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  OrderedList,
  Stack,
  Text,
  chakra,
  createIcon,
  shouldForwardProp,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { isValidMotionProp, motion } from 'framer-motion';
import { useState } from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { ReactSortable } from 'react-sortablejs';

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const HowTo = ({ isOpen, onClose }) => {
  const [list, setList] = useState([
    { color: '#b07464' },
    { color: '#a87456' },
    { color: '#a77c4e' },
    { color: '#a48546' },
  ]);
  return (
    <Modal
      size={{ base: 'xs', sm: 'md', md: '2xl' }}
      closeOnOverlayClick={false}
      isOpen={isOpen}
      scrollBehavior={'inside'}
      isCentered
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Cara Kerja</ModalHeader>
        <ModalBody fontSize={{ base: 'sm', md: 'md' }}>
          <Text>Susun dan pindahkan blok warna yang berada ditengah</Text>
          <Flex
            flexWrap={'wrap'}
            flexDirection={'row'}
            margin={'8px auto'}
            justifyContent={'center'}
          >
            <Box margin={'4px 8px 4px 1px'}>
              <Box
                key={'#b2766f'}
                backgroundColor={'#b2766f'}
                width={10}
                height={10}
              >
                <Text
                  textAlign={'center'}
                  fontSize={'small'}
                  fontWeight={'bold'}
                  color={'white'}
                >
                  Awal
                </Text>
              </Box>
            </Box>
            <ReactSortable
              className="row-box"
              group={{ name: 'valueByRow', put: false }}
              animation={200}
              ghostClass="ghostbox"
              list={list}
              setList={setList}
            >
              {list.map((item) => (
                <Box
                  key={item.color}
                  backgroundColor={item.color}
                  margin={'4px 1px'}
                  border={'1px solid #252525'}
                  cursor={'pointer'}
                  width={10}
                  height={10}
                />
              ))}
            </ReactSortable>
            <Box margin={'4px 1px 4px 8px'}>
              <Box
                key={'#9b8f49'}
                backgroundColor={'#9b8f49'}
                width={10}
                height={10}
              >
                <Text
                  textAlign={'center'}
                  fontSize={'small'}
                  fontWeight={'bold'}
                  color={'white'}
                >
                  Akhir
                </Text>
              </Box>
            </Box>
          </Flex>
          <OrderedList textAlign={'justify'} mt={8}>
            <Text mb={2}>
              Untuk hasil yang maksimal silahkan ikuti saran berikut :
            </Text>
            <ListItem>
              Maksimalkan kecerahan layar perangkat yang akan digunakan dalam
              pengetesan
            </ListItem>
            <ListItem>Pastikan pengujian dilakukan dalam ruangan</ListItem>
            <ListItem>
              Gunakan lampu bertipe D65 pada ruangan tes secara merata
            </ListItem>
            <ListItem>
              Jangan gunakan mode baca atau mode anti sinar biru pada pengaturan
              layar perangkat pengetesan
            </ListItem>
            <ListItem>
              Jangan gunakan kacamata atau soft-lens khusus buta warna.
            </ListItem>
            <ListItem>
              Waktu pengetesan optimal : pukul 11:00 -13:00{' '}
              <b>(Maks. Pengerjaan 12 Menit</b> )
            </ListItem>
            <ListItem>
              Gunakan layar dengan ukuran minimal 6,6 - 17 inci dengan resolusi
              Full HD
            </ListItem>
          </OrderedList>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="red" onClick={onClose}>
            Keluar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default function WebExplaining() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Container maxW={'5xl'}>
      <HowTo isOpen={isOpen} onClose={onClose} />
      <Stack
        as={Box}
        textAlign={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 5, xs: 16, sm: 20 }}
      >
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
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}
          >
            Tentang <br />
            <Text as={'span'} color={'green.400'}>
              WhatColors
            </Text>
          </Heading>
        </ChakraBox>
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
          <Text
            textAlign={{ base: 'justify', sm: 'center' }}
            fontSize={{ base: 'sm', sm: 'md' }}
            color={'gray.500'}
          >
            Website ini ditunjukkan bagi masyarakat secara luas dapat melakukan
            simulasi tes buta warna secara virtual dan gratis. Pada website ini
            menggunakan Metode Farnsworth Munsell sebagai tolak ukur perhitungan
            untuk memperkiraan kondisi mata seseorang. Metode ini memiliki
            keunggulan yang lebih baik untuk mengurangi indikasi kecurangan
            dalam pelaksanaan tes buta warna secara bersama-sama. Untuk memulai
            simulasi tes atau mengetahui cara kerja metode ini kalian dapat
            mengeklik salah satu tombol dibawah ini
          </Text>
        </ChakraBox>
        <Stack
          direction={'column'}
          spacing={3}
          align={'center'}
          alignSelf={'center'}
          position={'relative'}
        >
          <ChakraBox
            initial="offscreen"
            whileInView="onscreen"
            variants={{
              offscreen: {
                x: -50,
                opacity: 0,
              },
              onscreen: {
                x: 0,
                opacity: 1,
                transition: {
                  type: 'spring',
                  bounce: 0.4,
                  duration: 0.8,
                },
              },
            }}
          >
            <Button
              size={{ base: 'sm', sm: 'md' }}
              colorScheme={'green'}
              bg={'green.400'}
              rounded={'full'}
              px={6}
              _hover={{
                bg: 'green.500',
              }}
              as={ReactRouterLink}
              to="/"
            >
              Lakukan Tes
            </Button>
          </ChakraBox>
          <ChakraBox
            initial="offscreen"
            whileInView="onscreen"
            variants={{
              offscreen: {
                x: -50,
                opacity: 0,
              },
              onscreen: {
                x: 0,
                opacity: 1,
                transition: {
                  type: 'spring',
                  bounce: 0.4,
                  duration: 0.8,
                },
              },
            }}
          >
            <Button
              variant={'link'}
              colorScheme={'blue'}
              size={'sm'}
              onClick={onOpen}
            >
              Cara Kerja
            </Button>
          </ChakraBox>
          <Box>
            <Icon
              as={Arrow}
              color={useColorModeValue('gray.800', 'gray.300')}
              w={{ base: 30, xs: 71 }}
              position={'absolute'}
              right={{ base: -35, xs: -71 }}
              top={'10px'}
            />
            <Text
              fontSize={{ base: 'xs', xs: 'lg' }}
              fontFamily={'Caveat'}
              position={'absolute'}
              right={{ base: '-80px', xs: '-125px' }}
              top={'-15px'}
              transform={'rotate(10deg)'}
            >
              Yuk coba tesnya
            </Text>
          </Box>
        </Stack>
      </Stack>
    </Container>
  );
}

const Arrow = createIcon({
  displayName: 'Arrow',
  viewBox: '0 0 72 24',
  path: (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.600904 7.08166C0.764293 6.8879 1.01492 6.79004 1.26654 6.82177C2.83216 7.01918 5.20326 7.24581 7.54543 7.23964C9.92491 7.23338 12.1351 6.98464 13.4704 6.32142C13.84 6.13785 14.2885 6.28805 14.4722 6.65692C14.6559 7.02578 14.5052 7.47362 14.1356 7.6572C12.4625 8.48822 9.94063 8.72541 7.54852 8.7317C5.67514 8.73663 3.79547 8.5985 2.29921 8.44247C2.80955 9.59638 3.50943 10.6396 4.24665 11.7384C4.39435 11.9585 4.54354 12.1809 4.69301 12.4068C5.79543 14.0733 6.88128 15.8995 7.1179 18.2636C7.15893 18.6735 6.85928 19.0393 6.4486 19.0805C6.03792 19.1217 5.67174 18.8227 5.6307 18.4128C5.43271 16.4346 4.52957 14.868 3.4457 13.2296C3.3058 13.0181 3.16221 12.8046 3.01684 12.5885C2.05899 11.1646 1.02372 9.62564 0.457909 7.78069C0.383671 7.53862 0.437515 7.27541 0.600904 7.08166ZM5.52039 10.2248C5.77662 9.90161 6.24663 9.84687 6.57018 10.1025C16.4834 17.9344 29.9158 22.4064 42.0781 21.4773C54.1988 20.5514 65.0339 14.2748 69.9746 0.584299C70.1145 0.196597 70.5427 -0.0046455 70.931 0.134813C71.3193 0.274276 71.5206 0.70162 71.3807 1.08932C66.2105 15.4159 54.8056 22.0014 42.1913 22.965C29.6185 23.9254 15.8207 19.3142 5.64226 11.2727C5.31871 11.0171 5.26415 10.5479 5.52039 10.2248Z"
      fill="currentColor"
    />
  ),
});
