import React from "react";
import ReactMapGl, { Layer } from "react-map-gl";

class MapPage extends React.Component {
  state = {
    viewport: {
      width: "100vw",
      height: "100vh",
      latitude: 48.868759,
      longitude: 2.3409,
      pitch: 50,
      zoom: 16
    }
  };

  render() {
    return (
      <div>
        <ReactMapGl
          {...this.state.viewport}
          mapStyle="mapbox://styles/mapbox/light-v10"
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API_KEY}
          onViewportChange={viewport => this.setState({ viewport })}
        >
          <Layer
            id="3d-buildings"
            sourceId="composite"
            layerOptions={{
              "source-layer": "building",
              filter: ["==", "extrude", "true"],
              type: "fill-extrusion",
              minzoom: 15
            }}
            paint={{
              "fill-extrusion-color": "#aaa",
              "fill-extrusion-height": {
                type: "identity",
                property: "height"
              },
              "fill-extrusion-base": {
                type: "identity",
                property: "min_height"
              },
              "fill-extrusion-opacity": 0.6
            }}
          />
        </ReactMapGl>
      </div>
    );
  }
}

export default MapPage;
