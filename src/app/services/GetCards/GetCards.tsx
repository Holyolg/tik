const getCards = async (API_URL: string) => {
	const res = await fetch(API_URL);
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
