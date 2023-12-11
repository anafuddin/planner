import { create } from "zustand";

type ProModalStore = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const useProModal = create<ProModalStore>((set) => ({
  isOpen: false, //sets default state
  onOpen: () => set({ isOpen: true}), // opens the pro modal
  onClose: () => set({ isOpen: false}) // close the pro modal
}));