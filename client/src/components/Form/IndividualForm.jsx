import {
  Button,
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

  function onSubmit(data) {
    console.log(data);
    sessionStorage.setItem("data", JSON.stringify(data));
  }

  return (
    <Modal
      size={{ base: "xs", sm: "md" }}
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
              <FormErrorMessage>
                {errors.fullName && errors.fullName.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isRequired isInvalid={errors.age} mt={4}>
              <FormLabel htmlFor="age">Umur Anda</FormLabel>
              <NumberInput focusBorderColor="teal.400" max={50} min={10}>
                <NumberInputField
                  id="age"
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
            </FormControl>
            <FormControl isRequired isInvalid={errors.gender} mt={4}>
              <FormLabel htmlFor="gender">Jenis Kelamin</FormLabel>
              <RadioGroup id="gender" name="gender">
                <HStack spacing="24px">
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
              <FormHelperText fontSize={"small"}>
                Hanya ada 2 jenis kelamin
              </FormHelperText>
              <FormErrorMessage>{errors.gender}</FormErrorMessage>
            </FormControl>
            <FormControl isRequired isInvalid={errors.device} mt={4}>
              <FormLabel htmlFor="device">Perangkat yang digunakan</FormLabel>
              <Input
                id="device"
                focusBorderColor="teal.400"
                placeholder="Masukkan Nama Lengkap"
                {...register("device", {
                  required: "Wajib Diisi",
                })}
              />
              <FormHelperText fontSize={"small"}>
                Tuliskan merk atau tipe monitor atau gawai
              </FormHelperText>
              <FormErrorMessage>{errors.device}</FormErrorMessage>
            </FormControl>
            <FormControl isRequired isInvalid={errors.testType} mt={4}>
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
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </form>
    </Modal>
  );
}
