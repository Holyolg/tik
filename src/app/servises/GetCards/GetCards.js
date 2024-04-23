const API_URL = "https://jsonplaceholder.typicode.com/users";

const getCards = async () => {
	const res = await fetch(
		"https://6628119354afcabd0734c9fb.mockapi.io/TIKPRO/projects"
	);
	if (!res.ok) {
		throw new Error("не загрузился");
	}
	return res.json();
};
export default getCards;

// export const GetCards = {
// 	async getAll() {
// const {data} = await axios.get("https://jsonplaceholder.typicode.com/users")
// console.log(data)
// return data
// 	},

// 	async getById(id) {
// 		const {data} = await axios.get('/users', {
// 			params: {
// 				id
// 			}
// 		}
// 	)
// 				return data[0]
// 			}
// }
