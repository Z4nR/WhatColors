import { verifyRole } from '@/utils/call-api';
import { useToastMsg } from '@/utils/customHooks';
import storage from '@/utils/storage';
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  HStack,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  PinInput,
  PinInputField,
} from '@chakra-ui/react';
import { useMutation } from '@tanstack/react-query';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export default function VerifyForm({ setPage, onClose }) {
  const navigate = useNavigate();
  const toast = useToastMsg();

  const { mutateAsync, isLoading } = useMutation({
    mutationFn: verifyRole,
    onSuccess: (data) => {
      const admin = data.admin;
      storage.setJSON('id', data.id);
      admin ? navigate('/admin') : setPage(true);
    },
    onError: (error) => {
      toast('Terjadi Kesalahan', `${error.response.data.message}`, 'error');
    },
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      code: '',
    },
  });

  const onVerify = (data) => {
    mutateAsync(data.code);
  };

  return (
    <form onSubmit={handleSubmit(onVerify)}>
      <ModalContent>
        <ModalHeader>Bergabung Grup</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6} margin={'0 auto'}>
          <FormControl isRequired isInvalid={errors.code}>
            <FormLabel>Masukkan Kode</FormLabel>
            <HStack>
              <Controller
                control={control}
                name="code"
                render={({ field: { onChange } }) => (
                  <PinInput
                    type="alphanumeric"
                    mask
                    onChange={(e) => onChange(e)}
                  >
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                  </PinInput>
                )}
              />
            </HStack>
            <FormHelperText fontSize={'small'}>
              Harap masukkan kode yang sesuai
            </FormHelperText>
            <FormErrorMessage>{errors.code}</FormErrorMessage>
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button
            colorScheme="teal"
            mr={3}
            type="submit"
            loadingText="Memverifikasi"
            isLoading={isLoading}
          >
            Verifikasi
          </Button>
          <Button onClick={onClose}>Batal</Button>
        </ModalFooter>
      </ModalContent>
    </form>
  );
}
