import {
  Stack,
  Container,
  Box,
  Text,
  Heading,
  SimpleGrid,
  chakra,
  shouldForwardProp,
} from '@chakra-ui/react';
import { isValidMotionProp, motion } from 'framer-motion';

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

export default function ResultExplaining() {
  return (
    <Box py={{ base: 5, xs: 16, sm: 20 }} textAlign={'justify'}>
      <Box py={{ base: 5, xs: 8, sm: 16 }} bg={'teal'}>
        <Container maxW={'7xl'} paddingInline={10}>
          <Stack direction={{ base: 'column', lg: 'row' }}>
            <Stack flex={1} justify={{ lg: 'center' }} py={4}>
              <Box mb={{ base: 8, md: 20 }}>
                <ChakraBox
                  initial="offscreen"
                  whileInView="onscreen"
                  variants={{
                    offscreen: {
                      scale: 0,
                      opacity: 0,
                    },
                    onscreen: {
                      scale: 1,
                      opacity: 1,
                      transition: {
                        ease: 'easeInOut',
                        duration: 0.5,
                      },
                    },
                  }}
                >
                  <Text
                    fontFamily={'heading'}
                    fontWeight={700}
                    textTransform={'uppercase'}
                    mb={3}
                    fontSize={{ base: 'md', md: 'xl' }}
                    color={'orange.300'}
                  >
                    Rincian Hasil
                  </Text>
                  <Heading
                    color={'white'}
                    mb={5}
                    fontSize={{ base: 'md', sm: 'xl', md: '5xl' }}
                  >
                    Tampilan Data Terperinci dan Mudah Dipahami
                  </Heading>
                </ChakraBox>
                <ChakraBox
                  initial="offscreen"
                  whileInView="onscreen"
                  variants={{
                    offscreen: {
                      scale: 0,
                      opacity: 0,
                    },
                    onscreen: {
                      scale: 1,
                      opacity: 1,
                      transition: {
                        ease: 'easeInOut',
                        duration: 1,
                      },
                    },
                  }}
                >
                  <Text fontSize={{ base: 'md', md: 'xl' }} color={'gray.200'}>
                    WhatColors menampilkan data dengan rinci dan memiliki
                    penyampaian yang mudah dipahami, membantu pengguna dalam
                    memahami hasil dari tes yang telah dikerjakan serta daftar
                    data peserta tes bagi para admin grup tes.
                  </Text>
                </ChakraBox>
              </Box>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                {stats.map((stat) => (
                  <Box key={stat.title}>
                    <ChakraBox
                      initial="offscreen"
                      whileInView="onscreen"
                      variants={{
                        offscreen: {
                          scale: 0,
                          opacity: 0,
                        },
                        onscreen: {
                          scale: 1,
                          opacity: 1,
                          transition: {
                            ease: 'easeInOut',
                            duration: 0.5,
                          },
                        },
                      }}
                    >
                      <Text
                        fontFamily={'heading'}
                        fontSize={{ base: 'xl', md: '3xl' }}
                        color={'orange.300'}
                        mb={3}
                      >
                        {stat.title}
                      </Text>
                    </ChakraBox>
                    <ChakraBox
                      initial="offscreen"
                      whileInView="onscreen"
                      variants={{
                        offscreen: {
                          scale: 0,
                          opacity: 0,
                        },
                        onscreen: {
                          scale: 1,
                          opacity: 1,
                          transition: {
                            ease: 'easeInOut',
                            duration: 1,
                          },
                        },
                      }}
                    >
                      <Text
                        fontSize={{ base: 'md', md: 'xl' }}
                        color={'gray.200'}
                      >
                        {stat.content}
                      </Text>
                    </ChakraBox>
                  </Box>
                ))}
              </SimpleGrid>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}

const stats = [
  {
    title: 'Pernyataan',
    content: (
      <>
        <Text as={'span'} fontWeight={700} color={'white'}>
          Ringkasan Hasil
        </Text>
        <br />
        Pada bagian ini pengguna akan mendapatkan penjelasan singkat terkait
        ringkasan hasil akhir yang didapatkan setelah melalui perhitungan dan
        penerapan metode Farnsworth Munsell yang cukup kompleks.
      </>
    ),
  },
  {
    title: 'Komparasi',
    content: (
      <>
        <Text as={'span'} fontWeight={700} color={'white'}>
          Nilai Perbandingan
        </Text>
        <br />
        Pada bagian ini pengguna akan mendapatkan tampilan nilai perbandingan
        terkait jawaban pengguna dengan nilai asli dari susunan warna pada
        Metode Farnsworth Munsell. Hasil nilai berbandingan yang ditampilkan
        akan berupa tabel ataupun diagram pada ukuran perangkat tertentu.
        Tampilan hasil akan berupa nomor urutan blok warna serta nilai jawaban
        berupa &quot;Benar&quot; atau &quot;Salah&quot;.
      </>
    ),
  },
  {
    title: 'Diskriminan',
    content: (
      <>
        <Text as={'span'} fontWeight={700} color={'white'}>
          Nilai Perpindahan
        </Text>
        <br />
        Pada bagian ini pengguna akan mendapatkan tampilan nilai terkait
        seberapa jauh perpindahan blok warna dari seharusnya. Untuk menentukan
        nilai ini perlu menggunakan Metode Farnsworth Munsell untuk mengetahui
        nilai suatu blok warna. Jawaban pengguna dapat diperkirakan benar
        apabila perbandingan nilai pada suatu blok terhadapat blok warna sebelum
        dan sesudahnya bernilai satu.
      </>
    ),
  },
  {
    title: 'Data Grup',
    content: (
      <>
        <Text as={'span'} fontWeight={700} color={'white'}>
          Informasi Peserta
        </Text>
        <br />
        Data yang terdapat dalam grup dibuat sesederhana mungkin untuk dapat
        membantu admin dalam mengelompokkan data peserta, dalam tampilan data
        peserta pada sebuah grup hanya berisikan sedikit informasi. Untuk
        informasi yang lebih lengkap, admin dapat mengunduh data grup apabila
        diperlukan.
      </>
    ),
  },
  {
    title: '7 x 24',
    content: (
      <>
        <Text as={'span'} fontWeight={700} color={'white'}>
          Akses Data
        </Text>
        <br />
        Seluruh ringkasan data hasil tes dan data grup dapat kalian cari data
        hasil tes kalian melalui fitur pencarian selama data belum terhapus
        setiap minggunya dari penyimpanan kami.
      </>
    ),
  },
];
