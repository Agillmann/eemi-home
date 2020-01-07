import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import EventIcon from '@material-ui/icons/Event';
import LanguageIcon from '@material-ui/icons/Language';
import PersonIcon from '@material-ui/icons/Person';

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    zIndex: 99,
  },
});

export default function Navbar() {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
      <BottomNavigationAction
        component={Link}
        to="/"
        label="Home"
        value="home"
        icon={<HomeIcon />}
      />
      <BottomNavigationAction
        component={Link}
        to="/map"
        label="Map"
        value="map"
        icon={<RestaurantIcon />}
      />
      <BottomNavigationAction
        component={Link}
        to="/events"
        label="Events"
        value="events"
        icon={<EventIcon />}
      />
      <BottomNavigationAction
        component={Link}
        to="/news"
        label="News"
        value="news"
        icon={<LanguageIcon />}
      />
      <BottomNavigationAction
        component={Link}
        to="/login"
        label="Login"
        value="login"
        icon={<PersonIcon />}
      />
    </BottomNavigation>
  );
}
