import React, { useState } from 'react';
import ReactMapGl from 'react-map-gl';

//MATERIAL UI
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

// COMPONENTS
import MarkerQrcode from './MarkerQrcode';

// HOOKS
import useFetchRestaurant from '../../hooks/useFetchRestaurant';
import useFetchCategorie from '../../hooks/useFetchCategorie';

const DEFAULT_VIEWPORT = {
  width: '100vw',
  height: '100vh',
  latitude: 48.868759,
  longitude: 2.3409,
  pitch: 50,
  zoom: 16,
};

const useStyles = makeStyles(theme => ({
  h2: {
    fontSize: '2em',
    textAlign: 'center',
    color: '#FFF',
    margin: '0 auto',
    padding: 10,
  },
  mapbox: {
    zIndex: 0,
  },
  centered: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '50vh',
  },
  filterWidget: {
    position: 'absolute',
    top: '5vh',
    right: 50,
    width: '25vw',
    backgroundColor: '#F8F8F8',
    boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    zIndex: 99,
  },
  checkbox_container: {
    display: 'flex',
    flexDirection: 'column',
  },
  checkbox_form: {
    padding: 20,
  },
  checkbox_form_input: {
    opacity: 0,
  },
  label: {
    fontWeight: 700,
    fontSize: '1.5em',
  },
}));

const MapPage = () => {
  const classes = useStyles();
  const [viewport, setViewport] = useState(DEFAULT_VIEWPORT);
  const [data, load1, error1, setData] = useFetchRestaurant();
  const [categorie, load2, error2] = useFetchCategorie();
  const [filter, setFilter] = useState(false);
  const [filteredata, setFilteredata] = useState(data);

  const handleCheckboxChange = e => {
    let filterByCat = data.filter(data => data.categorie_restaurant);

    setFilter(true);
    if (e.target.checked) {
      let filtered = filterByCat.filter(
        data => data.categorie_restaurant.name === e.target.id,
      );
      setFilteredata(filtered);
      document
        .getElementById(e.target.id)
        .parentNode.parentNode.classList.add('ischecked');
    } else {
      let filtered = filterByCat.filter(
        data => data.categorie_restaurant.name !== e.target.id,
      );
      setFilteredata(filtered);
      document
        .getElementById(e.target.id)
        .parentNode.parentNode.classList.remove('ischecked');
    }
    console.log(filteredata);
  };

  if (load1 && load2) {
    //console.log(data);
    return (
      <div>
        <div className={classes.filterWidget}>
          <div style={{ backgroundColor: '#0E0E0E' }}>
            <h2 className={classes.h2}>Catégories</h2>
          </div>
          {categorie.length > 0 &&
            categorie.map(cat => (
              <div key={cat.id} className={classes.checkbox_container}>
                <div className={classes.checkbox_form}>
                  <label htmlFor={cat.name} className={classes.label}>
                    <input
                      onChange={handleCheckboxChange}
                      className={classes.checkbox_form_input}
                      id={cat.name}
                      type="checkbox"
                    />
                    {cat.name}
                  </label>
                </div>
              </div>
            ))}
        </div>
        <div className={classes.mapbox}>
          <ReactMapGl
            {...viewport}
            mapStyle="mapbox://styles/agillmann/ck5n2xtgb1a3y1is60c0p7y72"
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API_KEY}
            onViewportChange={viewport => setViewport(viewport)}
          >
            {filter
              ? filteredata.map((d, index) => (
                  <MarkerQrcode
                    key={d.id}
                    latitude={d.latitude}
                    longitude={d.longitude}
                    data={d}
                  ></MarkerQrcode>
                ))
              : data.map((d, index) => (
                  <MarkerQrcode
                    key={d.id}
                    latitude={d.latitude}
                    longitude={d.longitude}
                    data={d}
                  ></MarkerQrcode>
                ))}
          </ReactMapGl>
          {error1 && <p>{error1.message}</p>}
          {error2 && <p>{error2.message}</p>}
        </div>
      </div>
    );
  } else {
    return (
      <div className={classes.centered}>
        <CircularProgress />
      </div>
    );
  }
};

export default MapPage;
