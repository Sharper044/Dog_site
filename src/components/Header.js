/*
This is the header component. It is largely presentational,
but it contains the required link back to the home page for the breed page.
*/

import React from 'react';
import { AppBar, Typography, makeStyles } from '@material-ui/core';
import { Pets as PetsIcon } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  appHeader: {
    display: 'flex',
    flexDirection: 'row',
  },
  link: {
    width: '200px',
    color: 'inherit',
    textDecoration: 'none',
  },
}));

const Header = () => {
  const styles = useStyles();

  return (
    <AppBar className={styles.appHeader}>
      <PetsIcon />
      <Link className={styles.link} to="/">
        <Typography variant="h6">Dog Pictures</Typography>
      </Link>
    </AppBar>
  );
};

export default Header;
