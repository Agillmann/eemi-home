import React, { useState } from 'react';
import ReactMapGl from 'react-map-gl';

//MATERIAL UI
import CircularProgress from '@material-ui/core/CircularProgress';

// COMPONENTS
import MarkerQrcode from './MarkerQrcode';

// HOOKS
import useFetchRestaurant from '../../hooks/useFetchRestaurant';

const DEFAULT_VIEWPORT = {
  width: '100vw',
  height: '100vh',
  latitude: 48.868759,
  longitude: 2.3409,
  pitch: 50,
  zoom: 16,
};

const MapPage = () => {
  const [viewport, setViewport] = useState(DEFAULT_VIEWPORT);
  const [data, load, error] = useFetchRestaurant();

  if (load) {
    return (
      <div>
        <ReactMapGl
          {...viewport}
          mapStyle="mapbox://styles/agillmann/ck5n2xtgb1a3y1is60c0p7y72"
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API_KEY}
          onViewportChange={viewport => setViewport(viewport)}
        >
          {data.length > 0 &&
            data.map((d, index) => (
              <MarkerQrcode
                key={d.id}
                latitude={d.latitude}
                longitude={d.longitude}
                data={d}
              ></MarkerQrcode>
            ))}
        </ReactMapGl>
        {error && <p>{error.message}</p>}
      </div>
    );
  } else {
    return (
      <div>
        <CircularProgress />
      </div>
    );
  }
};

export default MapPage;
