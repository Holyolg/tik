import { IData } from "../components/Cards/Cards";

export function getRandomCards(arr: IData[]) {
	if (arr.length < 2) {
		throw new Error("Нет карточек для генерации");
	}
	const firstIndex = Math.floor(Math.random() * arr.length);
	const firstObject = arr[firstIndex];
	const filteredArr = arr.filter((obj) => obj.id !== firstObject.id);
	const secondIndex = Math.floor(Math.random() * filteredArr.length);
	const secondObject = filteredArr[secondIndex];

	return [firstObject, secondObject];
}
