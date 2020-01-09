import React from "react";
import ReactMapGl, { Marker } from "react-map-gl";
import LocationOnIcon from "@material-ui/icons/LocationOn";

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

  handleClick(e) {
    e.preventDefault();
    console.log("Le Marker a été cliqué.");
  }

  render() {
    return (
      <div>
        <ReactMapGl
          {...this.state.viewport}
          mapStyle="mapbox://styles/mapbox/light-v10"
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API_KEY}
          onViewportChange={viewport => this.setState({ viewport })}
        >
          <Marker
            latitude={48.868759}
            longitude={2.3409}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <LocationOnIcon
              style={{ fontSize: 55, cursor: "pointer" }}
              onClick={this.handleClick}
            />
          </Marker>
        </ReactMapGl>
      </div>
    );
  }
}

export default MapPage;
