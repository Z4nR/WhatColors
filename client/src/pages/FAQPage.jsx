import { ArrowForwardIcon } from '@chakra-ui/icons';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  Text,
} from '@chakra-ui/react';

export default function FAQPage() {
  return (
    <Box pt={8}>
      <Heading as={'h1'} size={{ base: 'sm', sm: 'md' }} textAlign={'center'}>
        Hal yang sering ditanyakan
      </Heading>
      <Accordion
        allowToggle
        py={8}
        maxWidth={'3xl'}
        margin={'0 auto'}
        textAlign={'justify'}
        fontSize={{ base: 'xs', xs: 'sm', sm: 'md' }}
      >
        <AccordionItem>
          <h2>
            <AccordionButton _expanded={{ bg: 'teal', color: 'white' }}>
              <Box
                as="span"
                flex="1"
                textAlign="left"
                fontWeight={'medium'}
                fontSize={{ base: 'sm', sm: 'md' }}
              >
                Bagaimana cara mengerjakan tes di website ini?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Metode Farnsworth-Munsell merupakan metode tes buta warna, dimana
            cara pengerjaannya ialah dengan menyusun warna balok acak menjadi
            sebuah susunan warna yang urut dan teratur.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton _expanded={{ bg: 'teal', color: 'white' }}>
              <Box
                as="span"
                flex="1"
                textAlign="left"
                fontWeight={'medium'}
                fontSize={{ base: 'sm', sm: 'md' }}
              >
                Berapa jenis metode yang digunakan?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Text>
              <Text as={'span'} fontWeight={'bold'}>
                Semi-Standar Tes :
              </Text>{' '}
              Metode Farnsworth-Munsell yang terdiri dari 88 warna dengan
              susunan 80 warna yang harus disusun sesuai urutan dari warna
              indikator di bagian awal dan akhir dari baris warna yang ada.
            </Text>
            <Text mt={4}>
              <Text as={'span'} fontWeight={'bold'}>
                Fun Tes :
              </Text>{' '}
              Metode Farnsworth-Munsell yang terdiri dari 40 warna dengan
              susunan 32 warna yang harus disusun sesuai urutan dari warna
              indikator di bagian awal dan akhir dari baris warna yang ada.
            </Text>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton _expanded={{ bg: 'teal', color: 'white' }}>
              <Box
                as="span"
                flex="1"
                textAlign="left"
                fontWeight={'medium'}
                fontSize={{ base: 'sm', sm: 'md' }}
              >
                Peran apa saja yang dapat saya lakukan dalam website ini?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Text>
              <Text as={'span'} fontWeight={'bold'}>
                Individu :
              </Text>{' '}
              Pengguna dapat melakukan test secara pribadi melalui halaman tes
              dengan memilih Tes Individu. Pengguna cukup mengisikan data diri
              untuk mengerjakan tes, selain itu pengguna juga dapat melihat
              hasil tes pada halaman result.
            </Text>
            <Text mt={4}>
              <Text as={'span'} fontWeight={'bold'}>
                Admin Grup :
              </Text>{' '}
              Pengguna dapat membuat sebuah grup khusus yang dapat digunakan
              dalam tes secara berkelompok. Dengan memilih Buat Grup, pengguna
              cukup memasukkan data untuk membuat grup tes. Setelah data terisi
              pengguna akan menerima email yang dapat digunakan untuk bergabung
              ke halaman dahshboard melalui menu Gabung Tes Pengguna akan
              bertugas sebagai admin dari grup yang dapat melihat data peserta
              tes, memberikan kode gabung grup kepada peserta tes, mengunduh
              data peserta tes, dan menghapus grup.
            </Text>
            <Text mt={4}>
              <Text as={'span'} fontWeight={'bold'}>
                Peserta Grup :
              </Text>{' '}
              Pengguna sebagai peserta cukup memasukkan kode yang diberikan oleh
              admin grup pada menu Gabung Tes. Sebagai peserta tes
              langkah-langkah yang dilakukan sama dengan tes secara individu,
              yang membedakan ialah peserta grup tidak dapat melihat hasil dari
              tes dan harus menunggu hasil tes diumumkan oleh admin grup.
            </Text>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton _expanded={{ bg: 'teal', color: 'white' }}>
              <Box
                as="span"
                flex="1"
                textAlign="left"
                fontWeight={'medium'}
                fontSize={{ base: 'sm', sm: 'md' }}
              >
                Apa saja langkah-langkah yang dilakukan setiap peran dalam
                website ini?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Text>
              <Text as={'span'} fontWeight={'bold'}>
                Individu :
              </Text>{' '}
              Buka Website <ArrowForwardIcon /> Masuk Halaman Tes{' '}
              <ArrowForwardIcon /> Pilih Menu Tes Individu
              <ArrowForwardIcon /> Masukan data diri <ArrowForwardIcon />{' '}
              Kerjakan Tes <ArrowForwardIcon /> Kirim Hasil Tes{' '}
              <ArrowForwardIcon /> Lihat Hasil Tes.
            </Text>
            <Text mt={4}>
              <Text as={'span'} fontWeight={'bold'}>
                Admin Grup :
              </Text>{' '}
              <br />
              <Box mt={1}>
                <Text as={'span'} fontStyle={'oblique'}>
                  Membuat Grup :
                </Text>{' '}
                Buka Website <ArrowForwardIcon /> Masuk Halaman Tes{' '}
                <ArrowForwardIcon />
                Pilih Menu Tes Berjamaah <ArrowForwardIcon /> Masukan data grup{' '}
                <ArrowForwardIcon /> Cek kode yang dikirimkan ke email{' '}
                <ArrowForwardIcon /> Masukan kode ke kolom verifikasi{' '}
                <ArrowForwardIcon /> Masuk Dashboard Admin Grup{' '}
                <ArrowForwardIcon /> Bagikan Kode Client ke peserta tes grup
                anda.{' '}
              </Box>
              <Box mt={2}>
                <Text as={'span'} fontStyle={'oblique'}>
                  Masuk Dashboard Admin :
                </Text>{' '}
                Buka Website <ArrowForwardIcon /> Masuk Halaman Tes{' '}
                <ArrowForwardIcon /> Pilih Menu Gabung Tes
                <ArrowForwardIcon /> Masukan kode admin <ArrowForwardIcon />{' '}
                Masuk Dashboard Admin Grup.
              </Box>
            </Text>
            <Text mt={4}>
              <Text as={'span'} fontWeight={'bold'}>
                Peserta Grup :
              </Text>{' '}
              Buka Website <ArrowForwardIcon /> Masuk Halaman Tes{' '}
              <ArrowForwardIcon /> Pilih Menu Gabung Tes <ArrowForwardIcon />{' '}
              Masukan kode yang diberikan admin <ArrowForwardIcon /> Masukan
              data diri <ArrowForwardIcon /> Masukan data diri{' '}
              <ArrowForwardIcon />
              Kerjakan Tes <ArrowForwardIcon /> Kirim Hasil Tes.
            </Text>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
}
