import { create } from "zustand";
import { category } from "../components/categories";

export type State = {
  loading: boolean;
  type: "genproject" | "concept";
  category: category;
};

type Action = {
  updateLoading: (loading: boolean) => void;
  updateType: (type: "genproject" | "concept") => void;
  updateCategory: (category: category) => void;
};

export const cardStore = create<State & Action>(set => ({
  loading: false,
  updateLoading: (loading: boolean) =>
    set(() => ({
      loading: loading,
    })),
  type: "genproject",
  updateType: (type: "genproject" | "concept") =>
    set(() => ({
      type: type,
    })),
  category: "Все",
  updateCategory: (category: category) =>
    set(() => ({
      category: category,
    })),
}));
