import { create } from "zustand";

type State = {
	loading: boolean;
};

type Action = {
	updateLoading: (loading: boolean) => void;
};

export const cardStore = create<State & Action>(set => ({
	loading: false,
	updateLoading: (loading: boolean) =>
		set(() => ({
			loading: loading,
		})),
}));
