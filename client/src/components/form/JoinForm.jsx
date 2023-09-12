import { Modal, ModalOverlay } from "@chakra-ui/react";
import { useState } from "react";
import VerifyCode from "./join/VerifyCode";
import ClientForm from "./join/ClientForm";

export default function JoinForm({ isOpen, onClose }) {
  const [getPage, setPage] = useState(false);

  return (
    <Modal
      size={{ base: "xs", sm: "md", md: "2xl" }}
      closeOnOverlayClick={false}
      isOpen={isOpen}
      onClose={onClose}
      isCentered
    >
      <ModalOverlay />
      {getPage === true ? (
        <ClientForm setPage={setPage} onClose={onClose} />
      ) : (
        <VerifyCode setPage={setPage} onClose={onClose} />
      )}
    </Modal>
  );
}
