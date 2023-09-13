import Loading from "@/components/utils/Loading";
import NotFound from "@/components/utils/NotFound";
import { getGroupById } from "@/utils/call-api";
import { createArray } from "@/utils/methods/method-loader";
import storage from "@/utils/storage";
import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  HStack,
  Input,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function ClientForm({ setPage, onClose }) {
  const navigate = useNavigate();
  const id = storage.getJSON("id");
  let device;
  let type;

  const { data, error, isLoading, isError } = useQuery({
    queryKey: ["group", id],
    queryFn: () => getGroupById(id),
  });

  const {
    handleSubmit,
    register,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: "",
      gender: "",
      device: "",
      testType: "",
      value: {},
      isClient: true,
    },
  });

  if (data) {
    storage.setJSON("inisial", data.groupInitial);
    device = data.device;
    type = data.type;
  }

  useEffect(() => {
    setValue("device", device);
    setValue("testType", type);
    setValue("value", createArray(type));
  }, [setValue]);

  if (isLoading) return <Loading />;
  if (isError) return <NotFound error={error} />;

  const onSubmit = (data) => {
    storage.setJSON("user", data);
    navigate("/test");
  };

  const resetData = () => {
    reset();
  };

  const cancelForm = () => {
    setPage(false);
    reset();
    onClose();
  };

  return (
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
                  message: "Min. 4 Huruf",
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
              <NumberInput
                id="age"
                focusBorderColor="teal.400"
                max={50}
                min={10}
              >
                <NumberInputField
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
              <FormHelperText fontSize={"small"}>
                Rentang usia 10 sampai 50 tahun
              </FormHelperText>
              <FormErrorMessage>{errors.age}</FormErrorMessage>
            </FormControl>
            <FormControl isRequired isInvalid={errors.gender}>
              <FormLabel htmlFor="gender">Jenis Kelamin</FormLabel>
              <RadioGroup id="gender">
                <HStack
                  height={10}
                  justifyContent={"space-around"}
                  spacing="24px"
                >
                  <Radio
                    value="Pria"
                    {...register("gender", {
                      required: "Wajib Diisi",
                    })}
                  >
                    Pria
                  </Radio>
                  <Radio
                    value="Wanita"
                    {...register("gender", {
                      required: "Wajib Diisi",
                    })}
                  >
                    Wanita
                  </Radio>
                </HStack>
              </RadioGroup>

              <FormHelperText textAlign={"center"} fontSize={"small"}>
                Hanya ada 2 jenis kelamin
              </FormHelperText>
              <FormErrorMessage>{errors.gender}</FormErrorMessage>
            </FormControl>
          </Flex>
          <Flex direction={{ base: "column", md: "row" }} gap={5} mt={5}>
            <FormControl isRequired isInvalid={errors.device}>
              <FormLabel htmlFor="device">Perangkat</FormLabel>
              <Input
                id="device"
                autoComplete="off"
                focusBorderColor="teal.400"
                placeholder="Masukkan Tipe Monitor/Gawai"
                {...register("device", {
                  required: "Wajib Diisi",
                })}
              />

              <FormHelperText fontSize={"small"}>
                Tuliskan merk atau tipe monitor atau gawai
              </FormHelperText>
              <FormErrorMessage>{errors.device}</FormErrorMessage>
            </FormControl>
            <FormControl isReadOnly isRequired isInvalid={errors.testType}>
              <FormLabel htmlFor="type">Tingkat Kesulitan</FormLabel>
              <Input
                id="type"
                autoComplete="off"
                focusBorderColor="teal.400"
                {...register("testType", {
                  required: "Wajib Diisi",
                })}
              />
            </FormControl>
          </Flex>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="teal" mr={3} type="submit">
            Buat Tes
          </Button>
          <Button mr={3} onClick={resetData}>
            Hapus Data
          </Button>
          <Button colorScheme="red" onClick={cancelForm}>
            Batal
          </Button>
        </ModalFooter>
      </ModalContent>
    </form>
  );
}
