import { infoBlind } from "@/utils/methods/method-type";
import {
  AbsoluteCenter,
  Box,
  Center,
  Divider,
  Text,
  VStack,
} from "@chakra-ui/react";

export default function StatementResult({ data }) {
  const infoResult = {
    Bagus: {
      bgColor: "green.300",
      footerText: `Dari jumlah skor yang dicapai pengguna, diketahui bahwa kemampuan mata pengguna dalam melihat lebih baik dibandingkan rata-rata manusia pada umumnya`,
    },
    Rerata: {
      bgColor: "yellow.300",
      footerText: `Dari jumlah skor yang dicapai pengguna, diketahui bahwa kemampuan mata pengguna termasuk normal seperti rata-rata manusia pada umumnya`,
    },
    Low: {
      bgColor: "red.300",
      footerText: `Dari jumlah skor yang dicapai pengguna, diketahui bahwa kemampuan mata pengguna dalam melihat lebih buruk dibandingkan rata-rata manusia pada umumnya`,
    },
  };

  let selectedBlindness = infoBlind["Normal"];
  if (infoBlind[data?.blindCheck]) {
    selectedBlindness = infoBlind[data?.blindCheck];
  }

  let selectedInfo = infoResult["Rerata"];
  if (infoResult[data?.errorScoreStatus]) {
    selectedInfo = infoResult[data?.errorScoreStatus];
  }

  return (
    <Box py={{ lg: 4 }} fontSize={{ base: "xs", xs: "sm", md: "md" }}>
      <Text textAlign={"justify"}>
        Berdasarkan proses pengujian buta warna pada laman{" "}
        <Text as={"span"} fontWeight={"medium"}>
          WhatColors
        </Text>{" "}
        yang telah dilakukan pada{" "}
        <Text as={"span"} fontWeight={"medium"}>
          {data?.date}
        </Text>{" "}
        menggunakan Metode Farnsworth Munsell dengan jenis tes{" "}
        <Text as={"span"} fontWeight={"medium"}>
          {data?.type}
        </Text>
        . Dengan rincian data sebagai berikut:
      </Text>
      <Center my={{ base: 4, md: 8 }}>
        <VStack alignItems={"flex-start"}>
          <Text fontWeight={"medium"}>Nama : {data?.name}</Text>
          <Text fontWeight={"medium"}>Umur : {data?.age}</Text>
          <Text fontWeight={"medium"}>Perangkat : {data?.device}</Text>
          <Text fontWeight={"medium"}>Waktu Tes : {data?.time}</Text>
        </VStack>
      </Center>
      <Box position={"relative"} my={6}>
        <Divider
          borderBottomWidth={{ base: "medium", md: "thick" }}
          borderColor={`${selectedInfo.bgColor}`}
        />
        <AbsoluteCenter
          bg="white"
          px="6"
          fontWeight={"bold"}
          fontSize={{ base: "xs", xs: "md", md: "lg" }}
        >
          Hasil
        </AbsoluteCenter>
      </Box>
      <Text textAlign={{ base: "justify", sm: "center" }}>
        Setelah melalui proses perhitungan yang cukup kompleks dan panjang,
        menunjukkan bahwa pengguna:{" "}
        <Text as={"span"} fontWeight={"medium"}>
          {selectedBlindness} dengan jumlah skor diraih sebanyak{" "}
          {data?.totalErrorScore}.
        </Text>
      </Text>
      <Text
        mt={4}
        textAlign={{ base: "justify", sm: "center" }}
        fontSize={{ base: "xs", xs: "md", md: "lg" }}
        fontWeight={"bold"}
      >
        {selectedInfo.footerText}
      </Text>
      <Divider
        mt={4}
        borderBottomWidth={{ base: "medium", md: "thick" }}
        borderColor={`${selectedInfo.bgColor}`}
      />
    </Box>
  );
}
