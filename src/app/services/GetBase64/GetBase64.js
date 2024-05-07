"use server";
import { getPlaiceholder } from "plaiceholder";

export default async function getBase64(imgUrl) {
	try {
		const buffer = await imgUrl.arrayBuffer();
		const { base64 } = await getPlaiceholder(Buffer.from(buffer));
		console.log(base64);
	} catch (e) {
		if (e) console.log(e);
	}
}
