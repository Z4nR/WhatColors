import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  HStack,
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
  Radio,
  RadioGroup,
  Select,
} from "@chakra-ui/react";
import testTypes from "../../utils/methods/method-type";
import { createArray } from "../../utils/methods/method-loader";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

export default function IndividualForm({ isOpen, onClose }) {
  const {
    handleSubmit,
    register,
    watch,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      fullName: "",
      gender: "",
      device: "",
      testType: "Mudah (32 Warna)",
      value: {},
      isClient: false,
    },
  });

  const testValue = watch("testType");

  useEffect(() => {
    setValue("value", createArray(testValue));
  }, [setValue, testValue]);

  const onSubmit = (data) => {
    console.log(data);
    sessionStorage.setItem("user", JSON.stringify(data));
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
      scrollBehavior={"inside"}
      isCentered
    >
      <ModalOverlay />
      <form onSubmit={handleSubmit(onSubmit)}>
        <ModalContent>
          <ModalHeader>Buat Tes Individu</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl isRequired isInvalid={errors.fullName}>
              <FormLabel htmlFor="fullname">Nama Anda</FormLabel>
              <Input
                id="fullname"
                autoComplete="off"
                focusBorderColor="teal.400"
                placeholder="Masukkan Nama Lengkap"
                {...register("fullName", {
                  required: "Wajib Diisi",
                  minLength: {
                    value: 4,
                    message: "Masukkan Minimal 4 Suku Kata",
                  },
                })}
              />
              <FormHelperText fontSize={"small"}>
                Tuliskan Nama Lengkap Anda
              </FormHelperText>
              <FormErrorMessage>
                {errors.fullName && errors.fullName.message}
              </FormErrorMessage>
            </FormControl>
            <Flex direction={{ base: "column", md: "row" }} gap={5} mt={5}>
              <FormControl isRequired isInvalid={errors.age}>
                <FormLabel htmlFor="age">Umur Anda</FormLabel>
                <NumberInput focusBorderColor="teal.400" max={50} min={10}>
                  <NumberInputField
                    id="age"
                    autoComplete="off"
                    placeholder="Masukkan Umur Anda"
                    {...register("age", {
                      required: "Wajib Diisi",
                    })}
                  />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
                <FormErrorMessage>{errors.age}</FormErrorMessage>
                <FormHelperText fontSize={"small"}>
                  Rentang usia 10 sampai 50 tahun
                </FormHelperText>
              </FormControl>
              <FormControl isRequired isInvalid={errors.gender}>
                <FormLabel htmlFor="gender">Jenis Kelamin</FormLabel>
                <RadioGroup id="gender" name="gender">
                  <HStack
                    height={10}
                    justifyContent={"space-around"}
                    spacing="24px"
                  >
                    <Radio
                      value="Male"
                      {...register("gender", {
                        required: "Wajib Diisi",
                      })}
                    >
                      Pria
                    </Radio>
                    <Radio
                      value="Female"
                      {...register("gender", {
                        required: "Wajib Diisi",
                      })}
                    >
                      Wanita
                    </Radio>
                  </HStack>
                </RadioGroup>
                <FormErrorMessage>{errors.gender}</FormErrorMessage>
                <FormHelperText textAlign={"center"} fontSize={"small"}>
                  Hanya ada 2 jenis kelamin
                </FormHelperText>
              </FormControl>
            </Flex>
            <Flex direction={{ base: "column", md: "row" }} gap={5} mt={5}>
              <FormControl isRequired isInvalid={errors.device}>
                <FormLabel htmlFor="device">Perangkat yang digunakan</FormLabel>
                <Input
                  id="device"
                  autoComplete="off"
                  focusBorderColor="teal.400"
                  placeholder="Masukkan Nama Lengkap"
                  {...register("device", {
                    required: "Wajib Diisi",
                  })}
                />
                <FormErrorMessage>{errors.device}</FormErrorMessage>
                <FormHelperText fontSize={"small"}>
                  Tuliskan merk atau tipe monitor atau gawai
                </FormHelperText>
              </FormControl>
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
                <FormErrorMessage>{errors.testType}</FormErrorMessage>
                <FormHelperText fontSize={"small"}>
                  Pilih tingkat kesulitan sesuai kemampuan
                </FormHelperText>
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
              Save
            </Button>
            <Button mr={3} onClick={resetData}>
              Reset
            </Button>
            <Button colorScheme="red" onClick={(resetData, onClose)}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </form>
    </Modal>
  );
}
