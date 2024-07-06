"use client";

import { useEffect } from "react";

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<div>
			<h2>Что-то сломалось</h2>
			<p>{error.message}</p>
			<button onClick={() => reset()}>Попробовать снова</button>
		</div>
	);
}
