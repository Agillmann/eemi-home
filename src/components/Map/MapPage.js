import React from "react";
import ReactMapGl, { Layer } from "react-map-gl";
import LocationOnIcon from '@material-ui/icons/LocationOn';


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

  componentDidMount(){
    console.log(LocationOnIcon)
  }
    
  render() {
    return (
      <div>
        <ReactMapGl
          {...this.state.viewport}
          mapStyle="mapbox://styles/agillmann/ck55rgayh01b11cs15jkyfoer"
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API_KEY}
          onViewportChange={viewport => this.setState({ viewport })}
        >
        </ReactMapGl>
      </div>
    );
  }
}

export default MapPage;
