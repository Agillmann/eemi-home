import React from 'react';
import PropTypes from 'prop-types';
import { Marker } from 'react-map-gl';
import QRCode from 'qrcode.react';
import Markdown from 'react-markdown';

// MATERIAL UI
import { makeStyles } from '@material-ui/core/styles';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles(theme => ({
  div: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  section: {
    marginLeft: '1.5em',
  },
}));

const MarkerQrcode = ({ latitude, longitude, data }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <React.Fragment>
      <Marker
        latitude={latitude}
        longitude={longitude}
        offsetLeft={-20}
        offsetTop={-10}
      >
        <LocationOnOutlinedIcon
          style={{ fontSize: 55, cursor: 'pointer' }}
          onClick={handleClickOpen}
        />
      </Marker>
      <Dialog
        maxWidth="xl"
        open={open}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle id="max-width-dialog-title">
          {data ? data.name : 'Nom'}
        </DialogTitle>
        <DialogContent>
          <div className={classes.div}>
            <QRCode
              value={`https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`}
              size={256}
            />
            <section className={classes.section}>
              <h3>Adresse : {data ? data.address : 'Adresse'}</h3>
              {data ? <Markdown source={data.description} /> : 'Description'}
              <p>
                Catégorie :{' '}
                {data.categorie_restaurant
                  ? data.categorie_restaurant.name
                  : 'Catégorie'}
              </p>
              <h4>{data ? data.tel : 'Téléphone'}</h4>
            </section>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

MarkerQrcode.propTypes = {
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
  data: PropTypes.any,
};

export default MarkerQrcode;
