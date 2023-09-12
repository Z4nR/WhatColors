import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
} from "@chakra-ui/react";
import { testTypes } from "@/utils/methods/method-type";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { date } from "@/utils/test-helper";
import { useMutation } from "@tanstack/react-query";
import { newGroup, sendEmail } from "@/utils/call-api";
import storage from "@/utils/storage";
import { useToastMsg } from "@/utils/customHooks";

export default function GroupForm({ isOpen, onClose }) {
  const navigate = useNavigate();
  const toast = useToastMsg();

  const emailMutation = useMutation({
    mutationFn: sendEmail,
    onSuccess: (data) => {
      toast("Email Berhasil Dikirim", `${data}`, "info");
    },
    onError: (error) => {
      toast("Terjadi Kesalahan", `${error.response.data.message}`, "error");
    },
  });

  const groupMutation = useMutation({
    mutationFn: newGroup,
    onSuccess: (data) => {
      storage.setJSON("id", data);
      emailMutation.mutateAsync(data);
      navigate("/verify-admin");
      toast("Grup Berhasil Dibuat", "Masukan Kode Verifikasi", "success");
    },
    onError: (error) => {
      toast("Terjadi Kesalahan", `${error.response.data.message}`, "error");
    },
  });

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      groupName: "",
      groupInitial: "",
      email: "",
      type: "Mudah (32 Warna)",
      device: "",
    },
  });

  const onSubmit = (data) => {
    const score = parseInt(data.maxScore);
    const groupData = { ...data, maxScore: score, date: date };
    groupMutation.mutateAsync(groupData);
  };

  const resetData = () => {
    reset();
  };

  return (
    <Modal
      size={{ base: "xs", sm: "md", md: "2xl" }}
      closeOnOverlayClick={false}
      isOpen={isOpen}
      onClose={onClose}
      scrollBehavior="inside"
      isCentered
    >
      <ModalOverlay />
      <form onSubmit={handleSubmit(onSubmit)}>
        <ModalContent>
          <ModalHeader>Buat Grup Tes</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Flex direction={{ base: "column", sm: "row" }} gap={5}>
              <FormControl isRequired isInvalid={errors.groupName}>
                <FormLabel htmlFor="roomName">Nama Grup</FormLabel>
                <Input
                  id="roomName"
                  autoComplete="off"
                  focusBorderColor="teal.400"
                  placeholder="Masukkan Nama Grup"
                  {...register("groupName", {
                    required: "Wajib Diisi",
                    minLength: {
                      value: 4,
                      message: "Masukkan Minimal 4 Suku Kata",
                    },
                    maxLength: {
                      value: 20,
                      message: "Masukkan Maksimal 20 Suku Kata",
                    },
                  })}
                />
                <FormHelperText fontSize={"small"}>
                  Masukkan Nama Grup
                </FormHelperText>
                <FormErrorMessage>
                  {errors.groupName && errors.groupName.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl
                isRequired
                isInvalid={errors.groupInitial}
                width={{ base: "auto", sm: "12em" }}
              >
                <FormLabel htmlFor="roomInitial">Inisial Grup</FormLabel>
                <Input
                  id="roomInitial"
                  autoComplete="off"
                  focusBorderColor="teal.400"
                  placeholder="Inisial Grup"
                  {...register("groupInitial", {
                    required: "Wajib Diisi",
                    maxLength: {
                      value: 5,
                      message: "Maks. 5 Huruf",
                    },
                  })}
                />
                <FormHelperText fontSize={"small"}>
                  Beri Inisial Grup
                </FormHelperText>
                <FormErrorMessage>
                  {errors.groupInitial && errors.groupInitial.message}
                </FormErrorMessage>
              </FormControl>
            </Flex>
            <Flex direction={{ base: "column", md: "row" }} gap={5} mt={4}>
              <FormControl isRequired isInvalid={errors.email}>
                <FormLabel htmlFor="adminEmail">Email Admin</FormLabel>
                <Input
                  id="adminEmail"
                  type="email"
                  autoComplete="off"
                  focusBorderColor="teal.400"
                  placeholder="Masukkan Email Admin"
                  {...register("email", {
                    required: "Wajib Diisi",
                  })}
                />
                <FormHelperText fontSize={"small"}>
                  Masukkan Email Admin Grup
                </FormHelperText>
                <FormErrorMessage>{errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="device">Perangkat Yang Digunakan</FormLabel>
                <Input
                  id="device"
                  autoComplete="off"
                  focusBorderColor="teal.400"
                  placeholder="Masukkan Tipe Monitor/Gawai"
                  {...register("device")}
                />
                <FormHelperText fontSize={"small"}>
                  Tuliskan merk atau tipe monitor atau gawai
                </FormHelperText>
              </FormControl>
            </Flex>
            <Flex direction={{ base: "column", md: "row" }} gap={5} mt={4}>
              <FormControl isRequired isInvalid={errors.type}>
                <FormLabel htmlFor="type">Tingkat Kesulitan</FormLabel>
                <Select
                  id="type"
                  {...register("type", {
                    required: "Wajib Diisi",
                  })}
                  placeholder="Pilih Tingkat Kesulitan"
                >
                  {testTypes.map((option) => (
                    <option key={option.type} value={option.type}>
                      {option.type}
                    </option>
                  ))}
                </Select>
                <FormHelperText fontSize={"small"}>
                  Pilih tingkat kesulitan sesuai kemampuan
                </FormHelperText>
                <FormErrorMessage>{errors.type}</FormErrorMessage>
              </FormControl>
              <FormControl isRequired isInvalid={errors.maxScore}>
                <FormLabel htmlFor="maxTest">Skor Error Maksimal</FormLabel>
                <NumberInput
                  allowMouseWheel
                  id="maxTest"
                  focusBorderColor="teal.400"
                  max={100}
                  min={0}
                  {...register("maxScore", {
                    required: "Wajib Diisi",
                  })}
                >
                  <NumberInputField
                    autoComplete="off"
                    placeholder="Masukkan Nilai Terendah"
                  />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>

                <FormHelperText fontSize={"small"}>
                  Rentang nilai terendah 0 - 100
                </FormHelperText>
                <FormErrorMessage>{errors.maxScore}</FormErrorMessage>
              </FormControl>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="teal"
              mr={3}
              loadingText="Proses"
              isLoading={groupMutation.isLoading}
              type="submit"
            >
              Buat Grup
            </Button>
            <Button mr={3} onClick={resetData}>
              Hapus Data
            </Button>
            <Button colorScheme="red" onClick={(resetData, onClose)}>
              Batal
            </Button>
          </ModalFooter>
        </ModalContent>
      </form>
    </Modal>
  );
}
