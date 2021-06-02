// See documentation in ./breeds.js

import * as React from 'react';

const PicturesContext = React.createContext();

function usePictures() {
  const context = React.useContext(PicturesContext);

  if (!context) {
    throw new Error('usePictures must be used within a PicturesProvider');
  }

  const [pictures, setPictures] = context;

  const fetchPictures = (breed) => {
    if (!pictures[breed]) {
      fetch(`https://dog.ceo/api/breed/${breed}/images/random/4`)
        .then((res) => res.json())
        .then((res) => {
          if (res.status === 'success') {
            setPictures((prevState) => ({
              ...prevState,
              [breed]: res.message,
            }));
          } else {
            throw res;
          }
        })
        .catch((error) => {
          console.error('Error Fetching Pictures: ', error);
          throw error;
        });
    }
  };

  return { pictures, fetchPictures };
}

function PicturesProvider(props) {
  const [pictures, setPictures] = React.useState({});

  const value = React.useMemo(() => [pictures, setPictures], [pictures]);

  return <PicturesContext.Provider value={value} {...props} />;
}

export { PicturesProvider, usePictures };
