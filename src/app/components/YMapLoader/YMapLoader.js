import Script from "next/script";

const MAP_API_KEY = process.env.MAP_API_KEY;

export const YMapLoader = () => {
  return (
    <>

      <Script
        src='https://api-maps.yandex.ru/3.0/?apikey=ff5816ab-9927-4f26-b79d-d729410b8d84&lang=en_US'
        type="module"
        strategy="beforeInteractive"
      />
    </>
  );
};
