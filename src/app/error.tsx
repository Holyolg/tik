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
    <main className="min-h-screen flex flex-col justify-center items-center space-y-10">
      <div className="flex flex-col justify-center items-center space-y-10">
        <h2 className="text-3xl font-semibold">Что-то сломалось :&#40; </h2>

        <p className="text-gray-500">{error.message}</p>
        <button
          className="hover:opacity-00 lg:flex items-center cursor-pointer hidden"
          onClick={() => reset()}>
          Попробовать снова
          <div className="w-5 hover__svg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -2 36 36">
              <path d="M23.5587,16.916 C24.1447,17.4999987 24.1467,18.446 23.5647,19.034 L16.6077,26.056 C16.3147,26.352 15.9287,26.4999987 15.5427,26.4999987 C15.1607,26.4999987 14.7787,26.355 14.4867,26.065 C13.8977,25.482 13.8947,24.533 14.4777,23.944 L20.3818,17.984 L14.4408,12.062 C13.8548,11.478 13.8528,10.5279 14.4378,9.941 C15.0218,9.354 15.9738,9.353 16.5588,9.938 L23.5588,16.916 L23.5587,16.916 Z"></path>
            </svg>
          </div>
        </button>
      </div>
    </main>
  );
}
