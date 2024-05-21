const layer = new YMapDefaultSchemeLayer({
  customization: [
    // Делаем прозрачными все геометрии водных объектов.
    {
      tags: {
        all: ['water']
      },
      elements: 'geometry',
      stylers: [
        {
          opacity: 0
        }
      ]
    },
    // Меняем цвет подписей для всех POI и узлов сети общественного транспорта.
    {
      tags: {
        any: ['poi', 'transit_location']
      },
      elements: 'label.text.fill',
      stylers: [
        {
          color: '#0000DD'
        }
      ]
    }
  ]
});