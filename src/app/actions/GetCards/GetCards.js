'use server'

export async function getCards() {
    const apiUrl = 'https://raw.githubusercontent.com/Holyolg/tik/master/src/app/Data/Cards%20copy.json?token=GHSAT0AAAAAACP6ON4BDDBBHR36SK5OO3L2ZRGPCIQ'

	const response = await fetch(apiUrl)
	if (!response.ok) {
		throw new Error('JSON не загрузился')
	}
	return response.json()
}