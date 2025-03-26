'use client';
import { useModalStore } from '@/stores/useModalStore';
import CommonModal from '@/components/modal/CommonModal';

const ModalContainer = () => {
  const { modalVariant, closeModal } = useModalStore();

  return (
    <>
      {modalVariant && (
        <CommonModal variant={modalVariant} open={true} onClose={closeModal} />
      )}
    </>
  );
};

export default ModalContainer;
