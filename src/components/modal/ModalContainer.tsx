'use client';
import { useModalStore } from 'src/stores/useModalStore';
import CommonModal from './CommonModal';

export default function ModalContainer() {
  const { modalVariant, closeModal } = useModalStore();

  return (
    <>
      {modalVariant && (
        <CommonModal variant={modalVariant} open={true} onClose={closeModal} />
      )}
    </>
  );
}
