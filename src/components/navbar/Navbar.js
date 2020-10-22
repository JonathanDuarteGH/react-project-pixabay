import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import BurgerButton from './components/BurgerButton';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    textAlign: 'center',
  },
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <BurgerButton />
          <Tooltip title="PixaBay API Image Finder">
            <Typography variant="h6" className={classes.title}>
              PixaBay API Image Finder
          </Typography>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </div>
  );
}