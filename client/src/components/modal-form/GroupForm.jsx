import {
  Button,
  Flex,
  FormControl,
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
  Select,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from "@chakra-ui/react";
import testTypes from "../../utils/methods/method-type";

export default function GroupForm({ isOpen, onClose }) {
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
      <form>
        <ModalContent>
          <ModalHeader>Buat Grup Tes</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Flex direction={{ base: "column", sm: "row" }} gap={5}>
              <FormControl isRequired>
                <FormLabel>Nama Grup</FormLabel>
                <Input
                  focusBorderColor="teal.400"
                  placeholder="Masukkan Nama Grup"
                />
                <FormHelperText fontSize={"small"}>
                  Masukkan Nama Grup
                </FormHelperText>
              </FormControl>
              <FormControl isRequired width={{ base: "auto", sm: "12em" }}>
                <FormLabel>Inisial Grup</FormLabel>
                <Input focusBorderColor="teal.400" placeholder="Inisial Grup" />
                <FormHelperText fontSize={"small"}>
                  Beri Inisial Grup
                </FormHelperText>
              </FormControl>
            </Flex>
            <FormControl isRequired mt={4}>
              <FormLabel>Email Admin</FormLabel>
              <Input
                type="email"
                focusBorderColor="teal.400"
                placeholder="Masukkan Email Admin"
              />
              <FormHelperText fontSize={"small"}>
                Masukkan Email Admin Grup
              </FormHelperText>
            </FormControl>
            <Flex direction={{ base: "column", md: "row" }} gap={5} mt={4}>
              <FormControl isRequired>
                <FormLabel>Perangkat Yang Digunakan</FormLabel>
                <Input
                  focusBorderColor="teal.400"
                  placeholder="Masukkan Nama Lengkap"
                />
                <FormHelperText fontSize={"small"}>
                  Tuliskan merk atau tipe monitor atau gawai
                </FormHelperText>
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Tingkat Kesulitan</FormLabel>
                <Select placeholder="Pilih Tingkat Kesulitan">
                  {testTypes.map((option) => (
                    <option key={option.type} value={option.type}>
                      {option.type}
                    </option>
                  ))}
                </Select>
                <FormHelperText fontSize={"small"}>
                  Pilih tingkat kesulitan sesuai kemampuan
                </FormHelperText>
              </FormControl>
            </Flex>
            <FormControl isRequired mt={4}>
              <FormLabel>Nilai Terendah</FormLabel>
              <Slider
                aria-label="slider-ex-2"
                colorScheme="teal"
                defaultValue={50}
              >
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
              </Slider>
              <FormHelperText fontSize={"small"}>
                Nilai Terendah Untuk Lolos Tes
              </FormHelperText>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="teal" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </form>
    </Modal>
  );
}
