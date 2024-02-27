import {
  Box,
  Button,
  HStack,
  Heading,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
  VStack,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { FaInfoCircle } from 'react-icons/fa';
import IndividualForm from '../form/IndividualForm';
import GroupForm from '../form/GroupForm';
import JoinForm from '../form/JoinForm';

export default function TestSection() {
  const individualModal = useDisclosure();
  const groupModal = useDisclosure();
  const joinModal = useDisclosure();

  return (
    <Box as={'section'} pt={16} id="tes">
      <VStack spacing={2} textAlign="center">
        <Heading as={'h1'} fontSize={{ base: '2xl', sm: '4xl' }}>
          Pilih Menu Tes
        </Heading>
        <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
          Mencoba Tes Sendiri. Buat Grup Tes. Bergabung ke Grup Tes. Semua dalam
          satu website.
        </Text>
      </VStack>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        textAlign="center"
        justify="center"
        spacing={{ base: 4, lg: 10 }}
        py={10}
      >
        <Box
          mb={4}
          shadow="base"
          borderWidth="1px"
          alignSelf={'center'}
          borderColor={useColorModeValue('gray.200', 'gray.500')}
          borderRadius={'xl'}
          maxWidth={'297px'}
        >
          <Box py={4} px={12}>
            <Text fontWeight="500" fontSize={{ base: 'xl', sm: '2xl' }}>
              Tes Individu
            </Text>
          </Box>
          <VStack
            bg={useColorModeValue('gray.50', 'gray.700')}
            py={4}
            borderBottomRadius={'xl'}
          >
            <List spacing={3} textAlign="start" px={12}>
              <ListItem>
                <HStack alignItems={'flex-start'}>
                  <ListIcon as={FaInfoCircle} color="gray.600" mt={1.5} />
                  <Text fontSize={{ base: 'sm', sm: 'md' }}>
                    Memilih Jenis Tes yang Diinginkan
                  </Text>
                </HStack>
              </ListItem>
              <ListItem>
                <HStack alignItems={'flex-start'}>
                  <ListIcon as={FaInfoCircle} color="gray.600" mt={1.5} />
                  <Text fontSize={{ base: 'sm', sm: 'md' }}>
                    Mengetahui Hasil Tes
                  </Text>
                </HStack>
              </ListItem>
              <ListItem>
                <HStack alignItems={'flex-start'}>
                  <ListIcon as={FaInfoCircle} color="gray.600" mt={1.5} />
                  <Text fontSize={{ base: 'sm', sm: 'md' }}>
                    Mengunduh Hasil Tes
                  </Text>
                </HStack>
              </ListItem>
            </List>
            <Box w="80%" pt={7}>
              <Button
                onClick={individualModal.onOpen}
                w="full"
                colorScheme="orange"
                variant="outline"
              >
                Buat Tes
              </Button>
            </Box>
          </VStack>
        </Box>
        <Box
          mb={4}
          shadow="base"
          borderWidth="1px"
          alignSelf={'center'}
          borderColor={useColorModeValue('gray.200', 'gray.500')}
          borderRadius={'xl'}
          maxWidth={'297px'}
        >
          <Box position="relative">
            <Box
              position="absolute"
              top="-16px"
              left="50%"
              style={{ transform: 'translate(-50%)' }}
            >
              <Text
                textTransform="uppercase"
                bg={useColorModeValue('orange.300', 'orange.700')}
                px={3}
                py={1}
                color={useColorModeValue('gray.900', 'gray.300')}
                fontSize={{ base: 'xs', lg: 'sm' }}
                fontWeight="600"
                rounded="xl"
              >
                Khusus Admin
              </Text>
            </Box>
            <Box py={4} px={12}>
              <Text fontWeight="500" fontSize={{ base: 'xl', sm: '2xl' }}>
                Buat Grup Tes
              </Text>
            </Box>
            <VStack
              bg={useColorModeValue('gray.50', 'gray.700')}
              py={4}
              borderBottomRadius={'xl'}
            >
              <List spacing={3} textAlign="start" px={12}>
                <ListItem>
                  <HStack alignItems={'flex-start'}>
                    <ListIcon as={FaInfoCircle} color="gray.600" mt={1.5} />
                    <Text fontSize={{ base: 'sm', sm: 'md' }}>
                      Manajemen Dasbor Grup Tes
                    </Text>
                  </HStack>
                </ListItem>
                <ListItem>
                  <HStack alignItems={'flex-start'}>
                    <ListIcon as={FaInfoCircle} color="gray.600" mt={1.5} />
                    <Text fontSize={{ base: 'sm', sm: 'md' }}>
                      Menentukan Jenis Tes
                    </Text>
                  </HStack>
                </ListItem>
                <ListItem>
                  <HStack alignItems={'flex-start'}>
                    <ListIcon as={FaInfoCircle} color="gray.600" mt={1.5} />
                    <Text fontSize={{ base: 'sm', sm: 'md' }}>
                      Menerima Email Kode
                    </Text>
                  </HStack>
                </ListItem>
                <ListItem>
                  <HStack alignItems={'flex-start'}>
                    <ListIcon as={FaInfoCircle} color="gray.600" mt={1.5} />
                    <Text fontSize={{ base: 'sm', sm: 'md' }}>
                      Membagikan Kode Verifikasi Grup
                    </Text>
                  </HStack>
                </ListItem>
                <ListItem>
                  <HStack alignItems={'flex-start'}>
                    <ListIcon as={FaInfoCircle} color="gray.600" mt={1.5} />
                    <Text fontSize={{ base: 'sm', sm: 'md' }}>
                      Mengunduh Data Dasbor
                    </Text>
                  </HStack>
                </ListItem>
                <ListItem>
                  <HStack alignItems={'flex-start'}>
                    <ListIcon as={FaInfoCircle} color="gray.600" mt={1.5} />
                    <Text fontSize={{ base: 'sm', sm: 'md' }}>
                      Menghapus Grup Tes
                    </Text>
                  </HStack>
                </ListItem>
              </List>
              <Box w="80%" pt={7}>
                <Button
                  onClick={groupModal.onOpen}
                  w="full"
                  colorScheme="orange"
                >
                  Buat Grup
                </Button>
              </Box>
            </VStack>
          </Box>
        </Box>
        <Box
          mb={4}
          shadow="base"
          borderWidth="1px"
          alignSelf={'center'}
          borderColor={useColorModeValue('gray.200', 'gray.500')}
          borderRadius={'xl'}
          maxWidth={'297px'}
        >
          <Box py={4} px={12}>
            <Text fontWeight="500" fontSize={{ base: 'xl', sm: '2xl' }}>
              Gabung Tes
            </Text>
          </Box>
          <VStack
            bg={useColorModeValue('gray.50', 'gray.700')}
            py={4}
            borderBottomRadius={'xl'}
          >
            <List spacing={3} textAlign="start" px={12}>
              <ListItem>
                <HStack alignItems={'flex-start'}>
                  <ListIcon as={FaInfoCircle} color="gray.600" mt={1.5} />
                  <Text fontSize={{ base: 'sm', sm: 'md' }}>
                    Bergabung dengan Grup Tes
                  </Text>
                </HStack>
              </ListItem>
              <ListItem>
                <HStack alignItems={'flex-start'}>
                  <ListIcon as={FaInfoCircle} color="gray.600" mt={1.5} />
                  <Text fontSize={{ base: 'sm', sm: 'md' }}>
                    Mengerjakan Tes
                  </Text>
                </HStack>
              </ListItem>
              <ListItem>
                <HStack alignItems={'flex-start'}>
                  <ListIcon as={FaInfoCircle} color="gray.600" mt={1.5} />
                  <Text fontSize={{ base: 'sm', sm: 'md' }}>
                    Mengetahui Hasil Tes
                  </Text>
                </HStack>
              </ListItem>
            </List>
            <Box w="80%" pt={7}>
              <Button
                onClick={joinModal.onOpen}
                w="full"
                colorScheme="orange"
                variant="outline"
              >
                Gabung Tes
              </Button>
            </Box>
          </VStack>
        </Box>
      </Stack>
      <IndividualForm
        isOpen={individualModal.isOpen}
        onClose={individualModal.onClose}
      />
      <GroupForm isOpen={groupModal.isOpen} onClose={groupModal.onClose} />
      <JoinForm isOpen={joinModal.isOpen} onClose={joinModal.onClose} />
    </Box>
  );
}
