// src/components/useVegetableStore.ts
import { create } from "zustand";
import { vegetables, Vegetable } from "@/data/vegetables";

interface VegetableStore {
  query: string;
  setQuery: (q: string) => void;
  reset: () => void;
}

export const useVegetableStore = create<VegetableStore>((set) => ({
  query: "",
  setQuery: (q) => set({ query: q }),
  reset: () => set({ query: "" }),
}));

export { vegetables, type Vegetable };
