import React from "react";
import ReactMapGl, { Marker } from "react-map-gl";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const DEFAULT_VIEWPORT = { 
  width: "100vw",
  height: "100vh",
  latitude: 48.868759,
  longitude: 2.3409,
  pitch: 50,
  zoom: 16
}

const MapPage = () => {
  const [viewport, setViewport] = React.useState(DEFAULT_VIEWPORT);
  const handleClick = (e) => {
    e.preventDefault();
    console.log("Le Marker a été cliqué.");
  }
  return (
    <div>
      <ReactMapGl
        {...viewport}
        mapStyle="mapbox://styles/mapbox/light-v10"
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API_KEY}
        onViewportChange={viewport => setViewport(viewport)}
      >
        <Marker
          latitude={48.868759}
          longitude={2.3409}
          offsetLeft={-20}
          offsetTop={-10}
        >
          <LocationOnIcon
            style={{ fontSize: 55, cursor: "pointer" }}
            onClick={handleClick}
          />
        </Marker>
      </ReactMapGl>
    </div>
  );
}

export default MapPage;
