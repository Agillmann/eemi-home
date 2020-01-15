import React, { useEffect } from 'react';
import ReactMapGl from 'react-map-gl';

// COMPONENTS
import MarkerQrcode from './MarkerQrcode';

const DEFAULT_VIEWPORT = {
  width: '100vw',
  height: '100vh',
  latitude: 48.868759,
  longitude: 2.3409,
  pitch: 50,
  zoom: 16,
};
const DEFAULT_DATA = {
  data: [
    {
      name: 'Kebab pas cher',
      tel: '0612345678',
      description: 'kebab man !',
      address: '105 Rue du 4 septembre 75002 Paris',
      cat: 'sandwitch',
      latitude: 48.868759,
      longitude: 2.3409,
    },
    {
      name: 'Kebab pas cher',
      tel: '0612345678',
      description: 'kebab man !',
      address: '105 Rue du 4 septembre 75002 Paris',
      cat: 'sandwitch',
      latitude: 48.866759,
      longitude: 2.3409,
    },
  ],
};

const MapPage = () => {
  const [viewport, setViewport] = React.useState(DEFAULT_VIEWPORT);
  const [data, setData] = React.useState(DEFAULT_DATA.data);
  console.log(data);
  useEffect(() => {
    // TODO: Fetch data from api
  });
  return (
    <div>
      <ReactMapGl
        {...viewport}
        mapStyle="mapbox://styles/mapbox/light-v10"
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API_KEY}
        onViewportChange={viewport => setViewport(viewport)}
      >
        {data.map((d, index) => (
          <MarkerQrcode
            key={index}
            latitude={d.latitude}
            longitude={d.longitude}
            data={d}
          ></MarkerQrcode>
        ))}
      </ReactMapGl>
    </div>
  );
};

export default MapPage;
