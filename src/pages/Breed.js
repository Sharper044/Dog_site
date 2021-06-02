/*
This is the breed page, It is in charge of fetching the necessary images and laying out the page.
*/

import React, { useEffect } from 'react';
import {
  Card,
  CardContent,
  GridList,
  GridListTile,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { useParams } from 'react-router-dom';
import { usePictures } from '../data/pictures';
import { useBreeds } from '../data/breeds';
import NavButton from '../components/NavButton';

const useStyles = makeStyles(() => ({
  main: {
    background: 'lightgrey',
    width: '100vw',
    height: '100vh',
  },
  card: {
    width: '50%',
  },
  mainDisplay: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 20px',
  },
}));

const Breed = () => {
  const styles = useStyles();
  const [breeds] = useBreeds();
  const { breed } = useParams();
  const { pictures, fetchPictures } = usePictures();

  const breedIndex = breeds.indexOf(breed);
  const notFirst = breedIndex !== 0;
  const notLast = breedIndex !== breeds.length - 1;
  const nextBreed = breeds[breedIndex + 1];
  const prevBreed = breeds[breedIndex - 1];

  useEffect(() => {
    fetchPictures(breed);
    if (notFirst) {
      fetchPictures(prevBreed);
    }
    if (notLast) {
      fetchPictures(nextBreed);
    }
  }, [breed, breeds]);

  return (
    <main className={styles.main}>
      <Toolbar />
      <div className={styles.mainDisplay}>
        { notFirst && <NavButton breed={prevBreed} /> }
        <Card className={styles.card}>
          <CardContent>
            <GridList cellHeight={180}>
              <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                <Typography>{breed}</Typography>
              </GridListTile>
              {
                pictures[breed] && pictures[breed].map((url) => (
                  <GridListTile key={url}>
                    <img src={url} alt={breed} />
                  </GridListTile>
                ))
              }
            </GridList>
          </CardContent>
        </Card>
        { notLast && <NavButton breed={nextBreed} forward /> }
      </div>
    </main>
  );
};

export default Breed;
