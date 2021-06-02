// This is the home page, it is clean and largely self explanatory.

import React from 'react';
import {
  Button,
  Card,
  CardContent,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useBreeds } from '../data/breeds';

const useStyles = makeStyles(() => ({
  main: {
    background: 'lightgrey',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  card: {
    width: '50%',
  },
  link: {
    color: 'inherit',
    textDecoration: 'none',
  },
}));

const Home = () => {
  const [breeds] = useBreeds();
  const styles = useStyles();

  return (
    <main className={styles.main}>
      <Toolbar />
      <Card className={styles.card}>
        <CardContent>
          <Typography variant="h5" component="h2">
            Available Dog Breeds
          </Typography>
          <hr />
          {
            breeds.map((breed) => (
              <Link key={breed} to={`/${breed}`} className={styles.link}>
                <Button size="small">{breed}</Button>
              </Link>
            ))
          }
        </CardContent>
      </Card>
    </main>
  );
};

export default Home;
