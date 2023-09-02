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
import testTypes from "@/utils/methods/method-type";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function GroupForm({ isOpen, onClose }) {
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      date: new Date().toLocaleString(),
      roomName: "",
      roomInitial: "",
      adminEmail: "",
      testType: "Mudah (32 Warna)",
      device: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    sessionStorage.setItem("group", JSON.stringify(data));
    navigate("/admin");
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
              <FormControl isRequired isInvalid={errors.roomName}>
                <FormLabel htmlFor="roomname">Nama Grup</FormLabel>
                <Input
                  id="roomname"
                  autoComplete="off"
                  focusBorderColor="teal.400"
                  placeholder="Masukkan Nama Grup"
                  {...register("roomName", {
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
                  {errors.roomName && errors.roomName.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl
                isRequired
                isInvalid={errors.roomInitial}
                width={{ base: "auto", sm: "12em" }}
              >
                <FormLabel htmlFor="roomInitial">Inisial Grup</FormLabel>
                <Input
                  id="roomInitial"
                  autoComplete="off"
                  focusBorderColor="teal.400"
                  placeholder="Inisial Grup"
                  {...register("roomInitial", {
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
                  {errors.roomInitial && errors.roomInitial.message}
                </FormErrorMessage>
              </FormControl>
            </Flex>
            <Flex direction={{ base: "column", md: "row" }} gap={5} mt={4}>
              <FormControl isRequired isInvalid={errors.adminEmail}>
                <FormLabel htmlFor="adminEmail">Email Admin</FormLabel>
                <Input
                  id="adminEmail"
                  type="email"
                  autoComplete="off"
                  focusBorderColor="teal.400"
                  placeholder="Masukkan Email Admin"
                  {...register("adminEmail", {
                    required: "Wajib Diisi",
                  })}
                />
                <FormHelperText fontSize={"small"}>
                  Masukkan Email Admin Grup
                </FormHelperText>
                <FormErrorMessage>{errors.adminEmail}</FormErrorMessage>
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
              <FormControl isRequired isInvalid={errors.testType}>
                <FormLabel htmlFor="type">Tingkat Kesulitan</FormLabel>
                <Select
                  id="type"
                  {...register("testType", {
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
                <FormErrorMessage>{errors.testType}</FormErrorMessage>
              </FormControl>
              <FormControl isRequired isInvalid={errors.minTest}>
                <FormLabel htmlFor="minTest">Umur Anda</FormLabel>
                <NumberInput focusBorderColor="teal.400" max={100} min={0}>
                  <NumberInputField
                    id="minTest"
                    autoComplete="off"
                    placeholder="Masukkan Nilai Terendah"
                    {...register("minTest", {
                      required: "Wajib Diisi",
                    })}
                  />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>

                <FormHelperText fontSize={"small"}>
                  Rentang nilai terendah 0 - 100
                </FormHelperText>
                <FormErrorMessage>{errors.minTest}</FormErrorMessage>
              </FormControl>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="teal"
              mr={3}
              isLoading={isSubmitting}
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
