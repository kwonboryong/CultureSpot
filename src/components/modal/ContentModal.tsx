import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ContentDialog';

interface ContentModalProps {
  //
}

const ContentModal = ({}: ContentModalProps) => {
  return (
    <Dialog>
      <DialogTrigger>모달 Openddd</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle style={{ whiteSpace: 'pre-line' }}>
            {/* {modalText} */}
          </DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ContentModal;
