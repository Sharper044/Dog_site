/*
The base layout of the app, including the header and the router,
all providers, as well as any global styles.
*/

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import Header from './components/Header';
import { BreedProvider } from './data/breeds';
import { PicturesProvider } from './data/pictures';
import Routes from './Routes';

/* TODO:
    9) Go over once for code cleanliness
 */

const useStyles = makeStyles(() => ({
  app: {
    textAlign: 'center',
  },
}));

const App = () => {
  const styles = useStyles();

  return (
    <div className={styles.app}>
      <BrowserRouter>
        <BreedProvider>
          <PicturesProvider>
            <Header />
            <Routes />
          </PicturesProvider>
        </BreedProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
