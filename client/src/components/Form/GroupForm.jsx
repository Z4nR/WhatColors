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
      closeOnOverlayClick={false}
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      scrollBehavior="inside"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Buat Grup Tes</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <form>
            <Flex direction={{ base: "column", xs: "row" }} gap={5}>
              <FormControl isRequired>
                <FormLabel>Nama Grup</FormLabel>
                <Input
                  focusBorderColor="teal.400"
                  placeholder="Masukkan Nama Grup"
                />
              </FormControl>
              <FormControl isRequired width={{ base: "auto", xs: "12em" }}>
                <FormLabel>Inisial Grup</FormLabel>
                <Input focusBorderColor="teal.400" placeholder="Inisial Grup" />
              </FormControl>
            </Flex>
            <FormControl isRequired mt={4}>
              <FormLabel>Email Admin</FormLabel>
              <Input
                type="email"
                focusBorderColor="teal.400"
                placeholder="Masukkan Email Admin"
              />
            </FormControl>
            <FormControl isRequired mt={4}>
              <FormLabel>Perangkat yang digunakan</FormLabel>
              <Input
                focusBorderColor="teal.400"
                placeholder="Masukkan Nama Lengkap"
              />
              <FormHelperText fontSize={"small"}>
                Tuliskan merk atau tipe monitor atau gawai
              </FormHelperText>
            </FormControl>
            <FormControl isRequired mt={4}>
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
                Nilai Terendah Yang Ditentukan Sebesar
              </FormHelperText>
            </FormControl>
          </form>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="teal" mr={3}>
            Save
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
