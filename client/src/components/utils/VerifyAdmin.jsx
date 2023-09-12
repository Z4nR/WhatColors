import { sendEmail, verifyRole } from "@/utils/call-api";
import { useCountDown, useToastMsg } from "@/utils/customHooks";
import storage from "@/utils/storage";
import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  HStack,
  Heading,
  PinInput,
  PinInputField,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function VerifyAdmin() {
  const navigate = useNavigate();
  const toast = useToastMsg();
  const id = storage.getJSON("id");
  const { countDown, start } = useCountDown();

  const emailMutation = useMutation({
    mutationFn: sendEmail,
    onSuccess: (data) => {
      toast("Email Berhasil Dikirim", `${data}`, "info");
    },
    onError: (error) => {
      toast("Terjadi Kesalahan", `${error.response.data.message}`, "error");
    },
  });

  const verifyMutation = useMutation({
    mutationFn: verifyRole,
    onSuccess: (data) => {
      data.admin === true
        ? navigate("/admin")
        : toast(
            "Kode Verifikasi Salah",
            "Silahkan Masukan Kode Yang Benar",
            "warning"
          );
    },
    onError: (error) => {
      toast("Terjadi Kesalahan", `${error.response.data.message}`, "error");
    },
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      code: "",
    },
  });

  const resendEmail = () => {
    start(60);
    emailMutation.mutateAsync(id);
  };

  const onVerify = (data) => {
    verifyMutation.mutateAsync(data.code);
  };

  return (
    <Flex
      minHeight={"60vh"}
      my={10}
      flexDirection={"column"}
      justifyContent={"space-around"}
      alignItems={"center"}
    >
      <Heading size={"md"}>Verifikasikan Diri Anda</Heading>
      <form onSubmit={handleSubmit(onVerify)}>
        <VStack py={10} px={6}>
          <FormControl isRequired isInvalid={errors.code}>
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
            <FormHelperText textAlign="center" fontSize={"small"}>
              Harap masukkan kode yang sesuai
            </FormHelperText>
            <FormErrorMessage>{errors.code}</FormErrorMessage>
          </FormControl>
          <Button
            colorScheme="teal"
            mt={4}
            loadingText="Verifikasi Kode"
            isLoading={verifyMutation.isLoading}
            type="submit"
          >
            Verifikasi
          </Button>
        </VStack>
      </form>
      {countDown > 0 ? (
        <Text
          fontSize={"small"}
          as={"span"}
          color={"gray.400"}
          fontWeight={"medium"}
        >
          Kirim Ulang Kode Dalam {countDown}
        </Text>
      ) : (
        <Button
          fontSize={"small"}
          color={"facebook.300"}
          variant={"outline"}
          onClick={resendEmail}
        >
          Kirim Ulang Kode
        </Button>
      )}
    </Flex>
  );
}
