import { Modal, ModalOverlay } from '@chakra-ui/react';
import { useState } from 'react';
import ClientForm from './join/ClientForm';
import VerifyForm from './join/VerifyForm';

export default function JoinForm({ isOpen, onClose }) {
  const [getPage, setPage] = useState(false);

  return (
    <Modal
      size={{ base: 'xs', sm: 'md', md: '2xl' }}
      closeOnOverlayClick={false}
      isOpen={isOpen}
      onClose={onClose}
      isCentered
    >
      <ModalOverlay />
      {getPage ? (
        <ClientForm setPage={setPage} onClose={onClose} />
      ) : (
        <VerifyForm setPage={setPage} onClose={onClose} />
      )}
    </Modal>
  );
}
