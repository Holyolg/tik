export const YMap = () => {
    APIKey = process.env.YMAP_API_KEY;
    return (
      <div style={{height: 600}}>
        <YMapProvider apikey={APIKey}>
          <YMap location={{center: [37.95, 55.65], zoom: 10}} mode="vector" theme="dark">
            <YMapDefaultSchemeLayer />
            <YMapDefaultFeaturesLayer />
          </YMap>
        </YMapProvider>
      </div>
    )
  }