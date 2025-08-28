import { create } from "zustand";
import { vegetables } from "@/data/vegetables"; 

export interface Vegetable {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

interface VegetableStore {
  query: string;
  vegetables: Vegetable[];
  filtered: Vegetable[];
  setQuery: (q: string) => void;
  reset: () => void;
}

export const useVegetableStore = create<VegetableStore>((set) => ({
  query: "",
  vegetables,
  filtered: vegetables,
  setQuery: (q) =>
    set((state) => ({
      query: q,
      filtered: state.vegetables.filter((veg) =>
        veg.name.toLowerCase().includes(q.toLowerCase())
      ),
    })),
  reset: () =>
    set((state) => ({
      query: "",
      filtered: state.vegetables,
    })),
}));
