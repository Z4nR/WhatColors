import { getClientById } from '@/utils/call-api';
import storage from '@/utils/storage';
import {
  AbsoluteCenter,
  Box,
  Center,
  Divider,
  Heading,
  Skeleton,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import NotFound from '../utils/NotFound';

export default function ClientResult() {
  const id = storage.getJSON('id');
  const { data, error, isLoading, isError } = useQuery({
    queryKey: ['client', id],
    queryFn: async () => await getClientById(id),
    refetchOnWindowFocus: false,
  });

  if (isError) return <NotFound error={error} />;

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

  let selectedInfo = infoResult['Rerata'];
  if (infoResult[data?.errorScoreStatus]) {
    selectedInfo = infoResult[data?.errorScoreStatus];
  }

  return (
    <Box
      py={{ base: 8, xs: 0, lg: 4 }}
      fontSize={{ base: 'xs', xs: 'sm', md: 'md' }}
    >
      <Heading my={6} size={'lg'} textAlign={'center'}>
        Hasil Pengujian
      </Heading>
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
          menghasilkan skor kesalahan sebesar <b>{data?.totalErrorScore}</b>.
          Sehingga dengan hasil skor tersebut menyatakan bahwa pengguna
          dianggap:
        </Text>
      </Skeleton>
      <Skeleton isLoaded={!isLoading} fadeDuration={1}>
        <Heading
          mt={4}
          textAlign={'center'}
          size={{ base: 'md', md: 'lg' }}
          fontWeight={'bold'}
        >
          {data?.status} Tes Buta Warna
        </Heading>
      </Skeleton>
      <Skeleton isLoaded={!isLoading} fadeDuration={1}>
        <Divider
          my={4}
          borderBottomWidth={{ base: 'medium', md: 'thick' }}
          borderColor={`${selectedInfo.bgColor}`}
        />
      </Skeleton>
    </Box>
  );
}
