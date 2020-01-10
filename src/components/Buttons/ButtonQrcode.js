import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import QRCode from 'qrcode.react';

const useStyles = makeStyles(theme => ({
  div: {
    display: 'flex',
    justifyContent:'flex-start'
  },
  section: {
    marginLeft: '1.5em'
  }
}));

const ButtonQrcode = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Exemple QRCode Dialog
      </Button>
      <Dialog
        maxWidth="xl"
        open={open}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle id="max-width-dialog-title">Date & Source</DialogTitle>
        <DialogContent>
          <div className={classes.div}>
              <QRCode value="https://maps.google.com/@48.868759,2.3409" size="256"/>
              <section className={classes.section}>
                <h3>News Title</h3>
                <p>Eu occaecat do ad sunt ex labore magna nostrud pariatur. In exercitation nulla mollit culpa aliqua cillum commodo exercitation laborum voluptate veniam velit. Anim esse eiusmod occaecat ullamco aliquip esse irure tempor. Minim non eiusmod exercitation deserunt elit minim ullamco ut eu occaecat. Magna non laboris cillum ea fugiat ut id id consequat cupidatat incididunt.
                </p>
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
}

export default ButtonQrcode;