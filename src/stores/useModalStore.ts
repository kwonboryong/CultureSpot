import { create } from 'zustand';

type CommonModalVariant = 'cancel' | 'withdraw' | 'delete' | null;

interface ModalStore {
  modalVariant: CommonModalVariant;
  openModal: (variant: CommonModalVariant) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalStore>((set) => ({
  modalVariant: null,
  openModal: (variant: CommonModalVariant) => set({ modalVariant: variant }),
  closeModal: () => set({ modalVariant: null }),
}));
