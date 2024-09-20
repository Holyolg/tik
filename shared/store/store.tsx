import { create } from "zustand";

type State = {
  loading: boolean;
  type: string;
  category: string;
};

type Action = {
  updateLoading: (loading: boolean) => void;
  updateType: (type: string) => void;
  updateCategory: (category: string) => void;
};

export const cardStore = create<State & Action>((set) => ({
  loading: false,
  updateLoading: (loading: boolean) =>
    set(() => ({
      loading: loading,
    })),
  type: "genproject",
  updateType: (type: string) =>
    set(() => ({
      type: type,
    })),
  category: "Все",
  updateCategory: (category: string) =>
    set(() => ({
      category: category,
    })),
}));
