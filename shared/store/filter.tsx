import { create } from "zustand";
import { ProjectType } from "../components/constants/type";

export type State = {
  loading: boolean;
  type: ProjectType;
  category: string;
};

type Action = {
  setLoading: (loading: boolean) => void;
  setType: (type: "genproject" | "concept") => void;
  setCategory: (category: string) => void;
};

export const useFilterStore = create<State & Action>(set => ({
  loading: false,
  type: "genproject",
  category: "Все",

  setLoading: loading => set({ loading }),
  setType: type =>
    set({
      type,
    }),
  setCategory: category =>
    set({
      category,
    }),
}));
