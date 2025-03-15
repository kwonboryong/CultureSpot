import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ContentDialog';

interface ContentModalProps {
  children: React.ReactNode;
}

const ContentModal = ({ children }: ContentModalProps) => {
  return (
    <Dialog>
      <DialogTrigger>컨텐츠 Open</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle style={{ whiteSpace: 'pre-line' }}>
            {/* {modalText} */}
          </DialogTitle>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default ContentModal;
