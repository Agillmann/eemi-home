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
  latitude: 48.868759,
  longitude: 2.3409,

  dataDialogue: {
    title: 'Title',
    subTitle: 'Subtitle',
    textContent: 'Text Content ...',
  },
};

const MapPage = () => {
  const [viewport, setViewport] = React.useState(DEFAULT_VIEWPORT);
  const [data, setData] = React.useState(DEFAULT_DATA);
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
        <MarkerQrcode
          latitude={data.latitude}
          longitude={data.longitude}
          data={data}
        ></MarkerQrcode>
      </ReactMapGl>
    </div>
  );
};

export default MapPage;
