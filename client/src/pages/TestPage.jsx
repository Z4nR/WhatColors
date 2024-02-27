import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Box,
  Button,
  HStack,
  Heading,
  IconButton,
  useDisclosure,
} from '@chakra-ui/react';
import UserData from '@/components/test/UserData';
import TestSheet from '@/components/test/TestSheet';
import { useShuffle, useTestData } from '@/utils/customHooks';
import { userData } from '@/utils/test-helper';
import { useNavigate } from 'react-router-dom';
import { CloseIcon } from '@chakra-ui/icons';
import { useRef } from 'react';

export default function TestPage() {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();

  const [getTestData] = useTestData();
  const [getShuffle] = useShuffle(getTestData);

  const isClient = getTestData?.isClient;
  const user = userData(getTestData, isClient);

  const initiate = getTestData?.value;

  const cancelTest = () => {
    navigate('/');
  };

  return (
    <Box my={6}>
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />
        <AlertDialogContent>
          <AlertDialogHeader>Batalkan Tes</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
            Apakah anda yakin ingin membatalkan tes ini?
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              Tidak
            </Button>
            <Button colorScheme="red" ml={3} onClick={cancelTest}>
              Keluar
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <HStack mb={8}>
        <Heading as={'h6'} fontSize={'lg'} textAlign={'center'} flex={1}>
          Pengerjaan Tes Buta Warna <br /> Metode Farnsworth-Munsell
        </Heading>
        <IconButton
          size={'sm'}
          colorScheme="red"
          icon={<CloseIcon />}
          onClick={onOpen}
        />
      </HStack>
      <UserData user={user} />
      <TestSheet
        test={getShuffle}
        user={user}
        init={initiate}
        isClient={isClient}
      />
    </Box>
  );
}
