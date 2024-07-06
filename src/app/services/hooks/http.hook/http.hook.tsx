"use client";

import { useCallback, useState } from "react";

export const useHttp = () => {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const request = useCallback(async (url: string) => {
		setLoading(true);

		try {
			const response = await fetch(url);

			if (!response.ok) {
				throw new Error(`Could not fetch ${url}, status ${response.status}`);
			}

			const data = await response.json();
			setLoading(false);
			return data;
		} catch (error: any) {
			setLoading(false);
			setError(error.message);
			throw error;
		}
	}, []);
	const clearError = useCallback(() => setError(null), []);

	return { loading, request, error, clearError };
};
