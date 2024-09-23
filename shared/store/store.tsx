import { create } from "zustand";

type State = {
	loading: boolean;
	type: "genproject" | "concept";
	category:
		| "Все"
		| "Здания"
		| "Жилые"
		| "Общественные"
		| "Интерьеры"
		| "Благоустроство";
};

type Action = {
	updateLoading: (loading: boolean) => void;
	updateType: (type: "genproject" | "concept") => void;
	updateCategory: (
		category:
			| "Все"
			| "Здания"
			| "Жилые"
			| "Общественные"
			| "Интерьеры"
			| "Благоустроство"
	) => void;
};

export const cardStore = create<State & Action>((set) => ({
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
	updateCategory: (
		category:
			| "Все"
			| "Здания"
			| "Жилые"
			| "Общественные"
			| "Интерьеры"
			| "Благоустроство"
	) =>
		set(() => ({
			category: category,
		})),
}));
