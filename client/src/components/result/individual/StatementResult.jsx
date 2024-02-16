import { infoBlind } from '@/utils/methods/method-type';
import {
  AbsoluteCenter,
  Box,
  Center,
  Divider,
  Skeleton,
  Text,
  VStack,
} from '@chakra-ui/react';

export default function StatementResult({ data, isLoading }) {
  const infoResult = {
    Bagus: {
      bgColor: 'green.300',
      footerText: `Dari jumlah skor yang dicapai pengguna, diketahui bahwa kemampuan mata pengguna dalam melihat lebih baik dibandingkan rata-rata manusia pada umumnya`,
    },
    Rerata: {
      bgColor: 'yellow.300',
      footerText: `Dari jumlah skor yang dicapai pengguna, diketahui bahwa kemampuan mata pengguna termasuk normal seperti rata-rata manusia pada umumnya`,
    },
    Low: {
      bgColor: 'red.300',
      footerText: `Dari jumlah skor yang dicapai pengguna, diketahui bahwa kemampuan mata pengguna dalam melihat lebih buruk dibandingkan rata-rata manusia pada umumnya`,
    },
  };

  //To get desrciption using infoBlind and blindCheck on data
  let selectedBlindness = infoBlind['Normal'];
  if (infoBlind[data?.blindCheck]) {
    selectedBlindness = infoBlind[data?.blindCheck];
  }

  //To get desrciption using infoResult and errorScoreStatus on data
  let selectedInfo = infoResult['Rerata'];
  if (infoResult[data?.errorScoreStatus]) {
    selectedInfo = infoResult[data?.errorScoreStatus];
  }

  return (
    <Box py={{ lg: 4 }} fontSize={{ base: 'xs', xs: 'sm', md: 'md' }}>
      <Skeleton isLoaded={!isLoading} fadeDuration={1}>
        <Text textAlign={'justify'}>
          Berdasarkan proses pengujian buta warna pada laman{' '}
          <Text as={'span'} fontWeight={'medium'}>
            WhatColors
          </Text>{' '}
          yang telah dilakukan pada{' '}
          <Text as={'span'} fontWeight={'medium'}>
            {data?.date}
          </Text>{' '}
          menggunakan Metode Farnsworth Munsell dengan jenis tes{' '}
          <Text as={'span'} fontWeight={'medium'}>
            {data?.type}
          </Text>
          . Dengan rincian data sebagai berikut:
        </Text>
      </Skeleton>
      <Center my={{ base: 4, md: 8 }}>
        <VStack alignItems={'flex-start'}>
          <Skeleton isLoaded={!isLoading} fadeDuration={1}>
            <Text fontWeight={'medium'}>Nama : {data?.name}</Text>
          </Skeleton>
          <Skeleton isLoaded={!isLoading} fadeDuration={1}>
            <Text fontWeight={'medium'}>Umur : {data?.age}</Text>
          </Skeleton>
          <Skeleton isLoaded={!isLoading} fadeDuration={1}>
            <Text fontWeight={'medium'}>Perangkat : {data?.device}</Text>
          </Skeleton>
          <Skeleton isLoaded={!isLoading} fadeDuration={1}>
            <Text fontWeight={'medium'}>Waktu Tes : {data?.time}</Text>
          </Skeleton>
        </VStack>
      </Center>
      <Box position={'relative'} my={6}>
        <Skeleton isLoaded={!isLoading} fadeDuration={1}>
          <Divider
            borderBottomWidth={{ base: 'medium', md: 'thick' }}
            borderColor={`${selectedInfo.bgColor}`}
          />
        </Skeleton>
        <AbsoluteCenter
          bg="white"
          px="6"
          fontWeight={'bold'}
          fontSize={{ base: 'xs', xs: 'md', md: 'lg' }}
        >
          Hasil
        </AbsoluteCenter>
      </Box>
      <Skeleton isLoaded={!isLoading} fadeDuration={1}>
        <Text textAlign={{ base: 'justify', sm: 'center' }}>
          Setelah melalui proses perhitungan yang cukup kompleks dan panjang,
          menunjukkan bahwa pengguna:{' '}
          <Text as={'span'} fontWeight={'medium'}>
            {selectedBlindness} dengan jumlah skor diraih sebanyak{' '}
            {data?.totalErrorScore}.
          </Text>
        </Text>
      </Skeleton>
      <Skeleton isLoaded={!isLoading} fadeDuration={1}>
        <Text
          mt={4}
          textAlign={{ base: 'justify', sm: 'center' }}
          fontSize={{ base: 'xs', xs: 'md', md: 'lg' }}
          fontWeight={'bold'}
        >
          {selectedInfo.footerText}
        </Text>
      </Skeleton>
      <Skeleton isLoaded={!isLoading} fadeDuration={1}>
        <Divider
          mt={4}
          borderBottomWidth={{ base: 'medium', md: 'thick' }}
          borderColor={`${selectedInfo.bgColor}`}
        />
      </Skeleton>
    </Box>
  );
}
