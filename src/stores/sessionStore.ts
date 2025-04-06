import { create } from 'zustand';

interface SessoinState {
  sessionExpired: boolean;
  setSessionExpired: () => void;
  resetSession: () => void;
}

export const useSessionStore = create<SessoinState>((set) => ({
  sessionExpired: false,
  setSessionExpired: () => set({ sessionExpired: true }),
  resetSession: () => set({ sessionExpired: false }),
}));
