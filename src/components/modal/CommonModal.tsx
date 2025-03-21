import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from './CommonDialog';

interface CommonModalProps {
  variant?: 'delete' | 'cancel' | 'withdraw';
  customText?: string;
  open: boolean;
  onClose: () => void;
}

const textVariants = {
  delete: '정말 삭제하시겠습니까?',
  cancel: '수정 사항이 저장되지 않았습니다. \n 계속 하시겠습니까?',
  withdraw: '탈퇴 시 모든 정보가 사라집니다. \n 계속 하시겠습니까?',
};

const CommonModal = ({
  variant,
  customText,
  open,
  onClose,
}: CommonModalProps) => {
  const modalText = variant ? textVariants[variant] : customText;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle style={{ whiteSpace: 'pre-line' }}>
            {modalText}
          </DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default CommonModal;
